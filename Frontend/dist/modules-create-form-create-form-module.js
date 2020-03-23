(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-create-form-create-form-module"],{

/***/ "./node_modules/angular-6-clipboard/index.js":
/*!***************************************************!*\
  !*** ./node_modules/angular-6-clipboard/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.ngCopy = function(str){
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

/***/ }),

/***/ "./node_modules/dijkstrajs/dijkstra.js":
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "./node_modules/ngx-qrcode2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ngx-qrcode2/index.js ***!
  \*******************************************/
/*! exports provided: NgxQRCodeModule, NgxQRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQRCodeModule", function() { return NgxQRCodeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQRCodeComponent", function() { return NgxQRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var QRCode = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
var NgxQRCodeComponent = /** @class */ (function () {
    function NgxQRCodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'url';
        this.cssClass = 'qrcode';
        this.value = 'https://www.techiediaries.com';
        this.version = '';
        this.errorCorrectionLevel = 'M';
    }
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.createQRCode();
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toDataURL = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    //console.log(url);
                    resolve(url);
                }
            });
        });
    };
    /**
     * @param {?} canvas
     * @return {?}
     */
    NgxQRCodeComponent.prototype.toCanvas = /**
     * @param {?} canvas
     * @return {?}
     */
    function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxQRCodeComponent.prototype.renderElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        for (var _i = 0, _a = this.qrcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    };
    /**
     * @return {?}
     */
    NgxQRCodeComponent.prototype.createQRCode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        
        var /** @type {?} */ element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    //console.log(v);
                    //console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    //console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    NgxQRCodeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-qrcode',
                    template: "<div #qrcElement [class]=\"cssClass\"></div>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxQRCodeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgxQRCodeComponent.propDecorators = {
        "elementType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-element-type',] },],
        "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-class',] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-value',] },],
        "version": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-version',] },],
        "errorCorrectionLevel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['qrc-errorCorrectionLevel',] },],
        "qrcElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['qrcElement',] },],
    };
    return NgxQRCodeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxQRCodeModule = /** @class */ (function () {
    function NgxQRCodeModule() {
    }
    /**
     * @return {?}
     */
    NgxQRCodeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxQRCodeModule,
            providers: []
        };
    };
    NgxQRCodeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    declarations: [
                        NgxQRCodeComponent,
                    ],
                    exports: [
                        NgxQRCodeComponent,
                    ]
                },] },
    ];
    return NgxQRCodeModule;
}());




/***/ }),

/***/ "./node_modules/ol/format/Feature.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/format/Feature.js ***!
  \*******************************************/
/*! exports provided: default, transformWithOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformWithOptions", function() { return transformWithOptions; });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/**
 * @module ol/format/Feature
 */





/**
 * @typedef {Object} ReadOptions
 * @property {import("../proj.js").ProjectionLike} [dataProjection] Projection of the data we are reading.
 * If not provided, the projection will be derived from the data (where possible) or
 * the `dataProjection` of the format is assigned (where set). If the projection
 * can not be derived from the data and if no `dataProjection` is set for a format,
 * the features will not be reprojected.
 * @property {import("../extent.js").Extent} [extent] Tile extent of the tile being read. This is only used and
 * required for {@link module:ol/format/MVT}.
 * @property {import("../proj.js").ProjectionLike} [featureProjection] Projection of the feature geometries
 * created by the format reader. If not provided, features will be returned in the
 * `dataProjection`.
 */


/**
 * @typedef {Object} WriteOptions
 * @property {import("../proj.js").ProjectionLike} [dataProjection] Projection of the data we are writing.
 * If not provided, the `dataProjection` of the format is assigned (where set).
 * If no `dataProjection` is set for a format, the features will be returned
 * in the `featureProjection`.
 * @property {import("../proj.js").ProjectionLike} [featureProjection] Projection of the feature geometries
 * that will be serialized by the format writer. If not provided, geometries are assumed
 * to be in the `dataProjection` if that is set; in other words, they are not transformed.
 * @property {boolean} [rightHanded] When writing geometries, follow the right-hand
 * rule for linear ring orientation.  This means that polygons will have counter-clockwise
 * exterior rings and clockwise interior rings.  By default, coordinates are serialized
 * as they are provided at construction.  If `true`, the right-hand rule will
 * be applied.  If `false`, the left-hand rule will be applied (clockwise for
 * exterior and counter-clockwise for interior rings).  Note that not all
 * formats support this.  The GeoJSON format does use this property when writing
 * geometries.
 * @property {number} [decimals] Maximum number of decimal places for coordinates.
 * Coordinates are stored internally as floats, but floating-point arithmetic can create
 * coordinates with a large number of decimal places, not generally wanted on output.
 * Set a number here to round coordinates. Can also be used to ensure that
 * coordinates read in can be written back out with the same number of decimals.
 * Default is no rounding.
 */


/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for feature formats.
 * {FeatureFormat} subclasses provide the ability to decode and encode
 * {@link module:ol/Feature~Feature} objects from a variety of commonly used geospatial
 * file formats.  See the documentation for each format for more details.
 *
 * @abstract
 * @api
 */
var FeatureFormat = function FeatureFormat() {

  /**
   * @protected
   * @type {import("../proj/Projection.js").default}
   */
  this.dataProjection = null;

  /**
   * @protected
   * @type {import("../proj/Projection.js").default}
   */
  this.defaultFeatureProjection = null;

};

/**
 * Adds the data projection to the read options.
 * @param {Document|Node|Object|string} source Source.
 * @param {ReadOptions=} opt_options Options.
 * @return {ReadOptions|undefined} Options.
 * @protected
 */
FeatureFormat.prototype.getReadOptions = function getReadOptions (source, opt_options) {
  var options;
  if (opt_options) {
    options = {
      dataProjection: opt_options.dataProjection ?
        opt_options.dataProjection : this.readProjection(source),
      featureProjection: opt_options.featureProjection
    };
  }
  return this.adaptOptions(options);
};

/**
 * Sets the `dataProjection` on the options, if no `dataProjection`
 * is set.
 * @param {WriteOptions|ReadOptions|undefined} options
 *   Options.
 * @protected
 * @return {WriteOptions|ReadOptions|undefined}
 *   Updated options.
 */
FeatureFormat.prototype.adaptOptions = function adaptOptions (options) {
  return Object(_obj_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({
    dataProjection: this.dataProjection,
    featureProjection: this.defaultFeatureProjection
  }, options);
};

/**
 * Get the extent from the source of the last {@link readFeatures} call.
 * @return {import("../extent.js").Extent} Tile extent.
 */
FeatureFormat.prototype.getLastExtent = function getLastExtent () {
  return null;
};

/**
 * @abstract
 * @return {import("./FormatType.js").default} Format.
 */
FeatureFormat.prototype.getType = function getType () {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Read a single feature from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {ReadOptions=} opt_options Read options.
 * @return {import("../Feature.js").FeatureLike} Feature.
 */
FeatureFormat.prototype.readFeature = function readFeature (source, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Read all features from a source.
 *
 * @abstract
 * @param {Document|Node|ArrayBuffer|Object|string} source Source.
 * @param {ReadOptions=} opt_options Read options.
 * @return {Array<import("../Feature.js").FeatureLike>} Features.
 */
FeatureFormat.prototype.readFeatures = function readFeatures (source, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Read a single geometry from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @param {ReadOptions=} opt_options Read options.
 * @return {import("../geom/Geometry.js").default} Geometry.
 */
FeatureFormat.prototype.readGeometry = function readGeometry (source, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Read the projection from a source.
 *
 * @abstract
 * @param {Document|Node|Object|string} source Source.
 * @return {import("../proj/Projection.js").default} Projection.
 */
FeatureFormat.prototype.readProjection = function readProjection (source) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Encode a feature in this format.
 *
 * @abstract
 * @param {import("../Feature.js").default} feature Feature.
 * @param {WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeFeature = function writeFeature (feature, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Encode an array of features in this format.
 *
 * @abstract
 * @param {Array<import("../Feature.js").default>} features Features.
 * @param {WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeFeatures = function writeFeatures (features, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/**
 * Write a single geometry in this format.
 *
 * @abstract
 * @param {import("../geom/Geometry.js").default} geometry Geometry.
 * @param {WriteOptions=} opt_options Write options.
 * @return {string} Result.
 */
FeatureFormat.prototype.writeGeometry = function writeGeometry (geometry, opt_options) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["abstract"])();
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureFormat);

/**
 * @param {import("../geom/Geometry.js").default|import("../extent.js").Extent} geometry Geometry.
 * @param {boolean} write Set to true for writing, false for reading.
 * @param {(WriteOptions|ReadOptions)=} opt_options Options.
 * @return {import("../geom/Geometry.js").default|import("../extent.js").Extent} Transformed geometry.
 */
function transformWithOptions(geometry, write, opt_options) {
  var featureProjection = opt_options ?
    Object(_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"])(opt_options.featureProjection) : null;
  var dataProjection = opt_options ?
    Object(_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"])(opt_options.dataProjection) : null;
  /**
   * @type {import("../geom/Geometry.js").default|import("../extent.js").Extent}
   */
  var transformed;
  if (featureProjection && dataProjection &&
      !Object(_proj_js__WEBPACK_IMPORTED_MODULE_2__["equivalent"])(featureProjection, dataProjection)) {
    if (Array.isArray(geometry)) {
      // FIXME this is necessary because GML treats extents
      // as geometries
      transformed = Object(_proj_js__WEBPACK_IMPORTED_MODULE_2__["transformExtent"])(
        geometry,
        dataProjection,
        featureProjection);
    } else {
      transformed = (write ? /** @type {import("../geom/Geometry").default} */ (geometry).clone() : geometry).transform(
        write ? featureProjection : dataProjection,
        write ? dataProjection : featureProjection);
    }
  } else {
    transformed = geometry;
  }
  if (write && opt_options && /** @type {WriteOptions} */ (opt_options).decimals !== undefined &&
    !Array.isArray(transformed)) {
    var power = Math.pow(10, /** @type {WriteOptions} */ (opt_options).decimals);
    // if decimals option on write, round each coordinate appropriately
    /**
     * @param {Array<number>} coordinates Coordinates.
     * @return {Array<number>} Transformed coordinates.
     */
    var transform = function(coordinates) {
      for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = Math.round(coordinates[i] * power) / power;
      }
      return coordinates;
    };
    if (transformed === geometry) {
      transformed = /** @type {import("../geom/Geometry").default} */ (geometry).clone();
    }
    transformed.applyTransform(transform);
  }
  return transformed;
}

//# sourceMappingURL=Feature.js.map

/***/ }),

/***/ "./node_modules/ol/format/GeoJSON.js":
/*!*******************************************!*\
  !*** ./node_modules/ol/format/GeoJSON.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asserts.js */ "./node_modules/ol/asserts.js");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature.js */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var _JSONFeature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JSONFeature.js */ "./node_modules/ol/format/JSONFeature.js");
/* harmony import */ var _geom_GeometryCollection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geom/GeometryCollection.js */ "./node_modules/ol/geom/GeometryCollection.js");
/* harmony import */ var _geom_LineString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geom/LineString.js */ "./node_modules/ol/geom/LineString.js");
/* harmony import */ var _geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geom/MultiLineString.js */ "./node_modules/ol/geom/MultiLineString.js");
/* harmony import */ var _geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../geom/MultiPoint.js */ "./node_modules/ol/geom/MultiPoint.js");
/* harmony import */ var _geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geom/MultiPolygon.js */ "./node_modules/ol/geom/MultiPolygon.js");
/* harmony import */ var _geom_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var _geom_Polygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geom/GeometryType.js */ "./node_modules/ol/geom/GeometryType.js");
/**
 * @module ol/format/GeoJSON
 */
















/**
 * @typedef {import("geojson").GeoJSON} GeoJSONObject
 * @typedef {import("geojson").Feature} GeoJSONFeature
 * @typedef {import("geojson").FeatureCollection} GeoJSONFeatureCollection
 * @typedef {import("geojson").Geometry} GeoJSONGeometry
 * @typedef {import("geojson").Point} GeoJSONPoint
 * @typedef {import("geojson").LineString} GeoJSONLineString
 * @typedef {import("geojson").Polygon} GeoJSONPolygon
 * @typedef {import("geojson").MultiPoint} GeoJSONMultiPoint
 * @typedef {import("geojson").MultiLineString} GeoJSONMultiLineString
 * @typedef {import("geojson").MultiPolygon} GeoJSONMultiPolygon
 * @typedef {import("geojson").GeometryCollection} GeoJSONGeometryCollection
 */


/**
 * @typedef {Object} Options
 * @property {import("../proj.js").ProjectionLike} [dataProjection='EPSG:4326'] Default data projection.
 * @property {import("../proj.js").ProjectionLike} [featureProjection] Projection for features read or
 * written by the format.  Options passed to read or write methods will take precedence.
 * @property {string} [geometryName] Geometry name to use when creating features.
 * @property {boolean} [extractGeometryName=false] Certain GeoJSON providers include
 * the geometry_name field in the feature GeoJSON. If set to `true` the GeoJSON reader
 * will look for that field to set the geometry name. If both this field is set to `true`
 * and a `geometryName` is provided, the `geometryName` will take precedence.
 */


/**
 * @classdesc
 * Feature format for reading and writing data in the GeoJSON format.
 *
  * @api
 */
var GeoJSON = /*@__PURE__*/(function (JSONFeature) {
  function GeoJSON(opt_options) {

    var options = opt_options ? opt_options : {};

    JSONFeature.call(this);

    /**
     * @inheritDoc
     */
    this.dataProjection = Object(_proj_js__WEBPACK_IMPORTED_MODULE_12__["get"])(
      options.dataProjection ?
        options.dataProjection : 'EPSG:4326');

    if (options.featureProjection) {
      this.defaultFeatureProjection = Object(_proj_js__WEBPACK_IMPORTED_MODULE_12__["get"])(options.featureProjection);
    }

    /**
     * Name of the geometry attribute for features.
     * @type {string|undefined}
     * @private
     */
    this.geometryName_ = options.geometryName;

    /**
     * Look for the geometry name in the feature GeoJSON
     * @type {boolean|undefined}
     * @private
     */
    this.extractGeometryName_ = options.extractGeometryName;

  }

  if ( JSONFeature ) GeoJSON.__proto__ = JSONFeature;
  GeoJSON.prototype = Object.create( JSONFeature && JSONFeature.prototype );
  GeoJSON.prototype.constructor = GeoJSON;

  /**
   * @inheritDoc
   */
  GeoJSON.prototype.readFeatureFromObject = function readFeatureFromObject (object, opt_options) {
    /**
     * @type {GeoJSONFeature}
     */
    var geoJSONFeature = null;
    if (object['type'] === 'Feature') {
      geoJSONFeature = /** @type {GeoJSONFeature} */ (object);
    } else {
      geoJSONFeature = {
        'type': 'Feature',
        'geometry': /** @type {GeoJSONGeometry} */ (object),
        'properties': null
      };
    }

    var geometry = readGeometry(geoJSONFeature['geometry'], opt_options);
    var feature = new _Feature_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (this.geometryName_) {
      feature.setGeometryName(this.geometryName_);
    } else if (this.extractGeometryName_ && 'geometry_name' in geoJSONFeature !== undefined) {
      feature.setGeometryName(geoJSONFeature['geometry_name']);
    }
    feature.setGeometry(geometry);

    if ('id' in geoJSONFeature) {
      feature.setId(geoJSONFeature['id']);
    }

    if (geoJSONFeature['properties']) {
      feature.setProperties(geoJSONFeature['properties']);
    }
    return feature;
  };

  /**
   * @inheritDoc
   */
  GeoJSON.prototype.readFeaturesFromObject = function readFeaturesFromObject (object, opt_options) {
    var geoJSONObject = /** @type {GeoJSONObject} */ (object);
    /** @type {Array<import("../Feature.js").default>} */
    var features = null;
    if (geoJSONObject['type'] === 'FeatureCollection') {
      var geoJSONFeatureCollection = /** @type {GeoJSONFeatureCollection} */ (object);
      features = [];
      var geoJSONFeatures = geoJSONFeatureCollection['features'];
      for (var i = 0, ii = geoJSONFeatures.length; i < ii; ++i) {
        features.push(this.readFeatureFromObject(geoJSONFeatures[i], opt_options));
      }
    } else {
      features = [this.readFeatureFromObject(object, opt_options)];
    }
    return features;
  };

  /**
   * @inheritDoc
   */
  GeoJSON.prototype.readGeometryFromObject = function readGeometryFromObject (object, opt_options) {
    return readGeometry(/** @type {GeoJSONGeometry} */ (object), opt_options);
  };

  /**
   * @inheritDoc
   */
  GeoJSON.prototype.readProjectionFromObject = function readProjectionFromObject (object) {
    var crs = object['crs'];
    var projection;
    if (crs) {
      if (crs['type'] == 'name') {
        projection = Object(_proj_js__WEBPACK_IMPORTED_MODULE_12__["get"])(crs['properties']['name']);
      } else {
        Object(_asserts_js__WEBPACK_IMPORTED_MODULE_0__["assert"])(false, 36); // Unknown SRS type
      }
    } else {
      projection = this.dataProjection;
    }
    return (
      /** @type {import("../proj/Projection.js").default} */ (projection)
    );
  };

  /**
   * Encode a feature as a GeoJSON Feature object.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {GeoJSONFeature} Object.
   * @override
   * @api
   */
  GeoJSON.prototype.writeFeatureObject = function writeFeatureObject (feature, opt_options) {
    opt_options = this.adaptOptions(opt_options);

    /** @type {GeoJSONFeature} */
    var object = {
      'type': 'Feature',
      geometry: null,
      properties: null
    };

    var id = feature.getId();
    if (id !== undefined) {
      object.id = id;
    }

    var geometry = feature.getGeometry();
    if (geometry) {
      object.geometry = writeGeometry(geometry, opt_options);
    }

    var properties = feature.getProperties();
    delete properties[feature.getGeometryName()];
    if (!Object(_obj_js__WEBPACK_IMPORTED_MODULE_11__["isEmpty"])(properties)) {
      object.properties = properties;
    }
    return object;
  };

  /**
   * Encode an array of features as a GeoJSON object.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {GeoJSONFeatureCollection} GeoJSON Object.
   * @override
   * @api
   */
  GeoJSON.prototype.writeFeaturesObject = function writeFeaturesObject (features, opt_options) {
    opt_options = this.adaptOptions(opt_options);
    var objects = [];
    for (var i = 0, ii = features.length; i < ii; ++i) {
      objects.push(this.writeFeatureObject(features[i], opt_options));
    }
    return {
      type: 'FeatureCollection',
      features: objects
    };
  };

  /**
   * Encode a geometry as a GeoJSON object.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {GeoJSONGeometry|GeoJSONGeometryCollection} Object.
   * @override
   * @api
   */
  GeoJSON.prototype.writeGeometryObject = function writeGeometryObject (geometry, opt_options) {
    return writeGeometry(geometry, this.adaptOptions(opt_options));
  };

  return GeoJSON;
}(_JSONFeature_js__WEBPACK_IMPORTED_MODULE_3__["default"]));


/**
 * @param {GeoJSONGeometry|GeoJSONGeometryCollection} object Object.
 * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
 * @return {import("../geom/Geometry.js").default} Geometry.
 */
function readGeometry(object, opt_options) {
  if (!object) {
    return null;
  }

  /**
   * @type {import("../geom/Geometry.js").default}
   */
  var geometry;
  switch (object['type']) {
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].POINT: {
      geometry = readPointGeometry(/** @type {GeoJSONPoint} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].LINE_STRING: {
      geometry = readLineStringGeometry(/** @type {GeoJSONLineString} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].POLYGON: {
      geometry = readPolygonGeometry(/** @type {GeoJSONPolygon} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_POINT: {
      geometry = readMultiPointGeometry(/** @type {GeoJSONMultiPoint} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_LINE_STRING: {
      geometry = readMultiLineStringGeometry(/** @type {GeoJSONMultiLineString} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_POLYGON: {
      geometry = readMultiPolygonGeometry(/** @type {GeoJSONMultiPolygon} */ (object));
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].GEOMETRY_COLLECTION: {
      geometry = readGeometryCollectionGeometry(/** @type {GeoJSONGeometryCollection} */ (object));
      break;
    }
    default: {
      throw new Error('Unsupported GeoJSON type: ' + object.type);
    }
  }
  return /** @type {import("../geom/Geometry.js").default} */ (Object(_Feature_js__WEBPACK_IMPORTED_MODULE_2__["transformWithOptions"])(geometry, false, opt_options));
}


/**
 * @param {GeoJSONGeometryCollection} object Object.
 * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
 * @return {GeometryCollection} Geometry collection.
 */
function readGeometryCollectionGeometry(object, opt_options) {
  var geometries = object['geometries'].map(
    /**
     * @param {GeoJSONGeometry} geometry Geometry.
     * @return {import("../geom/Geometry.js").default} geometry Geometry.
     */
    function(geometry) {
      return readGeometry(geometry, opt_options);
    });
  return new _geom_GeometryCollection_js__WEBPACK_IMPORTED_MODULE_4__["default"](geometries);
}


/**
 * @param {GeoJSONPoint} object Object.
 * @return {Point} Point.
 */
function readPointGeometry(object) {
  return new _geom_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"](object['coordinates']);
}


/**
 * @param {GeoJSONLineString} object Object.
 * @return {LineString} LineString.
 */
function readLineStringGeometry(object) {
  return new _geom_LineString_js__WEBPACK_IMPORTED_MODULE_5__["default"](object['coordinates']);
}


/**
 * @param {GeoJSONMultiLineString} object Object.
 * @return {MultiLineString} MultiLineString.
 */
function readMultiLineStringGeometry(object) {
  return new _geom_MultiLineString_js__WEBPACK_IMPORTED_MODULE_6__["default"](object['coordinates']);
}


/**
 * @param {GeoJSONMultiPoint} object Object.
 * @return {MultiPoint} MultiPoint.
 */
function readMultiPointGeometry(object) {
  return new _geom_MultiPoint_js__WEBPACK_IMPORTED_MODULE_7__["default"](object['coordinates']);
}


/**
 * @param {GeoJSONMultiPolygon} object Object.
 * @return {MultiPolygon} MultiPolygon.
 */
function readMultiPolygonGeometry(object) {
  return new _geom_MultiPolygon_js__WEBPACK_IMPORTED_MODULE_8__["default"](object['coordinates']);
}


/**
 * @param {GeoJSONPolygon} object Object.
 * @return {Polygon} Polygon.
 */
function readPolygonGeometry(object) {
  return new _geom_Polygon_js__WEBPACK_IMPORTED_MODULE_10__["default"](object['coordinates']);
}


/**
 * @param {import("../geom/Geometry.js").default} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writeGeometry(geometry, opt_options) {
  geometry = /** @type {import("../geom/Geometry.js").default} */ (Object(_Feature_js__WEBPACK_IMPORTED_MODULE_2__["transformWithOptions"])(geometry, true, opt_options));
  var type = geometry.getType();

  /** @type {GeoJSONGeometry} */
  var geoJSON;
  switch (type) {
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].POINT: {
      geoJSON = writePointGeometry(/** @type {Point} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].LINE_STRING: {
      geoJSON = writeLineStringGeometry(/** @type {LineString} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].POLYGON: {
      geoJSON = writePolygonGeometry(/** @type {Polygon} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_POINT: {
      geoJSON = writeMultiPointGeometry(/** @type {MultiPoint} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_LINE_STRING: {
      geoJSON = writeMultiLineStringGeometry(/** @type {MultiLineString} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].MULTI_POLYGON: {
      geoJSON = writeMultiPolygonGeometry(/** @type {MultiPolygon} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].GEOMETRY_COLLECTION: {
      geoJSON = writeGeometryCollectionGeometry(/** @type {GeometryCollection} */ (geometry), opt_options);
      break;
    }
    case _geom_GeometryType_js__WEBPACK_IMPORTED_MODULE_13__["default"].CIRCLE: {
      geoJSON = {
        type: 'GeometryCollection',
        geometries: []
      };
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return geoJSON;
}


/**
 * @param {GeometryCollection} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometryCollection} GeoJSON geometry collection.
 */
function writeGeometryCollectionGeometry(geometry, opt_options) {
  var geometries = geometry.getGeometriesArray().map(function(geometry) {
    var options = Object(_obj_js__WEBPACK_IMPORTED_MODULE_11__["assign"])({}, opt_options);
    delete options.featureProjection;
    return writeGeometry(geometry, options);
  });
  return {
    type: 'GeometryCollection',
    geometries: geometries
  };
}


/**
 * @param {LineString} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writeLineStringGeometry(geometry, opt_options) {
  return {
    type: 'LineString',
    coordinates: geometry.getCoordinates()
  };
}


/**
 * @param {MultiLineString} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writeMultiLineStringGeometry(geometry, opt_options) {
  return {
    type: 'MultiLineString',
    coordinates: geometry.getCoordinates()
  };
}


/**
 * @param {MultiPoint} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writeMultiPointGeometry(geometry, opt_options) {
  return {
    type: 'MultiPoint',
    coordinates: geometry.getCoordinates()
  };
}


/**
 * @param {MultiPolygon} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writeMultiPolygonGeometry(geometry, opt_options) {
  var right;
  if (opt_options) {
    right = opt_options.rightHanded;
  }
  return {
    type: 'MultiPolygon',
    coordinates: geometry.getCoordinates(right)
  };
}


/**
 * @param {Point} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writePointGeometry(geometry, opt_options) {
  return {
    type: 'Point',
    coordinates: geometry.getCoordinates()
  };
}


/**
 * @param {Polygon} geometry Geometry.
 * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
 * @return {GeoJSONGeometry} GeoJSON geometry.
 */
function writePolygonGeometry(geometry, opt_options) {
  var right;
  if (opt_options) {
    right = opt_options.rightHanded;
  }
  return {
    type: 'Polygon',
    coordinates: geometry.getCoordinates(right)
  };
}


/* harmony default export */ __webpack_exports__["default"] = (GeoJSON);

//# sourceMappingURL=GeoJSON.js.map

/***/ }),

/***/ "./node_modules/ol/format/JSONFeature.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/format/JSONFeature.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feature.js */ "./node_modules/ol/format/Feature.js");
/* harmony import */ var _FormatType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatType.js */ "./node_modules/ol/format/FormatType.js");
/**
 * @module ol/format/JSONFeature
 */




/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for JSON feature formats.
 *
 * @abstract
 */
var JSONFeature = /*@__PURE__*/(function (FeatureFormat) {
  function JSONFeature() {
    FeatureFormat.call(this);
  }

  if ( FeatureFormat ) JSONFeature.__proto__ = FeatureFormat;
  JSONFeature.prototype = Object.create( FeatureFormat && FeatureFormat.prototype );
  JSONFeature.prototype.constructor = JSONFeature;

  /**
   * @inheritDoc
   */
  JSONFeature.prototype.getType = function getType () {
    return _FormatType_js__WEBPACK_IMPORTED_MODULE_2__["default"].JSON;
  };

  /**
   * Read a feature.  Only works for a single feature. Use `readFeatures` to
   * read a feature collection.
   *
   * @param {ArrayBuffer|Document|Node|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @return {import("../Feature.js").default} Feature.
   * @api
   */
  JSONFeature.prototype.readFeature = function readFeature (source, opt_options) {
    return this.readFeatureFromObject(
      getObject(source), this.getReadOptions(source, opt_options));
  };

  /**
   * Read all features.  Works with both a single feature and a feature
   * collection.
   *
   * @param {ArrayBuffer|Document|Node|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */
  JSONFeature.prototype.readFeatures = function readFeatures (source, opt_options) {
    return this.readFeaturesFromObject(
      getObject(source), this.getReadOptions(source, opt_options));
  };

  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @protected
   * @return {import("../Feature.js").default} Feature.
   */
  JSONFeature.prototype.readFeatureFromObject = function readFeatureFromObject (object, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @protected
   * @return {Array<import("../Feature.js").default>} Features.
   */
  JSONFeature.prototype.readFeaturesFromObject = function readFeaturesFromObject (object, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * Read a geometry.
   *
   * @param {ArrayBuffer|Document|Node|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @return {import("../geom/Geometry.js").default} Geometry.
   * @api
   */
  JSONFeature.prototype.readGeometry = function readGeometry (source, opt_options) {
    return this.readGeometryFromObject(
      getObject(source), this.getReadOptions(source, opt_options));
  };

  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions=} opt_options Read options.
   * @protected
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  JSONFeature.prototype.readGeometryFromObject = function readGeometryFromObject (object, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * Read the projection.
   *
   * @param {ArrayBuffer|Document|Node|Object|string} source Source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   */
  JSONFeature.prototype.readProjection = function readProjection (source) {
    return this.readProjectionFromObject(getObject(source));
  };

  /**
   * @abstract
   * @param {Object} object Object.
   * @protected
   * @return {import("../proj/Projection.js").default} Projection.
   */
  JSONFeature.prototype.readProjectionFromObject = function readProjectionFromObject (object) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * Encode a feature as string.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {string} Encoded feature.
   * @api
   */
  JSONFeature.prototype.writeFeature = function writeFeature (feature, opt_options) {
    return JSON.stringify(this.writeFeatureObject(feature, opt_options));
  };

  /**
   * @abstract
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {Object} Object.
   */
  JSONFeature.prototype.writeFeatureObject = function writeFeatureObject (feature, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * Encode an array of features as string.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {string} Encoded features.
   * @api
   */
  JSONFeature.prototype.writeFeatures = function writeFeatures (features, opt_options) {
    return JSON.stringify(this.writeFeaturesObject(features, opt_options));
  };

  /**
   * @abstract
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {Object} Object.
   */
  JSONFeature.prototype.writeFeaturesObject = function writeFeaturesObject (features, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  /**
   * Encode a geometry as string.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {string} Encoded geometry.
   * @api
   */
  JSONFeature.prototype.writeGeometry = function writeGeometry (geometry, opt_options) {
    return JSON.stringify(this.writeGeometryObject(geometry, opt_options));
  };

  /**
   * @abstract
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions=} opt_options Write options.
   * @return {Object} Object.
   */
  JSONFeature.prototype.writeGeometryObject = function writeGeometryObject (geometry, opt_options) {
    return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["abstract"])();
  };

  return JSONFeature;
}(_Feature_js__WEBPACK_IMPORTED_MODULE_1__["default"]));


/**
 * @param {Document|Node|Object|string} source Source.
 * @return {Object} Object.
 */
function getObject(source) {
  if (typeof source === 'string') {
    var object = JSON.parse(source);
    return object ? /** @type {Object} */ (object) : null;
  } else if (source !== null) {
    return source;
  } else {
    return null;
  }
}


/* harmony default export */ __webpack_exports__["default"] = (JSONFeature);

//# sourceMappingURL=JSONFeature.js.map

/***/ }),

/***/ "./node_modules/ol/geom/GeometryCollection.js":
/*!****************************************************!*\
  !*** ./node_modules/ol/geom/GeometryCollection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./node_modules/ol/events.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Geometry.js */ "./node_modules/ol/geom/Geometry.js");
/* harmony import */ var _GeometryType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GeometryType.js */ "./node_modules/ol/geom/GeometryType.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/geom/GeometryCollection
 */







/**
 * @classdesc
 * An array of {@link module:ol/geom/Geometry} objects.
 *
 * @api
 */
var GeometryCollection = /*@__PURE__*/(function (Geometry) {
  function GeometryCollection(opt_geometries) {

    Geometry.call(this);

    /**
     * @private
     * @type {Array<Geometry>}
     */
    this.geometries_ = opt_geometries ? opt_geometries : null;

    this.listenGeometriesChange_();
  }

  if ( Geometry ) GeometryCollection.__proto__ = Geometry;
  GeometryCollection.prototype = Object.create( Geometry && Geometry.prototype );
  GeometryCollection.prototype.constructor = GeometryCollection;

  /**
   * @private
   */
  GeometryCollection.prototype.unlistenGeometriesChange_ = function unlistenGeometriesChange_ () {
    if (!this.geometries_) {
      return;
    }
    for (var i = 0, ii = this.geometries_.length; i < ii; ++i) {
      Object(_events_js__WEBPACK_IMPORTED_MODULE_0__["unlisten"])(
        this.geometries_[i], _events_EventType_js__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE,
        this.changed, this);
    }
  };

  /**
   * @private
   */
  GeometryCollection.prototype.listenGeometriesChange_ = function listenGeometriesChange_ () {
    if (!this.geometries_) {
      return;
    }
    for (var i = 0, ii = this.geometries_.length; i < ii; ++i) {
      Object(_events_js__WEBPACK_IMPORTED_MODULE_0__["listen"])(
        this.geometries_[i], _events_EventType_js__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE,
        this.changed, this);
    }
  };

  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @override
   * @api
   */
  GeometryCollection.prototype.clone = function clone () {
    var geometryCollection = new GeometryCollection(null);
    geometryCollection.setGeometries(this.geometries_);
    return geometryCollection;
  };

  /**
   * @inheritDoc
   */
  GeometryCollection.prototype.closestPointXY = function closestPointXY (x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["closestSquaredDistanceXY"])(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      minSquaredDistance = geometries[i].closestPointXY(
        x, y, closestPoint, minSquaredDistance);
    }
    return minSquaredDistance;
  };

  /**
   * @inheritDoc
   */
  GeometryCollection.prototype.containsXY = function containsXY (x, y) {
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      if (geometries[i].containsXY(x, y)) {
        return true;
      }
    }
    return false;
  };

  /**
   * @inheritDoc
   */
  GeometryCollection.prototype.computeExtent = function computeExtent (extent) {
    Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["createOrUpdateEmpty"])(extent);
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(extent, geometries[i].getExtent());
    }
    return extent;
  };

  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  GeometryCollection.prototype.getGeometries = function getGeometries () {
    return cloneGeometries(this.geometries_);
  };

  /**
   * @return {Array<Geometry>} Geometries.
   */
  GeometryCollection.prototype.getGeometriesArray = function getGeometriesArray () {
    return this.geometries_;
  };

  /**
   * @inheritDoc
   */
  GeometryCollection.prototype.getSimplifiedGeometry = function getSimplifiedGeometry (squaredTolerance) {
    if (this.simplifiedGeometryRevision != this.getRevision()) {
      Object(_obj_js__WEBPACK_IMPORTED_MODULE_5__["clear"])(this.simplifiedGeometryCache);
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = this.getRevision();
    }
    if (squaredTolerance < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
         squaredTolerance < this.simplifiedGeometryMaxMinSquaredTolerance)) {
      return this;
    }
    var key = squaredTolerance.toString();
    if (this.simplifiedGeometryCache.hasOwnProperty(key)) {
      return this.simplifiedGeometryCache[key];
    } else {
      var simplifiedGeometries = [];
      var geometries = this.geometries_;
      var simplified = false;
      for (var i = 0, ii = geometries.length; i < ii; ++i) {
        var geometry = geometries[i];
        var simplifiedGeometry = geometry.getSimplifiedGeometry(squaredTolerance);
        simplifiedGeometries.push(simplifiedGeometry);
        if (simplifiedGeometry !== geometry) {
          simplified = true;
        }
      }
      if (simplified) {
        var simplifiedGeometryCollection = new GeometryCollection(null);
        simplifiedGeometryCollection.setGeometriesArray(simplifiedGeometries);
        this.simplifiedGeometryCache[key] = simplifiedGeometryCollection;
        return simplifiedGeometryCollection;
      } else {
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
      }
    }
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.getType = function getType () {
    return _GeometryType_js__WEBPACK_IMPORTED_MODULE_4__["default"].GEOMETRY_COLLECTION;
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.intersectsExtent = function intersectsExtent (extent) {
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      if (geometries[i].intersectsExtent(extent)) {
        return true;
      }
    }
    return false;
  };

  /**
   * @return {boolean} Is empty.
   */
  GeometryCollection.prototype.isEmpty = function isEmpty () {
    return this.geometries_.length === 0;
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.rotate = function rotate (angle, anchor) {
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].rotate(angle, anchor);
    }
    this.changed();
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.scale = function scale (sx, opt_sy, opt_anchor) {
    var anchor = opt_anchor;
    if (!anchor) {
      anchor = Object(_extent_js__WEBPACK_IMPORTED_MODULE_2__["getCenter"])(this.getExtent());
    }
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].scale(sx, opt_sy, anchor);
    }
    this.changed();
  };

  /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */
  GeometryCollection.prototype.setGeometries = function setGeometries (geometries) {
    this.setGeometriesArray(cloneGeometries(geometries));
  };

  /**
   * @param {Array<Geometry>} geometries Geometries.
   */
  GeometryCollection.prototype.setGeometriesArray = function setGeometriesArray (geometries) {
    this.unlistenGeometriesChange_();
    this.geometries_ = geometries;
    this.listenGeometriesChange_();
    this.changed();
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.applyTransform = function applyTransform (transformFn) {
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].applyTransform(transformFn);
    }
    this.changed();
  };

  /**
   * @inheritDoc
   * @api
   */
  GeometryCollection.prototype.translate = function translate (deltaX, deltaY) {
    var geometries = this.geometries_;
    for (var i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].translate(deltaX, deltaY);
    }
    this.changed();
  };

  /**
   * @inheritDoc
   */
  GeometryCollection.prototype.disposeInternal = function disposeInternal () {
    this.unlistenGeometriesChange_();
    Geometry.prototype.disposeInternal.call(this);
  };

  return GeometryCollection;
}(_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["default"]));


/**
 * @param {Array<Geometry>} geometries Geometries.
 * @return {Array<Geometry>} Cloned geometries.
 */
function cloneGeometries(geometries) {
  var clonedGeometries = [];
  for (var i = 0, ii = geometries.length; i < ii; ++i) {
    clonedGeometries.push(geometries[i].clone());
  }
  return clonedGeometries;
}


/* harmony default export */ __webpack_exports__["default"] = (GeometryCollection);

//# sourceMappingURL=GeometryCollection.js.map

/***/ }),

/***/ "./node_modules/ol/style.js":
/*!**********************************!*\
  !*** ./node_modules/ol/style.js ***!
  \**********************************/
/*! exports provided: Atlas, AtlasManager, Circle, Fill, Icon, IconImage, Image, RegularShape, Stroke, Style, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_Atlas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/Atlas.js */ "./node_modules/ol/style/Atlas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Atlas", function() { return _style_Atlas_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _style_AtlasManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/AtlasManager.js */ "./node_modules/ol/style/AtlasManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtlasManager", function() { return _style_AtlasManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _style_Circle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/Circle.js */ "./node_modules/ol/style/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _style_Circle_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _style_Fill_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/Fill.js */ "./node_modules/ol/style/Fill.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return _style_Fill_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _style_Icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/Icon.js */ "./node_modules/ol/style/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _style_Icon_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _style_IconImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/IconImage.js */ "./node_modules/ol/style/IconImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconImage", function() { return _style_IconImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _style_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/Image.js */ "./node_modules/ol/style/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _style_Image_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/RegularShape.js */ "./node_modules/ol/style/RegularShape.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegularShape", function() { return _style_RegularShape_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stroke", function() { return _style_Stroke_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _style_Style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/Style.js */ "./node_modules/ol/style/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _style_Style_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _style_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/Text.js */ "./node_modules/ol/style/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _style_Text_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/**
 * @module ol/style
 */














//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./node_modules/ol/style/Atlas.js":
/*!****************************************!*\
  !*** ./node_modules/ol/style/Atlas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom.js */ "./node_modules/ol/dom.js");
/**
 * @module ol/style/Atlas
 */



/**
 * @typedef {Object} AtlasBlock
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 */

/**
 * Provides information for an image inside an atlas.
 * `offsetX` and `offsetY` are the position of the image inside the atlas image `image`.
 * @typedef {Object} AtlasInfo
 * @property {number} offsetX
 * @property {number} offsetY
 * @property {HTMLCanvasElement} image
 */


/**
 * @classesc
 * This class facilitates the creation of image atlases.
 *
 * Images added to an atlas will be rendered onto a single
 * atlas canvas. The distribution of images on the canvas is
 * managed with the bin packing algorithm described in:
 * http://www.blackpawn.com/texts/lightmaps/
 *
 * @param {number} size The size in pixels of the sprite image.
 * @param {number} space The space in pixels between images.
 *    Because texture coordinates are float values, the edges of
 *    images might not be completely correct (in a way that the
 *    edges overlap when being rendered). To avoid this we add a
 *    padding around each image.
 */
var Atlas = function Atlas(size, space) {

  /**
   * @private
   * @type {number}
   */
  this.space_ = space;

  /**
   * @private
   * @type {Array<AtlasBlock>}
   */
  this.emptyBlocks_ = [{x: 0, y: 0, width: size, height: size}];

  /**
   * @private
   * @type {Object<string, AtlasInfo>}
   */
  this.entries_ = {};

  /**
   * @private
   * @type {CanvasRenderingContext2D}
   */
  this.context_ = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext2D"])(size, size);

  /**
   * @private
   * @type {HTMLCanvasElement}
   */
  this.canvas_ = this.context_.canvas;
};

/**
 * @param {string} id The identifier of the entry to check.
 * @return {?AtlasInfo} The atlas info.
 */
Atlas.prototype.get = function get (id) {
  return this.entries_[id] || null;
};

/**
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback`.
 * @return {?AtlasInfo} The position and atlas image for the entry.
 */
Atlas.prototype.add = function add (id, width, height, renderCallback, opt_this) {
  for (var i = 0, ii = this.emptyBlocks_.length; i < ii; ++i) {
    var block = this.emptyBlocks_[i];
    if (block.width >= width + this.space_ &&
        block.height >= height + this.space_) {
      // we found a block that is big enough for our entry
      var entry = {
        offsetX: block.x + this.space_,
        offsetY: block.y + this.space_,
        image: this.canvas_
      };
      this.entries_[id] = entry;

      // render the image on the atlas image
      renderCallback.call(opt_this, this.context_,
        block.x + this.space_, block.y + this.space_);

      // split the block after the insertion, either horizontally or vertically
      this.split_(i, block, width + this.space_, height + this.space_);

      return entry;
    }
  }

  // there is no space for the new entry in this atlas
  return null;
};

/**
 * @private
 * @param {number} index The index of the block.
 * @param {AtlasBlock} block The block to split.
 * @param {number} width The width of the entry to insert.
 * @param {number} height The height of the entry to insert.
 */
Atlas.prototype.split_ = function split_ (index, block, width, height) {
  var deltaWidth = block.width - width;
  var deltaHeight = block.height - height;

  /** @type {AtlasBlock} */
  var newBlock1;
  /** @type {AtlasBlock} */
  var newBlock2;

  if (deltaWidth > deltaHeight) {
    // split vertically
    // block right of the inserted entry
    newBlock1 = {
      x: block.x + width,
      y: block.y,
      width: block.width - width,
      height: block.height
    };

    // block below the inserted entry
    newBlock2 = {
      x: block.x,
      y: block.y + height,
      width: width,
      height: block.height - height
    };
    this.updateBlocks_(index, newBlock1, newBlock2);
  } else {
    // split horizontally
    // block right of the inserted entry
    newBlock1 = {
      x: block.x + width,
      y: block.y,
      width: block.width - width,
      height: height
    };

    // block below the inserted entry
    newBlock2 = {
      x: block.x,
      y: block.y + height,
      width: block.width,
      height: block.height - height
    };
    this.updateBlocks_(index, newBlock1, newBlock2);
  }
};

/**
 * Remove the old block and insert new blocks at the same array position.
 * The new blocks are inserted at the same position, so that splitted
 * blocks (that are potentially smaller) are filled first.
 * @private
 * @param {number} index The index of the block to remove.
 * @param {AtlasBlock} newBlock1 The 1st block to add.
 * @param {AtlasBlock} newBlock2 The 2nd block to add.
 */
Atlas.prototype.updateBlocks_ = function updateBlocks_ (index, newBlock1, newBlock2) {
  var args = /** @type {Array<*>} */ ([index, 1]);
  if (newBlock1.width > 0 && newBlock1.height > 0) {
    args.push(newBlock1);
  }
  if (newBlock2.width > 0 && newBlock2.height > 0) {
    args.push(newBlock2);
  }
  this.emptyBlocks_.splice.apply(this.emptyBlocks_, args);
};

/* harmony default export */ __webpack_exports__["default"] = (Atlas);

//# sourceMappingURL=Atlas.js.map

/***/ }),

/***/ "./node_modules/ol/style/AtlasManager.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/style/AtlasManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl.js */ "./node_modules/ol/webgl.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var _Atlas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Atlas.js */ "./node_modules/ol/style/Atlas.js");
/**
 * @module ol/style/AtlasManager
 */





/**
 * @typedef {Object} Options
 * @property {number} [initialSize=256] The size in pixels of the first atlas image.
 * @property {number} [maxSize] The maximum size in pixels of atlas images. Default is
 * `webgl/MAX_TEXTURE_SIZE` or 2048 if WebGL is not supported.
 * @property {number} [space=1] The space in pixels between images.
 */


/**
 * Provides information for an image inside an atlas manager.
 * `offsetX` and `offsetY` is the position of the image inside
 * the atlas image `image` and the position of the hit-detection image
 * inside the hit-detection atlas image `hitImage`.
 * @typedef {Object} AtlasManagerInfo
 * @property {number} offsetX
 * @property {number} offsetY
 * @property {HTMLCanvasElement} image
 * @property {HTMLCanvasElement} hitImage
 */


/**
 * The size in pixels of the first atlas image.
 * @type {number}
 */
var INITIAL_ATLAS_SIZE = 256;

/**
 * The maximum size in pixels of atlas images.
 * @type {number}
 */
var MAX_ATLAS_SIZE = -1;


/**
 * @classdesc
 * Manages the creation of image atlases.
 *
 * Images added to this manager will be inserted into an atlas, which
 * will be used for rendering.
 * The `size` given in the constructor is the size for the first
 * atlas. After that, when new atlases are created, they will have
 * twice the size as the latest atlas (until `maxSize` is reached).
 *
 * If an application uses many images or very large images, it is recommended
 * to set a higher `size` value to avoid the creation of too many atlases.
 * @api
 */
var AtlasManager = function AtlasManager(opt_options) {

  var options = opt_options || {};

  /**
   * The size in pixels of the latest atlas image.
   * @private
   * @type {number}
   */
  this.currentSize_ = options.initialSize !== undefined ?
    options.initialSize : INITIAL_ATLAS_SIZE;

  /**
   * The maximum size in pixels of atlas images.
   * @private
   * @type {number}
   */
  this.maxSize_ = options.maxSize !== undefined ?
    options.maxSize : MAX_ATLAS_SIZE != -1 ?
      MAX_ATLAS_SIZE : _webgl_js__WEBPACK_IMPORTED_MODULE_0__["MAX_TEXTURE_SIZE"] !== undefined ?
        _webgl_js__WEBPACK_IMPORTED_MODULE_0__["MAX_TEXTURE_SIZE"] : 2048;

  /**
   * The size in pixels between images.
   * @private
   * @type {number}
   */
  this.space_ = options.space !== undefined ? options.space : 1;

  /**
   * @private
   * @type {Array<import("./Atlas.js").default>}
   */
  this.atlases_ = [new _Atlas_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.currentSize_, this.space_)];

  /**
   * The size in pixels of the latest atlas image for hit-detection images.
   * @private
   * @type {number}
   */
  this.currentHitSize_ = this.currentSize_;

  /**
   * @private
   * @type {Array<import("./Atlas.js").default>}
   */
  this.hitAtlases_ = [new _Atlas_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.currentHitSize_, this.space_)];
};

/**
 * @param {string} id The identifier of the entry to check.
 * @return {?AtlasManagerInfo} The position and atlas image for the
 *  entry, or `null` if the entry is not part of the atlas manager.
 */
AtlasManager.prototype.getInfo = function getInfo (id) {
  /** @type {?import("./Atlas.js").AtlasInfo} */
  var info = this.getInfo_(this.atlases_, id);

  if (!info) {
    return null;
  }
  var hitInfo = /** @type {import("./Atlas.js").AtlasInfo} */ (this.getInfo_(this.hitAtlases_, id));

  return this.mergeInfos_(info, hitInfo);
};

/**
 * @private
 * @param {Array<import("./Atlas.js").default>} atlases The atlases to search.
 * @param {string} id The identifier of the entry to check.
 * @return {?import("./Atlas.js").AtlasInfo} The position and atlas image for the entry,
 *  or `null` if the entry is not part of the atlases.
 */
AtlasManager.prototype.getInfo_ = function getInfo_ (atlases, id) {
  for (var i = 0, ii = atlases.length; i < ii; ++i) {
    var atlas = atlases[i];
    var info = atlas.get(id);
    if (info) {
      return info;
    }
  }
  return null;
};

/**
 * @private
 * @param {import("./Atlas.js").AtlasInfo} info The info for the real image.
 * @param {import("./Atlas.js").AtlasInfo} hitInfo The info for the hit-detection
 *  image.
 * @return {?AtlasManagerInfo} The position and atlas image for the
 *  entry, or `null` if the entry is not part of the atlases.
 */
AtlasManager.prototype.mergeInfos_ = function mergeInfos_ (info, hitInfo) {
  return (
    /** @type {AtlasManagerInfo} */ ({
      offsetX: info.offsetX,
      offsetY: info.offsetY,
      image: info.image,
      hitImage: hitInfo.image
    })
  );
};

/**
 * Add an image to the atlas manager.
 *
 * If an entry for the given id already exists, the entry will
 * be overridden (but the space on the atlas graphic will not be freed).
 *
 * If `renderHitCallback` is provided, the image (or the hit-detection version
 * of the image) will be rendered into a separate hit-detection atlas image.
 *
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {function(CanvasRenderingContext2D, number, number)=} opt_renderHitCallback Called to render a hit-detection image onto a hit
 *  detection atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback` and `renderHitCallback`.
 * @return {?AtlasManagerInfo}The position and atlas image for the
 *  entry, or `null` if the image is too big.
 */
AtlasManager.prototype.add = function add (id, width, height, renderCallback, opt_renderHitCallback, opt_this) {
  if (width + this.space_ > this.maxSize_ ||
      height + this.space_ > this.maxSize_) {
    return null;
  }

  /** @type {?import("./Atlas.js").AtlasInfo} */
  var info = this.add_(false, id, width, height, renderCallback, opt_this);
  if (!info) {
    return null;
  }

  // even if no hit-detection entry is requested, we insert a fake entry into
  // the hit-detection atlas, to make sure that the offset is the same for
  // the original image and the hit-detection image.
  var renderHitCallback = opt_renderHitCallback !== undefined ?
    opt_renderHitCallback : _functions_js__WEBPACK_IMPORTED_MODULE_1__["VOID"];

  var hitInfo = /** @type {import("./Atlas.js").AtlasInfo} */ (this.add_(true,
    id, width, height, renderHitCallback, opt_this));

  return this.mergeInfos_(info, hitInfo);
};

/**
 * @private
 * @param {boolean} isHitAtlas If the hit-detection atlases are used.
 * @param {string} id The identifier of the entry to add.
 * @param {number} width The width.
 * @param {number} height The height.
 * @param {function(CanvasRenderingContext2D, number, number)} renderCallback
 *  Called to render the new image onto an atlas image.
 * @param {Object=} opt_this Value to use as `this` when executing
 *  `renderCallback` and `renderHitCallback`.
 * @return {?import("./Atlas.js").AtlasInfo}The position and atlas image for the entry,
 *  or `null` if the image is too big.
 */
AtlasManager.prototype.add_ = function add_ (isHitAtlas, id, width, height, renderCallback, opt_this) {
  var atlases = (isHitAtlas) ? this.hitAtlases_ : this.atlases_;
  var atlas, info, i, ii;
  for (i = 0, ii = atlases.length; i < ii; ++i) {
    atlas = atlases[i];
    info = atlas.add(id, width, height, renderCallback, opt_this);
    if (info) {
      return info;
    } else if (!info && i === ii - 1) {
      // the entry could not be added to one of the existing atlases,
      // create a new atlas that is twice as big and try to add to this one.
      var size = (void 0);
      if (isHitAtlas) {
        size = Math.min(this.currentHitSize_ * 2, this.maxSize_);
        this.currentHitSize_ = size;
      } else {
        size = Math.min(this.currentSize_ * 2, this.maxSize_);
        this.currentSize_ = size;
      }
      atlas = new _Atlas_js__WEBPACK_IMPORTED_MODULE_2__["default"](size, this.space_);
      atlases.push(atlas);
      // run the loop another time
      ++ii;
    }
  }
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (AtlasManager);

//# sourceMappingURL=AtlasManager.js.map

/***/ }),

/***/ "./node_modules/qrcode/lib/browser.js":
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QRCode = __webpack_require__(/*! ./core/qrcode */ "./node_modules/qrcode/lib/core/qrcode.js")
var CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ "./node_modules/qrcode/lib/renderer/canvas.js")
var SvgRenderer = __webpack_require__(/*! ./renderer/svg-render.js */ "./node_modules/qrcode/lib/renderer/svg-render.js")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var argsNum = arguments.length - 1
  if (argsNum < 2) {
    throw new Error('Too few arguments provided')
  }

  if (argsNum === 2) {
    cb = text
    text = canvas
    canvas = opts = undefined
  } else if (argsNum === 3) {
    if (canvas.getContext && typeof cb === 'undefined') {
      cb = opts
      opts = undefined
    } else {
      cb = opts
      opts = text
      text = canvas
      canvas = undefined
    }
  }

  if (typeof cb !== 'function') {
    throw new Error('Callback required as last argument')
  }

  try {
    var data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})

/**
 * Legacy API
 */
exports.qrcodedraw = function () {
  return {
    draw: exports.toCanvas
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alignment-pattern.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2
  var size = getSymbolSize(version)
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  var positions = [size - 7] // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = []
  var pos = exports.getRowColCoords(version)
  var posLength = pos.length

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alphanumeric-data.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-matrix.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Buffer(size * size)
  this.data.fill(0)
  this.reservedBit = new Buffer(size * size)
  this.reservedBit.fill(0)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "./node_modules/qrcode/lib/core/byte-data.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function ByteData (data) {
  this.mode = Mode.BYTE
  this.data = new Buffer(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-code.js":
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-level.js":
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/finder-pattern.js":
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getSymbolSize = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize
var FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/format-info.js":
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
var G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask)
  var d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/galois-field.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")

var EXP_TABLE = new Buffer(512)
var LOG_TABLE = new Buffer(256)

/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/kanji-data.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  var i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mask-pattern.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size
  var points = 0
  var sameCountCol = 0
  var sameCountRow = 0
  var lastCol = null
  var lastRow = null

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size
  var points = 0

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size
  var points = 0
  var bitsCol = 0
  var bitsRow = 0

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0
  var modulesCount = data.data.length

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i]

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length
  var bestPattern = 0
  var lowerPenalty = Infinity

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mode.js":
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Version = __webpack_require__(/*! ./version */ "./node_modules/qrcode/lib/core/version.js")
var Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!Version.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/numeric-data.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/polynomial.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var GF = __webpack_require__(/*! ./galois-field */ "./node_modules/qrcode/lib/core/galois-field.js")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = new Buffer(p1.length + p2.length - 1)
  coeff.fill(0)

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = new Buffer(divident)

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0]

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    var offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = new Buffer([1])
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, GF.exp(i)])
  }

  return poly
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/qrcode.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
var BitBuffer = __webpack_require__(/*! ./bit-buffer */ "./node_modules/qrcode/lib/core/bit-buffer.js")
var BitMatrix = __webpack_require__(/*! ./bit-matrix */ "./node_modules/qrcode/lib/core/bit-matrix.js")
var AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ "./node_modules/qrcode/lib/core/alignment-pattern.js")
var FinderPattern = __webpack_require__(/*! ./finder-pattern */ "./node_modules/qrcode/lib/core/finder-pattern.js")
var MaskPattern = __webpack_require__(/*! ./mask-pattern */ "./node_modules/qrcode/lib/core/mask-pattern.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
var ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js")
var Version = __webpack_require__(/*! ./version */ "./node_modules/qrcode/lib/core/version.js")
var FormatInfo = __webpack_require__(/*! ./format-info */ "./node_modules/qrcode/lib/core/format-info.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var Segments = __webpack_require__(/*! ./segments */ "./node_modules/qrcode/lib/core/segments.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size
  var pos = FinderPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = AlignmentPattern.getPositions(version)

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0]
    var col = pos[i][1]

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  var size = matrix.size
  var bits = Version.getEncodedBits(version)
  var row, col, mod

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size
  var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  var i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size
  var inc = -1
  var row = size - 1
  var bitIndex = 7
  var byteIndex = 0

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  var totalCodewords = Utils.getSymbolTotalCodewords(version)
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new ReedSolomonEncoder(ecCount)

  var offset = 0
  var dcData = new Array(ecTotalBlocks)
  var ecData = new Array(ecTotalBlocks)
  var maxDataSize = 0
  var buffer = new Buffer(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = new Buffer(totalCodewords)
  var index = 0
  var i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel) {
  var segments

  if (isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    var estimatedVersion = version

    if (!estimatedVersion) {
      var rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments,
        errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = Version.getBestVersionForData(segments,
      errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  var moduleCount = Utils.getSymbolSize(version)
  var modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  // Find best mask pattern
  var maskPattern = MaskPattern.getBestMask(modules,
    setupFormatInfo.bind(null, modules, errorCorrectionLevel))

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel = ECLevel.M
  var version

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js":
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(/*! ../utils/buffer */ "./node_modules/qrcode/lib/utils/typedarray-buffer.js")
var Polynomial = __webpack_require__(/*! ./polynomial */ "./node_modules/qrcode/lib/core/polynomial.js")

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = new Buffer(this.degree)
  pad.fill(0)
  var paddedData = Buffer.concat([data, pad], data.length + this.degree)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length
  if (start > 0) {
    var buff = new Buffer(this.degree)
    buff.fill(0)
    remainder.copy(buff, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "./node_modules/qrcode/lib/core/regex.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var numeric = '[0-9]+'
var alphanumeric = '[A-Z $%*+-./:]+'
var kanji = '(?:[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|' +
  '[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|' +
  '[\u2010\u2015\u2018\u2019\u2025\u2026\u201C\u201D\u2225\u2260]|' +
  '[\u0391-\u0451]|[\u00A7\u00A8\u00B1\u00B4\u00D7\u00F7])+'
var byte = '(?:(?![A-Z0-9 $%*+-./:]|' + kanji + ').)+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

var TEST_KANJI = new RegExp('^' + kanji + '$')
var TEST_NUMERIC = new RegExp('^' + numeric + '$')
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/segments.js":
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var NumericData = __webpack_require__(/*! ./numeric-data */ "./node_modules/qrcode/lib/core/numeric-data.js")
var AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ "./node_modules/qrcode/lib/core/alphanumeric-data.js")
var ByteData = __webpack_require__(/*! ./byte-data */ "./node_modules/qrcode/lib/core/byte-data.js")
var KanjiData = __webpack_require__(/*! ./kanji-data */ "./node_modules/qrcode/lib/core/kanji-data.js")
var Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")
var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var dijkstra = __webpack_require__(/*! dijkstrajs */ "./node_modules/dijkstrajs/dijkstra.js")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = []
  var result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  var byteSegs
  var kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = []
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {}
  var graph = {'start': {}}
  var prevNodeIds = ['start']

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i]
    var currentNodeIds = []

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j]
      var key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode
  var bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  var nodes = buildNodes(segs)
  var graph = buildGraph(nodes, version)
  var path = dijkstra.find_path(graph.map, 'start', 'end')

  var optimizedSegs = []
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toSJISFunction
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  var digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/version.js":
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
var ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
var ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
var G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!exports.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  var seg

  var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!exports.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/canvas.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options
  var canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  var size = (qrData.modules.size + opts.margin * 2) * opts.scale

  var ctx = canvasEl.getContext('2d')
  var image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts.margin, opts.scale, opts.color)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  var canvasEl = exports.render(qrData, canvas, opts)

  var type = opts.type || 'image/png'
  var rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/svg-render.js":
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-render.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function getColorAttrib (color) {
  return 'fill="rgb(' + [color.r, color.g, color.b].join(',') + ')" ' +
    'fill-opacity="' + (color.a / 255).toFixed(2) + '"'
}

exports.render = function render (qrData, options) {
  var opts = Utils.getOptions(options)
  var size = qrData.modules.size
  var data = qrData.modules.data
  var qrcodesize = (size + opts.margin * 2) * opts.scale

  var xmlStr = '<?xml version="1.0" encoding="utf-8"?>\n'
  xmlStr += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

  xmlStr += '<svg version="1.1" baseProfile="full"'
  xmlStr += ' width="' + qrcodesize + '" height="' + qrcodesize + '"'
  xmlStr += ' viewBox="0 0 ' + qrcodesize + ' ' + qrcodesize + '"'
  xmlStr += ' xmlns="http://www.w3.org/2000/svg"'
  xmlStr += ' xmlns:xlink="http://www.w3.org/1999/xlink"'
  xmlStr += ' xmlns:ev="http://www.w3.org/2001/xml-events">\n'

  xmlStr += '<rect x="0" y="0" width="' + qrcodesize + '" height="' + qrcodesize + '" ' + getColorAttrib(opts.color.light) + ' />\n'
  xmlStr += '<defs><rect id="p" width="' + opts.scale + '" height="' + opts.scale + '" /></defs>\n'
  xmlStr += '<g ' + getColorAttrib(opts.color.dark) + '>\n'

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (!data[i * size + j]) continue

      var x = (opts.margin + j) * opts.scale
      var y = (opts.margin + i) * opts.scale
      xmlStr += '<use x="' + x + '" y="' + y + '" xlink:href="#p" />\n'
    }
  }

  xmlStr += '</g>\n'
  xmlStr += '</svg>'

  return xmlStr
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hex2rgba (hex) {
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  var hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin

  return {
    scale: options.scale || 4,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.qrToImageData = function qrToImageData (imgData, qr, margin, scale, color) {
  var size = qr.modules.size
  var data = qr.modules.data
  var scaledMargin = margin * scale
  var symbolSize = size * scale + scaledMargin * 2
  var palette = [color.light, color.dark]

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4
      var pxColor = color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale)
        var jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc]]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/utils/typedarray-buffer.js":
/*!************************************************************!*\
  !*** ./node_modules/qrcode/lib/utils/typedarray-buffer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */

/* eslint-disable no-proto */



var isArray = __webpack_require__(/*! isarray */ "./node_modules/qrcode/node_modules/isarray/index.js")

var K_MAX_LENGTH = 0x7fffffff

function Buffer (arg, offset, length) {
  if (typeof arg === 'number') {
    return allocUnsafe(arg)
  }

  return from(arg, offset, length)
}

Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (length) {
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

function allocUnsafe (size) {
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

function fromString (string) {
  var length = byteLength(string) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, offset)
  }

  return fromObject(value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
    } else {
      length = undefined
    }
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

Buffer.byteLength = byteLength

Buffer.prototype._isBuffer = true
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

module.exports = Buffer


/***/ }),

/***/ "./node_modules/qrcode/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nz-card [style.marginTop.px]=\"24\" [style.marginBottom.px]=\"24\">\n    <ng-container\n      *ngIf=\"\n        listOfAllDataSurveyResponse &&\n          listOfAllDataSurveyResponse.length > 0 &&\n          surveyFormDetail?.json;\n        else loadingTpl\n      \"\n    >\n      <nz-tabset (nzSelectedIndexChange)=\"confirmTabSwitch($event)\">\n        <nz-tab\n          [nzTitle]=\"'default.layout.STATISTIC_RESULTS' | translate | uppercase\"\n        >\n          <app-survey-analytics\n            [data]=\"listOfAllDataSurveyResponse\"\n            [json]=\"surveyFormDetail.json\"\n          >\n          </app-survey-analytics>\n        </nz-tab>\n        <nz-tab\n          [nzTitle]=\"\n            'default.layout.STATISTIC_LOCATION_RESULTS' | translate | uppercase\n          \"\n        >\n          <div data-role=\"mapcontent\">\n            <app-map\n              *ngIf=\"loadmapComponent\"\n              [height]=\"height\"\n              [config]=\"configMap\"\n              (oncomponentsetup)=\"onComponentSetup()\"\n              (onpointermove)=\"onPointerMove($event)\"\n              (onclick)=\"onMapClick($event)\"\n            >\n            </app-map>\n          </div>\n        </nz-tab>\n        <nz-tab\n          [nzTitle]=\"\n            'default.layout.INDIVIDUAL_RESPONSES' | translate | uppercase\n          \"\n        >\n          <div class=\"analyze-nav-content\">\n            <button\n              [nzTrigger]=\"'click'\"\n              [nzDropdownMenu]=\"menuCollectorType\"\n              [nzPlacement]=\"'bottomLeft'\"\n              nz-dropdown\n              nz-button\n              nzType=\"primary\"\n              [nzSize]=\"'large'\"\n            >\n              {{ \"default.layout.RESPONDENT\" | translate }} #{{\n                selectedIndex + 1\n              }}\n              <i nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n            </button>\n            <nz-dropdown-menu #menuCollectorType=\"nzDropdownMenu\">\n              <div class=\"respondent-goto-menu\">\n                <form nz-form [nzLayout]=\"'inline'\">\n                  <nz-form-item>\n                    <nz-form-label>Go to</nz-form-label>\n                    <nz-form-control>\n                      <nz-input-number\n                        #index\n                        [nzMin]=\"1\"\n                        [nzMax]=\"listOfAllSurveyResponse.length\"\n                      >\n                      </nz-input-number>\n                    </nz-form-control>\n                  </nz-form-item>\n                  <nz-form-item>\n                    <nz-form-label\n                      >of {{ listOfAllSurveyResponse.length }}</nz-form-label\n                    >\n                  </nz-form-item>\n                  <nz-form-item>\n                    <nz-form-control>\n                      <button\n                        (click)=\"goto(index.value)\"\n                        nz-button\n                        nzType=\"primary\"\n                      >\n                        Go\n                      </button>\n                    </nz-form-control>\n                  </nz-form-item>\n                </form>\n              </div>\n            </nz-dropdown-menu>\n            <button\n              nz-tooltip\n              [nzTooltipTitle]=\"'default.layout.PREVIOUS' | translate\"\n              (click)=\"pre()\"\n              nz-button\n              nzType=\"primary\"\n              [nzSize]=\"'large'\"\n            >\n              <i nz-icon nzType=\"caret-left\" nzTheme=\"outline\"></i>\n            </button>\n            <button\n              nz-tooltip\n              [nzTooltipTitle]=\"'default.layout.NEXT' | translate\"\n              (click)=\"next()\"\n              nz-button\n              nzType=\"primary\"\n              [nzSize]=\"'large'\"\n            >\n              <i nz-icon nzType=\"caret-right\" nzTheme=\"outline\"></i>\n            </button>\n          </div>\n          <div class=\"analyze-pages-content\">\n            <div class=\"respondent-window fadeable\">\n              <nz-tabset\n                id=\"preview-tab\"\n                [(nzSelectedIndex)]=\"selectedIndex\"\n                (nzSelectedIndexChange)=\"onChangeTabPreview($event)\"\n              >\n                <nz-tab\n                  *ngFor=\"\n                    let response of listOfAllSurveyResponse;\n                    let i = index\n                  \"\n                >\n                  <div class=\"respondent\">\n                    <div\n                      class=\"respondent-profile clearfix spacer-phm spacer-ptm sm-corner-a fadeable\"\n                    >\n                      <div class=\"respondent-data\">\n                        <h5\n                          class=\"sm-label respondent-completion-status completed\"\n                        >\n                          {{\n                            \"default.layout.COMPLETE\" | translate | uppercase\n                          }}\n                        </h5>\n                        <ul class=\"respondent-info-fields\">\n                          <li>\n                            <span class=\"sm-label respondent-info-label\"\n                              >{{ \"default.layout.COLLECTOR\" | translate }}:\n                            </span>\n                            <span class=\"sm-label value\">\n                              {{ response.surveyCollector?.name }}\n                            </span>\n                            <span class=\"sm-label value collector-type\">\n                              ({{ response.surveyCollector?.type }})\n                            </span>\n                          </li>\n                          <li>\n                            <span class=\"sm-label respondent-info-label\"\n                              >{{ \"default.layout.STARTED\" | translate }}:\n                            </span>\n                            <span class=\"sm-label value\">\n                              {{ response?.startTime | date: \"medium\" }}\n                            </span>\n                          </li>\n                          <li>\n                            <span class=\"sm-label respondent-info-label\"\n                              >{{ \"default.layout.LAST_MODIFIED\" | translate }}:\n                            </span>\n                            <span class=\"sm-label value\">\n                              {{ response?.endTime | date: \"medium\" }}\n                            </span>\n                          </li>\n                          <li>\n                            <span class=\"sm-label respondent-info-label\"\n                              >{{ \"default.layout.TIME_SPENT\" | translate }}:\n                            </span>\n                            <span class=\"sm-label value\">\n                              {{ msToHMSTypicalTimeSpent(response.totalTime) }}\n                            </span>\n                          </li>\n                          <li>\n                            <span class=\"sm-label respondent-info-label\"\n                              >{{ \"default.layout.IP_ADDRESS\" | translate }} :\n                            </span>\n                            <span class=\"sm-label value\">\n                              {{ response.ipAddress }}\n                            </span>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </nz-tab>\n              </nz-tabset>\n            </div>\n            <div class=\"response-question-list\">\n              <app-survey-response\n                *ngIf=\"surveyResponsePreview\"\n                [disabled]=\"true\"\n                [data]=\"surveyResponsePreview?.json\"\n                [json]=\"surveyResponsePreview?.surveyForm?.json\"\n              >\n              </app-survey-response>\n            </div>\n          </div>\n        </nz-tab>\n      </nz-tabset>\n    </ng-container>\n  </nz-card>\n\n  <ng-template #loadingTpl>\n    <div *ngIf=\"surveyFormDetail && !surveyFormDetail?.json\">\n      <h3 class=\"no-content-title txt-shadow-lt\">\n        <div class=\"header-icon pictos\">\n          <i nz-icon nzType=\"warning\" nzTheme=\"outline\"></i>\n        </div>\n        {{ \"default.layout.ADD_QUESTIONS_TO_YOUR_SURVEY\" | translate }}\n      </h3>\n      <div class=\"button-bar\">\n        <button\n          [routerLink]=\"['/create', 'design-survey', surveyFormDetail.id]\"\n          nz-button\n          nzType=\"primary\"\n          [nzSize]=\"'large'\"\n        >\n          <i nz-icon nzType=\"plus-circle\" nzTheme=\"outline\"></i>\n          {{ \"default.layout.ADD_QUESTIONS\" | translate }}\n        </button>\n      </div>\n    </div>\n    <div\n      *ngIf=\"\n        surveyFormDetail &&\n        surveyFormDetail?.json &&\n        (!listOfAllDataSurveyResponse ||\n          listOfAllDataSurveyResponse?.length === 0)\n      \"\n    >\n      <h3 class=\"no-content-title txt-shadow-lt\">\n        <div class=\"header-icon pictos\">\n          <i nz-icon nzType=\"warning\" nzTheme=\"outline\"></i>\n        </div>\n        {{ \"default.layout.YOUR_SURVEY_HAS_NO_RESPONSES\" | translate }}\n      </h3>\n      <div class=\"button-bar\">\n        <button\n          [routerLink]=\"['/create', 'collector-responses', surveyFormDetail.id]\"\n          nz-button\n          nzType=\"primary\"\n          [nzSize]=\"'large'\"\n        >\n          {{ \"default.layout.COLLECT_RESPONSES\" | translate }}\n        </button>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<div #popup id=\"popup\" class=\"ol-popup\">\n  <div id=\"popup-content\" [innerHTML]=\"popupContent\"></div>\n</div>\n<div #popup_click id=\"popup\" class=\"ol-popup\">\n  <a id=\"popup-closer\" class=\"ol-popup-closer1\" (click)=\"closePopup()\"></a>\n  <div id=\"popup-content1\" [innerHTML]=\"popupContent1\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container collectors\">\n  <section class=\"compose-message-container\" [class]=\"'step' + currentStep\">\n    <header>\n      <h1 id=\"edit-name\" class=\"wds-type-page-title truncate\">\n        {{ surveyCollectorDetail?.name }}\n      </h1>\n      <h4>\n        <strong\n          >{{ \"default.layout.STEP\" | translate }} {{ currentStep }}\n          {{ \"default.layout.OF\" | translate }} 3:</strong\n        >\n\n        <ng-container [ngSwitch]=\"currentStep\">\n          <ng-container *ngSwitchCase=\"1\">{{\n            \"default.layout.COMPOSE_MESSAGE\" | translate\n          }}</ng-container>\n          <ng-container *ngSwitchCase=\"2\"\n            >{{ \"default.layout.REVIEW_OPTIONS\" | translate }}\n          </ng-container>\n          <ng-container *ngSwitchCase=\"3\"\n            >{{ \"default.layout.SCHEDULE\" | translate }}\n          </ng-container>\n        </ng-container>\n      </h4>\n    </header>\n    <ng-container [ngSwitch]=\"currentStep\">\n      <ng-container *ngSwitchCase=\"1\">\n        <form [formGroup]=\"formCompose\">\n          <article class=\"sendto\">\n            <header>\n              <h5>{{ \"default.layout.SEND_TO\" | translate | uppercase }}:</h5>\n            </header>\n            <nz-select\n              formControlName=\"emails\"\n              [nzDropdownMatchSelectWidth]=\"false\"\n              [nzShowArrow]=\"false\"\n              nzMode=\"tags\"\n            >\n            </nz-select>\n            <field-error-display\n              [displayError]=\"isFieldValid(formCompose, 'emails')\"\n              [errors]=\"fCompose.emails.errors\"\n            ></field-error-display>\n          </article>\n          <article id=\"compose-email\" class=\"reading template\">\n            <header>\n              <h5>\n                <label class=\"sm-label\" for=\"subject-text\"\n                  >{{\n                    \"default.layout.SUBJECT\" | translate | uppercase\n                  }}:</label\n                >\n              </h5>\n            </header>\n            <input\n              formControlName=\"subject\"\n              nz-input\n              autocomplete=\"password\"\n              type=\"text\"\n            />\n            <field-error-display\n              [displayError]=\"isFieldValid(formCompose, 'subject')\"\n              [errors]=\"fCompose.subject.errors\"\n            ></field-error-display>\n            <header class=\"message-header\">\n              <h5>\n                <label class=\"sm-label\" for=\"subject-text\"\n                  >{{\n                    \"default.layout.MESSAGE\" | translate | uppercase\n                  }}:</label\n                >\n              </h5>\n            </header>\n\n            <div id=\"email-preview\" width=\"100%\" height=\"372\">\n              <div class=\"align-center\">\n                <table\n                  border=\"0\"\n                  cellpadding=\"0\"\n                  cellspacing=\"0\"\n                  align=\"center\"\n                  width=\"100%\"\n                  style=\"font-family: Arial,Helvetica,sans-serif; max-width: 700px;\"\n                >\n                  <tbody>\n                    <tr bgcolor=\"#00BF6F\">\n                      <td colspan=\"5\" height=\"40\">&nbsp;</td>\n                    </tr>\n                    <tr bgcolor=\"#00BF6F\">\n                      <td width=\"20\">&nbsp;</td>\n                      <td width=\"20\">&nbsp;</td>\n                      <td\n                        align=\"center\"\n                        style=\"font-size: 29px; color:#FFF; font-weight: normal; letter-spacing: 1px; line-height: 1;\n                        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2); font-family: Arial,Helvetica,sans-serif;\"\n                      >\n                        {{ surveyCollectorDetail?.surveyForm?.title }}\n                      </td>\n                      <td width=\"20\">&nbsp;</td>\n                      <td width=\"20\">&nbsp;</td>\n                    </tr>\n                    <tr bgcolor=\"#00BF6F\">\n                      <td colspan=\"5\" height=\"40\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td height=\"10\" colspan=\"5\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td\n                        colspan=\"3\"\n                        align=\"left\"\n                        valign=\"top\"\n                        style=\"color:#666666; font-size: 13px;\"\n                      >\n                        <p>\n                          <markdown-editor\n                            formControlName=\"message\"\n                            placeholder=\"brandingSettings.PLACEHOLDER_DESCRIPTION\"\n                            [editable]=\"true\"\n                            minHeight=\"180\"\n                          ></markdown-editor>\n                          <field-error-display\n                            [displayError]=\"\n                              isFieldValid(formCompose, 'message')\n                            \"\n                            [errors]=\"fCompose.message.errors\"\n                          ></field-error-display>\n                        </p>\n                      </td>\n                      <td>&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"5\" height=\"30\">&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td>&nbsp;</td>\n                      <td colspan=\"3\">\n                        <table\n                          border=\"0\"\n                          cellpadding=\"0\"\n                          cellspacing=\"0\"\n                          align=\"center\"\n                          style=\"background:#00BF6F; border-radius: 4px; border: 1px solid #BBBBBB; color:#FFFFFF; font-size:14px; letter-spacing: 1px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.8); padding: 10px 18px;\"\n                        >\n                          <tbody>\n                            <tr>\n                              <td align=\"center\" valign=\"center\">\n                                <a\n                                  href=\"[SurveyLink]\"\n                                  target=\"_blank\"\n                                  style=\"color:#FFFFFF; text-decoration:none;\"\n                                  >Begin Survey</a\n                                >\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </td>\n                      <td>&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"5\" height=\"30\">&nbsp;</td>\n                    </tr>\n                    <tr valign=\"top\" style=\"color: #666666;font-size: 10px;\">\n                      <td>&nbsp;</td>\n                      <td valign=\"top\" align=\"center\" colspan=\"3\">\n                        <p>\n                          Please do not forward this email as its survey link is\n                          unique to you. <br /><a\n                            href=\"[PrivacyLink]\"\n                            target=\"_blank\"\n                            style=\"color: #333333; text-decoration: underline;\"\n                            >Privacy</a\n                          >\n                          |\n                          <a\n                            href=\"[OptOutLink]\"\n                            target=\"_blank\"\n                            style=\"color: #333333; text-decoration: underline;\"\n                            >Unsubscribe</a\n                          >\n                        </p>\n                      </td>\n                      <td>&nbsp;</td>\n                    </tr>\n                    <tr>\n                      <td height=\"20\" colspan=\"5\">&nbsp;</td>\n                    </tr>\n                    <tr style=\"color: #999999;font-size: 10px;\">\n                      <td align=\"center\" colspan=\"5\">\n                        <table width=\"100%\" cellpadding=\"2\">\n                          <tbody>\n                            <tr>\n                              <td\n                                width=\"45%\"\n                                align=\"right\"\n                                style=\"font-size: 10px; color: #999999;\"\n                              >\n                                Powered by\n                              </td>\n                              &nbsp;\n                              <td width=\"55%\" align=\"left\">\n                                <img\n                                  width=\"130\"\n                                  align=\"middle\"\n                                  height=\"25\"\n                                  alt=\"UetSurvey Logo\"\n                                  src=\"./assets/images/logo/full-logo-green.png\"\n                                />\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td height=\"20\" colspan=\"5\">&nbsp;</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </article>\n        </form>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"2\">\n        <app-collector-options [surveyCollectorDetail]=\"surveyCollectorDetail\">\n        </app-collector-options>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"3\">\n        <article>\n          <div class=\"sm-banner sm-banner-whitelist\">\n            <nz-alert\n              nzType=\"info\"\n              nzMessage=\"TIP! Whitelist UetSurvey.\"\n              nzDescription=\"Add us to your email whitelist to make sure your colleagues can receive your survey. If you're sending to people with a different email domain than you, they may need to whitelist us too.\"\n              nzShowIcon\n            >\n            </nz-alert>\n          </div>\n          <div class=\"options options-send\">\n            <form [formGroup]=\"formSchedule\">\n              <nz-radio-group formControlName=\"sendDateEnabled\">\n                <label nz-radio [ngStyle]=\"styleRadio\" [nzValue]=\"false\">\n                  {{ \"default.layout.SEND_NOW\" | translate }}\n                </label>\n\n                <label nz-radio [ngStyle]=\"styleRadio\" [nzValue]=\"true\">\n                  {{\n                    \"default.layout.SCHEDULE_A_LATER_DATE_AND_TIME_TO_SEND\"\n                      | translate\n                  }}\n                </label>\n                <ng-container *ngIf=\"fSchedule.sendDateEnabled.value === true\">\n                  <div class=\"child-radio-margin\">\n                    <nz-date-picker\n                      (nzOnOk)=\"onSaveSurveyCollector('sendDate', $event)\"\n                      nzShowTime\n                      formControlName=\"sendDate\"\n                      nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                      [nzPlaceHolder]=\"\n                        'default.layout.SELECT_TIME_CLOSE' | translate\n                      \"\n                    >\n                    </nz-date-picker>\n                  </div>\n                </ng-container>\n              </nz-radio-group>\n            </form>\n          </div>\n          <ul class=\"options clearfix\">\n            <li>\n              <header class=\"summary\">\n                <h3 class=\"wds-type-section-title\">Summary</h3>\n              </header>\n              <div class=\"divided\">\n                <aside>\n                  <p>\n                    <output id=\"total-recipients\" class=\"sl_plural\">{{\n                      emails?.length\n                    }}</output>\n                    <span class=\"wds-type-product-ui\"\n                      >{{ \"default.layout.RECIPIENTS\" | translate }}\n                    </span>\n                  </p>\n                </aside>\n                <article>\n                  <header>\n                    <dl>\n                      <dt><b>Sender Email Address:</b></dt>\n                      <dd>\n                        <span class=\"notranslate\"></span> via\n                        <span class=\"notranslate\">UetSurvey.com</span>\n                      </dd>\n                    </dl>\n                  </header>\n                  <ul class=\"results\">\n                    <li>All respondent information is included</li>\n                    <li>Respondents cannot edit their responses</li>\n                    <li>Invitation tracking is on</li>\n                    <li>Custom thank you page is off</li>\n                    <li>Disqualification message is on</li>\n                    <li>Instant results are off</li>\n                    <li>No cutoff date and time</li>\n                    <li>No maximum response count</li>\n                    <li>No IP access restrictions</li>\n                    <li>No password protection</li>\n                  </ul>\n                </article>\n              </div>\n            </li>\n          </ul>\n        </article>\n      </ng-container>\n    </ng-container>\n\n    <footer class=\"clearfix\">\n      <p *ngIf=\"surveyCollectorDetail && currentStep > 1\" class=\"left\">\n        <button\n          (click)=\"backStep()\"\n          nz-button\n          nzType=\"default\"\n          [nzSize]=\"'large'\"\n        >\n          <i nz-icon nzType=\"arrow-left\" nzTheme=\"outline\"></i>\n          {{ \"default.layout.BACK\" | translate }}\n        </button>\n      </p>\n      <p *ngIf=\"surveyCollectorDetail\" class=\"right\">\n        <button\n          [routerLink]=\"[\n            '/create',\n            'collector-responses',\n            surveyCollectorDetail.surveyForm.id\n          ]\"\n          nz-button\n          nzType=\"default\"\n          [nzSize]=\"'large'\"\n        >\n          {{ \"default.layout.RESUME_LATER\" | translate | uppercase }}\n        </button>\n        <button\n          (click)=\"nextStep()\"\n          nz-button\n          nzType=\"primary\"\n          [nzSize]=\"'large'\"\n        >\n          {{ \"default.layout.NEXT\" | translate | uppercase }}\n          <i nz-icon nzType=\"arrow-right\" nzTheme=\"outline\"></i>\n        </button>\n      </p>\n    </footer>\n  </section>\n</div>\n\n<ng-template #tplContentRecipientsRemoved>\n  <div>\n    Your invitation currently has 0 recipients. This could happen for a number\n    of reasons—your contact opted out of receiving email invitations from you,\n    the email was already sent to the selected recipient(s), or you've entered\n    an invalid email. Review what you've entered and try again.\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"page-container\">\n    <div id=\"left-space\"></div>\n    <div id=\"mid-space\">\n      <div class=\"manage-message collectors\">\n        <nav class=\"back-nav\" *ngIf=\"surveyCollectorDetail\">\n          <a\n            [routerLink]=\"[\n              '/create',\n              'collector-responses',\n              surveyCollectorDetail.surveyFormId\n            ]\"\n          >\n            « {{ \"default.layout.BACK_TO_ALL_COLLECTORS\" | translate }}\n          </a>\n        </nav>\n        <main>\n          <header>\n            <h1 id=\"edit-name\" class=\"wds-type-page-title truncate\">\n              <span class=\"notranslate\">{{ surveyCollectorDetail?.name }}</span>\n            </h1>\n            <span\n              [ngClass]=\"\n                surveyCollectorDetail?.status === 'OPEN' ? 'open' : 'closed'\n              \"\n              class=\"email-collector-status title sm-badge sm-badge-sm\"\n            >\n              {{ surveyCollectorDetail?.status }}\n            </span>\n            <div class=\"actions\">\n              <div *ngIf=\"surveyCollectorDetail\" class=\"buttons\">\n                <button\n                  [routerLink]=\"[\n                    '/create',\n                    'collector-responses',\n                    'collector-email',\n                    'compose',\n                    surveyCollectorDetail.id\n                  ]\"\n                  nz-button\n                  nzType=\"primary\"\n                >\n                  <i nz-icon nzType=\"plus-circle\" nzTheme=\"outline\"></i>\n                  {{ \"default.layout.INVITE_MORE\" | translate | uppercase }}\n                </button>\n              </div>\n            </div>\n          </header>\n          <div class=\"tabs\">\n            <nz-tabset>\n              <nz-tab\n                [nzTitle]=\"'default.layout.RECIPIENTS' | translate | uppercase\"\n              >\n                <nz-card [style.marginBottom.px]=\"24\">\n                  <div [style.marginBottom.px]=\"24\" nz-row>\n                    <div class=\"col-sm-4 pull-right\">\n                      <nz-input-group\n                        [nzSize]=\"'large'\"\n                        [nzSuffix]=\"suffixIconSearch\"\n                      >\n                        <input\n                          [(ngModel)]=\"filter.searchValue\"\n                          (keyup.enter)=\"search()\"\n                          type=\"text\"\n                          nz-input\n                          [placeholder]=\"\n                            'default.layout.SEARCH_BY_EMAIL' | translate\n                          \"\n                        />\n                      </nz-input-group>\n                      <ng-template #suffixIconSearch>\n                        <i nz-icon nzType=\"search\"></i>\n                      </ng-template>\n                    </div>\n                  </div>\n                  <div nz-row>\n                    <div class=\"col-sm-12\">\n                      <nz-table\n                        #userTable\n                        nzShowPagination\n                        nzShowSizeChanger\n                        [nzData]=\"listOfAllSurveyRecipient\"\n                        [nzPageSize]=\"pagging.pageSize\"\n                        [nzTotal]=\"pagging.total\"\n                        [nzFrontPagination]=\"false\"\n                        (nzPageIndexChange)=\"pageIndexChange($event)\"\n                        (nzPageSizeChange)=\"pageSizeChange($event)\"\n                        [nzBordered]=\"true\"\n                        [nzTitle]=\"titleTemplate\"\n                      >\n                        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n                          <tr *ngIf=\"columns.length > 0\">\n                            <th>\n                              {{\n                                \"default.layout.TABLE_NO\"\n                                  | translate\n                                  | uppercase\n                              }}\n                            </th>\n                            <ng-container>\n                              <ng-container *ngFor=\"let column of columns\">\n                                <th\n                                  [nzAlign]=\"'center'\"\n                                  nzCustomFilter\n                                  *ngIf=\"!column.hidden\"\n                                  [nzShowSort]=\"column.sortable\"\n                                  [nzSortKey]=\"column.id\"\n                                  [nzShowFilter]=\"column.filter\"\n                                  [nzFilters]=\"\n                                    column.filter ? column.filter : []\n                                  \"\n                                  (nzFilterChange)=\"\n                                    filter(\n                                      $event,\n                                      column.filterKey || column.id\n                                    )\n                                  \"\n                                >\n                                  {{ column.header | translate | uppercase }}\n                                  <i\n                                    *ngIf=\"column.search\"\n                                    class=\"ant-table-filter-icon\"\n                                    nz-icon\n                                    nz-dropdown\n                                    #dropdown=\"nzDropdown\"\n                                    nzType=\"search\"\n                                    [nzDropdownMenu]=\"menuSearch\"\n                                    [class.ant-table-filter-open]=\"\n                                      dropdown.nzVisible\n                                    \"\n                                    nzTrigger=\"click\"\n                                    nzPlacement=\"bottomRight\"\n                                    [nzClickHide]=\"false\"\n                                    nzTableFilter\n                                    (click)=\"filter.searchKey = column.id\"\n                                  >\n                                  </i>\n                                </th>\n                              </ng-container>\n                            </ng-container>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <ng-container\n                            *ngFor=\"let data of userTable.data; let i = index\"\n                          >\n                            <tr\n                              (click)=\"onShowModalContactDetails(data)\"\n                              [nzTooltipTitle]=\"\n                                'default.layout.CLICK_TO_VIEW_CONTACT_DETAILS'\n                                  | translate\n                              \"\n                              nzTooltipPlacement=\"top\"\n                              nz-tooltip\n                            >\n                              <td>{{ i + 1 }}</td>\n                              <ng-container *ngFor=\"let column of columns\">\n                                <td\n                                  [nzAlign]=\"'center'\"\n                                  [ngClass]=\"column.className\"\n                                  *ngIf=\"!column.hidden\"\n                                >\n                                  <ng-container [ngSwitch]=\"column.type\">\n                                    <ng-container *ngSwitchCase=\"'text'\">\n                                      <div\n                                        *ngIf=\"data[column.id]?.length > 50\"\n                                        [nzTooltipTitle]=\"data[column.id]\"\n                                        nzTooltipPlacement=\"top\"\n                                        nz-tooltip\n                                      >\n                                        <a\n                                          *ngIf=\"column.action\"\n                                          [routerLink]=\"\n                                            column.action.link(data.id)\n                                          \"\n                                        >\n                                          {{ data[column.id] | summary: 50 }}\n                                        </a>\n                                        <ng-container *ngIf=\"!column.action\">\n                                          {{ data[column.id] | summary: 50 }}\n                                        </ng-container>\n                                      </div>\n                                      <div\n                                        *ngIf=\"data[column.id]?.length <= 50\"\n                                      >\n                                        <a\n                                          *ngIf=\"column.action\"\n                                          [routerLink]=\"\n                                            column.action.link(data.id)\n                                          \"\n                                        >\n                                          {{ data[column.id] }}\n                                        </a>\n                                        <ng-container *ngIf=\"!column.action\">\n                                          {{ data[column.id] }}\n                                        </ng-container>\n                                      </div>\n                                    </ng-container>\n                                    <ng-container *ngSwitchCase=\"'date'\">\n                                      <i\n                                        nz-icon\n                                        nzType=\"clock-circle\"\n                                        nzTheme=\"outline\"\n                                      ></i>\n                                      {{\n                                        data[column.id]\n                                          | date: \"yyyy-MM-dd hh:mm\"\n                                      }}\n                                    </ng-container>\n                                  </ng-container>\n                                </td>\n                              </ng-container>\n                            </tr>\n                          </ng-container>\n                        </tbody>\n                      </nz-table>\n                    </div>\n                  </div>\n                </nz-card>\n              </nz-tab>\n              <nz-tab\n                [nzTitle]=\"'default.layout.OPTIONS' | translate | uppercase\"\n              >\n                <div\n                  *ngIf=\"surveyCollectorDetail?.status === 'OPEN'\"\n                  class=\"sm-banner sm-banner-warning\"\n                >\n                  <nz-alert\n                    nzType=\"warning\"\n                    nzMessage=\"Your survey is open.\"\n                    nzDescription=\"Any changes to options may affect new respondents to the survey.\"\n                    nzShowIcon\n                  >\n                  </nz-alert>\n                </div>\n\n                <app-collector-options\n                  [surveyCollectorDetail]=\"surveyCollectorDetail\"\n                >\n                </app-collector-options>\n              </nz-tab>\n            </nz-tabset>\n          </div>\n        </main>\n      </div>\n    </div>\n    <div id=\"right-space\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"page-container\">\n    <div id=\"left-space\"></div>\n    <div id=\"mid-space\">\n      <div class=\"collectors\">\n        <nav class=\"back-nav\" *ngIf=\"surveyCollectorDetail\">\n          <a\n            [routerLink]=\"[\n              '/create',\n              'collector-responses',\n              surveyCollectorDetail.surveyFormId\n            ]\"\n          >\n            « {{ \"default.layout.BACK_TO_ALL_COLLECTORS\" | translate }}\n          </a>\n        </nav>\n        <main>\n          <h1\n            id=\"edit-name\"\n            class=\"wds-type-page-title truncate\"\n            title=\"Click to edit nickname\"\n          >\n            {{ surveyCollectorDetail?.name }}\n          </h1>\n          <span\n            (click)=\"showRenameCollectorModal(surveyCollectorDetail)\"\n            id=\"edit-name-icon\"\n            class=\"notranslate\"\n          >\n            <i class=\"fa fa-pencil-square-o\"></i>\n          </span>\n          <span id=\"collector-created-date\">\n            {{ \"default.layout.LINK_CREATED\" | translate }}:\n            {{ surveyCollectorDetail?.createdAt | date: \"yyyy-MM-dd\" }}\n          </span>\n          <section class=\"weblink\">\n            <div id=\"edit-weblink\">\n              <div id=\"collector-status\" class=\"clearfix\">\n                <b>\n                  <a\n                    id=\"action-menu-link\"\n                    [ngClass]=\"\n                      surveyCollectorDetail?.status === 'OPEN'\n                        ? 'open'\n                        : 'closed'\n                    \"\n                    [nzTrigger]=\"'click'\"\n                    [nzDropdownMenu]=\"menuAction\"\n                    [nzPlacement]=\"'bottomCenter'\"\n                    nz-dropdown\n                  >\n                    <span id=\"status-indicator\">\n                      {{ surveyCollectorDetail?.status }}\n                      <i nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n                    </span>\n                  </a>\n                  <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                    <ul nz-menu nzSelectable>\n                      <li\n                        (click)=\"\n                          surveyCollectorDetail?.status === 'OPEN'\n                            ? showCloseCollectorModal(surveyCollectorDetail)\n                            : showOpenCollectorModal(surveyCollectorDetail)\n                        \"\n                        nz-menu-item\n                      >\n                        <i\n                          nz-icon\n                          [nzType]=\"\n                            surveyCollectorDetail?.status === 'OPEN'\n                              ? 'eye-invisible'\n                              : 'eye'\n                          \"\n                          nzTheme=\"outline\"\n                        >\n                        </i>\n                        {{\n                          (surveyCollectorDetail?.status === \"OPEN\"\n                            ? \"default.layout.CLOSE_COLLECTOR\"\n                            : \"default.layout.OPEN_COLLECTOR\"\n                          ) | translate\n                        }}\n                      </li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </b>\n                <a href=\"#\" id=\"manual-entry\"\n                  >{{ \"default.layout.MANUAL_DATA_ENTRY\" | translate }} »</a\n                >\n              </div>\n              <div class=\"view-url\">\n                <i class=\"fa fa-link collect-link-icon\"></i>\n                <input\n                  class=\"notranslate\"\n                  type=\"text\"\n                  size=\"51\"\n                  readonly\n                  onClick=\"this.select();\"\n                  [value]=\"surveyCollectorDetail?.fullUrl\"\n                  id=\"weblink-url\"\n                />\n                <div class=\"buttons\">\n                  <button class=\"secondary\" nz-button nzType=\"default\">\n                    CUSTOMIZE\n                  </button>\n                  <button\n                    (click)=\"onCopyUrl(surveyCollectorDetail?.fullUrl)\"\n                    class=\"btn-copy\"\n                    nz-button\n                    nzType=\"primary\"\n                  >\n                    COPY\n                  </button>\n                </div>\n              </div>\n              <div id=\"qrcode-container\">\n                <button\n                  (click)=\"onDownloadQrCode()\"\n                  class=\"secondary\"\n                  nz-button\n                  nzType=\"default\"\n                >\n                  <i nz-icon nzType=\"arrow-down\" nzTheme=\"outline\"></i>\n                  DOWNLOAD QRCODE\n                </button>\n                <a class=\"q \" data-help=\"qrcode-popout\">\n                  <span class=\"notranslate\">?</span>\n                </a>\n                <div id=\"qrcode\">\n                  <ngx-qrcode\n                    qrc-element-type=\"canvas\"\n                    [qrc-value]=\"surveyCollectorDetail?.fullUrl\"\n                  ></ngx-qrcode>\n                </div>\n              </div>\n            </div>\n          </section>\n\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <section class=\"collector-options weblink\">\n                <app-collector-options\n                  [surveyCollectorDetail]=\"surveyCollectorDetail\"\n                >\n                </app-collector-options>\n              </section>\n            </div>\n            <div class=\"col-md-4\">\n              <aside class=\"sidebar\">\n                <div class=\"aside-audience-ad \">\n                  <i\n                    nz-icon\n                    class=\"icon-collector\"\n                    nzType=\"team\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h4 class=\"wds-type-card-title\">Buy Survey Responses</h4>\n                  <div class=\"clearfix\"></div>\n                  <p>\n                    Get real-time feedback from our panel of global respondents.\n                    See results in minutes.\n                  </p>\n                  <button nz-button nzType=\"default\">\n                    GET STARTED\n                  </button>\n                </div>\n                <div class=\"add-fb-messenger-collector \">\n                  <i\n                    class=\"icon-collector\"\n                    nz-icon\n                    nzType=\"wechat\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h4 class=\"wds-type-card-title clearfix\">\n                    New! Reach more people with Messenger\n                  </h4>\n                  <div class=\"clearfix\"></div>\n                  <p>\n                    Use our Facebook Messenger Template to get feedback from\n                    people wherever they are in the world.\n                  </p>\n                  <button nz-button nzType=\"default\">\n                    TRY IT\n                  </button>\n                </div>\n              </aside>\n            </div>\n          </div>\n          <section class=\"collector-ads\">\n            <header class=\"wds-type-section-title\">More ways to send</header>\n            <ul>\n              <li class=\"add-weblink-collector  \">\n                <a>\n                  <i class=\"fa fa-link icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\">\n                    Web Link\n                  </h3>\n                  <p>Ideal for sharing via email, social media, etc.</p>\n                </a>\n              </li>\n              <li class=\"add-email-collector  \">\n                <a>\n                  <i\n                    class=\"icon-collector\"\n                    nz-icon\n                    nzType=\"mail\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h3 class=\"wds-type-card-title\">\n                    Email\n                  </h3>\n                  <p>Ideal for tracking your survey respondents</p>\n                </a>\n              </li>\n              <li class=\"add-audience-collector  \">\n                <a>\n                  <i\n                    nz-icon\n                    class=\"icon-collector\"\n                    nzType=\"team\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h3 class=\"wds-type-card-title\">Buy Responses</h3>\n                  <p>Find people who fit your criteria</p>\n                </a>\n              </li>\n              <li class=\"add-facebook-collector  \">\n                <a>\n                  <i class=\"fa fa-facebook icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\">\n                    Social Media\n                  </h3>\n                  <p>Post your survey on Facebook, LinkedIn, or Twitter</p>\n                </a>\n              </li>\n              <li class=\"add-website-collector  \">\n                <a>\n                  <i class=\"fa fa-newspaper-o icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\">\n                    Website\n                  </h3>\n                  <p>Embed your survey on your website</p>\n                </a>\n              </li>\n              <li class=\"add-facebook-collector  \">\n                <a>\n                  <i\n                    class=\"icon-collector\"\n                    nz-icon\n                    nzType=\"wechat\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h3 class=\"wds-type-card-title\">Facebook Messenger</h3>\n                  <p>Get feedback in Messenger</p>\n                </a>\n              </li>\n            </ul>\n          </section>\n        </main>\n      </div>\n    </div>\n    <div id=\"right-space\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"page-container\">\n    <div id=\"left-space\"></div>\n    <div id=\"mid-space\">\n      <div class=\"collectors clearfix\">\n        <ng-container\n          *ngIf=\"\n            listOfAllSurveyCollect?.length > 0 || isSearch;\n            else noCollectResponsesTpl\n          \"\n        >\n          <div class=\"add-collector\">\n            <h1 class=\"wds-type-section-title\" translate>\n              default.layout.SURVEY_COLLECTORS\n            </h1>\n            <div class=\"btn-menu wds-button-group\">\n              <button\n                [nzTrigger]=\"'click'\"\n                [nzDropdownMenu]=\"menuCollectorType\"\n                [nzPlacement]=\"'bottomCenter'\"\n                nz-dropdown\n                nz-button\n                nzType=\"primary\"\n              >\n                {{ \"default.layout.ADD_NEW_COLLECTOR\" | translate }}\n                <i nz-icon nzType=\"caret-down\" nzTheme=\"outline\"></i>\n              </button>\n              <nz-dropdown-menu #menuCollectorType=\"nzDropdownMenu\">\n                <ul nz-menu nzSelectable>\n                  <li (click)=\"onAddNewCollector('WEBLINK')\" nz-menu-item>\n                    <i nz-icon nzType=\"link\" nzTheme=\"outline\"></i>\n                    {{ \"default.layout.WEB_LINK_COLLECTOR\" | translate }}\n                  </li>\n                  <li (click)=\"onAddNewCollector('EMAIL')\" nz-menu-item>\n                    <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>\n                    {{ \"default.layout.EMAIL_COLLECTOR\" | translate }}\n                  </li>\n                  <li nz-menu-item>\n                    <i nz-icon nzType=\"team\" nzTheme=\"outline\"></i>\n                    {{ \"default.layout.BUY_RESPONSES\" | translate }}\n                  </li>\n                  <li nz-menu-item>\n                    <i nz-icon nzType=\"facebook\" nzTheme=\"outline\"></i>\n                    {{ \"default.layout.POST_TO_SOCIAL_MEDIA\" | translate }}\n                  </li>\n                  <li nz-menu-item>\n                    <i class=\"fa fa-newspaper-o\"></i>&nbsp;&nbsp;\n                    {{ \"default.layout.WEBSITE_COLLECTOR\" | translate }}\n                  </li>\n                  <li nz-menu-item>\n                    <i nz-icon nzType=\"wechat\" nzTheme=\"outline\"></i>\n                    {{ \"default.layout.FACEBOOK_MESSENGER\" | translate }}\n                  </li>\n                </ul>\n              </nz-dropdown-menu>\n            </div>\n          </div>\n          <div class=\"collector-list-grid-container\">\n            <nz-card [style.marginBottom.px]=\"24\">\n              <div [style.marginBottom.px]=\"24\" nz-row>\n                <div class=\"col-sm-4 pull-right\">\n                  <nz-input-group\n                    [nzSize]=\"'large'\"\n                    [nzSuffix]=\"suffixIconSearch\"\n                  >\n                    <input\n                      [(ngModel)]=\"filter.searchValue\"\n                      (keyup.enter)=\"search()\"\n                      type=\"text\"\n                      nz-input\n                      [placeholder]=\"\n                        'default.layout.SEARCH_BY_NAME' | translate\n                      \"\n                    />\n                  </nz-input-group>\n                  <ng-template #suffixIconSearch>\n                    <i nz-icon nzType=\"search\"></i>\n                  </ng-template>\n                </div>\n              </div>\n              <div nz-row>\n                <div class=\"col-sm-12\">\n                  <nz-table\n                    #userTable\n                    nzShowPagination\n                    nzShowSizeChanger\n                    [nzData]=\"listOfAllSurveyCollect\"\n                    [nzPageSize]=\"pagging.pageSize\"\n                    [nzTotal]=\"pagging.total\"\n                    [nzFrontPagination]=\"false\"\n                    (nzPageIndexChange)=\"pageIndexChange($event)\"\n                    (nzPageSizeChange)=\"pageSizeChange($event)\"\n                    [nzBordered]=\"true\"\n                    [nzTitle]=\"titleTemplate\"\n                  >\n                    <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n                      <tr *ngIf=\"columns.length > 0\">\n                        <th>\n                          {{\n                            \"default.layout.TABLE_NO\" | translate | uppercase\n                          }}\n                        </th>\n                        <th\n                          *ngIf=\"showMoveToFolder\"\n                          nzShowCheckbox\n                          [(nzChecked)]=\"isAllDisplayDataChecked\"\n                          (nzCheckedChange)=\"checkAll($event)\"\n                          [nzIndeterminate]=\"isIndeterminate\"\n                        ></th>\n                        <ng-container *ngFor=\"let column of columns\">\n                          <th\n                            [nzAlign]=\"'center'\"\n                            nzCustomFilter\n                            *ngIf=\"!column.hidden\"\n                            [nzShowSort]=\"column.sortable\"\n                            [nzSortKey]=\"column.id\"\n                            [nzShowFilter]=\"column.filter\"\n                            [nzFilters]=\"column.filter ? column.filter : []\"\n                            (nzFilterChange)=\"\n                              filter($event, column.filterKey || column.id)\n                            \"\n                          >\n                            {{ column.header | translate | uppercase }}\n                            <i\n                              *ngIf=\"column.search\"\n                              class=\"ant-table-filter-icon\"\n                              nz-icon\n                              nz-dropdown\n                              #dropdown=\"nzDropdown\"\n                              nzType=\"search\"\n                              [nzDropdownMenu]=\"menuSearch\"\n                              [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n                              nzTrigger=\"click\"\n                              nzPlacement=\"bottomRight\"\n                              [nzClickHide]=\"false\"\n                              nzTableFilter\n                              (click)=\"filter.searchKey = column.id\"\n                            >\n                            </i>\n                          </th>\n                        </ng-container>\n                        <th *ngIf=\"!showMoveToFolder\" [nzAlign]=\"'center'\">\n                          {{ \"default.layout.MORE\" | translate | uppercase }}\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let data of userTable.data; let i = index\">\n                        <td>{{ i + 1 }}</td>\n                        <td\n                          *ngIf=\"showMoveToFolder\"\n                          nzShowCheckbox\n                          [(nzChecked)]=\"mapOfCheckedId[data.id]\"\n                          [nzDisabled]=\"data.disabled\"\n                          (nzCheckedChange)=\"checkItem(data.id, $event)\"\n                        ></td>\n                        <ng-container *ngFor=\"let column of columns\">\n                          <td\n                            [nzAlign]=\"'center'\"\n                            [ngClass]=\"column.className\"\n                            *ngIf=\"!column.hidden\"\n                          >\n                            <ng-container [ngSwitch]=\"column.type\">\n                              <ng-container *ngSwitchCase=\"'text'\">\n                                <div\n                                  *ngIf=\"data[column.id].length > 40\"\n                                  [nzTooltipTitle]=\"data[column.id]\"\n                                  nzTooltipPlacement=\"top\"\n                                  nz-tooltip\n                                >\n                                  <a\n                                    *ngIf=\"column.action\"\n                                    [routerLink]=\"\n                                      column.action.link(data.id, data.type)\n                                    \"\n                                  >\n                                    {{ data[column.id] | summary: 40 }}\n                                  </a>\n                                  <ng-container *ngIf=\"!column.action\">\n                                    {{ data[column.id] | summary: 40 }}\n                                  </ng-container>\n                                </div>\n                                <div *ngIf=\"data[column.id].length <= 40\">\n                                  <a\n                                    *ngIf=\"column.action\"\n                                    [routerLink]=\"\n                                      column.action.link(data.id, data.type)\n                                    \"\n                                  >\n                                    {{ data[column.id] }}\n                                  </a>\n                                  <ng-container *ngIf=\"!column.action\">\n                                    {{ data[column.id] }}\n                                  </ng-container>\n                                </div>\n                                <div *ngIf=\"column.td_two\">\n                                  {{ \"default.layout.CREATED\" | translate }}\n                                  {{ data[column.td_two] | date: \"yyyy-MM-dd\" }}\n                                </div>\n                              </ng-container>\n                              <ng-container *ngSwitchCase=\"'date'\">\n                                <i\n                                  nz-icon\n                                  nzType=\"clock-circle\"\n                                  nzTheme=\"outline\"\n                                ></i>\n                                {{ data[column.id] | date: \"yyyy-MM-dd hh:mm\" }}\n                              </ng-container>\n                              <ng-container *ngSwitchCase=\"'icon'\">\n                                <span class=\"action-icon\">\n                                  <i\n                                    nz-icon\n                                    [nzType]=\"\n                                      column?.action?.iconMap(data[column.id])\n                                    \"\n                                    nzTheme=\"outline\"\n                                  ></i>\n                                </span>\n                              </ng-container>\n                              <ng-container *ngSwitchCase=\"'status'\">\n                                <span\n                                  class=\"sm-badge sm-badge-sm\"\n                                  [ngClass]=\"\n                                    column?.action?.classMap(data[column.id])\n                                  \"\n                                >\n                                  <a\n                                    (click)=\"\n                                      column?.action?.doChangeStatus(\n                                        data,\n                                        data[column.id]\n                                      )\n                                    \"\n                                    sm-tooltip-side=\"bottom\"\n                                    >{{ data[column.id] }}\n                                  </a>\n                                </span>\n                              </ng-container>\n                            </ng-container>\n                          </td>\n                        </ng-container>\n                        <td [nzAlign]=\"'center'\">\n                          <a\n                            [nzTrigger]=\"'click'\"\n                            [nzDropdownMenu]=\"menuAction\"\n                            [nzPlacement]=\"'bottomCenter'\"\n                            nz-dropdown\n                          >\n                            <i\n                              nz-icon\n                              nzType=\"ellipsis\"\n                              nzTheme=\"outline\"\n                              class=\"icon-action\"\n                            ></i>\n                          </a>\n                          <nz-dropdown-menu #menuAction=\"nzDropdownMenu\">\n                            <ul nz-menu nzSelectable>\n                              <li\n                                (click)=\"\n                                  data.status === 'OPEN'\n                                    ? showCloseCollectorModal(data)\n                                    : showOpenCollectorModal(data)\n                                \"\n                                nz-menu-item\n                              >\n                                <i\n                                  nz-icon\n                                  [nzType]=\"\n                                    data.status === 'OPEN'\n                                      ? 'eye-invisible'\n                                      : 'eye'\n                                  \"\n                                  nzTheme=\"outline\"\n                                >\n                                </i>\n                                {{\n                                  (data.status === \"OPEN\"\n                                    ? \"default.layout.CLOSE_COLLECTOR\"\n                                    : \"default.layout.OPEN_COLLECTOR\"\n                                  ) | translate\n                                }}\n                              </li>\n                              <li\n                                [routerLink]=\"[\n                                  '/create',\n                                  'collector-responses',\n                                  'collector-link',\n                                  data.id\n                                ]\"\n                                nz-menu-item\n                              >\n                                <i nz-icon nzType=\"form\" nzTheme=\"outline\"></i>\n                                {{\n                                  \"default.layout.EDIT_COLLECTOR\" | translate\n                                }}\n                              </li>\n                              <li\n                                (click)=\"showRenameCollectorModal(data)\"\n                                nz-menu-item\n                              >\n                                <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n                                {{\n                                  \"default.layout.RENAME_COLLECTOR\" | translate\n                                }}\n                              </li>\n                              <li\n                                (click)=\"\n                                  showClearResponsesConfirm(\n                                    data,\n                                    tplContentClearResponsesCollector\n                                  )\n                                \"\n                                nz-menu-item\n                              >\n                                <i\n                                  nz-icon\n                                  nzType=\"close-circle\"\n                                  nzTheme=\"outline\"\n                                >\n                                </i>\n                                {{\n                                  \"default.layout.CLEAR_ALL_RESPONSES\"\n                                    | translate\n                                }}\n                              </li>\n                              <li\n                                (click)=\"\n                                  showDeleteConfirm(\n                                    data,\n                                    tplContentDeleteCollector\n                                  )\n                                \"\n                                nz-menu-item\n                              >\n                                <i nz-icon nzType=\"delete\" nzTheme=\"outline\">\n                                </i>\n                                {{\n                                  \"default.layout.DELETE_COLLECTOR\" | translate\n                                }}\n                              </li>\n                            </ul>\n                          </nz-dropdown-menu>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </nz-table>\n                  <footer\n                    class=\"collectors-footer wds-type-product-ui wds-type-weight-regular\"\n                  >\n                    <b translate>default.layout.COLLECTORS</b>:\n                    {{ \"default.layout.SHOWING\" | translate }}\n                    {{ \"default.layout.FROM\" | translate }}\n                    {{ pagging.page * pagging.pageSize - pagging.pageSize + 1 }}\n                    {{ \"default.layout.TO\" | translate }}\n                    {{ pagging.page * pagging.pageSize }}\n                    {{ \"default.layout.OF\" | translate }} {{ pagging.total }}\n                  </footer>\n                </div>\n              </div>\n            </nz-card>\n          </div>\n          <div class=\"collector-ads\">\n            <header class=\"wds-type-section-title\" translate>\n              default.layout.ADD_A_NEW_COLLECTOR\n            </header>\n            <ul>\n              <li class=\"add-weblink-collector  \">\n                <a>\n                  <i class=\"fa fa-link icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.WEB_LINK\n                  </h3>\n                  <p translate>\n                    default.layout.IDEAL_FOR_SHARING_VIA_EMAIL,_SOCIAL_MEDIA_ETC\n                  </p>\n                </a>\n              </li>\n              <li class=\"add-email-collector  \">\n                <a>\n                  <i\n                    class=\"icon-collector\"\n                    nz-icon\n                    nzType=\"mail\"\n                    nzTheme=\"outline\"\n                  >\n                  </i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.EMAIL\n                  </h3>\n                  <p translate>\n                    default.layout.IDEAL_FOR_TRACKING_YOUR_SURVEY_RESPONDENTS\n                  </p>\n                </a>\n              </li>\n              <li class=\"add-audience-collector  \">\n                <a>\n                  <i\n                    nz-icon\n                    nzType=\"team\"\n                    class=\"icon-collector\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.BUY_RESPONSES\n                  </h3>\n                  <p translate>\n                    default.layout.FIND_PEOPLE_WHO_FIT_YOUR_CRITERIA\n                  </p>\n                </a>\n              </li>\n              <li class=\"add-facebook-collector  \">\n                <a>\n                  <i class=\"fa fa-facebook icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.SOCIAL_MEDIA\n                  </h3>\n                  <p translate>\n                    default.layout.POST_YOUR_SURVEY_ON_FACEBOOK_LINKEDIN_OR_TWITTER\n                  </p>\n                </a>\n              </li>\n              <li class=\"add-website-collector  \">\n                <a>\n                  <i class=\"fa fa-newspaper-o icon-collector\"></i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.WEBSITE\n                  </h3>\n                  <p translate>\n                    default.layout.EMBED_YOUR_SURVEY_ON_YOUR_WEBSITE\n                  </p>\n                </a>\n              </li>\n              <li class=\"add-facebook-collector  \">\n                <a>\n                  <i\n                    class=\"icon-collector\"\n                    nz-icon\n                    nzType=\"wechat\"\n                    nzTheme=\"outline\"\n                  ></i>\n                  <h3 class=\"wds-type-card-title\" translate>\n                    default.layout.FACEBOOK_MESSENGER\n                  </h3>\n                  <p translate>default.layout.GET_FEEDBACK_IN_MESSENGER</p>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <div id=\"right-space\"></div>\n  </div>\n</div>\n\n<ng-template #noCollectResponsesTpl>\n  <div id=\"chooseMethod\" class=\"chooseMethod\">\n    <section id=\"add-collector\">\n      <h1 class=\"wds-type-page-title\" translate>\n        default.layout.HOW_WOULD_YOU_LIKE_TO_COLLECT_RESPONSES_TO_YOUR_SURVEY\n      </h1>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div (click)=\"onAddNewCollector('EMAIL')\" class=\"card-collector\">\n            <i\n              class=\"icon-collector\"\n              nz-icon\n              nzType=\"mail\"\n              nzTheme=\"outline\"\n            ></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.SEND_BY_EMAIL\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.CREATE_CUSTOM_EMAIL_INVITATIONS_AND_TRACK_WHO_RESPONDS_SEND_FOLLOW_UP_REMINDERS_TO_THOSE_WHO_HAVEN_RESPONDED\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div (click)=\"onAddNewCollector('WEBLINK')\" class=\"card-collector\">\n            <i class=\"fa fa-link icon-collector\"></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.GET_WEB_LINK\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.SHARE_A_WEB_LINK_VIA_EMAIL_ON_WEBSITE_OR_POST_TO_SOCIAL_MEDIA_YOU_CAN_ALSO_SCHEDULE_A_RECURRING_WEB_LINK\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card-collector\">\n            <i\n              nz-icon\n              class=\"icon-collector\"\n              nzType=\"team\"\n              nzTheme=\"outline\"\n            ></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.BUY_RESPONSES\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.GET_REAL_TIME_FEEDBACK_FROM_OUR_PANEL_OF_GLOBAL_RESPONDENTS_SEE_RESULTS_IN_MINUTES\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card-collector\">\n            <i class=\"fa fa-facebook icon-collector\"></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.POST_ON_SOCIAL_MEDIA\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.POST_YOUR_SURVEY_ON_FACEBOOK_LINKEDIN_OR_TWITTER\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card-collector\">\n            <i\n              class=\"icon-collector\"\n              nz-icon\n              nzType=\"wechat\"\n              nzTheme=\"outline\"\n            ></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.SHARE_IN_MESSENGER\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.LET_OTHERS_TAKE_YOUR_SURVEY_DIRECTLY_IN_FACEBOOK_MESSENGER\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card-collector\">\n            <i class=\"fa fa-newspaper-o icon-collector\"></i>\n            <h3 class=\"wds-type-card-title\" translate>\n              default.layout.EMBED_ON_WEBSITE\n            </h3>\n            <p class=\"wds-type-product-ui wds-type-weight-regular\" translate>\n              default.layout.EMBED_YOUR_SURVEY_ON_YOUR_WEBSITE_OR_A_LINK_TO_YOUR_SURVEY_IN_A_POPUP_WINDOW\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</ng-template>\n\n<!-- Template content modal delele -->\n<ng-template #tplContentDeleteCollector>\n  <div>\n    {{ \"default.layout.COLLECTOR_NICKNAME\" | translate }}:\n    {{ surveyCollectorDelete?.name }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_CREATED\" | translate }}:\n    {{ surveyCollectorDelete?.createdAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_MODIFIED\" | translate }}:\n    {{ surveyCollectorDelete?.updatedAt | date: \"medium\" }}\n  </div>\n</ng-template>\n<!-- End Template content modal delele -->\n\n<!-- Template content modal clear response -->\n<ng-template #tplContentClearResponsesCollector>\n  <div>\n    {{ \"default.layout.COLLECTOR_NICKNAME\" | translate }}:\n    {{ surveyCollectorClearResponses?.name }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_CREATED\" | translate }}:\n    {{ surveyCollectorClearResponses?.createdAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.DATE_MODIFIED\" | translate }}:\n    {{ surveyCollectorClearResponses?.updatedAt | date: \"medium\" }}\n  </div>\n  <div>\n    {{ \"default.layout.NUMBER_OF_RESPONSES\" | translate }}:\n    {{ surveyCollectorClearResponses?.response }}\n  </div>\n</ng-template>\n<!-- End Template content modal clear response -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"surveyFormDetail\">\n  <survey-creator\n    [json]=\"surveyFormDetail.json\"\n    (surveySaved)=\"onSurveySaved($event)\"\n  ></survey-creator>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"surveyFormDetail\">\n  <survey-creator\n    [json]=\"surveyFormDetail.json\"\n    [activeTab]=\"'test'\"\n  ></survey-creator>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/summary/summary.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/default/modules/create-form/pages/summary/summary.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sm-survey-progress-bar-container\">\n  <div class=\"wds-pane\">\n    <div class=\"wds-pane-body\">\n      <div class=\"sm-survey-progress-bar progress-panel\">\n        <div\n          style=\"position: relative; display: inline-block; width: 100%; overflow-x: auto;\"\n        >\n          <hr class=\"dotted-line\" style=\"left: 18%; width: 30%;\" />\n          <hr class=\"dotted-line \" style=\"left: 54%; width: 30%;\" />\n          <ul class=\"progress-badges-list\">\n            <ng-template #completeTemplate let-item>\n              <li class=\"progress-badge-item active\">\n                <div class=\"active-badge\" style=\"display: inline-block;\">\n                  <div class=\"circle\">\n                    <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                      <i nz-icon nzType=\"check\" nzTheme=\"outline\"></i>\n                    </span>\n                  </div>\n                  <div class=\"c-label\" translate>{{ item.title }}</div>\n                </div>\n              </li>\n            </ng-template>\n            <ng-container\n              *ngTemplateOutlet=\"\n                displayPageSurvey ? completeTemplate : completeAddQuestion;\n                context: {\n                  $implicit: { title: 'default.layout.ADD_QUESTIONS' }\n                }\n              \"\n            >\n            </ng-container>\n            <ng-template #completeAddQuestion let-item>\n              <li class=\"progress-badge-item\">\n                <a (click)=\"showProfile(0)\">\n                  <div style=\"display: inline-block;\">\n                    <div class=\"circle\">\n                      <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                        <i class=\"fa fa-pencil-square-o\"></i>\n                      </span>\n                    </div>\n                    <div class=\"c-label\" translate>\n                      default.layout.ADD_QUESTIONS\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ng-template>\n\n            <ng-container\n              *ngTemplateOutlet=\"\n                listOfAllSurveyCollect.length > 0\n                  ? completeTemplate\n                  : completeGoToCollect;\n                context: {\n                  $implicit: { title: 'default.layout.GO_TO_COLLECT' }\n                }\n              \"\n            >\n            </ng-container>\n            <ng-template #completeGoToCollect let-item>\n              <li class=\"progress-badge-item\">\n                <a (click)=\"showProfile(0)\">\n                  <div style=\"display: inline-block;\">\n                    <div class=\"circle\">\n                      <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                        <i class=\"fa fa-paper-plane-o\"></i>\n                      </span>\n                    </div>\n                    <div class=\"c-label\" translate>\n                      default.layout.GO_TO_COLLECT\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ng-template>\n\n            <ng-container\n              *ngTemplateOutlet=\"\n                surveyFormDetail?.response > 0\n                  ? completeTemplate\n                  : completeAnalyzeResults;\n                context: {\n                  $implicit: { title: 'default.layout.ANALYZE_YOUR_RESULTS' }\n                }\n              \"\n            >\n            </ng-container>\n            <ng-template #completeAnalyzeResults let-item>\n              <li class=\"progress-badge-item\">\n                <a (click)=\"showProfile(0)\">\n                  <div style=\"display: inline-block;\">\n                    <div class=\"circle\">\n                      <span class=\"smf-icon\" style=\"cursor: inherit;\">\n                        <i class=\"fa fa-bar-chart\"></i>\n                      </span>\n                    </div>\n                    <div class=\"c-label\" translate>\n                      default.layout.ANALYZE_YOUR_RESULTS\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ng-template>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"summary-grid\">\n  <div class=\"row\">\n    <div class=\"col-6 col-md-3\">\n      <div class=\"summary-card-title\" translate>\n        default.layout.SURVEY_DESIGN\n      </div>\n      <div class=\"card\">\n        <div class=\"item-summary\">\n          <div class=\"survey-info-header\">\n            <div class=\"survey-info-header-title card-title\">\n              {{ surveyFormDetail?.title }}\n            </div>\n            <span class=\"type-body-sm\">\n              {{ \"default.layout.CREATED_ON\" | translate }}\n              {{ surveyFormDetail?.createdAt | date: \"dd/MM/yyyy\" }}\n            </span>\n          </div>\n          <div class=\"survey-info-stats w-100\">\n            <div class=\"survey-info-stats-cell w-50\">\n              <div class=\"survey-info-stats-cell-value\">\n                <div class=\"section-title m-b-1\">\n                  <b>{{ displayPageSurvey }}</b>\n                </div>\n              </div>\n              <span class=\"survey-info-stats-cell-label text-sm\">\n                {{ \"default.layout.PAGES\" | translate }}\n              </span>\n            </div>\n            <div class=\"survey-info-stats-cell w-50\">\n              <div class=\"survey-info-stats-cell-value\">\n                <div class=\"section-title m-b-1\">\n                  <b>{{ countQuestionSurvey(surveyFormDetail?.json) }}</b>\n                </div>\n              </div>\n              <span class=\"survey-info-stats-cell-label text-sm\">\n                {{ \"default.layout.QUESTIONS\" | translate }}\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item-text\">\n          <span class=\"text-sm\"\n            ><span\n              >{{ \"default.layout.SURVEY_LANGUAGE\" | translate }}:<b\n                >English</b\n              ></span\n            ></span\n          >\n        </div>\n        <div class=\"item-text\">\n          <span class=\"text-sm\"\n            ><span\n              >{{ \"default.layout.THEME\" | translate }}: <b>Simple</b></span\n            ></span\n          >\n        </div>\n        <div class=\"item-action\">\n          <ul *ngIf=\"surveyFormDetail\" class=\"action-list\">\n            <li class=\"action-list-item\">\n              <a\n                [routerLink]=\"['/create', 'design-survey', surveyFormDetail.id]\"\n                class=\"action-item\"\n              >\n                <div class=\"addon\">\n                  <i class=\"fa fa-pencil-square-o\"></i>\n                </div>\n                <span class=\"item-label\">\n                  {{ \"default.layout.EDIT_DESIGN\" | translate | uppercase }}\n                </span>\n              </a>\n            </li>\n            <li class=\"action-list-item\">\n              <a\n                [routerLink]=\"['/create', 'preview-score', surveyFormDetail.id]\"\n                class=\"action-item\"\n              >\n                <div class=\"addon\">\n                  <i class=\"fa fa-link\"></i>\n                </div>\n                <span class=\"item-label\">\n                  {{ \"default.layout.PREVIEW_SURVEY\" | translate | uppercase }}\n                </span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"summary-card-title\">\n        {{ \"default.layout.DID_YOU_KNOW\" | translate }}?\n      </div>\n      <div class=\"card\">\n        <div class=\"mod-body\">\n          <div class=\"ucs-img-wrapper\">\n            <a href=\"#\">\n              <img\n                src=\"assets/images/DidYouNo.svg\"\n                class=\"ucs-benchmarks-img-no-bq\"\n              />\n            </a>\n          </div>\n          <div class=\"ucs-description\">\n            <p>\n              {{\n                \"default.layout.BENCHMARKS_ALLOWS_YOU_TO_COMPARE_YOUR_RESULTS_TO_INDUSTRY_LEADERS_AND_GET_THE_CONTEXT_YOU_NEED_TO\"\n                  | translate\n              }}:\n            </p>\n          </div>\n          <div class=\"ucs-footer\">\n            <button nz-button nzType=\"default\">\n              {{ \"default.layout.LEARN_HOW\" | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 col-md-9\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"summary-card-title inline-block\" translate>\n            default.layout.RESPONSES_AND_STATUS\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <button\n            *ngIf=\"surveyFormDetail\"\n            [routerLink]=\"['/create', 'analyze-results', surveyFormDetail.id]\"\n            class=\"btn-analyze-result\"\n            nz-button\n            nzType=\"primary\"\n          >\n            {{ \"default.layout.ANALYZE_RESULTS\" | translate | uppercase }}\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"sm-mt-12 col-sm-6 col-md-4\">\n          <nz-card>\n            <span>{{\n              \"default.layout.TOTAL_RESPONSES\" | translate | uppercase\n            }}</span>\n            <div class=\"summary-card-title\">\n              <a class=\"status-card-response-count\" href=\"#\">{{\n                surveyFormDetail?.response ? surveyFormDetail?.response : 0\n              }}</a>\n            </div>\n          </nz-card>\n        </div>\n        <div class=\"sm-mt-12 col-sm-6 col-md-4\">\n          <nz-card>\n            <div class=\"item-label-container\">\n              <span class=\"item-label-text\"\n                >{{ \"default.layout.SURVEY_STATUS\" | translate | uppercase }}\n              </span>\n              <nz-badge\n                class=\"indicator-draft\"\n                [nzColor]=\"\n                  surveyFormDetail?.status === 'DRAFT' ? '#f05b24' : '#00bf6f'\n                \"\n              ></nz-badge>\n            </div>\n            <div class=\"summary-card-title\">\n              <a\n                class=\"overall-status\"\n                [ngClass]=\"\n                  surveyFormDetail?.status === 'DRAFT'\n                    ? 'status-draft'\n                    : 'status-open'\n                \"\n              >\n                {{ surveyFormDetail?.status }}\n              </a>\n            </div>\n          </nz-card>\n        </div>\n        <div class=\"sm-mt-12 col-sm-12 col-md-4\">\n          <nz-card>\n            <span>{{\n              \"default.layout.NOTIFICATIONS\" | translate | uppercase\n            }}</span>\n            <div class=\"response-alerts-status\">\n              <div class=\"response-alerts-status-text\">Only you</div>\n              <span class=\"popout-clickable\">\n                <a>Edit</a>\n              </span>\n            </div>\n          </nz-card>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"summary-card-title\" translate>\n            default.layout.COLLECTORS\n          </div>\n          <ng-container *ngFor=\"let collect of listOfAllSurveyCollect\">\n            <div class=\"card collector-card\">\n              <div class=\"card-body\">\n                <div class=\"responses-container\">\n                  <div class=\"responses-count\">{{ collect.response }}</div>\n                  <div class=\"responses-label\">\n                    <span class=\"responses-label-title\">\n                      <span\n                        >{{\n                          \"default.layout.RESPONSES\" | translate | uppercase\n                        }}\n                        <br />{{ \"default.layout.COLLECTED\" | translate }}\n                      </span>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"collector-card-info\">\n                  <div class=\"card-title collector-card-title\">\n                    <a\n                      [routerLink]=\"getLinkCollecttor(collect.id, collect.type)\"\n                      >{{ collect.name }}</a\n                    >\n                  </div>\n                  <div class=\"collector-date-created\">\n                    <span class=\"collector-date-created-title\">\n                      {{ \"default.layout.CREATED\" | translate }}:\n                      {{ collect.createdAt | date: \"yyyy-MM-dd\" }}\n                    </span>\n                  </div>\n                </div>\n                <div class=\"card-status\">\n                  <span\n                    [ngClass]=\"collect.status === 'OPEN' ? 'open' : 'closed'\"\n                    class=\"status-badge-primary\"\n                  >\n                    {{ collect.status }}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container\n            *ngIf=\"listOfAllSurveyCollect.length > 0; else createCollectorTpl\"\n          >\n            <button\n              *ngIf=\"surveyFormDetail\"\n              [routerLink]=\"[\n                '/create',\n                'collector-responses',\n                surveyFormDetail.id\n              ]\"\n              nz-button\n              nzType=\"link\"\n              class=\"wds-button-text\"\n            >\n              {{ \"default.layout.VIEW_MORE\" | translate }}\n            </button>\n          </ng-container>\n\n          <ng-template #createCollectorTpl>\n            <div class=\"row ribbon-and-button no-gutters\">\n              <div class=\"airplane hidden-sm-down\"></div>\n              <div class=\"button-holder\">\n                <button\n                  *ngIf=\"surveyFormDetail\"\n                  [routerLink]=\"[\n                    '/create',\n                    'collector-responses',\n                    surveyFormDetail.id\n                  ]\"\n                  nz-button\n                  nzType=\"primary\"\n                >\n                  {{\n                    \"default.layout.CREATE_SURVEY_COLLECTOR\"\n                      | translate\n                      | uppercase\n                  }}\n                </button>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"summary-card-title\" translate>\n            default.layout.RESPONSES_VOLUME\n          </div>\n          <nz-card></nz-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/create-form.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/create-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: CreateFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormModule", function() { return CreateFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _pages_design_survey_design_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/design-survey/design-survey.component */ "./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.ts");
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/summary/summary.component */ "./src/app/modules/default/modules/create-form/pages/summary/summary.component.ts");
/* harmony import */ var _pages_preview_score_preview_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/preview-score/preview-score.component */ "./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.ts");
/* harmony import */ var _create_form_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-form.routing */ "./src/app/modules/default/modules/create-form/create-form.routing.ts");
/* harmony import */ var _pages_collect_responses_collect_responses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/collect-responses/collect-responses.component */ "./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.ts");
/* harmony import */ var _pages_collect_link_collect_link_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/collect-link/collect-link.component */ "./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _pages_analyze_results_analyze_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/analyze-results/analyze-results.component */ "./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.ts");
/* harmony import */ var _pages_collect_email_manage_collect_email_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/collect-email-manage/collect-email-manage.component */ "./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.ts");
/* harmony import */ var _pages_collect_email_compose_collect_email_compose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/collect-email-compose/collect-email-compose.component */ "./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.ts");













var COMPONENTS = [
    _pages_design_survey_design_survey_component__WEBPACK_IMPORTED_MODULE_3__["DesignSurveyComponent"],
    _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"],
    _pages_preview_score_preview_score_component__WEBPACK_IMPORTED_MODULE_5__["PreviewScoreComponent"],
    _pages_collect_responses_collect_responses_component__WEBPACK_IMPORTED_MODULE_7__["CollectResponsesComponent"],
    _pages_collect_link_collect_link_component__WEBPACK_IMPORTED_MODULE_8__["CollectLinkComponent"],
    _pages_analyze_results_analyze_results_component__WEBPACK_IMPORTED_MODULE_10__["AnalyzeResultsComponent"],
    _pages_collect_email_manage_collect_email_manage_component__WEBPACK_IMPORTED_MODULE_11__["CollectEmailManageComponent"],
    _pages_collect_email_compose_collect_email_compose_component__WEBPACK_IMPORTED_MODULE_12__["CollectEmailComposeComponent"]
];
var CreateFormModule = /** @class */ (function () {
    function CreateFormModule() {
    }
    CreateFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _create_form_routing__WEBPACK_IMPORTED_MODULE_6__["CreateFormRouting"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"]],
            declarations: [COMPONENTS]
        })
    ], CreateFormModule);
    return CreateFormModule;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/create-form.routing.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/create-form.routing.ts ***!
  \****************************************************************************/
/*! exports provided: CreateFormRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFormRouting", function() { return CreateFormRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_design_survey_design_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/design-survey/design-survey.component */ "./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.ts");
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/summary/summary.component */ "./src/app/modules/default/modules/create-form/pages/summary/summary.component.ts");
/* harmony import */ var _pages_preview_score_preview_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/preview-score/preview-score.component */ "./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.ts");
/* harmony import */ var _pages_collect_responses_collect_responses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/collect-responses/collect-responses.component */ "./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.ts");
/* harmony import */ var _pages_collect_link_collect_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/collect-link/collect-link.component */ "./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _pages_analyze_results_analyze_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/analyze-results/analyze-results.component */ "./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.ts");
/* harmony import */ var _pages_collect_email_manage_collect_email_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/collect-email-manage/collect-email-manage.component */ "./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.ts");
/* harmony import */ var _pages_collect_email_compose_collect_email_compose_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/collect-email-compose/collect-email-compose.component */ "./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.ts");












var routes = [
    {
        path: "",
        redirectTo: "design-survey",
        pathMatch: "full"
    },
    {
        path: "design-survey/:surveyFormId",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _pages_design_survey_design_survey_component__WEBPACK_IMPORTED_MODULE_3__["DesignSurveyComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Design") }
    },
    {
        path: "summary/:surveyFormId",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Survey Summary") }
    },
    {
        path: "preview-score/:surveyFormId",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _pages_preview_score_preview_score_component__WEBPACK_IMPORTED_MODULE_5__["PreviewScoreComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Design") }
    },
    {
        path: "collector-responses/:surveyFormId",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _pages_collect_responses_collect_responses_component__WEBPACK_IMPORTED_MODULE_6__["CollectResponsesComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Collector List") }
    },
    {
        path: "analyze-results/:surveyFormId",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        component: _pages_analyze_results_analyze_results_component__WEBPACK_IMPORTED_MODULE_9__["AnalyzeResultsComponent"],
        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Analyze") }
    },
    {
        path: "collector-responses",
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: "collector-link/:collectorId",
                canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _pages_collect_link_collect_link_component__WEBPACK_IMPORTED_MODULE_7__["CollectLinkComponent"],
                data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Collector Details") }
            },
            {
                path: "collector-email",
                canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                children: [
                    {
                        path: "manage/:collectorId",
                        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                        component: _pages_collect_email_manage_collect_email_manage_component__WEBPACK_IMPORTED_MODULE_10__["CollectEmailManageComponent"],
                        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Manage Your Messages") }
                    },
                    {
                        path: "compose/:collectorId",
                        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                        component: _pages_collect_email_compose_collect_email_compose_component__WEBPACK_IMPORTED_MODULE_11__["CollectEmailComposeComponent"],
                        data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_8__["extract"])("UetSurvey - Compose Email Message") }
                    }
                ]
            }
        ]
    }
];
var CreateFormRouting = /** @class */ (function () {
    function CreateFormRouting() {
    }
    CreateFormRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CreateFormRouting);
    return CreateFormRouting;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.analytics-page {\n  padding: 40px 0px;\n}\n.ol-popup {\n  position: absolute;\n  background-color: white;\n  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));\n  padding: 15px;\n  border: 1px solid #cccccc;\n  bottom: 12px;\n  left: -50px;\n  width: 320px;\n  max-height: 500px;\n  overflow-y: auto;\n  border-radius: 10px;\n}\n.ol-popup::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n.ol-popup-closer {\n  text-decoration: none;\n  position: absolute;\n  top: 2px;\n  right: 8px;\n}\n.ol-popup-closer:after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 1em;\n  border: 0;\n}\n.ol-popup-closer1 {\n  text-decoration: none;\n  position: absolute;\n  top: 2px;\n  right: 8px;\n}\n.ol-popup-closer1:after {\n  content: \"\";\n  font-family: FontAwesome;\n  font-size: 1em;\n  border: 0;\n}\n.ol-touch .search-layer {\n  top: 80px;\n}\n.ol-geocoder.gcd-gl-container {\n  box-sizing: border-box;\n  left: 0.5em;\n  position: absolute;\n  top: 4.875em;\n}\n.ol-geocoder.gcd-gl-container *,\n.ol-geocoder.gcd-gl-container :after,\n.ol-geocoder.gcd-gl-container :before {\n  box-sizing: inherit;\n}\n.ol-viewport {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 500px;\n  touch-action: none;\n}\n.ol-chart {\n  width: 100%;\n}\n.analyze-nav-content button {\n  margin-right: 8px;\n}\n.respondent-window {\n  clear: both;\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n}\n.fadeable {\n  transition: opacity 200ms linear;\n}\n.slideable {\n  transition: left 0.3s ease-out;\n}\n.respondents {\n  min-width: 2040px;\n  max-width: 2760px;\n  overflow: hidden;\n  position: relative;\n}\n.respondent-profile {\n  margin-bottom: 16px;\n  padding: 12px;\n  border: 1px solid #edeeee;\n  border-radius: 2px;\n  background-clip: padding-box;\n  overflow: hidden;\n  background-color: #fff;\n}\n.spacer-plm,\n.spacer-phm,\n.spacer-pam {\n  padding-left: 10px !important;\n}\n.spacer-prm,\n.spacer-phm,\n.spacer-pam {\n  padding-right: 10px !important;\n}\n.spacer-ptm,\n.spacer-pvm,\n.spacer-pam {\n  padding-top: 10px !important;\n}\n.sm-corner-a,\n.sm-corner-b,\n.sm-corner-r,\n.sm-corner-br {\n  border-bottom-right-radius: 5px;\n}\n.respondent-data {\n  text-shadow: 0 1px 0 #fff;\n  margin: 12px 14px;\n}\n.sm-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #333e48;\n  margin-bottom: 8px;\n  display: inline-block;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nul,\nli,\nol,\nform,\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n.respondent-info-fields {\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.respondent-info-label {\n  font-weight: 500;\n  font-size: 16px;\n  min-width: 150px;\n  display: inline-block;\n}\n.respondent-info-fields li .value {\n  font-weight: 400;\n  font-size: 16px;\n}\n.collector-type {\n  color: #666;\n}\n.respondent-completion-status {\n  color: #fff;\n  background-color: #00bf6f;\n  border-radius: 4px;\n  background-clip: padding-box;\n  border: 0;\n  padding: 4px 16px;\n  font-weight: 400;\n}\n::ng-deep #preview-tab .ant-tabs-bar {\n  display: none;\n}\n.analyze-pages-content {\n  margin-top: 16px;\n}\n.response-question-list {\n  padding: 6px 6px 14px 6px;\n  background-color: #fff;\n  border: 1px solid #edeeee;\n  border-radius: 2px;\n  background-clip: padding-box;\n}\n.respondent-goto-menu {\n  background-color: white;\n  padding: 12px 0px 12px 16px;\n  position: absolute;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);\n  font-size: 15px;\n  z-index: 22;\n  border-radius: 2px;\n}\n.ant-form-inline {\n  width: 286px;\n}\nh3.no-content-title {\n  margin-bottom: 0;\n}\n.no-content-title {\n  text-align: center;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 50px;\n  margin-bottom: 0 0 10px 0;\n}\n.no-content-title .header-icon {\n  color: #6b787f;\n  font-size: 50px;\n  vertical-align: middle;\n}\n.button-bar {\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vcGFnZXMvYW5hbHl6ZS1yZXN1bHRzL2FuYWx5emUtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9hbmFseXplLXJlc3VsdHMvYW5hbHl6ZS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0FERUY7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5REFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FER0Y7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNGQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBREtGO0FDSEE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURPRjtBQ0xBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QURRRjtBQ0xBO0VBQ0UsU0FBQTtBRFFGO0FDTkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURTRjtBQ05BOzs7RUFHRSxtQkFBQTtBRFNGO0FDTkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRFNGO0FDTkE7RUFDRSxXQUFBO0FEU0Y7QUNMRTtFQUNFLGlCQUFBO0FEUUo7QUNMQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRFFGO0FDTkE7RUFFRSxnQ0FBQTtBRFNGO0FDUEE7RUFFRSw4QkFBQTtBRFVGO0FDUkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFdGO0FDVEE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEWUY7QUNWQTs7O0VBR0UsNkJBQUE7QURhRjtBQ1hBOzs7RUFHRSw4QkFBQTtBRGNGO0FDWkE7OztFQUdFLDRCQUFBO0FEZUY7QUNiQTs7OztFQUlFLCtCQUFBO0FEZ0JGO0FDZEE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FEaUJGO0FDZEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRGlCRjtBQ2ZBOzs7Ozs7Ozs7O0VBVUUsU0FBQTtFQUNBLFVBQUE7QURrQkY7QUNoQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEbUJGO0FDakJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRG9CRjtBQ2xCQTtFQUNFLFdBQUE7QURxQkY7QUNuQkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURzQkY7QUNuQkU7RUFDRSxhQUFBO0FEc0JKO0FDbkJBO0VBQ0UsZ0JBQUE7QURzQkY7QUNwQkE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FEdUJGO0FDckJBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEd0JGO0FDdEJBO0VBQ0UsWUFBQTtBRHlCRjtBQ3ZCQTtFQUNFLGdCQUFBO0FEMEJGO0FDeEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FEMkJGO0FDMUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRDRCSjtBQ3pCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUQ0QkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9hbmFseXplLXJlc3VsdHMvYW5hbHl6ZS1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmFuYWx5dGljcy1wYWdlIHtcbiAgcGFkZGluZzogNDBweCAwcHg7XG59XG5cbi5vbC1wb3B1cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAtNTBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm9sLXBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5vbC1wb3B1cC1jbG9zZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi5vbC1wb3B1cC1jbG9zZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXI6IDA7XG59XG5cbi5vbC1wb3B1cC1jbG9zZXIxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogOHB4O1xufVxuXG4ub2wtcG9wdXAtY2xvc2VyMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74CNXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlcjogMDtcbn1cblxuLm9sLXRvdWNoIC5zZWFyY2gtbGF5ZXIge1xuICB0b3A6IDgwcHg7XG59XG5cbi5vbC1nZW9jb2Rlci5nY2QtZ2wtY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGVmdDogMC41ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0Ljg3NWVtO1xufVxuXG4ub2wtZ2VvY29kZXIuZ2NkLWdsLWNvbnRhaW5lciAqLFxuLm9sLWdlb2NvZGVyLmdjZC1nbC1jb250YWluZXIgOmFmdGVyLFxuLm9sLWdlb2NvZGVyLmdjZC1nbC1jb250YWluZXIgOmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbi5vbC12aWV3cG9ydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLm9sLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbmFseXplLW5hdi1jb250ZW50IGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucmVzcG9uZGVudC13aW5kb3cge1xuICBjbGVhcjogYm90aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmFkZWFibGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cblxuLnNsaWRlYWJsZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5yZXNwb25kZW50cyB7XG4gIG1pbi13aWR0aDogMjA0MHB4O1xuICBtYXgtd2lkdGg6IDI3NjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmVzcG9uZGVudC1wcm9maWxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc3BhY2VyLXBsbSxcbi5zcGFjZXItcGhtLFxuLnNwYWNlci1wYW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnNwYWNlci1wcm0sXG4uc3BhY2VyLXBobSxcbi5zcGFjZXItcGFtIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2VyLXB0bSxcbi5zcGFjZXItcHZtLFxuLnNwYWNlci1wYW0ge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uc20tY29ybmVyLWEsXG4uc20tY29ybmVyLWIsXG4uc20tY29ybmVyLXIsXG4uc20tY29ybmVyLWJyIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLnJlc3BvbmRlbnQtZGF0YSB7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XG4gIG1hcmdpbjogMTJweCAxNHB4O1xufVxuXG4uc20tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzZTQ4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnVsLFxubGksXG5vbCxcbmZvcm0sXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJlc3BvbmRlbnQtaW5mby1maWVsZHMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJlc3BvbmRlbnQtaW5mby1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmVzcG9uZGVudC1pbmZvLWZpZWxkcyBsaSAudmFsdWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jb2xsZWN0b3ItdHlwZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucmVzcG9uZGVudC1jb21wbGV0aW9uLXN0YXR1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZjZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbjo6bmctZGVlcCAjcHJldmlldy10YWIgLmFudC10YWJzLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbmFseXplLXBhZ2VzLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucmVzcG9uc2UtcXVlc3Rpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDZweCA2cHggMTRweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnJlc3BvbmRlbnQtZ290by1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMHB4IDEycHggMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgei1pbmRleDogMjI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmFudC1mb3JtLWlubGluZSB7XG4gIHdpZHRoOiAyODZweDtcbn1cblxuaDMubm8tY29udGVudC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uby1jb250ZW50LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwIDAgMTBweCAwO1xufVxuLm5vLWNvbnRlbnQtdGl0bGUgLmhlYWRlci1pY29uIHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJ1dHRvbi1iYXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmFuYWx5dGljcy1wYWdlIHtcbiAgcGFkZGluZzogNDBweCAwcHg7XG59XG4ub2wtcG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogLTUwcHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ub2wtcG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5vbC1wb3B1cC1jbG9zZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4ub2wtcG9wdXAtY2xvc2VyOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwMGRcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyOiAwO1xufVxuLm9sLXBvcHVwLWNsb3NlcjEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4ub2wtcG9wdXAtY2xvc2VyMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlcjogMDtcbn1cblxuLm9sLXRvdWNoIC5zZWFyY2gtbGF5ZXIge1xuICB0b3A6IDgwcHg7XG59XG4ub2wtZ2VvY29kZXIuZ2NkLWdsLWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxlZnQ6IDAuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNC44NzVlbTtcbn1cblxuLm9sLWdlb2NvZGVyLmdjZC1nbC1jb250YWluZXIgKixcbi5vbC1nZW9jb2Rlci5nY2QtZ2wtY29udGFpbmVyIDphZnRlcixcbi5vbC1nZW9jb2Rlci5nY2QtZ2wtY29udGFpbmVyIDpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4ub2wtdmlld3BvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbi5vbC1jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYW5hbHl6ZS1uYXYtY29udGVudCB7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cbi5yZXNwb25kZW50LXdpbmRvdyB7XG4gIGNsZWFyOiBib3RoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG4uZmFkZWFibGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cbi5zbGlkZWFibGUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2Utb3V0O1xufVxuLnJlc3BvbmRlbnRzIHtcbiAgbWluLXdpZHRoOiAyMDQwcHg7XG4gIG1heC13aWR0aDogMjc2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVzcG9uZGVudC1wcm9maWxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnNwYWNlci1wbG0sXG4uc3BhY2VyLXBobSxcbi5zcGFjZXItcGFtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3BhY2VyLXBybSxcbi5zcGFjZXItcGhtLFxuLnNwYWNlci1wYW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3BhY2VyLXB0bSxcbi5zcGFjZXItcHZtLFxuLnNwYWNlci1wYW0ge1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLnNtLWNvcm5lci1hLFxuLnNtLWNvcm5lci1iLFxuLnNtLWNvcm5lci1yLFxuLnNtLWNvcm5lci1iciB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ucmVzcG9uZGVudC1kYXRhIHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgbWFyZ2luOiAxMnB4IDE0cHg7XG59XG5cbi5zbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnVsLFxubGksXG5vbCxcbmZvcm0sXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5yZXNwb25kZW50LWluZm8tZmllbGRzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucmVzcG9uZGVudC1pbmZvLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNwb25kZW50LWluZm8tZmllbGRzIGxpIC52YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb2xsZWN0b3ItdHlwZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnJlc3BvbmRlbnQtY29tcGxldGlvbi1zdGF0dXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmY2ZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOjpuZy1kZWVwICNwcmV2aWV3LXRhYiB7XG4gIC5hbnQtdGFicy1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hbmFseXplLXBhZ2VzLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnJlc3BvbnNlLXF1ZXN0aW9uLWxpc3Qge1xuICBwYWRkaW5nOiA2cHggNnB4IDE0cHggNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG4ucmVzcG9uZGVudC1nb3RvLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweCAwcHggMTJweCAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB6LWluZGV4OiAyMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmFudC1mb3JtLWlubGluZSB7XG4gIHdpZHRoOiAyODZweDtcbn1cbmgzLm5vLWNvbnRlbnQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5vLWNvbnRlbnQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAgMCAxMHB4IDA7XG4gIC5oZWFkZXItaWNvbiB7XG4gICAgY29sb3I6ICM2Yjc4N2Y7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbi5idXR0b24tYmFyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AnalyzeResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeResultsComponent", function() { return AnalyzeResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/components/map/map.component */ "./src/app/shared/components/map/map.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ol_Overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/Overlay */ "./node_modules/ol/Overlay.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var AnalyzeResultsComponent = /** @class */ (function () {
    function AnalyzeResultsComponent(activatedRoute, dSurveyFormService, dSurveyResponseService, nzMessageService, translateService, loaderService, windowresizeService, titleService, datePipe) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyResponseService = dSurveyResponseService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.windowresizeService = windowresizeService;
        this.titleService = titleService;
        this.datePipe = datePipe;
        this.listOfAllLocation = [];
        this.subscriptions = [];
        this.LAYERFORMAT = {};
        this.height = "100%";
        this.styleCache = {};
        this.configMap = _app_core__WEBPACK_IMPORTED_MODULE_2__["mapConfig"];
        this._ = lodash__WEBPACK_IMPORTED_MODULE_10__;
        this.latitude = undefined;
        this.longitude = undefined;
        this.activeLayer = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("alert");
        this.gotocoordinatesdata = [];
        this.currentExt = [];
        this.zoomLevel = 0;
        this.zoomLevelShowPoint = 14;
        this.unsubscribeHelper$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedIndex = 0;
        this.fixContentHeight = function () {
            var mapcontent = $('div[data-role="mapcontent"]:visible:visible');
            var contentHeight = 600;
            mapcontent.height(contentHeight);
            _this.map.instance.updateSize();
        };
        this.zoomCluster = function (pixel, coordinate) {
            var features = _this.map.instance.forEachFeatureAtPixel(pixel, function (feature) {
                return feature;
            });
            if (features) {
                var features_arr = features.get("features");
                if (_this.currZoom >= _this.zoomLevelShowPoint) {
                    _this.displayFeatureInfo(pixel, coordinate, _this.overlay_click, false);
                }
                else {
                    if (features_arr.length > 0) {
                        // all same coordinate
                        var allSameCoordinate = features_arr.every(function (val, i, arr) {
                            return (JSON.stringify(val.getGeometry().getCoordinates()) ===
                                JSON.stringify(arr[0].getGeometry().getCoordinates()));
                        });
                        if (!allSameCoordinate || features_arr.length === 1) {
                            var extent_1 = Object(ol_extent__WEBPACK_IMPORTED_MODULE_3__["createEmpty"])();
                            features_arr.forEach(function (feature) {
                                Object(ol_extent__WEBPACK_IMPORTED_MODULE_3__["extend"])(extent_1, feature.getGeometry().getExtent());
                            });
                            _this.map.instance.getView().fit(extent_1, { duration: 500 });
                            if (features_arr.length === 1) {
                                _this.map.instance
                                    .getView()
                                    .setCenter(features_arr[0].getGeometry().flatCoordinates);
                                _this.map.instance.getView().setZoom(_this.zoomLevelShowPoint);
                            }
                        }
                        else {
                            _this.map.instance
                                .getView()
                                .setCenter(features_arr[0].getGeometry().flatCoordinates);
                            _this.displayFeatureInfo(pixel, coordinate, _this.overlay_click, false);
                        }
                    }
                }
            }
        };
    }
    /*------ END FOR MAP ------- */
    AnalyzeResultsComponent.prototype.next = function () {
        if (this.selectedIndex < this.listOfAllSurveyResponse.length - 1) {
            this.selectedIndex++;
        }
    };
    AnalyzeResultsComponent.prototype.pre = function () {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
        }
    };
    AnalyzeResultsComponent.prototype.goto = function (index) {
        this.selectedIndex = index - 1;
    };
    AnalyzeResultsComponent.prototype.onChangeTabPreview = function (index) {
        this.surveyResponsePreview = this.listOfAllSurveyResponse[index];
    };
    AnalyzeResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
            _this.getResponsesBySurveyForm(surveyFormId);
        }));
        this.windowresizeService
            .getSize()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.unsubscribeHelper$))
            .subscribe(function (size) {
            if (_this.map) {
                setTimeout(function () {
                    _this.map.instance.updateSize();
                }, 200);
            }
        });
    };
    AnalyzeResultsComponent.prototype.ngAfterViewInit = function () {
        this.overlay_hover = new ol_Overlay__WEBPACK_IMPORTED_MODULE_11__["default"]({
            element: this.popup.nativeElement
        });
        this.overlay_click = new ol_Overlay__WEBPACK_IMPORTED_MODULE_11__["default"]({
            element: this.popup_click.nativeElement
        });
        this.closePopup();
    };
    AnalyzeResultsComponent.prototype.getResponsesBySurveyForm = function (surveyFormId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyResponseService
            .getResponsesBySurveyForm(surveyFormId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyResponse = res.results;
                _this.listOfAllDataSurveyResponse = [];
                _this.listOfAllSurveyResponse.forEach(function (o) {
                    if (o.json && Object.keys(o.json).length > 0) {
                        _this.listOfAllDataSurveyResponse.push(o.json);
                    }
                    if (o.geoLocation && Object.keys(o.geoLocation).length > 0) {
                        _this.listOfAllLocation.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, o.geoLocation, { surveyResponseId: o.id, totalTime: _this.msToHMSTypicalTimeSpent(o.totalTime), startTime: _this.datePipe.transform(o.startTime, "dd-MM-yyyy HH:ss"), endTime: _this.datePipe.transform(o.endTime, "dd-MM-yyyy HH:ss") }));
                    }
                });
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    AnalyzeResultsComponent.prototype.msToHMSTypicalTimeSpent = function (s) {
        function pad(n, z) {
            if (z === void 0) { z = 2; }
            z = z || 2;
            return ("00" + n).slice(-z);
        }
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return pad(hrs) + "h:" + pad(mins) + "m:" + pad(secs) + "s";
    };
    AnalyzeResultsComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.titleService.setTitle("UetSurvey - Analyze - " + _this.surveyFormDetail.title);
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    AnalyzeResultsComponent.prototype.onComponentSetup = function () {
        var _this = this;
        setTimeout(function () {
            _this.map.instance.addOverlay(_this.overlay_hover);
            _this.map.instance.addOverlay(_this.overlay_click);
            _this.fixContentHeight();
            _this.DataLoader();
            _this.currZoom = _this.map.instance.getView().getZoom();
            _this.map.instance.on("moveend", function (e) {
                var newZoom = _this.map.instance.getView().getZoom();
                if (_this.currZoom !== newZoom) {
                    _this.currZoom = newZoom;
                    _this.closePopup();
                }
            });
        }, 200);
    };
    AnalyzeResultsComponent.prototype.DataLoader = function () {
        var _this = this;
        var ext = this.map.instance
            .getView()
            .calculateExtent(this.map.instance.getSize());
        var zoom = Math.trunc(this.map.instance.getView().getZoom());
        if (this.zoomLevel === zoom && ext === this.currentExt) {
            return;
        }
        this.currentExt = ext;
        this.map.getLayersRecursive(this.map.instance, function (l, idx, a) {
            if (l.get("type") === "Cluster") {
                var layerName = l.get("id");
                var storeLayer = _this.map.getLayer(layerName);
                if (storeLayer.getVisible() && layerName) {
                    _this.createAlertDisasterLayer(_this.listOfAllLocation, zoom, layerName);
                    if (_this.gotocoordinatesdata &&
                        _this.gotocoordinatesdata.length > 0) {
                        _this.map.instance
                            .getView()
                            .setCenter(Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["fromLonLat"])(_this.gotocoordinatesdata));
                        _this.map.instance.getView().setZoom(15);
                    }
                }
            }
        });
    };
    AnalyzeResultsComponent.prototype.createAlertDisasterLayer = function (alertdisasterpoint, zoom, layername) {
        var _this = this;
        var storeLayer = this.map.getLayer(layername);
        this.addToolTipFormat(layername, storeLayer.get("toolTip"));
        var geojsonPoint = this.toGeoJson(alertdisasterpoint);
        var geoFormat = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_14__["default"]({ featureProjection: _app_core__WEBPACK_IMPORTED_MODULE_2__["mapConfig"].projection });
        var features = geoFormat.readFeatures(geojsonPoint);
        storeLayer.getSource().clear();
        storeLayer
            .getSource()
            .getSource()
            .clear();
        storeLayer
            .getSource()
            .getSource()
            .addFeatures(features);
        var icon = new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Icon"]({
            crossOrigin: "anonymous",
            src: "assets/images/map-marker.png"
        });
        var iconStyle = new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Style"]({
            image: icon
        });
        storeLayer.setStyle(function (feature, resolution) {
            var size = Array.isArray(feature.get("features"))
                ? feature.get("features").length
                : 0;
            if (size === 1 &&
                resolution < _this.map.instance.getView().getResolutionForZoom(6) &&
                _this.currZoom >= _this.zoomLevelShowPoint) {
                return iconStyle;
            }
            else {
                var style = _this.styleCache[size];
                var radius = 25;
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
                    var color = size > 25 ? "51,153,204" : size > 6 ? "51,153,204" : "51,153,204";
                    style = new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Style"]({
                        image: new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Circle"]({
                            radius: radius,
                            stroke: new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Stroke"]({
                                color: "rgba(" + color + ",0.5)"
                            }),
                            fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                                color: "rgba(" + color + ",0.8)"
                            })
                        }),
                        text: new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Text"]({
                            text: size.toString(),
                            // font: '10px Arial',
                            fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_15__["Fill"]({
                                color: "#fff"
                            })
                        })
                    });
                    _this.styleCache[size] = style;
                }
                return style;
            }
        });
    };
    AnalyzeResultsComponent.prototype.caculateBoundingBox = function (data) {
        if (data && data.features.length > 0) {
            var features = data.features;
            var lats = [];
            var lngs = [];
            for (var i = 0; i < features.length; i++) {
                lats.push(features[i].geometry.coordinates[1]);
                lngs.push(features[i].geometry.coordinates[0]);
            }
            var minlat = Math.min.apply(null, lats), maxlat = Math.max.apply(null, lats);
            var minlng = Math.min.apply(null, lngs), maxlng = Math.max.apply(null, lngs);
            var bbox = [minlng, minlat, maxlng, maxlat];
            this.map.instance
                .getView()
                .fit(Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["transformExtent"])(bbox, "EPSG:4326", "EPSG:900913"), {
                size: this.map.instance.getSize()
            });
        }
        // this.getCenterOfExtent(bbox);
    };
    AnalyzeResultsComponent.prototype.addToolTipFormat = function (layerName, format) {
        this.LAYERFORMAT[layerName] = format;
    };
    AnalyzeResultsComponent.prototype.toGeoJson = function (data) {
        var json = { type: "FeatureCollection", features: [] };
        var pointFeatures = this.createAlertDisasterPoint(data);
        json.features = json.features.concat(pointFeatures);
        return json;
    };
    AnalyzeResultsComponent.prototype.createAlertDisasterPoint = function (alertdisasterlist) {
        var features = [];
        var _loop_1 = function (i) {
            if (alertdisasterlist[i] &&
                alertdisasterlist[i].latitude &&
                alertdisasterlist[i].longitude) {
                var feature_1 = {
                    type: "Feature",
                    id: alertdisasterlist[i].surveyResponseId,
                    properties: {},
                    geometry: { type: "Point", coordinates: [] }
                };
                Object.keys(alertdisasterlist[i]).forEach(function (key) {
                    feature_1.properties[key] = alertdisasterlist[i][key];
                });
                var currentPoint = [
                    +alertdisasterlist[i].longitude,
                    +alertdisasterlist[i].latitude
                ];
                feature_1.geometry.coordinates = currentPoint;
                features.push(feature_1);
            }
        };
        for (var i = 0; i < alertdisasterlist.length; i++) {
            _loop_1(i);
        }
        return features;
    };
    AnalyzeResultsComponent.prototype.onPointerMove = function (evt) {
        if (evt.dragging) {
            return;
        }
        var pixel = this.map.instance.getEventPixel(evt.originalEvent);
        var coor = evt.coordinate;
        this.displayFeatureInfo(pixel, coor, this.overlay_hover, true);
    };
    AnalyzeResultsComponent.prototype.closePopup = function () {
        this.overlay_click.setPosition(undefined);
        return false;
    };
    AnalyzeResultsComponent.prototype.onMapClick = function (event) {
        if (this.map.instance.hasFeatureAtPixel(event.pixel) === true) {
            var coordinate = event.coordinate;
            this.zoomCluster(event.pixel, coordinate);
        }
        else {
            this.overlay_click.setPosition(undefined);
        }
    };
    AnalyzeResultsComponent.prototype.confirmTabSwitch = function (value) {
        if (value === 1) {
            this.loadmapComponent = true;
        }
        else {
            this.loadmapComponent = false;
        }
        if (value === 2) {
            this.onChangeTabPreview(0);
        }
    };
    AnalyzeResultsComponent.prototype.displayFeatureInfo = function (pixel, coordinate, overlay, autoHide) {
        var featureLayers = [];
        this.map.instance.forEachFeatureAtPixel(pixel, function (feature, layer) {
            featureLayers.push({
                feature: feature,
                layer: layer
            });
        });
        if (featureLayers.length > 0) {
            var featureLayer = featureLayers[0];
            var layerId = void 0;
            if (featureLayer.layer) {
                layerId = featureLayer.layer.get("id");
            }
            else {
                layerId = featureLayer.feature.get("layerId");
            }
            if (layerId && this.LAYERFORMAT[layerId]) {
                // get content and format
                var inforFeature = this.createToolTipDisplay(this.LAYERFORMAT[layerId], featureLayer.feature);
                if (!autoHide) {
                    this.popupContent1 = inforFeature;
                }
                this.popupContent = inforFeature;
                overlay.setPosition(coordinate);
            }
        }
        else {
            if (autoHide) {
                overlay.setPosition(undefined);
            }
        }
    };
    AnalyzeResultsComponent.prototype.createToolTipDisplay = function (format, feature) {
        var template = "";
        var cfeatures = feature.get("features");
        for (var i = 0; i < cfeatures.length; i++) {
            var cpformat = format;
            while (cpformat.indexOf("{") !== -1 &&
                cpformat.indexOf("}") !== -1 &&
                cpformat.indexOf("{") < cpformat.indexOf("}")) {
                var fieldName = cpformat.substring(cpformat.indexOf("{") + 1, cpformat.indexOf("}"));
                var oldText = cpformat.substring(cpformat.indexOf("{"), cpformat.indexOf("}") + 1);
                var newText = "";
                newText = cfeatures[i].get(fieldName) || "";
                cpformat = cpformat.replace(new RegExp(oldText, "g"), newText);
            }
            cpformat += +i !== cfeatures.length - 1 ? "<hr>" : "";
            template += cpformat;
        }
        return template;
    };
    AnalyzeResultsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.unsubscribeHelper$.next();
        this.unsubscribeHelper$.complete();
    };
    AnalyzeResultsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_8__["WindowresizeService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_shared_components_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"])
    ], AnalyzeResultsComponent.prototype, "map", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("popup", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnalyzeResultsComponent.prototype, "popup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("popup_click", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnalyzeResultsComponent.prototype, "popup_click", void 0);
    AnalyzeResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-analyze-results",
            template: __webpack_require__(/*! raw-loader!./analyze-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.html"),
            styles: [__webpack_require__(/*! ./analyze-results.component.scss */ "./src/app/modules/default/modules/create-form/pages/analyze-results/analyze-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_8__["WindowresizeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]])
    ], AnalyzeResultsComponent);
    return AnalyzeResultsComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section > header:first-of-type {\n  margin-bottom: 2em;\n  position: relative;\n}\n\n#edit-name {\n  display: inline-block;\n  max-width: 30rem;\n}\n\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nsection > header:first-of-type > h4 {\n  transform: translateY(-50%);\n  color: #333e48;\n  font-weight: normal;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n\n.sendto {\n  border-bottom: solid 1px #d0d2d3;\n  margin-bottom: 26px;\n  margin-top: 16px;\n  padding-bottom: 32px;\n  position: relative;\n}\n\n.sendto h5 {\n  display: block;\n  margin-bottom: 1em;\n  position: relative;\n}\n\nnz-select {\n  width: 100%;\n  height: 51px !important;\n}\n\n#compose-email {\n  position: relative;\n}\n\n#compose-email input {\n  margin-bottom: 10px;\n}\n\n#compose-email h5 {\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n\n#compose-email .btn-edit-message {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sm-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #333e48;\n  margin-bottom: 8px;\n  display: inline-block;\n}\n\n.message-header {\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n#email-preview table {\n  border-collapse: separate;\n}\n\n#email-preview table {\n  max-width: inherit !important;\n}\n\n#email-preview {\n  background: #ffffff;\n  border: 0;\n  height: auto;\n  min-height: 357px;\n  overflow: auto;\n}\n\n.collectors {\n  margin-top: 15px;\n  padding-bottom: 80px;\n}\n\nfooter .left {\n  margin-top: 24px;\n  float: left;\n}\n\nfooter .right {\n  float: right;\n  margin-top: 24px;\n}\n\nfooter .right button {\n  margin-left: 1rem;\n}\n\n.sm-banner-whitelist {\n  margin-bottom: 2rem;\n}\n\n[nz-radio] {\n  display: block;\n}\n\n.child-radio-margin {\n  margin-left: 23px;\n}\n\n.options-send {\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #d0d2d3;\n}\n\n.options > li {\n  border-bottom: 1px solid #d0d2d3;\n}\n\n.step3 .summary {\n  padding-top: 1rem;\n}\n\n.options li > header + div {\n  padding: 8px 10px;\n}\n\n.divided aside {\n  float: left;\n  width: 12em;\n}\n\n.step3 #total-recipients {\n  color: #00bf6f;\n  font-size: 50px;\n}\n\n.divided article {\n  overflow: hidden;\n  padding: 0;\n}\n\n.divided article header {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 1em;\n}\n\n.divided article .results {\n  margin-bottom: 10px;\n  padding-left: 1px;\n}\n\n.divided article .results li {\n  list-style-position: inside;\n  list-style-type: disc;\n  margin-bottom: 3px;\n}\n\n.divided article header dl {\n  margin-top: 1rem;\n}\n\n.divided article header dl dt {\n  clear: both;\n  float: left;\n}\n\n.divided article header dl dd {\n  display: block;\n  margin: 0 0 3px;\n  overflow: hidden;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWVtYWlsLWNvbXBvc2UvY29sbGVjdC1lbWFpbC1jb21wb3NlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWVtYWlsLWNvbXBvc2UvY29sbGVjdC1lbWFpbC1jb21wb3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEREE7RUFHRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNJRjs7QURGQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURKRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESEE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0FDT0Y7O0FETkU7RUFDRSxtQkFBQTtBQ1FKOztBRE5FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDUUo7O0FETEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UseUJBQUE7QUNVRjs7QURSQTtFQUNFLDZCQUFBO0FDV0Y7O0FEUkE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDWUY7O0FEVEU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNZSjs7QURWRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFhJO0VBQ0UsaUJBQUE7QUNhTjs7QURUQTtFQUNFLG1CQUFBO0FDWUY7O0FEVkE7RUFDRSxjQUFBO0FDYUY7O0FEWEE7RUFDRSxpQkFBQTtBQ2NGOztBRFpBO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQ2VGOztBRGJBO0VBQ0UsZ0NBQUE7QUNnQkY7O0FEZEE7RUFDRSxpQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGlCQUFBO0FDa0JGOztBRGhCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDbUJGOztBRGpCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDb0JGOztBRGxCQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ3FCRjs7QURuQkE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0FDc0JGOztBRHBCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDd0JGOztBRHRCQTtFQUNFLGdCQUFBO0FDeUJGOztBRHZCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDMEJGOztBRHhCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzJCRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL2NvbGxlY3QtZW1haWwtY29tcG9zZS9jb2xsZWN0LWVtYWlsLWNvbXBvc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uID4gaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNlZGl0LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMzByZW07XG59XG4udHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbnNlY3Rpb24gPiBoZWFkZXI6Zmlyc3Qtb2YtdHlwZSA+IGg0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xufVxuLnNlbmR0byB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDBkMmQzO1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoNSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxubnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTFweCAhaW1wb3J0YW50O1xufVxuI2NvbXBvc2UtZW1haWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAuYnRuLWVkaXQtbWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxufVxuLnNtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubWVzc2FnZS1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZW1haWwtcHJldmlldyB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG4jZW1haWwtcHJldmlldyB0YWJsZSB7XG4gIG1heC13aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4jZW1haWwtcHJldmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzNTdweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29sbGVjdG9ycyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuZm9vdGVyIHtcbiAgLmxlZnQge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgfVxuICB9XG59XG4uc20tYmFubmVyLXdoaXRlbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5bbnotcmFkaW9dIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hpbGQtcmFkaW8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG59XG4ub3B0aW9ucy1zZW5kIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMmQzO1xufVxuLm9wdGlvbnMgPiBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMmQzO1xufVxuLnN0ZXAzIC5zdW1tYXJ5IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4ub3B0aW9ucyBsaSA+IGhlYWRlciArIGRpdiB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuLmRpdmlkZWQgYXNpZGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEyZW07XG59XG4uc3RlcDMgI3RvdGFsLXJlY2lwaWVudHMge1xuICBjb2xvcjogIzAwYmY2ZjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuLmRpdmlkZWQgYXJ0aWNsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG4uZGl2aWRlZCBhcnRpY2xlIGhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uZGl2aWRlZCBhcnRpY2xlIC5yZXN1bHRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG59XG4uZGl2aWRlZCBhcnRpY2xlIC5yZXN1bHRzIGxpIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5kaXZpZGVkIGFydGljbGUgaGVhZGVyIGRsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5kaXZpZGVkIGFydGljbGUgaGVhZGVyIGRsIGR0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmRpdmlkZWQgYXJ0aWNsZSBoZWFkZXIgZGwgZGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4iLCJzZWN0aW9uID4gaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2VkaXQtbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbn1cblxuLnRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbnNlY3Rpb24gPiBoZWFkZXI6Zmlyc3Qtb2YtdHlwZSA+IGg0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xufVxuXG4uc2VuZHRvIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkMGQyZDM7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VuZHRvIGg1IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5uei1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjb21wb3NlLWVtYWlsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2NvbXBvc2UtZW1haWwgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI2NvbXBvc2UtZW1haWwgaDUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4jY29tcG9zZS1lbWFpbCAuYnRuLWVkaXQtbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnNtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tZXNzYWdlLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2VtYWlsLXByZXZpZXcgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuXG4jZW1haWwtcHJldmlldyB0YWJsZSB7XG4gIG1heC13aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4jZW1haWwtcHJldmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzNTdweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb2xsZWN0b3JzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbmZvb3RlciAubGVmdCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuZm9vdGVyIC5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbmZvb3RlciAucmlnaHQgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5zbS1iYW5uZXItd2hpdGVsaXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuW256LXJhZGlvXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2hpbGQtcmFkaW8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG59XG5cbi5vcHRpb25zLXNlbmQge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQyZDM7XG59XG5cbi5vcHRpb25zID4gbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QwZDJkMztcbn1cblxuLnN0ZXAzIC5zdW1tYXJ5IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5vcHRpb25zIGxpID4gaGVhZGVyICsgZGl2IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi5kaXZpZGVkIGFzaWRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMmVtO1xufVxuXG4uc3RlcDMgI3RvdGFsLXJlY2lwaWVudHMge1xuICBjb2xvcjogIzAwYmY2ZjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uZGl2aWRlZCBhcnRpY2xlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRpdmlkZWQgYXJ0aWNsZSBoZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uZGl2aWRlZCBhcnRpY2xlIC5yZXN1bHRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG59XG5cbi5kaXZpZGVkIGFydGljbGUgLnJlc3VsdHMgbGkge1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uZGl2aWRlZCBhcnRpY2xlIGhlYWRlciBkbCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5kaXZpZGVkIGFydGljbGUgaGVhZGVyIGRsIGR0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGl2aWRlZCBhcnRpY2xlIGhlYWRlciBkbCBkZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CollectEmailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectEmailComposeComponent", function() { return CollectEmailComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var CollectEmailComposeComponent = /** @class */ (function () {
    function CollectEmailComposeComponent(activatedRoute, dSurveyCollectorService, nzMessageService, translateService, loaderService, formBuilder, router, modalService, dSurveyFormService, dSurveyRecipientService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyCollectorService = dSurveyCollectorService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.modalService = modalService;
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyRecipientService = dSurveyRecipientService;
        this.DEFAULT_SUBJECT = "We want your opinion 1";
        this.DEFAULT_MESSAGE = "We're conducting a survey and your input would be appreciated. Click the button below to start the survey. Thank you for your participation!";
        this.subscriptions = [];
        this.currentStep = 1;
        this.emails = [];
    }
    CollectEmailComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var collectorId = params.collectorId;
            _this.getSurveyCollectorById(collectorId);
        }));
    };
    CollectEmailComposeComponent.prototype.buildForm = function () {
        this.formCompose = this.formBuilder.group({
            emails: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].arrayEmailValidator()]],
            subject: [
                this.DEFAULT_SUBJECT,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]
            ],
            message: [
                this.DEFAULT_MESSAGE,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _app_core__WEBPACK_IMPORTED_MODULE_3__["IValidators"].spaceStringValidator()]
            ]
        });
        this.formSchedule = this.formBuilder.group({
            sendDateEnabled: [false, []],
            sendDate: ["", []]
        });
    };
    CollectEmailComposeComponent.prototype.getSurveyCollectorById = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .getSurveyCollectorById(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results && res.results[0]) {
                    _this.surveyCollectorDetail = res.results[0];
                    _this.dSurveyFormService.setSurveyFormDetail(_this.surveyCollectorDetail.surveyForm);
                }
                else {
                    _this.nzMessageService.warning(_this.translateService.instant("admin.layout.SURVEY_COLLECTOR_NOT_EXIST"));
                    _this.router.navigate(["/dashboard"]);
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectEmailComposeComponent.prototype.onAddSurveySecipient = function (formData) {
        var _this = this;
        if (formData.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        var recipients = [];
        formData.value.emails.forEach(function (email) {
            if (!_this.emails.includes(email)) {
                var recipient = {
                    email: email,
                    surveyCollectorId: _this.surveyCollectorDetail.id,
                    message: formData.value.message,
                    subject: formData.value.subject
                };
                recipients.push(recipient);
            }
        });
        for (var i = 0; i < this.emails.length; i++) {
            if (!formData.value.emails.includes(this.emails[i])) {
                this.emails.splice(i, 1);
            }
        }
        if (recipients.length === 0) {
            this.loaderService.display(false);
            this.currentStep = 2;
            return;
        }
        this.dSurveyRecipientService.addMultySurveyRecipient(recipients).subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results.every(function (rec) { return rec === null; })) {
                    _this.modalService.info({
                        nzTitle: _this.translateService.instant("default.layout.EMAIL_RECIPIENTS_REMOVED"),
                        nzContent: _this.tplContentRecipientsRemoved
                    });
                    formData.controls.emails.reset();
                    _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
                    formData.patchValue({
                        emails: _this.emails
                    });
                }
                else {
                    _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                    _this.currentStep = 2;
                    formData.controls.emails.reset();
                    res.results.forEach(function (rec) {
                        if (rec !== null) {
                            _this.emails.push(rec.email);
                        }
                    });
                    formData.patchValue({
                        emails: _this.emails
                    });
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(CollectEmailComposeComponent.prototype, "fCompose", {
        get: function () {
            return this.formCompose.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectEmailComposeComponent.prototype, "fSchedule", {
        get: function () {
            return this.formSchedule.controls;
        },
        enumerable: true,
        configurable: true
    });
    CollectEmailComposeComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).dirty;
    };
    CollectEmailComposeComponent.prototype.nextStep = function () {
        if (this.currentStep < 4) {
            switch (this.currentStep) {
                case 1: {
                    this.onAddSurveySecipient(this.formCompose);
                    break;
                }
                case 2: {
                    this.currentStep = 3;
                    break;
                }
                case 3: {
                    this.onSendMail(this.formCompose);
                    break;
                }
                default:
                    break;
            }
        }
    };
    CollectEmailComposeComponent.prototype.backStep = function () {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
        }
    };
    CollectEmailComposeComponent.prototype.onSendMail = function (formData) {
        var _this = this;
        if (this.emails.length === 0) {
            return;
        }
        if (formData.invalid) {
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].validateAllFormFields(formData);
            return;
        }
        this.loaderService.display(true);
        Object.keys(formData.value).forEach(function (key) {
            if (_app_shared__WEBPACK_IMPORTED_MODULE_6__["Helpers"].isString(formData.value[key])) {
                formData.value[key] = formData.value[key].trim();
            }
        });
        var recipients = {
            emails: this.emails,
            surveyCollector: this.surveyCollectorDetail,
            message: formData.value.message,
            subject: formData.value.subject
        };
        this.dSurveyRecipientService.sendMailSurveyRecipient(recipients).subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.router.navigate([
                    "create",
                    "collector-responses",
                    "collector-email",
                    "manage",
                    _this.surveyCollectorDetail.id
                ]);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectEmailComposeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyCollectorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyRecipientService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tplContentRecipientsRemoved", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CollectEmailComposeComponent.prototype, "tplContentRecipientsRemoved", void 0);
    CollectEmailComposeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-collect-email-compose",
            template: __webpack_require__(/*! raw-loader!./collect-email-compose.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.html"),
            styles: [__webpack_require__(/*! ./collect-email-compose.component.scss */ "./src/app/modules/default/modules/create-form/pages/collect-email-compose/collect-email-compose.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyCollectorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["DSurveyRecipientService"]])
    ], CollectEmailComposeComponent);
    return CollectEmailComposeComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0;\n  padding: 0;\n}\n\n.back-nav {\n  margin-bottom: 1em;\n}\n\n#page-container {\n  margin-top: 32px;\n}\n\n.collectors {\n  margin-top: 15px;\n  padding-bottom: 80px;\n}\n\nmain > header {\n  margin-bottom: 2rem;\n  position: relative;\n}\n\nmain > header #edit-name {\n  display: inline-block;\n}\n\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nmain > header .email-collector-status {\n  transform: translateY(-50%);\n  margin-left: 15px;\n  position: absolute;\n  top: 50%;\n}\n\n.sm-badge-sm {\n  font-size: 13px;\n  padding: 2px 8px;\n  line-height: 1.3;\n}\n\n.sm-badge {\n  border-radius: 2px;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 13px;\n  padding: 4px 12px;\n  line-height: 1.3;\n}\n\n.sm-badge.open {\n  background: #00bf6f;\n}\n\n.sm-badge.closed {\n  background: #f05b24;\n}\n\nmain > header > .actions {\n  transform: translateY(-50%);\n  color: #00bf6f;\n  font-size: 13px;\n  line-height: 1.5;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n\n::ng-deep .ant-tabs-nav-scroll {\n  background-color: #fff;\n  border-bottom: 1px solid #d0d2d3;\n}\n\n.sm-banner {\n  margin-bottom: 2em;\n}\n\n::ng-deep .contact-detail-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWVtYWlsLW1hbmFnZS9jb2xsZWN0LWVtYWlsLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vcGFnZXMvY29sbGVjdC1lbWFpbC1tYW5hZ2UvY29sbGVjdC1lbWFpbC1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGhpeHVhbmhvYW4vRGVzaWduLVdlYi81LiBBbmd1bGFyL0R1QW4vUHJpdmF0ZS1VRVQtU1VSVkVZL0Zyb250ZW5kL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESkE7RUFHRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURSRTtFQUNFLG1CRWpEVTtBRDJEZDs7QURSRTtFQUNFLG1CQUFBO0FDVUo7O0FEUEE7RUFHRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDVUY7O0FEUkE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FDV0Y7O0FEVEE7RUFDRSxrQkFBQTtBQ1lGOztBRFRFO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWVtYWlsLW1hbmFnZS9jb2xsZWN0LWVtYWlsLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmJhY2stbmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuI3BhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5jb2xsZWN0b3JzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5tYWluID4gaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiA+IGhlYWRlciAjZWRpdC1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5tYWluID4gaGVhZGVyIC5lbWFpbC1jb2xsZWN0b3Itc3RhdHVzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG4uc20tYmFkZ2Utc20ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uc20tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgJi5vcGVuIHtcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XG4gIH1cbiAgJi5jbG9zZWQge1xuICAgIGJhY2tncm91bmQ6ICNmMDViMjQ7XG4gIH1cbn1cbm1haW4gPiBoZWFkZXIgPiAuYWN0aW9ucyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjMDBiZjZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xufVxuOjpuZy1kZWVwIC5hbnQtdGFicy1uYXYtc2Nyb2xsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMGQyZDM7XG59XG4uc20tYmFubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuOjpuZy1kZWVwIC5jb250YWN0LWRldGFpbC1kaWFsb2cge1xuICAuYW50LW1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICB9XG59XG4iLCJoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJhY2stbmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4jcGFnZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uY29sbGVjdG9ycyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG5tYWluID4gaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5tYWluID4gaGVhZGVyICNlZGl0LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50cnVuY2F0ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5tYWluID4gaGVhZGVyIC5lbWFpbC1jb2xsZWN0b3Itc3RhdHVzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG59XG5cbi5zbS1iYWRnZS1zbSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnNtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uc20tYmFkZ2Uub3BlbiB7XG4gIGJhY2tncm91bmQ6ICMwMGJmNmY7XG59XG4uc20tYmFkZ2UuY2xvc2VkIHtcbiAgYmFja2dyb3VuZDogI2YwNWIyNDtcbn1cblxubWFpbiA+IGhlYWRlciA+IC5hY3Rpb25zIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICMwMGJmNmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG59XG5cbjo6bmctZGVlcCAuYW50LXRhYnMtbmF2LXNjcm9sbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDBkMmQzO1xufVxuXG4uc20tYmFubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG46Om5nLWRlZXAgLmNvbnRhY3QtZGV0YWlsLWRpYWxvZyAuYW50LW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xufSIsIi8vIGNvbG9yc1xuJHRoZW1lLWNvbG9yOiAjMDBiZjZmO1xuJGJyb3duaXNoLWdyZXk6ICM2ODY4Njg7XG4kcGFsZS1ncmV5OiAjZWFlY2VlO1xuJHBhbmVsLWJvcmRlci1jb2xvcjogJHBhbGUtZ3JleTtcbiRzdXJ2ZXktbGlnaHQtZ3JheTogI2Y3ZjdmNztcbiRjaGFyY29hbC1ncmV5OiAjM2UzZjQyO1xuIl19 */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CollectEmailManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectEmailManageComponent", function() { return CollectEmailManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared_modals_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/modals/contact-details/contact-details.component */ "./src/app/shared/modals/contact-details/contact-details.component.ts");








var CollectEmailManageComponent = /** @class */ (function () {
    function CollectEmailManageComponent(activatedRoute, dSurveyCollectorService, nzMessageService, translateService, loaderService, modalService, router, dSurveyFormService, dSurveyRecipientService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyCollectorService = dSurveyCollectorService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.router = router;
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyRecipientService = dSurveyRecipientService;
        this.subscriptions = [];
        this.columns = [];
        this.filter = {
            sortField: "createdAt",
            sortType: "desc",
            searchKey: "email",
            searchValue: "",
            filterKey: "surveyCollectorId",
            filterValue: []
        };
        this.pagging = { page: 1, total: 0, pageSize: 10 };
    }
    CollectEmailManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var collectorId = params.collectorId;
            _this.getSurveyCollectorById(collectorId);
            _this.filter.filterValue = [collectorId];
            _this.getListSurveyRecipient();
        }));
    };
    CollectEmailManageComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    CollectEmailManageComponent.prototype.initTable = function () {
        this.columns = [
            {
                id: "email",
                type: "text",
                sortable: true,
                header: "default.layout.EMAIL"
            },
            {
                id: "firstName",
                type: "text",
                sortable: true,
                header: "default.layout.FIRST_NAME"
            },
            {
                id: "lastName",
                type: "text",
                sortable: true,
                header: "default.layout.LAST_NAME"
            },
            {
                id: "mailStatus",
                type: "text",
                sortable: true,
                header: "default.layout.SENT"
            },
            {
                id: "createdAt",
                type: "date",
                sortable: true,
                header: "default.layout.DATE_CREATED"
            }
        ];
    };
    CollectEmailManageComponent.prototype.getSurveyCollectorById = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .getSurveyCollectorById(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results && res.results[0]) {
                    _this.surveyCollectorDetail = res.results[0];
                    _this.dSurveyFormService.setSurveyFormDetail(_this.surveyCollectorDetail.surveyForm);
                }
                else {
                    _this.nzMessageService.warning(_this.translateService.instant("admin.layout.SURVEY_COLLECTOR_NOT_EXIST"));
                    _this.router.navigate(["/dashboard"]);
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectEmailManageComponent.prototype.getListSurveyRecipient = function () {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyRecipientService
            .getSurveyRecipientList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || "", this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyRecipient = res.results;
                _this.pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectEmailManageComponent.prototype.onShowModalContactDetails = function (surveyRecipient) {
        var _this = this;
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.VIEW_RECIPIENT"),
            nzFooter: null,
            nzContent: _app_shared_modals_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailsComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "contact-detail-dialog",
            nzComponentParams: { surveyRecipientDetails: surveyRecipient }
        });
        this.subscriptions.push(this.modalForm.afterClose.subscribe(function () {
            _this.getListSurveyRecipient();
        }));
    };
    CollectEmailManageComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getListSurveyRecipient();
    };
    CollectEmailManageComponent.prototype.search = function () {
        this.getListSurveyRecipient();
    };
    CollectEmailManageComponent.prototype.reset = function () {
        this.filter.searchKey = "";
        this.filter.searchValue = "";
        this.getListSurveyRecipient();
    };
    CollectEmailManageComponent.prototype.pageIndexChange = function ($event) {
        this.pagging.page = $event;
        this.getListSurveyRecipient();
    };
    CollectEmailManageComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    CollectEmailManageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyRecipientService"] }
    ]; };
    CollectEmailManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-collect-email-manage",
            template: __webpack_require__(/*! raw-loader!./collect-email-manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.html"),
            styles: [__webpack_require__(/*! ./collect-email-manage.component.scss */ "./src/app/modules/default/modules/create-form/pages/collect-email-manage/collect-email-manage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyRecipientService"]])
    ], CollectEmailManageComponent);
    return CollectEmailManageComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0;\n  padding: 0;\n}\n\n#page-container {\n  margin-top: 32px;\n}\n\n.collectors {\n  margin-top: 15px;\n  padding-bottom: 80px;\n}\n\n.back-nav {\n  margin-bottom: 1em;\n}\n\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#edit-name {\n  max-width: 30rem;\n}\n\n#edit-name,\n#edit-name-icon {\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n#edit-name-icon {\n  margin-left: 1rem;\n  font-size: 20px;\n}\n\n#collector-created-date {\n  color: #333e48;\n  float: right;\n  font-size: 13px;\n  font-weight: 300;\n  line-height: 1.5;\n}\n\n#edit-weblink {\n  border-bottom: solid 1px #d0d2d3;\n  margin-bottom: 2em;\n  padding-bottom: 1em;\n}\n\n#collector-status {\n  margin-bottom: 0.75em;\n}\n\n#action-menu-link {\n  float: right;\n  font-size: 13px;\n}\n\n#action-menu-link.open {\n  color: #00bf6f;\n}\n\n#action-menu-link.closed {\n  color: #f05b24;\n}\n\n#manual-entry {\n  float: right;\n  font-size: 13px;\n  margin-right: 2em;\n}\n\n.view-url,\n.customize {\n  border-radius: 2px;\n  background-clip: padding-box;\n  background-color: white;\n  padding: 0.9em 1.5em;\n  position: relative;\n}\n\n.view-url .buttons,\n.customize .buttons {\n  transform: translateY(-50%);\n  position: absolute;\n  right: 1.5em;\n  top: 50%;\n}\n\n.weblink-domain,\n#weblink-url,\n#weblink-slug {\n  font-size: 26px;\n  position: relative;\n  vertical-align: middle;\n}\n\n.view-url #weblink-url,\n.customize #weblink-url {\n  border: 0;\n}\n\n.collect-link-icon {\n  font-size: 26px;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 0.5em;\n}\n\n.btn-copy {\n  margin-left: 1em;\n}\n\n#qrcode-container {\n  margin-top: 1rem;\n}\n\n#qrcode-container > .q {\n  margin-left: 0.5rem;\n}\n\n.q {\n  cursor: help;\n  display: inline-block;\n  transition: color 0.2s linear;\n}\n\n.q > span {\n  font-family: \"Mateo\";\n  font-weight: normal !important;\n  font-size: 10px;\n  background-color: #9da5aa;\n  color: #fff;\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n\n#qrcode-container #qrcode {\n  clip: rect(0, 0, 0, 0);\n  padding-top: 1em;\n}\n\n::ng-deep .rename-collector-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\n\n.collector-ads {\n  border-top: 1px solid #d0d2d3;\n  margin-top: 2em;\n  padding-top: 2em;\n}\n\n.collector-ads a {\n  text-decoration: none;\n}\n\n.collector-ads > ul {\n  border-spacing: 15px;\n  display: table;\n  left: -15px;\n  margin-top: 1em;\n  position: relative;\n  width: calc(100% + 30px);\n}\n\n.collector-ads > ul li {\n  position: relative;\n}\n\n.collector-ads li {\n  background-color: white;\n  border: 1px solid #d0d2d3;\n  border-radius: 2px;\n  box-sizing: border-box;\n  display: table-cell;\n  font-size: 0.8125rem;\n  margin-right: 10px;\n  min-height: 9.35em;\n  padding: 2em;\n  width: 14%;\n}\n\n.collector-ads p {\n  color: #6b787f;\n  font-size: 13px;\n  line-height: 1.5;\n  padding: 0;\n}\n\n.collector-ads i.icon-collector {\n  color: #333e48;\n  font-size: 26px;\n  margin-bottom: 0.5em;\n}\n\n.sidebar .aside-audience-ad {\n  position: relative;\n}\n\n.sidebar .aside-audience-ad {\n  position: relative;\n}\n\n.aside-audience-ad {\n  background: #fff;\n  border: 1px solid #d0d2d3;\n  border-radius: 2px;\n  color: #6b787f;\n  font-size: 13px;\n  line-height: 1.5;\n  padding: 1.5em;\n}\n\n.aside-audience-ad .icon-collector {\n  color: #2dccd3;\n  font-size: 42px;\n  margin-right: 0.25em;\n  vertical-align: middle;\n  float: left;\n}\n\n.aside-audience-ad p {\n  margin: 13px 0px;\n}\n\n.add-fb-messenger-collector {\n  background-color: #fff;\n  border: 1px solid #d0d2d3;\n  border-radius: 2px;\n  color: #6b787f;\n  font-size: 13px;\n  line-height: 1.5;\n  margin-top: 2em;\n  padding: 1.5em;\n}\n\n.add-fb-messenger-collector .icon-collector {\n  color: #0084ff;\n  float: left;\n  font-size: 42px;\n  margin-right: 0.25em;\n}\n\n.add-fb-messenger-collector p {\n  margin: 13px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWxpbmsvY29sbGVjdC1saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LWxpbmsvY29sbGVjdC1saW5rLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BoaXh1YW5ob2FuL0Rlc2lnbi1XZWIvNS4gQW5ndWxhci9EdUFuL1ByaXZhdGUtVUVULVNVUlZFWS9Gcm9udGVuZC9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBOztFQUVFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0UscUJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDV0Y7O0FEVkU7RUFDRSxjRW5EVTtBRCtEZDs7QURWRTtFQUNFLGNBQUE7QUNZSjs7QURUQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNZRjs7QURWQTs7RUFFRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDYUY7O0FEWEE7O0VBSUUsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDY0Y7O0FEWkE7OztFQUdFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDZUY7O0FEYkE7O0VBRUUsU0FBQTtBQ2dCRjs7QURkQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNpQkY7O0FEZkE7RUFDRSxnQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxnQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxtQkFBQTtBQ29CRjs7QURsQkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFFQSw2QkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNzQkY7O0FEcEJBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQ3VCRjs7QURuQkU7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNzQko7O0FEbkJBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNzQkY7O0FEckJFO0VBQ0UscUJBQUE7QUN1Qko7O0FEckJFO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDdUJKOztBRHRCSTtFQUNFLGtCQUFBO0FDd0JOOztBRHJCRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3VCSjs7QURyQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ3VCSjs7QURyQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDdUJKOztBRGxCRTtFQUNFLGtCQUFBO0FDcUJKOztBRG5CRTtFQUNFLGtCQUFBO0FDcUJKOztBRGxCQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJGOztBRHBCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNzQko7O0FEcEJFO0VBQ0UsZ0JBQUE7QUNzQko7O0FEbkJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDc0JGOztBRHJCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDdUJKOztBRHJCRTtFQUNFLGdCQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vcGFnZXMvY29sbGVjdC1saW5rL2NvbGxlY3QtbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI3BhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5jb2xsZWN0b3JzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4uYmFjay1uYXYge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4udHJ1bmNhdGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiNlZGl0LW5hbWUge1xuICBtYXgtd2lkdGg6IDMwcmVtO1xufVxuI2VkaXQtbmFtZSxcbiNlZGl0LW5hbWUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI2VkaXQtbmFtZS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNjb2xsZWN0b3ItY3JlYXRlZC1kYXRlIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuI2VkaXQtd2VibGluayB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDBkMmQzO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG4jY29sbGVjdG9yLXN0YXR1cyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbn1cbiNhY3Rpb24tbWVudS1saW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEzcHg7XG4gICYub3BlbiB7XG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgfVxuICAmLmNsb3NlZCB7XG4gICAgY29sb3I6ICNmMDViMjQ7XG4gIH1cbn1cbiNtYW51YWwtZW50cnkge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XG59XG4udmlldy11cmwsXG4uY3VzdG9taXplIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC45ZW0gMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi52aWV3LXVybCAuYnV0dG9ucyxcbi5jdXN0b21pemUgLmJ1dHRvbnMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxLjVlbTtcbiAgdG9wOiA1MCU7XG59XG4ud2VibGluay1kb21haW4sXG4jd2VibGluay11cmwsXG4jd2VibGluay1zbHVnIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udmlldy11cmwgI3dlYmxpbmstdXJsLFxuLmN1c3RvbWl6ZSAjd2VibGluay11cmwge1xuICBib3JkZXI6IDA7XG59XG4uY29sbGVjdC1saW5rLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5idG4tY29weSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4jcXJjb2RlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4jcXJjb2RlLWNvbnRhaW5lciA+IC5xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5xIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xufVxuLnEgPiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZW9cIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZGE1YWE7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI3FyY29kZS1jb250YWluZXIgI3FyY29kZSB7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbjo6bmctZGVlcCAucmVuYW1lLWNvbGxlY3Rvci1kaWFsb2cge1xuICAuYW50LW1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICB9XG59XG4uY29sbGVjdG9yLWFkcyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHBhZGRpbmctdG9wOiAyZW07XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICA+IHVsIHtcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICB9XG4gIGxpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDkuMzVlbTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgd2lkdGg6IDE0JTtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogIzZiNzg3ZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGkuaWNvbi1jb2xsZWN0b3Ige1xuICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIC5hc2lkZS1hdWRpZW5jZS1hZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5hc2lkZS1hdWRpZW5jZS1hZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG4uYXNpZGUtYXVkaWVuY2UtYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICAuaWNvbi1jb2xsZWN0b3Ige1xuICAgIGNvbG9yOiAjMmRjY2QzO1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMTNweCAwcHg7XG4gIH1cbn1cbi5hZGQtZmItbWVzc2VuZ2VyLWNvbGxlY3RvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQyZDM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgLmljb24tY29sbGVjdG9yIHtcbiAgICBjb2xvcjogIzAwODRmZjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAxM3B4IDBweDtcbiAgfVxufVxuIiwiaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNwYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5jb2xsZWN0b3JzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi5iYWNrLW5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnRydW5jYXRlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbiNlZGl0LW5hbWUge1xuICBtYXgtd2lkdGg6IDMwcmVtO1xufVxuXG4jZWRpdC1uYW1lLFxuI2VkaXQtbmFtZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNlZGl0LW5hbWUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNjb2xsZWN0b3ItY3JlYXRlZC1kYXRlIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4jZWRpdC13ZWJsaW5rIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkMGQyZDM7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuI2NvbGxlY3Rvci1zdGF0dXMge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG59XG5cbiNhY3Rpb24tbWVudS1saW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jYWN0aW9uLW1lbnUtbGluay5vcGVuIHtcbiAgY29sb3I6ICMwMGJmNmY7XG59XG4jYWN0aW9uLW1lbnUtbGluay5jbG9zZWQge1xuICBjb2xvcjogI2YwNWIyNDtcbn1cblxuI21hbnVhbC1lbnRyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLnZpZXctdXJsLFxuLmN1c3RvbWl6ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOWVtIDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWV3LXVybCAuYnV0dG9ucyxcbi5jdXN0b21pemUgLmJ1dHRvbnMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxLjVlbTtcbiAgdG9wOiA1MCU7XG59XG5cbi53ZWJsaW5rLWRvbWFpbixcbiN3ZWJsaW5rLXVybCxcbiN3ZWJsaW5rLXNsdWcge1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnZpZXctdXJsICN3ZWJsaW5rLXVybCxcbi5jdXN0b21pemUgI3dlYmxpbmstdXJsIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY29sbGVjdC1saW5rLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmJ0bi1jb3B5IHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuI3FyY29kZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4jcXJjb2RlLWNvbnRhaW5lciA+IC5xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnEge1xuICBjdXJzb3I6IGhlbHA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG59XG5cbi5xID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVvXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhNWFhO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI3FyY29kZS1jb250YWluZXIgI3FyY29kZSB7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbjo6bmctZGVlcCAucmVuYW1lLWNvbGxlY3Rvci1kaWFsb2cgLmFudC1tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbn1cblxuLmNvbGxlY3Rvci1hZHMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDJkMztcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuLmNvbGxlY3Rvci1hZHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb2xsZWN0b3ItYWRzID4gdWwge1xuICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xufVxuLmNvbGxlY3Rvci1hZHMgPiB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb2xsZWN0b3ItYWRzIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGQyZDM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWluLWhlaWdodDogOS4zNWVtO1xuICBwYWRkaW5nOiAyZW07XG4gIHdpZHRoOiAxNCU7XG59XG4uY29sbGVjdG9yLWFkcyBwIHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMDtcbn1cbi5jb2xsZWN0b3ItYWRzIGkuaWNvbi1jb2xsZWN0b3Ige1xuICBjb2xvcjogIzMzM2U0ODtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLnNpZGViYXIgLmFzaWRlLWF1ZGllbmNlLWFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZGViYXIgLmFzaWRlLWF1ZGllbmNlLWFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXNpZGUtYXVkaWVuY2UtYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuLmFzaWRlLWF1ZGllbmNlLWFkIC5pY29uLWNvbGxlY3RvciB7XG4gIGNvbG9yOiAjMmRjY2QzO1xuICBmb250LXNpemU6IDQycHg7XG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5hc2lkZS1hdWRpZW5jZS1hZCBwIHtcbiAgbWFyZ2luOiAxM3B4IDBweDtcbn1cblxuLmFkZC1mYi1tZXNzZW5nZXItY29sbGVjdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZDJkMztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogIzZiNzg3ZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuLmFkZC1mYi1tZXNzZW5nZXItY29sbGVjdG9yIC5pY29uLWNvbGxlY3RvciB7XG4gIGNvbG9yOiAjMDA4NGZmO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbn1cbi5hZGQtZmItbWVzc2VuZ2VyLWNvbGxlY3RvciBwIHtcbiAgbWFyZ2luOiAxM3B4IDBweDtcbn0iLCIvLyBjb2xvcnNcbiR0aGVtZS1jb2xvcjogIzAwYmY2ZjtcbiRicm93bmlzaC1ncmV5OiAjNjg2ODY4O1xuJHBhbGUtZ3JleTogI2VhZWNlZTtcbiRwYW5lbC1ib3JkZXItY29sb3I6ICRwYWxlLWdyZXk7XG4kc3VydmV5LWxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kY2hhcmNvYWwtZ3JleTogIzNlM2Y0MjtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CollectLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectLinkComponent", function() { return CollectLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/modals/rename-collector/rename-collector.component */ "./src/app/shared/modals/rename-collector/rename-collector.component.ts");
/* harmony import */ var _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/modals/close-collector/close-collector.component */ "./src/app/shared/modals/close-collector/close-collector.component.ts");
/* harmony import */ var _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/modals/open-collector/open-collector.component */ "./src/app/shared/modals/open-collector/open-collector.component.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_6_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-6-clipboard */ "./node_modules/angular-6-clipboard/index.js");
/* harmony import */ var angular_6_clipboard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_6_clipboard__WEBPACK_IMPORTED_MODULE_11__);












var CollectLinkComponent = /** @class */ (function () {
    function CollectLinkComponent(activatedRoute, dSurveyCollectorService, nzMessageService, translateService, loaderService, modalService, router, dSurveyFormService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyCollectorService = dSurveyCollectorService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.router = router;
        this.dSurveyFormService = dSurveyFormService;
        this.clientUrl = _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].clientUrl;
        this.subscriptions = [];
        this.styleRadio = {
            display: "block",
            height: "30px",
            lineHeight: "30px",
            fontWeight: "normal"
        };
    }
    CollectLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var collectorId = params.collectorId;
            _this.getSurveyCollectorById(collectorId);
        }));
    };
    CollectLinkComponent.prototype.getSurveyCollectorById = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .getSurveyCollectorById(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results && res.results[0]) {
                    _this.surveyCollectorDetail = res.results[0];
                    _this.surveyCollectorDetail.fullUrl =
                        _this.clientUrl +
                            "/publish/answer-survey/" +
                            _this.surveyCollectorDetail.url;
                    _this.dSurveyFormService.setSurveyFormDetail(_this.surveyCollectorDetail.surveyForm);
                }
                else {
                    _this.nzMessageService.warning(_this.translateService.instant("admin.layout.SURVEY_COLLECTOR_NOT_EXIST"));
                    _this.router.navigate(["/dashboard"]);
                }
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectLinkComponent.prototype.showRenameCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.EDIT_COLLECTOR_NICKNAME"),
            nzFooter: null,
            nzContent: _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_7__["RenameCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "rename-collector-dialog",
            nzComponentParams: { surveyCollectorRename: surveyCollector }
        });
    };
    CollectLinkComponent.prototype.showCloseCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.CLOSE_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__["CloseCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorClose: surveyCollector }
        });
    };
    CollectLinkComponent.prototype.showOpenCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.OPEN_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_9__["OpenCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorOpen: surveyCollector }
        });
    };
    CollectLinkComponent.prototype.onCopyUrl = function (url) {
        Object(angular_6_clipboard__WEBPACK_IMPORTED_MODULE_11__["ngCopy"])(url);
        this.nzMessageService.success(this.translateService.instant("default.layout.LINK_COPIED_TO_CLIPBOARD"));
    };
    CollectLinkComponent.prototype.onDownloadQrCode = function () {
        try {
            var canvas = document.querySelector("canvas");
            this.saveCanvasAs(canvas, this.surveyCollectorDetail.url + ".png");
        }
        catch (error) {
            this.nzMessageService.error(this.translateService.instant("default.layout.DOWNLOAD_QR_CODE_FAIL"));
        }
    };
    CollectLinkComponent.prototype.saveCanvasAs = function (canvas, fileName) {
        var canvasDataUrl = canvas
            .toDataURL()
            .replace(/^data:image\/[^;]*/, "data:application/octet-stream");
        var link = document.createElement("a");
        link.setAttribute("href", canvasDataUrl);
        link.setAttribute("target", "_blank");
        link.setAttribute("download", fileName);
        if (document.createEvent) {
            var evtObj = document.createEvent("MouseEvents");
            evtObj.initEvent("click", true, true);
            link.dispatchEvent(evtObj);
        }
        else if (link.click) {
            link.click();
        }
    };
    CollectLinkComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] }
    ]; };
    CollectLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-collect-link",
            template: __webpack_require__(/*! raw-loader!./collect-link.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.html"),
            styles: [__webpack_require__(/*! ./collect-link.component.scss */ "./src/app/modules/default/modules/create-form/pages/collect-link/collect-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"]])
    ], CollectLinkComponent);
    return CollectLinkComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-collector {\n  margin-bottom: 32px;\n  position: relative;\n}\n.add-collector h1 {\n  display: inline-block;\n  vertical-align: middle;\n}\n.add-collector h1 + .btn-menu {\n  transform: translateY(-50%);\n  display: inline-block;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n.add-collector h1 + .btn-menu button {\n  height: 40px;\n  padding: 8px 24px;\n}\n.collectors {\n  margin-top: 15px;\n  padding-bottom: 80px;\n}\n#add-collector {\n  position: relative;\n}\n#add-collector h1 {\n  color: #333e48;\n  padding: 20px;\n  text-align: center;\n}\n#add-collector .card-collector {\n  background: white;\n  border: solid 1px #edeeee;\n  border-radius: 2px;\n  box-sizing: border-box;\n  cursor: pointer;\n  height: auto;\n  line-height: 1.4;\n  min-height: 155px;\n  position: relative;\n  padding: 16px;\n}\n#add-collector .card-collector:hover {\n  border: solid 1px #00bf6f;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n}\n#add-collector .card-collector:hover > h3 {\n  color: #00bf6f;\n}\n#add-collector .card-collector:hover > i.icon-collector {\n  color: #00bf6f;\n}\n#add-collector div .card-collector {\n  position: relative;\n}\n#add-collector div .card-collector .icon-footer {\n  color: #000;\n  line-height: 2.5em;\n}\n#add-collector div i.icon-collector {\n  font-size: 26px;\n  position: relative;\n  vertical-align: middle;\n}\n#add-collector p {\n  margin: 0;\n}\n#add-collector h3 {\n  display: inline-block;\n  line-height: 2.5em;\n  margin-bottom: 0.5em;\n  margin-left: 13px;\n  vertical-align: middle;\n}\n#add-collector .row {\n  margin-bottom: 30px;\n}\n.sm-badge {\n  border-radius: 2px;\n  display: inline-block;\n  text-align: center;\n  color: #fff !important;\n  font-weight: 500;\n  font-size: 13px;\n  padding: 4px 12px;\n  line-height: 1.3;\n}\n.sm-badge.open {\n  background: #00bf6f;\n}\n.sm-badge.closed {\n  background: #f05b24;\n}\n.sm-badge a {\n  color: #fff !important;\n}\n.sm-badge-sm {\n  font-size: 13px;\n  padding: 2px 8px;\n  line-height: 1.3;\n}\n.collectors-footer {\n  color: #6b787f;\n  margin-top: 1em;\n}\n.collector-ads {\n  border-top: 1px solid #d0d2d3;\n  margin-top: 2em;\n  padding-top: 2em;\n}\n.collector-ads li:not(.disabled):hover {\n  border: solid 1px #00bf6f;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);\n}\n.collector-ads a {\n  text-decoration: none;\n}\n.collector-ads > ul {\n  border-spacing: 15px;\n  display: table;\n  left: -15px;\n  margin-top: 1em;\n  position: relative;\n  width: calc(100% + 30px);\n}\n.collector-ads > ul li {\n  position: relative;\n}\n.collector-ads li {\n  background-color: white;\n  border: 1px solid #d0d2d3;\n  border-radius: 2px;\n  box-sizing: border-box;\n  display: table-cell;\n  font-size: 0.8125rem;\n  margin-right: 10px;\n  min-height: 9.35em;\n  padding: 2em;\n  width: 14%;\n}\n.collector-ads p {\n  color: #6b787f;\n  font-size: 13px;\n  line-height: 1.5;\n  padding: 0;\n}\n.collector-ads i.icon-collector {\n  color: #333e48;\n  font-size: 26px;\n  margin-bottom: 0.5em;\n}\n::ng-deep .rename-collector-dialog .ant-modal-body,\n::ng-deep .close-collector-dialog .ant-modal-body {\n  background: #f4f5f5 !important;\n  padding: 0 !important;\n  border-radius: 4px 4px 4px 4px;\n}\ntd.activity {\n  color: #6b787f;\n}\ntd.activity a {\n  color: #007faa;\n  text-decoration: none;\n  border: none;\n  background: none;\n  font-weight: inherit;\n  font-size: inherit;\n  outline: none;\n  cursor: pointer;\n  font-weight: 500;\n}\ntd.activity a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LXJlc3BvbnNlcy9jb2xsZWN0LXJlc3BvbnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vcGFnZXMvY29sbGVjdC1yZXNwb25zZXMvY29sbGVjdC1yZXNwb25zZXMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGhpeHVhbmhvYW4vRGVzaWduLVdlYi81LiBBbmd1bGFyL0R1QW4vUHJpdmF0ZS1VRVQtU1VSVkVZL0Zyb250ZW5kL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREFJO0VBR0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDRU47QURETTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0dSO0FERUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0FDRUY7QURERTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNHSjtBREZJO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtBQ0lOO0FESE07RUFDRSxjRWhETTtBRHFEZDtBREhNO0VBQ0UsY0VuRE07QUR3RGQ7QURBSTtFQUNFLGtCQUFBO0FDRU47QURETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0dSO0FEQUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0VOO0FEQ0U7RUFDRSxTQUFBO0FDQ0o7QURDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLG1CRTdGVTtBRCtGZDtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBREFFO0VBQ0Usc0JBQUE7QUNFSjtBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNHRjtBRERBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJRjtBREhFO0VBQ0UseUJBQUE7RUFDQSwyQ0FBQTtBQ0tKO0FESEU7RUFDRSxxQkFBQTtBQ0tKO0FESEU7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNLSjtBREpJO0VBQ0Usa0JBQUE7QUNNTjtBREhFO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDS0o7QURIRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDS0o7QURIRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNLSjtBRENFOztFQUNFLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0dKO0FEQUE7RUFDRSxjQUFBO0FDR0Y7QURGRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUo7QURGRTtFQUNFLDBCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9jb2xsZWN0LXJlc3BvbnNlcy9jb2xsZWN0LXJlc3BvbnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcbi5hZGQtY29sbGVjdG9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgKyAuYnRuLW1lbnUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uY29sbGVjdG9ycyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuI2FkZC1jb2xsZWN0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGgxIHtcbiAgICBjb2xvcjogIzMzM2U0ODtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2FyZC1jb2xsZWN0b3Ige1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlZGVlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1pbi1oZWlnaHQ6IDE1NXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHRoZW1lLWNvbG9yO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgICAgID4gaDMge1xuICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xuICAgICAgfVxuICAgICAgPiBpLmljb24tY29sbGVjdG9yIHtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGl2IHtcbiAgICAuY2FyZC1jb2xsZWN0b3Ige1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmljb24tZm9vdGVyIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgaS5pY29uLWNvbGxlY3RvciB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaDMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4uc20tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICAmLm9wZW4ge1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcbiAgfVxuICAmLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZDogI2YwNWIyNDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG59XG4uc20tYmFkZ2Utc20ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uY29sbGVjdG9ycy1mb290ZXIge1xuICBjb2xvcjogIzZiNzg3ZjtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmNvbGxlY3Rvci1hZHMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDJkMztcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBwYWRkaW5nLXRvcDogMmVtO1xuICBsaTpub3QoLmRpc2FibGVkKTpob3ZlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYmY2ZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICA+IHVsIHtcbiAgICBib3JkZXItc3BhY2luZzogMTVweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICB9XG4gIGxpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDkuMzVlbTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgd2lkdGg6IDE0JTtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogIzZiNzg3ZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGkuaWNvbi1jb2xsZWN0b3Ige1xuICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLnJlbmFtZS1jb2xsZWN0b3ItZGlhbG9nLFxuOjpuZy1kZWVwIC5jbG9zZS1jb2xsZWN0b3ItZGlhbG9nIHtcbiAgLmFudC1tb2RhbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNWY1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgfVxufVxudGQuYWN0aXZpdHkge1xuICBjb2xvcjogIzZiNzg3ZjtcbiAgYSB7XG4gICAgY29sb3I6ICMwMDdmYWE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG4iLCIuYWRkLWNvbGxlY3RvciB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hZGQtY29sbGVjdG9yIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmFkZC1jb2xsZWN0b3IgaDEgKyAuYnRuLW1lbnUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG59XG4uYWRkLWNvbGxlY3RvciBoMSArIC5idG4tbWVudSBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xufVxuXG4uY29sbGVjdG9ycyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4jYWRkLWNvbGxlY3RvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNhZGQtY29sbGVjdG9yIGgxIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNhZGQtY29sbGVjdG9yIC5jYXJkLWNvbGxlY3RvciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBtaW4taGVpZ2h0OiAxNTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuI2FkZC1jb2xsZWN0b3IgLmNhcmQtY29sbGVjdG9yOmhvdmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYmY2ZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cbiNhZGQtY29sbGVjdG9yIC5jYXJkLWNvbGxlY3Rvcjpob3ZlciA+IGgzIHtcbiAgY29sb3I6ICMwMGJmNmY7XG59XG4jYWRkLWNvbGxlY3RvciAuY2FyZC1jb2xsZWN0b3I6aG92ZXIgPiBpLmljb24tY29sbGVjdG9yIHtcbiAgY29sb3I6ICMwMGJmNmY7XG59XG4jYWRkLWNvbGxlY3RvciBkaXYgLmNhcmQtY29sbGVjdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2FkZC1jb2xsZWN0b3IgZGl2IC5jYXJkLWNvbGxlY3RvciAuaWNvbi1mb290ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xufVxuI2FkZC1jb2xsZWN0b3IgZGl2IGkuaWNvbi1jb2xsZWN0b3Ige1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiNhZGQtY29sbGVjdG9yIHAge1xuICBtYXJnaW46IDA7XG59XG4jYWRkLWNvbGxlY3RvciBoMyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jYWRkLWNvbGxlY3RvciAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnNtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5zbS1iYWRnZS5vcGVuIHtcbiAgYmFja2dyb3VuZDogIzAwYmY2Zjtcbn1cbi5zbS1iYWRnZS5jbG9zZWQge1xuICBiYWNrZ3JvdW5kOiAjZjA1YjI0O1xufVxuLnNtLWJhZGdlIGEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uc20tYmFkZ2Utc20ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5jb2xsZWN0b3JzLWZvb3RlciB7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5jb2xsZWN0b3ItYWRzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQyZDM7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgcGFkZGluZy10b3A6IDJlbTtcbn1cbi5jb2xsZWN0b3ItYWRzIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYmY2ZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcbn1cbi5jb2xsZWN0b3ItYWRzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY29sbGVjdG9yLWFkcyA+IHVsIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBsZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbn1cbi5jb2xsZWN0b3ItYWRzID4gdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29sbGVjdG9yLWFkcyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkMmQzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDkuMzVlbTtcbiAgcGFkZGluZzogMmVtO1xuICB3aWR0aDogMTQlO1xufVxuLmNvbGxlY3Rvci1hZHMgcCB7XG4gIGNvbG9yOiAjNmI3ODdmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29sbGVjdG9yLWFkcyBpLmljb24tY29sbGVjdG9yIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbjo6bmctZGVlcCAucmVuYW1lLWNvbGxlY3Rvci1kaWFsb2cgLmFudC1tb2RhbC1ib2R5LFxuOjpuZy1kZWVwIC5jbG9zZS1jb2xsZWN0b3ItZGlhbG9nIC5hbnQtbW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmNGY1ZjUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG59XG5cbnRkLmFjdGl2aXR5IHtcbiAgY29sb3I6ICM2Yjc4N2Y7XG59XG50ZC5hY3Rpdml0eSBhIHtcbiAgY29sb3I6ICMwMDdmYWE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50ZC5hY3Rpdml0eSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59IiwiLy8gY29sb3JzXG4kdGhlbWUtY29sb3I6ICMwMGJmNmY7XG4kYnJvd25pc2gtZ3JleTogIzY4Njg2ODtcbiRwYWxlLWdyZXk6ICNlYWVjZWU7XG4kcGFuZWwtYm9yZGVyLWNvbG9yOiAkcGFsZS1ncmV5O1xuJHN1cnZleS1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNoYXJjb2FsLWdyZXk6ICMzZTNmNDI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CollectResponsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectResponsesComponent", function() { return CollectResponsesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/modals/rename-collector/rename-collector.component */ "./src/app/shared/modals/rename-collector/rename-collector.component.ts");
/* harmony import */ var _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/modals/close-collector/close-collector.component */ "./src/app/shared/modals/close-collector/close-collector.component.ts");
/* harmony import */ var _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/modals/open-collector/open-collector.component */ "./src/app/shared/modals/open-collector/open-collector.component.ts");










var CollectResponsesComponent = /** @class */ (function () {
    function CollectResponsesComponent(activatedRoute, dSurveyFormService, dSurveyCollectorService, dSurveyResponseService, nzMessageService, translateService, loaderService, modalService, router, authService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyCollectorService = dSurveyCollectorService;
        this.dSurveyResponseService = dSurveyResponseService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.modalService = modalService;
        this.router = router;
        this.authService = authService;
        this.listOfAllSurveyCollect = [];
        this.subscriptions = [];
        this.columns = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 10
        };
        this.filter = {
            searchKey: "name",
            searchValue: "",
            sortField: "createdAt",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    CollectResponsesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (userData) {
            if (userData) {
                _this.currentUser = userData;
            }
        });
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
        }));
    };
    CollectResponsesComponent.prototype.ngAfterContentInit = function () {
        this.initTable();
    };
    CollectResponsesComponent.prototype.initTable = function () {
        var _this = this;
        this.columns = [
            {
                id: "type",
                type: "icon",
                action: {
                    iconMap: function (type) {
                        switch (type) {
                            case "WEBLINK":
                                return "link";
                            case "EMAIL":
                                return "mail";
                            default:
                                return "loading";
                        }
                    }
                },
                sortable: true,
                header: "default.layout.ICON"
            },
            {
                id: "name",
                td_two: "createdAt",
                className: "activity",
                type: "text",
                action: {
                    link: function (collectorId, type) {
                        switch (type) {
                            case "WEBLINK":
                                return "/create/collector-responses/collector-link/" + collectorId;
                            case "EMAIL":
                                return "/create/collector-responses/collector-email/manage/" + collectorId;
                            default:
                                return "loading";
                        }
                    }
                },
                sortable: true,
                header: "default.layout.TITLE"
            },
            {
                id: "status",
                type: "status",
                sortable: true,
                action: {
                    classMap: function (status) {
                        switch (status) {
                            case "OPEN":
                                return "open";
                            case "CLOSED":
                                return "closed";
                            default:
                                return "closed";
                        }
                    },
                    doChangeStatus: function (surveyCollector, status) {
                        switch (status) {
                            case "OPEN":
                                _this.showCloseCollectorModal(surveyCollector);
                                break;
                            case "CLOSED":
                                _this.showOpenCollectorModal(surveyCollector);
                                break;
                        }
                    }
                },
                header: "default.layout.STATUS"
            },
            {
                id: "response",
                type: "text",
                sortable: true,
                header: "default.layout.RESPONSES"
            },
            {
                id: "updatedAt",
                type: "date",
                sortable: true,
                header: "default.layout.DATE_MODIFIED"
            }
        ];
    };
    CollectResponsesComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.getListSurveyCollector();
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    CollectResponsesComponent.prototype.getListSurveyCollector = function () {
        var _this = this;
        if (!this.surveyFormDetail.id) {
            return;
        }
        this.filter.filterValue = [this.surveyFormDetail.id];
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .getDefaultSurveyCollectorList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || "", this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyCollect = res.results;
                _this.pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectResponsesComponent.prototype.sort = function (sort) {
        this.filter.sortField = sort.key;
        if (sort.value === "ascend") {
            this.filter.sortType = "asc";
        }
        else {
            this.filter.sortType = "desc";
        }
        this.getListSurveyCollector();
    };
    CollectResponsesComponent.prototype.search = function () {
        this.isSearch = true;
        if (this.filter.searchValue === "") {
            this.isSearch = false;
        }
        this.getListSurveyCollector();
    };
    CollectResponsesComponent.prototype.onAddNewCollector = function (type) {
        var _this = this;
        if (!type) {
            return;
        }
        this.loaderService.display(true);
        var surveyCollector = {
            name: "",
            type: type,
            surveyFormId: this.surveyFormDetail.id,
            userId: this.currentUser.id
        };
        var navigateUrl = ["/dashboard"];
        switch (type) {
            case "WEBLINK":
                surveyCollector.name = "Web link";
                navigateUrl = ["/create", "collector-responses", "collector-link"];
                break;
            case "EMAIL":
                surveyCollector.name = "Email Invitation";
                navigateUrl = [
                    "/create",
                    "collector-responses",
                    "collector-email",
                    "compose"
                ];
                break;
            default:
                break;
        }
        this.dSurveyCollectorService.addSurveyCollector(surveyCollector).subscribe(function (res) {
            if (res.status.code === 200) {
                if (res.results && res.results[0]) {
                    _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                    navigateUrl.push(res.results[0].id);
                    return _this.router.navigate(navigateUrl);
                }
                return _this.router.navigate(["/dashboard"]);
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectResponsesComponent.prototype.showDeleteConfirm = function (surveyCollector, tplContent) {
        var _this = this;
        this.surveyCollectorDelete = surveyCollector;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_COLLECTOR"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.DELETE_COLLECTOR"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyCollector) {
                    return _this.onDeleteSurveyCollector(surveyCollector.id);
                }
            }
        });
    };
    CollectResponsesComponent.prototype.onDeleteSurveyCollector = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .deleteSurveyCollector(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getListSurveyCollector();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectResponsesComponent.prototype.showRenameCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.EDIT_COLLECTOR_NICKNAME"),
            nzFooter: null,
            nzContent: _app_shared_modals_rename_collector_rename_collector_component__WEBPACK_IMPORTED_MODULE_7__["RenameCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "rename-collector-dialog",
            nzComponentParams: { surveyCollectorRename: surveyCollector }
        });
    };
    CollectResponsesComponent.prototype.showCloseCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.CLOSE_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_close_collector_close_collector_component__WEBPACK_IMPORTED_MODULE_8__["CloseCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorClose: surveyCollector }
        });
    };
    CollectResponsesComponent.prototype.showOpenCollectorModal = function (surveyCollector) {
        this.modalForm = this.modalService.create({
            nzTitle: this.translateService.instant("default.layout.OPEN_COLLECTOR"),
            nzFooter: null,
            nzContent: _app_shared_modals_open_collector_open_collector_component__WEBPACK_IMPORTED_MODULE_9__["OpenCollectorComponent"],
            nzCancelDisabled: true,
            nzMaskClosable: true,
            nzClosable: true,
            nzWidth: 700,
            nzClassName: "close-collector-dialog",
            nzComponentParams: { surveyCollectorOpen: surveyCollector }
        });
    };
    CollectResponsesComponent.prototype.showClearResponsesConfirm = function (surveyCollector, tplContent) {
        var _this = this;
        this.surveyCollectorClearResponses = surveyCollector;
        this.modalService.confirm({
            nzTitle: this.translateService.instant("default.layout.ARE_YOU_SURE_YOU_WANT_TO_CLEAR_ALL_THE_RESPONSES_IN_THIS_COLLECTOR"),
            nzCancelText: this.translateService.instant("default.layout.CANCEL"),
            nzOkText: this.translateService.instant("default.layout.CLEAR_RESPONSES"),
            nzContent: tplContent,
            nzOnOk: function () {
                if (surveyCollector) {
                    return _this.clearResponsesByCollector(surveyCollector.id);
                }
            }
        });
    };
    CollectResponsesComponent.prototype.clearResponsesByCollector = function (surveyCollectorId) {
        var _this = this;
        this.loaderService.display(true);
        this.dSurveyResponseService
            .clearResponsesByCollector(surveyCollectorId)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant(res.status.message));
                _this.getListSurveyCollector();
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    CollectResponsesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    CollectResponsesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    CollectResponsesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-collect-responses",
            template: __webpack_require__(/*! raw-loader!./collect-responses.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.html"),
            styles: [__webpack_require__(/*! ./collect-responses.component.scss */ "./src/app/modules/default/modules/create-form/pages/collect-responses/collect-responses.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyResponseService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CollectResponsesComponent);
    return CollectResponsesComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep #surveyCreatorContainer .navbar-default {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9kZXNpZ24tc3VydmV5L2Rlc2lnbi1zdXJ2ZXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL2Rlc2lnbi1zdXJ2ZXkvZGVzaWduLXN1cnZleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL2Rlc2lnbi1zdXJ2ZXkvZGVzaWduLXN1cnZleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAjc3VydmV5Q3JlYXRvckNvbnRhaW5lciB7XG4gIC5uYXZiYXItZGVmYXVsdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwICNzdXJ2ZXlDcmVhdG9yQ29udGFpbmVyIC5uYXZiYXItZGVmYXVsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DesignSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignSurveyComponent", function() { return DesignSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var DesignSurveyComponent = /** @class */ (function () {
    function DesignSurveyComponent(activatedRoute, nzMessageService, translateService, dSurveyFormService, titleService) {
        this.activatedRoute = activatedRoute;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.dSurveyFormService = dSurveyFormService;
        this.titleService = titleService;
        this.subscriptions = [];
    }
    DesignSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
        }));
    };
    DesignSurveyComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.titleService.setTitle("UetSurvey - Design - " + _this.surveyFormDetail.title);
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    DesignSurveyComponent.prototype.onSurveySaved = function (json) {
        var _this = this;
        if (!json) {
            return;
        }
        this.nzMessageService.loading(this.translateService.instant("admin.layout.SAVING"));
        return this.dSurveyFormService
            .updateSurveyForm({ json: json }, this.surveyFormDetail.id)
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.nzMessageService.success(_this.translateService.instant("admin.layout.SAVED"));
            }
        }, function (err) {
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        });
    };
    DesignSurveyComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    DesignSurveyComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
    ]; };
    DesignSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-design-survey",
            template: __webpack_require__(/*! raw-loader!./design-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.html"),
            styles: [__webpack_require__(/*! ./design-survey.component.scss */ "./src/app/modules/default/modules/create-form/pages/design-survey/design-survey.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], DesignSurveyComponent);
    return DesignSurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep #surveyCreatorContainer .navbar-default {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9wcmV2aWV3LXNjb3JlL3ByZXZpZXctc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL3ByZXZpZXctc2NvcmUvcHJldmlldy1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL3ByZXZpZXctc2NvcmUvcHJldmlldy1zY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAjc3VydmV5Q3JlYXRvckNvbnRhaW5lciB7XG4gIC5uYXZiYXItZGVmYXVsdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwICNzdXJ2ZXlDcmVhdG9yQ29udGFpbmVyIC5uYXZiYXItZGVmYXVsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PreviewScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewScoreComponent", function() { return PreviewScoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var PreviewScoreComponent = /** @class */ (function () {
    function PreviewScoreComponent(activatedRoute, dSurveyFormService, titleService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyFormService = dSurveyFormService;
        this.titleService = titleService;
        this.subscriptions = [];
    }
    PreviewScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
        }));
    };
    PreviewScoreComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.titleService.setTitle("UetSurvey - Design - " + _this.surveyFormDetail.title);
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    PreviewScoreComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    PreviewScoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    PreviewScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-preview-score",
            template: __webpack_require__(/*! raw-loader!./preview-score.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.html"),
            styles: [__webpack_require__(/*! ./preview-score.component.scss */ "./src/app/modules/default/modules/create-form/pages/preview-score/preview-score.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], PreviewScoreComponent);
    return PreviewScoreComponent;
}());



/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/summary/summary.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/summary/summary.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0;\n  margin: 0;\n}\n\n.wds-pane {\n  background: #edeeee;\n}\n\n.wds-pane-body {\n  padding: 24px;\n}\n\n.sm-survey-progress-bar {\n  width: 100%;\n  max-width: 1030px;\n  margin: 20px auto;\n}\n\n.sm-survey-progress-bar .sm-survey-progress-bar-link {\n  text-decoration: none;\n}\n\n.sm-survey-progress-bar__steps {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.sm-survey-progress-bar-step {\n  position: relative;\n}\n\n@media (min-width: 576px) {\n  .sm-survey-progress-bar-step-circle {\n    font-size: 32px;\n  }\n\n  .wds-display-sm-block {\n    display: block !important;\n  }\n}\n\n.sm-survey-progress-bar-step-circle {\n  font-size: 24px;\n  display: block;\n  height: 4em;\n  width: 4em;\n  line-height: 4em;\n  margin: 10px auto;\n  text-align: center;\n  color: #6b787f;\n  background-color: #fff;\n  border: 1px dashed #6b787f;\n  border-radius: 50%;\n}\n\n.sm-survey-progress-bar-step-label {\n  position: absolute;\n  left: 50%;\n  width: 200px;\n  text-align: center;\n  font-size: 13px;\n  margin-left: -100px;\n  color: #6b787f;\n}\n\n.wds-icon-svg {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: inherit;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.sm-survey-progress-bar-path {\n  display: block;\n  flex-grow: 1;\n  width: 10px;\n  height: 1px;\n  border-top: 1px dashed #6b787f;\n}\n\n.sm-survey-progress-bar-step-circle-active {\n  color: #00bf6f;\n  border: 1px dashed #00bf6f;\n}\n\n.sm-survey-progress-bar-step-label-active {\n  color: #00bf6f;\n}\n\n.sm-survey-progress-bar-step-circle-active:active,\n.sm-survey-progress-bar-step-circle-active:focus,\n.sm-survey-progress-bar-step-circle-active:hover {\n  border: 1px solid #00bf6f;\n}\n\n.summary-card-title {\n  font-size: 26px;\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 300;\n  margin-bottom: 8px;\n}\n\n.summary-grid {\n  margin: 32px auto;\n}\n\n@media (min-width: 0) {\n  .summary-grid {\n    max-width: none;\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n\n@media (min-width: 576px) {\n  .summary-grid {\n    max-width: 576px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n\n@media (min-width: 768px) {\n  .summary-grid {\n    max-width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n\n@media (min-width: 992px) {\n  .summary-grid {\n    max-width: 992px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .summary-grid {\n    max-width: 1400px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n\n.card {\n  border: 1px solid #edeeee;\n  border-radius: 2px;\n  background: #fff;\n  position: relative;\n  display: block;\n  box-shadow: none;\n  margin-bottom: 16px;\n}\n\n.card-title {\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.survey-info-header {\n  padding: 16px 12px 24px 16px;\n}\n\n.survey-info-header-title {\n  overflow-wrap: break-word;\n  margin-bottom: 16px;\n}\n\n.type-body-sm {\n  font-size: 13px;\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 400;\n}\n\n.survey-info-stats {\n  margin: 0 auto 24px;\n  text-align: center;\n  padding: 12px 0 4px;\n}\n\n.survey-info-stats-cell {\n  display: inline-block;\n}\n\n.survey-info-stats-cell:not(:last-child) {\n  border-right: 1px solid #d0d2d3;\n}\n\n.m-b-1 {\n  margin-bottom: 4px !important;\n}\n\n.survey-info-stats-cell-value .section-title {\n  font-size: 26px;\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 300;\n}\n\n.text-sm {\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 400;\n}\n\n.survey-info-stats-cell-label {\n  font-size: 13px;\n}\n\n.item-text {\n  padding: 16px 12px 16px 16px;\n  border-top: 1px solid #d0d2d3;\n}\n\n.item-action {\n  border-top: 1px solid #d0d2d3;\n}\n\n.item-action .action-list {\n  width: 100%;\n}\n\n.item-action .action-list .action-item {\n  text-decoration: none;\n  transition: background 0.18s linear;\n  min-height: 34.66667px;\n  border-bottom: none;\n  display: flex;\n  background: #fff;\n  position: relative;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  align-items: center;\n}\n\n.item-action .action-list .action-item:hover {\n  transition: background 125ms linear;\n  background: #edeeee;\n  cursor: pointer;\n}\n\n.item-action .action-list .action-item .addon {\n  font-size: 16px;\n  padding-left: 16px;\n  padding: 0 12px 0 16px;\n  color: #333e48;\n  display: flex;\n  align-items: center;\n}\n\n.item-action .action-list .action-item .item-label {\n  color: #333e48;\n  font-weight: 400;\n  flex-grow: 1;\n  margin: 19.5px 0;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.25;\n  min-width: 0;\n}\n\n.mod-body {\n  padding: 24px !important;\n  background-color: #fff;\n  border: 1px solid #edeeee;\n  border-radius: 2px;\n}\n\n.mod-body .ucs-img-wrapper img {\n  display: block;\n  margin: auto !important;\n}\n\n.mod-body .ucs-description {\n  padding-top: 10px;\n}\n\n.btn-analyze-result {\n  height: 40px;\n  float: right;\n}\n\n@media (max-width: 768px) {\n  .btn-analyze-result {\n    height: 30px;\n    width: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  .sm-mt-12 {\n    margin-top: 12px;\n  }\n}\n\n.status-card-response-count {\n  text-decoration: none;\n  display: block;\n  margin-top: 16px;\n  color: #333e48;\n}\n\n.item-label-container {\n  position: relative;\n}\n\n.item-label-container .indicator-draft {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.overall-status {\n  text-decoration: none;\n  display: block;\n  margin-top: 16px;\n}\n\n.status-draft {\n  color: #f05b24;\n}\n\n.status-open {\n  color: #00bf6f;\n}\n\n.response-alerts-status {\n  margin-top: 4px;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.response-alerts-status .response-alerts-status-text {\n  margin-top: 12px;\n  margin-bottom: 13px;\n}\n\n.collector-card {\n  height: 100px;\n}\n\n.collector-card .card-body {\n  padding: 24px;\n}\n\n.collector-card .card-body .responses-container {\n  font-size: 13px;\n  text-align: center;\n  float: right;\n}\n\n.collector-card .card-body .responses-container .responses-count {\n  font-size: 18px;\n  line-height: 1;\n}\n\n.collector-card .card-body .responses-container .responses-label {\n  font-weight: 400;\n  margin-top: 4px !important;\n}\n\n.collector-card .card-body .responses-container .responses-label .responses-label-title {\n  font-size: 13px;\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 400;\n}\n\n.collector-card .card-body .collector-card-info {\n  width: 80%;\n  float: left;\n}\n\n.collector-card .card-body .collector-card-info .collector-card-title {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 12px !important;\n}\n\n.collector-card .card-body .collector-date-created {\n  clear: left;\n}\n\n.collector-card .card-body .collector-date-created .collector-date-created-title {\n  font-size: 13px;\n  color: #333e48;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 400;\n}\n\n.collector-card .card-body .card-status {\n  font-size: 13px;\n  position: absolute;\n  top: 0;\n  left: 26px;\n  text-align: center;\n}\n\n.collector-card .card-body .card-status .status-badge-primary {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  font-size: 13px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 0 0 4px 4px;\n  color: #fff;\n  font-weight: 500;\n  padding: 0 13px;\n  white-space: nowrap;\n}\n\n.collector-card .card-body .card-status .status-badge-primary.open {\n  background: #00bf6f;\n}\n\n.collector-card .card-body .card-status .status-badge-primary.closed {\n  background: #f05b24;\n}\n\n.ribbon-and-button {\n  position: relative;\n  margin-top: 20px;\n  height: 65px;\n}\n\n.airplane {\n  position: absolute;\n  height: 100%;\n  width: 80%;\n  background-image: url(/assets/images/airplane_and_twirly_trail.png);\n  background-repeat: no-repeat;\n  background-position: right center;\n}\n\n.button-holder {\n  padding-top: 14px;\n  text-align: center;\n}\n\n.progress-panel {\n  margin-bottom: 10px;\n  background-color: #edeeee;\n  padding: 35px 35px 0px;\n  overflow: hidden;\n}\n\n.progress-panel .x-button {\n  position: absolute;\n  right: 35px;\n  margin-top: -15px;\n  text-align: right;\n  cursor: pointer;\n  color: #ccc;\n  font-size: 26px;\n  z-index: 10;\n}\n\n.progress-panel .dotted-line {\n  z-index: 5;\n  border: 1px dashed #00bf6f;\n  margin: 0px auto;\n  position: absolute;\n  top: 33px;\n  border-bottom: 0px;\n}\n\n.progress-panel ul.progress-badges-list {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  min-width: 530px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item {\n  position: relative;\n  z-index: 6;\n  display: table-cell;\n  width: 1%;\n  text-align: center;\n  vertical-align: top;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .circle {\n  display: inline-block;\n  z-index: 6;\n  margin: auto;\n  height: 78px;\n  width: 78px;\n  border-radius: 50%;\n  border: 1px dashed #00bf6f;\n  background-color: white;\n  font-size: 32px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .circle .smf-icon {\n  color: #00bf6f;\n  line-height: 78px;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item.active .circle {\n  background-color: #00bf6f;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item.active .circle .smf-icon {\n  color: white;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .active-badge .c-label {\n  color: #333e48;\n}\n\n.progress-panel ul.progress-badges-list li.progress-badge-item .c-label {\n  margin: 7px 0px;\n  padding: 10px;\n  font-size: 0.82em;\n  font-weight: 500;\n  color: #00bf6f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL2FwcC9tb2R1bGVzL2RlZmF1bHQvbW9kdWxlcy9jcmVhdGUtZm9ybS9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGVmYXVsdC9tb2R1bGVzL2NyZWF0ZS1mb3JtL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9waGl4dWFuaG9hbi9EZXNpZ24tV2ViLzUuIEFuZ3VsYXIvRHVBbi9Qcml2YXRlLVVFVC1TVVJWRVkvRnJvbnRlbmQvc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURGRTtFQUNFLHFCQUFBO0FDSUo7O0FEREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtBQ0tGOztBREhBO0VBQ0U7SUFDRSxlQUFBO0VDTUY7O0VESkE7SUFDRSx5QkFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDVUY7O0FEUkE7RUFDRSxjRXhFWTtFRnlFWiwwQkFBQTtBQ1dGOztBRFRBO0VBQ0UsY0U1RVk7QUR3RmQ7O0FEVkE7OztFQUdFLHlCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNjRjs7QURaQTtFQUNFLGlCQUFBO0FDZUY7O0FEYkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDZ0JGO0FBQ0Y7O0FEZEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2dCRjtBQUNGOztBRGRBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNnQkY7QUFDRjs7QURkQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDZ0JGO0FBQ0Y7O0FEZEE7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2dCRjtBQUNGOztBRGRBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNpQkY7O0FEZkE7RUFDRSw0QkFBQTtBQ2tCRjs7QURoQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDbUJGOztBRGpCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDcUJGOztBRG5CQTtFQUNFLHFCQUFBO0FDc0JGOztBRHJCRTtFQUNFLCtCQUFBO0FDdUJKOztBRHBCQTtFQUNFLDZCQUFBO0FDdUJGOztBRHBCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUN1Qko7O0FEcEJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDdUJGOztBRHJCQTtFQUNFLGVBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ3lCRjs7QUR2QkE7RUFDRSw2QkFBQTtBQzBCRjs7QUR6QkU7RUFDRSxXQUFBO0FDMkJKOztBRDFCSTtFQUNFLHFCQUFBO0VBRUEsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBR0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EsbUJBQUE7QUM0Qk47O0FEM0JNO0VBRUUsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUM2QlI7O0FEM0JNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0FDNkJSOztBRDNCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUdBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzZCUjs7QUR4QkE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQzJCRjs7QUQxQkU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUM0Qko7O0FEMUJFO0VBQ0UsaUJBQUE7QUM0Qko7O0FEekJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUM0QkY7O0FEMUJBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQzZCRjtBQUNGOztBRDNCQTtFQUNFO0lBQ0UsZ0JBQUE7RUM2QkY7QUFDRjs7QUQzQkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUM2QkY7O0FEM0JBO0VBQ0Usa0JBQUE7QUM4QkY7O0FEN0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQytCSjs7QUQ1QkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQytCRjs7QUQ3QkE7RUFDRSxjQUFBO0FDZ0NGOztBRDlCQTtFQUNFLGNFNVNZO0FENlVkOztBRC9CQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNrQ0Y7O0FEakNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ21DSjs7QURoQ0E7RUFDRSxhQUFBO0FDbUNGOztBRGxDRTtFQUNFLGFBQUE7QUNvQ0o7O0FEbkNJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3FDTjs7QURwQ007RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ3NDUjs7QURwQ007RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FDc0NSOztBRHJDUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUN1Q1Y7O0FEbkNJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNxQ047O0FEcENNO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNzQ1I7O0FEbkNJO0VBQ0UsV0FBQTtBQ3FDTjs7QURwQ007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDc0NSOztBRG5DSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNxQ047O0FEcENNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3NDUjs7QURyQ1E7RUFDRSxtQkV2WEk7QUQ4WmQ7O0FEckNRO0VBQ0UsbUJBQUE7QUN1Q1Y7O0FEakNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNvQ0Y7O0FEbENBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1FQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtBQ3FDRjs7QURuQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDc0NGOztBRHBDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDdUNGOztBRHRDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDd0NKOztBRHRDRTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUN3Q0o7O0FEdENFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDd0NKOztBRHZDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN5Q047O0FEeENNO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQzBDUjs7QUR6Q1E7RUFDRSxjRS9iSTtFRmdjSixpQkFBQTtBQzJDVjs7QUR4Q007RUFDRSx5QkVwY007QUQ4ZWQ7O0FEekNRO0VBQ0UsWUFBQTtBQzJDVjs7QUR2Q1E7RUFDRSxjQUFBO0FDeUNWOztBRHRDTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNFbmRNO0FEMmZkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZWZhdWx0L21vZHVsZXMvY3JlYXRlLWZvcm0vcGFnZXMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xudWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ud2RzLXBhbmUge1xuICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xufVxuLndkcy1wYW5lLWJvZHkge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDMwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICAuc20tc3VydmV5LXByb2dyZXNzLWJhci1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyX19zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItc3RlcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC53ZHMtZGlzcGxheS1zbS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItc3RlcC1jaXJjbGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDRlbTtcbiAgbGluZS1oZWlnaHQ6IDRlbTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNmI3ODdmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIGNvbG9yOiAjNmI3ODdmO1xufVxuLndkcy1pY29uLXN2ZyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItcGF0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNmI3ODdmO1xufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItc3RlcC1jaXJjbGUtYWN0aXZlIHtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICR0aGVtZS1jb2xvcjtcbn1cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbn1cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLXN0ZXAtY2lyY2xlLWFjdGl2ZTphY3RpdmUsXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZS1hY3RpdmU6Zm9jdXMsXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZS1hY3RpdmU6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XG59XG4uc3VtbWFyeS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uc3VtbWFyeS1ncmlkIHtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMCkge1xuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBtYXgtd2lkdGg6IDU3NnB4O1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIG1heC13aWR0aDogOTkycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIH1cbn1cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMzMzZTQ4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zdXJ2ZXktaW5mby1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDEycHggMjRweCAxNnB4O1xufVxuLnN1cnZleS1pbmZvLWhlYWRlci10aXRsZSB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4udHlwZS1ib2R5LXNtIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnN1cnZleS1pbmZvLXN0YXRzIHtcbiAgbWFyZ2luOiAwIGF1dG8gMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDAgNHB4O1xufVxuLnN1cnZleS1pbmZvLXN0YXRzLWNlbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwZDJkMztcbiAgfVxufVxuLm0tYi0xIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG4uc3VydmV5LWluZm8tc3RhdHMtY2VsbC12YWx1ZSB7XG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6ICMzMzNlNDg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxufVxuLnRleHQtc20ge1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnN1cnZleS1pbmZvLXN0YXRzLWNlbGwtbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaXRlbS10ZXh0IHtcbiAgcGFkZGluZzogMTZweCAxMnB4IDE2cHggMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMGQyZDM7XG59XG4uaXRlbS1hY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDJkMztcbiAgLmFjdGlvbi1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYWN0aW9uLWl0ZW0ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMThzIGxpbmVhcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xOHMgbGluZWFyO1xuICAgICAgbWluLWhlaWdodDogMzQuNjY2NjdweDtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMTI1bXMgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDEyNW1zIGxpbmVhcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZWVlZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLmFkZG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweCAwIDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaXRlbS1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjMzMzZTQ4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBtYXJnaW46IDE5LjVweCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubW9kLWJvZHkge1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLnVjcy1pbWctd3JhcHBlciBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC51Y3MtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG4uYnRuLWFuYWx5emUtcmVzdWx0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1hbmFseXplLXJlc3VsdCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNtLW10LTEyIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG59XG4uc3RhdHVzLWNhcmQtcmVzcG9uc2UtY291bnQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBjb2xvcjogIzMzM2U0ODtcbn1cbi5pdGVtLWxhYmVsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmluZGljYXRvci1kcmFmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbn1cbi5vdmVyYWxsLXN0YXR1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uc3RhdHVzLWRyYWZ0IHtcbiAgY29sb3I6ICNmMDViMjQ7XG59XG4uc3RhdHVzLW9wZW4ge1xuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xufVxuLnJlc3BvbnNlLWFsZXJ0cy1zdGF0dXMge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLnJlc3BvbnNlLWFsZXJ0cy1zdGF0dXMtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICB9XG59XG4uY29sbGVjdG9yLWNhcmQge1xuICBoZWlnaHQ6IDEwMHB4O1xuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIC5yZXNwb25zZXMtY29udGFpbmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIC5yZXNwb25zZXMtY291bnQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuICAgICAgLnJlc3BvbnNlcy1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAucmVzcG9uc2VzLWxhYmVsLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6ICMzMzNlNDg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29sbGVjdG9yLWNhcmQtaW5mbyB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAuY29sbGVjdG9yLWNhcmQtdGl0bGUge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29sbGVjdG9yLWRhdGUtY3JlYXRlZCB7XG4gICAgICBjbGVhcjogbGVmdDtcbiAgICAgIC5jb2xsZWN0b3ItZGF0ZS1jcmVhdGVkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzM2U0ODtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cbiAgICAuY2FyZC1zdGF0dXMge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMjZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5zdGF0dXMtYmFkZ2UtcHJpbWFyeSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgJi5vcGVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgJi5jbG9zZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMDViMjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5yaWJib24tYW5kLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuLmFpcnBsYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9haXJwbGFuZV9hbmRfdHdpcmx5X3RyYWlsLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbn1cbi5idXR0b24taG9sZGVyIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9ncmVzcy1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZWU7XG4gIHBhZGRpbmc6IDM1cHggMzVweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC54LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLmRvdHRlZC1saW5lIHtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkdGhlbWUtY29sb3I7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgfVxuICB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDUzMHB4O1xuICAgIGxpLnByb2dyZXNzLWJhZGdlLWl0ZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogNjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICB3aWR0aDogMSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgLmNpcmNsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgei1pbmRleDogNjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIHdpZHRoOiA3OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkdGhlbWUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIC5zbWYtaWNvbiB7XG4gICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNzhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5hY3RpdmUgLmNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgICAgLnNtZi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hY3RpdmUtYmFkZ2Uge1xuICAgICAgICAuYy1sYWJlbCB7XG4gICAgICAgICAgY29sb3I6ICMzMzNlNDg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiA3cHggMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ud2RzLXBhbmUge1xuICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xufVxuXG4ud2RzLXBhbmUtYm9keSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAzMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyIC5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyX19zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItc3RlcC1jaXJjbGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gIC53ZHMtZGlzcGxheS1zbS1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItc3RlcC1jaXJjbGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDRlbTtcbiAgbGluZS1oZWlnaHQ6IDRlbTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yjc4N2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNmI3ODdmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLXN0ZXAtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgY29sb3I6ICM2Yjc4N2Y7XG59XG5cbi53ZHMtaWNvbi1zdmcge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnNtLXN1cnZleS1wcm9ncmVzcy1iYXItcGF0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNmI3ODdmO1xufVxuXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZS1hY3RpdmUge1xuICBjb2xvcjogIzAwYmY2ZjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwMGJmNmY7XG59XG5cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6ICMwMGJmNmY7XG59XG5cbi5zbS1zdXJ2ZXktcHJvZ3Jlc3MtYmFyLXN0ZXAtY2lyY2xlLWFjdGl2ZTphY3RpdmUsXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZS1hY3RpdmU6Zm9jdXMsXG4uc20tc3VydmV5LXByb2dyZXNzLWJhci1zdGVwLWNpcmNsZS1hY3RpdmU6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiZjZmO1xufVxuXG4uc3VtbWFyeS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5zdW1tYXJ5LWdyaWQge1xuICBtYXJnaW46IDMycHggYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDApIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiA1NzZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBtYXgtd2lkdGg6IDk5MnB4O1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG59XG4uY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMzMzZTQ4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1cnZleS1pbmZvLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHggMTJweCAyNHB4IDE2cHg7XG59XG5cbi5zdXJ2ZXktaW5mby1oZWFkZXItdGl0bGUge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udHlwZS1ib2R5LXNtIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3VydmV5LWluZm8tc3RhdHMge1xuICBtYXJnaW46IDAgYXV0byAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMCA0cHg7XG59XG5cbi5zdXJ2ZXktaW5mby1zdGF0cy1jZWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN1cnZleS1pbmZvLXN0YXRzLWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMGQyZDM7XG59XG5cbi5tLWItMSB7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuXG4uc3VydmV5LWluZm8tc3RhdHMtY2VsbC12YWx1ZSAuc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRleHQtc20ge1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3VydmV5LWluZm8tc3RhdHMtY2VsbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW0tdGV4dCB7XG4gIHBhZGRpbmc6IDE2cHggMTJweCAxNnB4IDE2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDBkMmQzO1xufVxuXG4uaXRlbS1hY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QwZDJkMztcbn1cbi5pdGVtLWFjdGlvbiAuYWN0aW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtLWFjdGlvbiAuYWN0aW9uLWxpc3QgLmFjdGlvbi1pdGVtIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xOHMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMThzIGxpbmVhcjtcbiAgbWluLWhlaWdodDogMzQuNjY2NjdweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1hY3Rpb24gLmFjdGlvbi1saXN0IC5hY3Rpb24taXRlbTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMjVtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTI1bXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAjZWRlZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbS1hY3Rpb24gLmFjdGlvbi1saXN0IC5hY3Rpb24taXRlbSAuYWRkb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZzogMCAxMnB4IDAgMTZweDtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtLWFjdGlvbiAuYWN0aW9uLWxpc3QgLmFjdGlvbi1pdGVtIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6ICMzMzNlNDg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogMTkuNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLm1vZC1ib2R5IHtcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubW9kLWJvZHkgLnVjcy1pbWctd3JhcHBlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ubW9kLWJvZHkgLnVjcy1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYnRuLWFuYWx5emUtcmVzdWx0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnRuLWFuYWx5emUtcmVzdWx0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc20tbXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbn1cbi5zdGF0dXMtY2FyZC1yZXNwb25zZS1jb3VudCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiAjMzMzZTQ4O1xufVxuXG4uaXRlbS1sYWJlbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbS1sYWJlbC1jb250YWluZXIgLmluZGljYXRvci1kcmFmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5vdmVyYWxsLXN0YXR1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zdGF0dXMtZHJhZnQge1xuICBjb2xvcjogI2YwNWIyNDtcbn1cblxuLnN0YXR1cy1vcGVuIHtcbiAgY29sb3I6ICMwMGJmNmY7XG59XG5cbi5yZXNwb25zZS1hbGVydHMtc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ucmVzcG9uc2UtYWxlcnRzLXN0YXR1cyAucmVzcG9uc2UtYWxlcnRzLXN0YXR1cy10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmNvbGxlY3Rvci1jYXJkIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5jb2xsZWN0b3ItY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5jb2xsZWN0b3ItY2FyZCAuY2FyZC1ib2R5IC5yZXNwb25zZXMtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jb2xsZWN0b3ItY2FyZCAuY2FyZC1ib2R5IC5yZXNwb25zZXMtY29udGFpbmVyIC5yZXNwb25zZXMtY291bnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmNvbGxlY3Rvci1jYXJkIC5jYXJkLWJvZHkgLnJlc3BvbnNlcy1jb250YWluZXIgLnJlc3BvbnNlcy1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuLmNvbGxlY3Rvci1jYXJkIC5jYXJkLWJvZHkgLnJlc3BvbnNlcy1jb250YWluZXIgLnJlc3BvbnNlcy1sYWJlbCAucmVzcG9uc2VzLWxhYmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzMzM2U0ODtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbGxlY3Rvci1jYXJkIC5jYXJkLWJvZHkgLmNvbGxlY3Rvci1jYXJkLWluZm8ge1xuICB3aWR0aDogODAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb2xsZWN0b3ItY2FyZCAuY2FyZC1ib2R5IC5jb2xsZWN0b3ItY2FyZC1pbmZvIC5jb2xsZWN0b3ItY2FyZC10aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29sbGVjdG9yLWNhcmQgLmNhcmQtYm9keSAuY29sbGVjdG9yLWRhdGUtY3JlYXRlZCB7XG4gIGNsZWFyOiBsZWZ0O1xufVxuLmNvbGxlY3Rvci1jYXJkIC5jYXJkLWJvZHkgLmNvbGxlY3Rvci1kYXRlLWNyZWF0ZWQgLmNvbGxlY3Rvci1kYXRlLWNyZWF0ZWQtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzMzZTQ4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY29sbGVjdG9yLWNhcmQgLmNhcmQtYm9keSAuY2FyZC1zdGF0dXMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sbGVjdG9yLWNhcmQgLmNhcmQtYm9keSAuY2FyZC1zdGF0dXMgLnN0YXR1cy1iYWRnZS1wcmltYXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNvbGxlY3Rvci1jYXJkIC5jYXJkLWJvZHkgLmNhcmQtc3RhdHVzIC5zdGF0dXMtYmFkZ2UtcHJpbWFyeS5vcGVuIHtcbiAgYmFja2dyb3VuZDogIzAwYmY2Zjtcbn1cbi5jb2xsZWN0b3ItY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXN0YXR1cyAuc3RhdHVzLWJhZGdlLXByaW1hcnkuY2xvc2VkIHtcbiAgYmFja2dyb3VuZDogI2YwNWIyNDtcbn1cblxuLnJpYmJvbi1hbmQtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbi5haXJwbGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWlycGxhbmVfYW5kX3R3aXJseV90cmFpbC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG59XG5cbi5idXR0b24taG9sZGVyIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZTtcbiAgcGFkZGluZzogMzVweCAzNXB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9ncmVzcy1wYW5lbCAueC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgei1pbmRleDogMTA7XG59XG4ucHJvZ3Jlc3MtcGFuZWwgLmRvdHRlZC1saW5lIHtcbiAgei1pbmRleDogNTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwMGJmNmY7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzM3B4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4ucHJvZ3Jlc3MtcGFuZWwgdWwucHJvZ3Jlc3MtYmFkZ2VzLWxpc3Qge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNTMwcHg7XG59XG4ucHJvZ3Jlc3MtcGFuZWwgdWwucHJvZ3Jlc3MtYmFkZ2VzLWxpc3QgbGkucHJvZ3Jlc3MtYmFkZ2UtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ucHJvZ3Jlc3MtcGFuZWwgdWwucHJvZ3Jlc3MtYmFkZ2VzLWxpc3QgbGkucHJvZ3Jlc3MtYmFkZ2UtaXRlbSAuY2lyY2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB6LWluZGV4OiA2O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNzhweDtcbiAgd2lkdGg6IDc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwMGJmNmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMycHg7XG59XG4ucHJvZ3Jlc3MtcGFuZWwgdWwucHJvZ3Jlc3MtYmFkZ2VzLWxpc3QgbGkucHJvZ3Jlc3MtYmFkZ2UtaXRlbSAuY2lyY2xlIC5zbWYtaWNvbiB7XG4gIGNvbG9yOiAjMDBiZjZmO1xuICBsaW5lLWhlaWdodDogNzhweDtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtLmFjdGl2ZSAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmY2Zjtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtLmFjdGl2ZSAuY2lyY2xlIC5zbWYtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtIC5hY3RpdmUtYmFkZ2UgLmMtbGFiZWwge1xuICBjb2xvcjogIzMzM2U0ODtcbn1cbi5wcm9ncmVzcy1wYW5lbCB1bC5wcm9ncmVzcy1iYWRnZXMtbGlzdCBsaS5wcm9ncmVzcy1iYWRnZS1pdGVtIC5jLWxhYmVsIHtcbiAgbWFyZ2luOiA3cHggMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDAuODJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMGJmNmY7XG59IiwiLy8gY29sb3JzXG4kdGhlbWUtY29sb3I6ICMwMGJmNmY7XG4kYnJvd25pc2gtZ3JleTogIzY4Njg2ODtcbiRwYWxlLWdyZXk6ICNlYWVjZWU7XG4kcGFuZWwtYm9yZGVyLWNvbG9yOiAkcGFsZS1ncmV5O1xuJHN1cnZleS1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNoYXJjb2FsLWdyZXk6ICMzZTNmNDI7XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/default/modules/create-form/pages/summary/summary.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/default/modules/create-form/pages/summary/summary.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");







var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(activatedRoute, dSurveyFormService, dSurveyCollectorService, nzMessageService, translateService, loaderService) {
        this.activatedRoute = activatedRoute;
        this.dSurveyFormService = dSurveyFormService;
        this.dSurveyCollectorService = dSurveyCollectorService;
        this.nzMessageService = nzMessageService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.listOfAllSurveyCollect = [];
        this.subscriptions = [];
        this.pagging = {
            page: 1,
            total: 0,
            pageSize: 5
        };
        this.filter = {
            searchKey: "title",
            searchValue: "",
            sortField: "response",
            sortType: "desc",
            filterKey: "surveyFormId",
            filterValue: []
        };
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.params.subscribe(function (params) {
            var surveyFormId = params.surveyFormId;
            _this.getSurveyFormById(surveyFormId);
        }));
    };
    SummaryComponent.prototype.getSurveyFormById = function (surveyFormId) {
        var _this = this;
        this.subscriptions.push(this.dSurveyFormService.getSurveyFormDetail().subscribe(function (res) {
            if (res) {
                _this.surveyFormDetail = res;
                _this.getListSurveyCollector();
                _this.dSurveyFormService.setSurveyFormDetail(null);
            }
        }));
        this.dSurveyFormService.getCacheSurveyFormDetail(surveyFormId);
    };
    SummaryComponent.prototype.getListSurveyCollector = function () {
        var _this = this;
        if (!this.surveyFormDetail.id) {
            return;
        }
        this.filter.filterValue = [this.surveyFormDetail.id];
        this.loaderService.display(true);
        this.dSurveyCollectorService
            .getDefaultSurveyCollectorList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || "", this.filter.filterKey, JSON.stringify(this.filter.filterValue))
            .subscribe(function (res) {
            if (res.status.code === 200) {
                _this.listOfAllSurveyCollect = res.results;
                _this.pagging.total = res.paging.total;
            }
        }, function (err) {
            _this.loaderService.display(false);
            _this.nzMessageService.error(_this.translateService.instant(err.message));
        }, function () {
            _this.loaderService.display(false);
        });
    };
    Object.defineProperty(SummaryComponent.prototype, "displayPageSurvey", {
        get: function () {
            if (!this.surveyFormDetail) {
                return;
            }
            if (!this.surveyFormDetail.json) {
                return 0;
            }
            return this.surveyFormDetail.json["pages"].length;
        },
        enumerable: true,
        configurable: true
    });
    SummaryComponent.prototype.countQuestionSurvey = function (json) {
        var defaultValue = 0;
        if (!json) {
            return defaultValue;
        }
        var total = 0;
        try {
            json.pages.forEach(function (o) {
                if (o.elements && Array.isArray(o.elements)) {
                    total += o.elements.length;
                }
            });
        }
        catch (error) {
            return defaultValue;
        }
        return total >= defaultValue ? total : defaultValue;
    };
    SummaryComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    SummaryComponent.prototype.getLinkCollecttor = function (collectorId, type) {
        switch (type) {
            case "WEBLINK":
                return "/create/collector-responses/collector-link/" + collectorId;
            case "EMAIL":
                return "/create/collector-responses/collector-email/manage/" + collectorId;
            default:
                return "loading";
        }
    };
    SummaryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"] },
        { type: _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }
    ]; };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-summary",
            template: __webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/default/modules/create-form/pages/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/modules/default/modules/create-form/pages/summary/summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyFormService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["DSurveyCollectorService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _app_shared__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-create-form-create-form-module.js.map