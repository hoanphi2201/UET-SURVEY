export const mapConfig = {
  defaultControls: 'Mouse Position,Zoom,ScaleLineol,FullScreen',
  projection: 'EPSG:900913',
  layerProjection: 'EPSG:4326',
  defaultZoom: 4,
  mcenter: [115.66283, 10.21797],
  layersGroup: [
    {
      title: 'Base maps',
      visible: true,
      layers: [
        {
          title: 'OSM',
          id: 'OSM',
          type: 'Tile',
          visible: true,
          layerType: 'base',
          dataFormat: 'OSM'
        }
      ]
    },
    {
      title: 'Vector',
      visible: true,
      layers: [
        {
          title: 'Vector',
          id: 'Vector',
          projection: 'EPSG:4326',
          type: 'Vector',
          visible: true,
          dataFormat: 'ServerSource'
        }
      ]
    },
    {
      title: 'Alert Disaster',
      visible: true,
      layers: [
        {
          title: 'Alert Disaster',
          id: 'Disaster',
          projection: 'EPSG:4326',
          dataFormat: 'ServerSource',
          type: 'Cluster',
          distance: 40,
          toolTip: `<h6><strong>Survey Response Infomation</strong> </h6>
          <div>Ip Address: {ip}</div>
          <div>Total Time: {totalTime} </div>
          <div>City: {city}</div>
          <div>Zip Code: {zipcode} </div>`,
          visible: true
        }
      ]
    }
  ]
};
