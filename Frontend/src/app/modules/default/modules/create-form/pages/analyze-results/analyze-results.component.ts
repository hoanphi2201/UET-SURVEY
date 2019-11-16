import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SurveyForm, DSurveyFormService, DSurveyResponseService, SurveyResponse, mapConfig } from '@app/core';
import { createEmpty, extend } from 'ol/extent';
import { Subscription, BehaviorSubject, Subject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService, WindowresizeService } from '@app/shared';
import { MapComponent } from '@app/shared/components/map/map.component';
import * as _ from 'lodash';
import Overlay from 'ol/Overlay';
import { takeUntil } from 'rxjs/operators';
import { fromLonLat, transformExtent } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon } from 'ol/style.js';

@Component({
  selector: 'app-analyze-results',
  templateUrl: './analyze-results.component.html',
  styleUrls: ['./analyze-results.component.scss']
})
export class AnalyzeResultsComponent implements OnInit, AfterViewInit {
  surveyFormDetail: SurveyForm;
  private listOfAllSurveyResponse: SurveyResponse[];
  listOfAllDataSurveyResponse: any[];
  private listOfAllLocation: any[] = [];
  private subscriptions: Subscription[] = [];

  /*------ FOR MAP ------- */
  @ViewChild(MapComponent, { static: false }) map: MapComponent;
  @ViewChild('popup', { static: false }) popup: ElementRef;
  @ViewChild('popup_click', { static: false }) popup_click: ElementRef;
  popupContent: any;
  popupContent1: any;
  LAYERFORMAT: any = {};
  height = '100%';
  styleCache = {};
  currZoom: any;
  loadmapComponent: boolean;
  configMap = mapConfig;
  _: any = _;
  latitude: any = undefined;
  longitude: any = undefined;
  markerSource: any;
  activeLayer: BehaviorSubject<string> = new BehaviorSubject('alert');
  gotocoordinatesdata: any = [];
  private currentExt: any = [];
  private overlay_hover: Overlay;
  private overlay_click: Overlay;
  private zoomLevel = 0;
  private zoomLevelShowPoint = 14;
  private unsubscribeHelper$: Subject<void> = new Subject<void>();
  /*------ END FOR MAP ------- */
  next() {
    if (this.selectedIndex < this.listOfAllSurveyResponse.length - 1) {
      this.selectedIndex++;
    }
  }
  pre() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }
  goto(index: number) {
    this.selectedIndex = index - 1;
  }
  surveyResponsePreview: SurveyResponse;
  onChangeTabPreview(index: number) {
    this.surveyResponsePreview = this.listOfAllSurveyResponse[index];
  }
  selectedIndex = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyResponseService: DSurveyResponseService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private windowresizeService: WindowresizeService
  ) { }
  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        const { surveyFormId } = params;
        this.getSurveyFormById(surveyFormId);
        this.getResponsesBySurveyForm(surveyFormId);
      })
    );

    this.windowresizeService.getSize()
      .pipe(takeUntil(this.unsubscribeHelper$))
      .subscribe((size: any) => {
        if (this.map) {
          setTimeout(() => {
            this.map.instance.updateSize();
          }, 200);
        }
      });
  }
  ngAfterViewInit() {
    this.overlay_hover = new Overlay({
      element: this.popup.nativeElement
    });
    this.overlay_click = new Overlay({
      element: this.popup_click.nativeElement
    });
    this.closePopup();
  }
  private getResponsesBySurveyForm(surveyFormId: string) {
    this.loaderService.display(true);
    this.dSurveyResponseService.getResponsesBySurveyForm(surveyFormId).subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllSurveyResponse = res.results;
        this.listOfAllDataSurveyResponse = [];
        this.listOfAllSurveyResponse.forEach((o: SurveyResponse) => {
          if (o.json && Object.keys(o.json).length > 0) {
            this.listOfAllDataSurveyResponse.push(o.json);
          }
          if (o.geoLocation && Object.keys(o.geoLocation).length > 0) {
            this.listOfAllLocation.push(
              Object.assign(o.geoLocation, {
                surveyResponseId: o.id,
                totalTime: this.msToHMSTypicalTimeSpent(o.totalTime)
              })
            );
          }
        });
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(
        this.translateService.instant(err.message)
      );
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  msToHMSTypicalTimeSpent(s: number) {
    function pad(n, z = 2) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return `${pad(hrs)}h:${pad(mins)}m:${pad(secs)}s`;
  }
  private getSurveyFormById(surveyFormId: string) {
    this.subscriptions.push(
      this.dSurveyFormService.getSurveyFormDetail().subscribe(res => {
        if (res) {
          this.surveyFormDetail = res;
          this.dSurveyFormService.setSurveyFormDetail(null);
        }
      })
    );
    this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
  }

  onComponentSetup() {
    setTimeout(() => {
      this.map.instance.addOverlay(this.overlay_hover);
      this.map.instance.addOverlay(this.overlay_click);
      this.fixContentHeight();
      this.DataLoader();
      this.currZoom = this.map.instance.getView().getZoom();
      this.map.instance.on('moveend', (e: any) => {
        const newZoom = this.map.instance.getView().getZoom();
        if (this.currZoom !== newZoom) {
          this.currZoom = newZoom;
          this.closePopup();
        }
      });
    }, 200);
  }

  private DataLoader() {
    const ext = this.map.instance.getView().calculateExtent(this.map.instance.getSize());
    const zoom = Math.trunc(this.map.instance.getView().getZoom());
    if (this.zoomLevel === zoom && ext === this.currentExt) {
      return;
    }
    this.currentExt = ext;
    this.map.getLayersRecursive(
      this.map.instance,
      (l: any, idx: any, a: any) => {
        if (l.get('type') === 'Cluster') {
          const layerName = l.get('id');
          const storeLayer: any = this.map.getLayer(layerName);
          if (storeLayer.getVisible() && layerName) {
            this.createAlertDisasterLayer(this.listOfAllLocation, zoom, layerName);
            if (
              this.gotocoordinatesdata &&
              this.gotocoordinatesdata.length > 0
            ) {
              this.map.instance.getView().setCenter(fromLonLat(this.gotocoordinatesdata));
              this.map.instance.getView().setZoom(15);
            }
          }
        }
      }
    );
  }

  createAlertDisasterLayer(alertdisasterpoint: any, zoom: any, layername: any) {
    const storeLayer: any = this.map.getLayer(layername);
    this.addToolTipFormat(layername, storeLayer.get('toolTip'));
    const geojsonPoint = this.toGeoJson(alertdisasterpoint);
    const geoFormat = new GeoJSON({ featureProjection: mapConfig.projection });
    const features = geoFormat.readFeatures(geojsonPoint);
    storeLayer.getSource().clear();

    storeLayer
      .getSource()
      .getSource()
      .clear();
    storeLayer
      .getSource()
      .getSource()
      .addFeatures(features);

    const icon = new Icon({
      crossOrigin: 'anonymous',
      src: 'assets/images/map-marker.png'
    });
    const iconStyle = new Style({
      image: icon
    });

    storeLayer.setStyle((feature: any, resolution: any) => {
      const size = Array.isArray(feature.get('features')) ? feature.get('features').length : 0;
      if (size === 1 && resolution < this.map.instance.getView().getResolutionForZoom(6) && this.currZoom >= this.zoomLevelShowPoint) {
        return iconStyle;
      } else {
        let style = this.styleCache[size];
        let radius = 25;
        if (size < 6) {
          radius = 15;
        }
        if (size > 6) {
          radius = 25;
        }
        if (size > 20) {
          radius = 30;
        }

        if (!style) {
          const color = size > 25 ? '51,153,204' : size > 6 ? '51,153,204' : '51,153,204';
          style = new Style({
            image: new CircleStyle({
              radius: radius,
              stroke: new Stroke({
                color: 'rgba(' + color + ',0.5)'
              }),
              fill: new Fill({
                color: 'rgba(' + color + ',0.8)'
              })
            }),
            text: new Text({
              text: size.toString(),
              // font: '10px Arial',
              fill: new Fill({
                color: '#fff'
              })
            })
          });
          this.styleCache[size] = style;
        }
        return style;
      }
    });
  }
  private caculateBoundingBox(data: any) {
    if (data && data.features.length > 0) {
      const features = data.features;
      const lats = [];
      const lngs = [];
      for (let i = 0; i < features.length; i++) {
        lats.push(features[i].geometry.coordinates[1]);
        lngs.push(features[i].geometry.coordinates[0]);
      }
      const minlat = Math.min.apply(null, lats),
        maxlat = Math.max.apply(null, lats);
      const minlng = Math.min.apply(null, lngs),
        maxlng = Math.max.apply(null, lngs);

      const bbox = [minlng, minlat, maxlng, maxlat];
      this.map.instance
        .getView()
        .fit(transformExtent(bbox, 'EPSG:4326', 'EPSG:900913'), {
          size: this.map.instance.getSize()
        });
    }
    // this.getCenterOfExtent(bbox);
  }
  private addToolTipFormat(layerName: any, format: any) {
    this.LAYERFORMAT[layerName] = format;
  }
  private toGeoJson(data: any) {
    const json: any = { type: 'FeatureCollection', features: [] };
    const pointFeatures = this.createAlertDisasterPoint(data);
    json.features = json.features.concat(pointFeatures);
    return json;
  }
  private createAlertDisasterPoint(alertdisasterlist: any) {
    const features = [];
    for (let i = 0; i < alertdisasterlist.length; i++) {
      if (
        alertdisasterlist[i] &&
        alertdisasterlist[i].latitude &&
        alertdisasterlist[i].longitude
      ) {
        const feature: any = {
          type: 'Feature',
          id: alertdisasterlist[i].surveyResponseId,
          properties: {},
          geometry: { type: 'Point', coordinates: [] }
        };
        Object.keys(alertdisasterlist[i]).forEach(key => {
          feature.properties[key] = alertdisasterlist[i][key];
        });
        const currentPoint = [
          +alertdisasterlist[i].longitude,
          +alertdisasterlist[i].latitude
        ];
        feature.geometry.coordinates = currentPoint;
        features.push(feature);
      }
    }
    return features;
  }

  onPointerMove(evt: any) {
    if (evt.dragging) {
      return;
    }
    const pixel = this.map.instance.getEventPixel(evt.originalEvent);
    const coor = evt.coordinate;
    this.displayFeatureInfo(pixel, coor, this.overlay_hover, true);
  }
  fixContentHeight = () => {
    const mapcontent = $('div[data-role="mapcontent"]:visible:visible');
    const contentHeight = 600;
    mapcontent.height(contentHeight);
    this.map.instance.updateSize();
  };
  closePopup() {
    this.overlay_click.setPosition(undefined);
    return false;
  }
  onMapClick(event: any) {
    if (this.map.instance.hasFeatureAtPixel(event.pixel) === true) {
      const coordinate = event.coordinate;
      this.zoomCluster(event.pixel, coordinate);
    } else {
      this.overlay_click.setPosition(undefined);
    }
  }
  zoomCluster = (pixel: any, coordinate: any) => {
    const features = this.map.instance.forEachFeatureAtPixel(pixel, (feature: any) => {
      return feature;
    }
    );
    if (features) {
      const features_arr = features.get('features');
      if (this.currZoom >= this.zoomLevelShowPoint) {
        this.displayFeatureInfo(pixel, coordinate, this.overlay_click, false);
      } else {
        if (features_arr.length > 0) {
          // all same coordinate
          const allSameCoordinate = features_arr.every((val: any, i: number, arr: any) => {
            return (
              JSON.stringify(val.getGeometry().getCoordinates()) ===
              JSON.stringify(arr[0].getGeometry().getCoordinates())
            );
          }
          );
          if (!allSameCoordinate || features_arr.length === 1) {
            const extent = createEmpty();
            features_arr.forEach(function (feature: any) {
              extend(extent, feature.getGeometry().getExtent());
            });
            this.map.instance.getView().fit(extent, { duration: 500 });
            if (features_arr.length === 1) {
              this.map.instance.getView().setCenter(features_arr[0].getGeometry().flatCoordinates);
              this.map.instance.getView().setZoom(this.zoomLevelShowPoint);
            }
          } else {
            this.map.instance.getView().setCenter(features_arr[0].getGeometry().flatCoordinates);
            this.displayFeatureInfo(pixel, coordinate, this.overlay_click, false);
          }
        }
      }
    }
  };
  confirmTabSwitch(value?: any) {
    if (value === 1) {
      this.loadmapComponent = true;
    } else {
      this.loadmapComponent = false;
    }
    if (value === 2) {
      this.onChangeTabPreview(0);
    }
  }
  displayFeatureInfo(pixel: any, coordinate: any, overlay: any, autoHide: boolean) {
    const featureLayers: any = [];
    this.map.instance.forEachFeatureAtPixel(pixel, function (feature: any, layer: any) {
      featureLayers.push({
        feature: feature,
        layer: layer
      });
    });

    if (featureLayers.length > 0) {
      const featureLayer = featureLayers[0];
      let layerId;
      if (featureLayer.layer) {
        layerId = featureLayer.layer.get('id');
      } else {
        layerId = featureLayer.feature.get('layerId');
      }
      if (layerId && this.LAYERFORMAT[layerId]) {
        // get content and format
        const inforFeature = this.createToolTipDisplay(this.LAYERFORMAT[layerId], featureLayer.feature);
        if (!autoHide) {
          this.popupContent1 = inforFeature;
        }
        this.popupContent = inforFeature;
        overlay.setPosition(coordinate);
      }
    } else {
      if (autoHide) {
        overlay.setPosition(undefined);
      }
    }
  }

  createToolTipDisplay(format: any, feature: any) {
    let template = '';
    const cfeatures = feature.get('features');
    for (let i = 0; i < cfeatures.length; i++) {
      let cpformat = format;
      while (cpformat.indexOf('{') !== -1 && cpformat.indexOf('}') !== -1 && cpformat.indexOf('{') < cpformat.indexOf('}')) {
        const fieldName = cpformat.substring(cpformat.indexOf('{') + 1, cpformat.indexOf('}'));
        const oldText = cpformat.substring(cpformat.indexOf('{'), cpformat.indexOf('}') + 1);
        let newText = '';
        newText = cfeatures[i].get(fieldName) || '';
        cpformat = cpformat.replace(new RegExp(oldText, 'g'), newText);
      }
      cpformat += +i !== cfeatures.length - 1 ? '<hr>' : '';
      template += cpformat;
    }
    return template;
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.unsubscribeHelper$.next();
    this.unsubscribeHelper$.complete();
  }
}
