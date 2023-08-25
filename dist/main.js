/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
  /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
  /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
  // Imports
  
  
  var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
  ___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
  // Module
  ___CSS_LOADER_EXPORT___.push([module.id, `
  
  body {
      width: 100%;
      font-family: 'Roboto', sans-serif;
  }
  
  #grid {
      width: 100%;
     display: grid;
      grid-template-columns: 1fr 5fr;
      grid-template-rows: 1fr;
  
      justify-items: center;
      height: 100vh;
       }
  
    #projectContainer {
     
      display: flex;
      padding-top: 20px;
      padding-left: 10px;
      align-items: center;
      gap: 10px;
    }
  
    .mainContainer {
      height: 100%;
      width: 100%;
      background-color: #edebe4;
    }
  
   #projectDelete {
      background-color: red;
      color: white;
      border-radius: 10px;
      padding: 5px;
   }
  
   #deleteButton {
      background-color: red;
      border-radius: 10px;
      color: white;
      padding: 5px;
   }
  
   #timetab {
      padding: 20px;
  
   }
  
   #menuContainer {
      background-color: gray;
      height: 100%;
      text-align: center;
      color: white;
   }
  
   .th1 {
      width: 50vw;
   }
  
   .th2 {
      width: 15vw;
   }
  
   #title {
      text-align: center;
      font-size: 30px;
   }
  
   tr {
     font-size: 18px;
   }
  
   .th3 {
      width: 10vw;
   }
  
   #row {
      background-color: grey;
      color: white;
   }
  
   td {
      padding: 10px;
   }
    
   #cell4 {
      background-color: #edebe4;
   }
  
   .submitButton {
      padding: 5px;
      background-color: white;
      border-radius: 10px;
   }
  
   .submit {
      padding: 5px;
   }
  
   #description {
      width: 60vw
   }
  
  .submitproject {
      padding: 5px;
  }
  
  .label {
      padding: 10px;
  }
  `, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";;AAKA;IACI,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,WAAW;GACZ,aAAa;IACZ,8BAA8B;IAC9B,uBAAuB;;IAEvB,qBAAqB;IACrB,aAAa;KACZ;;EAEH;;IAEE,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yBAAyB;EAC3B;;CAED;IACG,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,YAAY;CACf;;CAEA;IACG,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,YAAY;CACf;;CAEA;IACG,aAAa;;CAEhB;;CAEA;IACG,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,YAAY;CACf;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,kBAAkB;IAClB,eAAe;CAClB;;CAEA;GACE,eAAe;CACjB;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,sBAAsB;IACtB,YAAY;CACf;;CAEA;IACG,aAAa;CAChB;;CAEA;IACG,yBAAyB;CAC5B;;CAEA;IACG,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;CACtB;;CAEA;IACG,YAAY;CACf;;CAEA;IACG;CACH;;AAED;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n\nbody {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n}\n\n#grid {\n    width: 100%;\n   display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr;\n\n    justify-items: center;\n    height: 100vh;\n     }\n\n  #projectContainer {\n   \n    display: flex;\n    padding-top: 20px;\n    padding-left: 10px;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .mainContainer {\n    height: 100%;\n    width: 100%;\n    background-color: #edebe4;\n  }\n\n #projectDelete {\n    background-color: red;\n    color: white;\n    border-radius: 10px;\n    padding: 5px;\n }\n\n #deleteButton {\n    background-color: red;\n    border-radius: 10px;\n    color: white;\n    padding: 5px;\n }\n\n #timetab {\n    padding: 20px;\n\n }\n\n #menuContainer {\n    background-color: gray;\n    height: 100%;\n    text-align: center;\n    color: white;\n }\n\n .th1 {\n    width: 50vw;\n }\n\n .th2 {\n    width: 15vw;\n }\n\n #title {\n    text-align: center;\n    font-size: 30px;\n }\n\n tr {\n   font-size: 18px;\n }\n\n .th3 {\n    width: 10vw;\n }\n\n #row {\n    background-color: grey;\n    color: white;\n }\n\n td {\n    padding: 10px;\n }\n  \n #cell4 {\n    background-color: #edebe4;\n }\n\n .submitButton {\n    padding: 5px;\n    background-color: white;\n    border-radius: 10px;\n }\n\n .submit {\n    padding: 5px;\n }\n\n #description {\n    width: 60vw\n }\n\n.submitproject {\n    padding: 5px;\n}\n\n.label {\n    padding: 10px;\n}\n"],"sourceRoot":""}]);
  // Exports
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
  
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  module.exports = function (cssWithMappingToString) {
    var list = [];
  
    // return the list of modules as css string
    list.toString = function toString() {
      return this.map(function (item) {
        var content = "";
        var needLayer = typeof item[5] !== "undefined";
        if (item[4]) {
          content += "@supports (".concat(item[4], ") {");
        }
        if (item[2]) {
          content += "@media ".concat(item[2], " {");
        }
        if (needLayer) {
          content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
        }
        content += cssWithMappingToString(item);
        if (needLayer) {
          content += "}";
        }
        if (item[2]) {
          content += "}";
        }
        if (item[4]) {
          content += "}";
        }
        return content;
      }).join("");
    };
  
    // import a list of modules into the list
    list.i = function i(modules, media, dedupe, supports, layer) {
      if (typeof modules === "string") {
        modules = [[null, modules, undefined]];
      }
      var alreadyImportedModules = {};
      if (dedupe) {
        for (var k = 0; k < this.length; k++) {
          var id = this[k][0];
          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }
      }
      for (var _k = 0; _k < modules.length; _k++) {
        var item = [].concat(modules[_k]);
        if (dedupe && alreadyImportedModules[item[0]]) {
          continue;
        }
        if (typeof layer !== "undefined") {
          if (typeof item[5] === "undefined") {
            item[5] = layer;
          } else {
            item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
            item[5] = layer;
          }
        }
        if (media) {
          if (!item[2]) {
            item[2] = media;
          } else {
            item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
            item[2] = media;
          }
        }
        if (supports) {
          if (!item[4]) {
            item[4] = "".concat(supports);
          } else {
            item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
            item[4] = supports;
          }
        }
        list.push(item);
      }
    };
    return list;
  };
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
  /*!************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
    \************************************************************/
  /***/ ((module) => {
  
  
  
  module.exports = function (item) {
    var content = item[1];
    var cssMapping = item[3];
    if (!cssMapping) {
      return content;
    }
    if (typeof btoa === "function") {
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      var sourceMapping = "/*# ".concat(data, " */");
      return [content].concat([sourceMapping]).join("\n");
    }
    return [content].join("\n");
  };
  
  /***/ }),
  
  /***/ "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");
  
        
        
        
        
        
        
        
        
        
  
  var options = {};
  
  options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
  options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
  
        options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      
  options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
  options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
  
  var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);
  
  
  
  
         /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);
  
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  
  
  var stylesInDOM = [];
  function getIndexByIdentifier(identifier) {
    var result = -1;
    for (var i = 0; i < stylesInDOM.length; i++) {
      if (stylesInDOM[i].identifier === identifier) {
        result = i;
        break;
      }
    }
    return result;
  }
  function modulesToDom(list, options) {
    var idCountMap = {};
    var identifiers = [];
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = options.base ? item[0] + options.base : item[0];
      var count = idCountMap[id] || 0;
      var identifier = "".concat(id, " ").concat(count);
      idCountMap[id] = count + 1;
      var indexByIdentifier = getIndexByIdentifier(identifier);
      var obj = {
        css: item[1],
        media: item[2],
        sourceMap: item[3],
        supports: item[4],
        layer: item[5]
      };
      if (indexByIdentifier !== -1) {
        stylesInDOM[indexByIdentifier].references++;
        stylesInDOM[indexByIdentifier].updater(obj);
      } else {
        var updater = addElementStyle(obj, options);
        options.byIndex = i;
        stylesInDOM.splice(i, 0, {
          identifier: identifier,
          updater: updater,
          references: 1
        });
      }
      identifiers.push(identifier);
    }
    return identifiers;
  }
  function addElementStyle(obj, options) {
    var api = options.domAPI(options);
    api.update(obj);
    var updater = function updater(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
          return;
        }
        api.update(obj = newObj);
      } else {
        api.remove();
      }
    };
    return updater;
  }
  module.exports = function (list, options) {
    options = options || {};
    list = list || [];
    var lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
      newList = newList || [];
      for (var i = 0; i < lastIdentifiers.length; i++) {
        var identifier = lastIdentifiers[i];
        var index = getIndexByIdentifier(identifier);
        stylesInDOM[index].references--;
      }
      var newLastIdentifiers = modulesToDom(newList, options);
      for (var _i = 0; _i < lastIdentifiers.length; _i++) {
        var _identifier = lastIdentifiers[_i];
        var _index = getIndexByIdentifier(_identifier);
        if (stylesInDOM[_index].references === 0) {
          stylesInDOM[_index].updater();
          stylesInDOM.splice(_index, 1);
        }
      }
      lastIdentifiers = newLastIdentifiers;
    };
  };
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  
  
  var memo = {};
  
  /* istanbul ignore next  */
  function getTarget(target) {
    if (typeof memo[target] === "undefined") {
      var styleTarget = document.querySelector(target);
  
      // Special case to return head of iframe instead of iframe itself
      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }
      memo[target] = styleTarget;
    }
    return memo[target];
  }
  
  /* istanbul ignore next  */
  function insertBySelector(insert, style) {
    var target = getTarget(insert);
    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }
    target.appendChild(style);
  }
  module.exports = insertBySelector;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function insertStyleElement(options) {
    var element = document.createElement("style");
    options.setAttributes(element, options.attributes);
    options.insert(element, options.options);
    return element;
  }
  module.exports = insertStyleElement;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  
  
  /* istanbul ignore next  */
  function setAttributesWithoutAttributes(styleElement) {
    var nonce =  true ? __webpack_require__.nc : 0;
    if (nonce) {
      styleElement.setAttribute("nonce", nonce);
    }
  }
  module.exports = setAttributesWithoutAttributes;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function apply(styleElement, options, obj) {
    var css = "";
    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }
    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }
    css += obj.css;
    if (needLayer) {
      css += "}";
    }
    if (obj.media) {
      css += "}";
    }
    if (obj.supports) {
      css += "}";
    }
    var sourceMap = obj.sourceMap;
    if (sourceMap && typeof btoa !== "undefined") {
      css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
    }
  
    // For old IE
    /* istanbul ignore if  */
    options.styleTagTransform(css, styleElement, options.options);
  }
  function removeStyleElement(styleElement) {
    // istanbul ignore if
    if (styleElement.parentNode === null) {
      return false;
    }
    styleElement.parentNode.removeChild(styleElement);
  }
  
  /* istanbul ignore next  */
  function domAPI(options) {
    if (typeof document === "undefined") {
      return {
        update: function update() {},
        remove: function remove() {}
      };
    }
    var styleElement = options.insertStyleElement(options);
    return {
      update: function update(obj) {
        apply(styleElement, options, obj);
      },
      remove: function remove() {
        removeStyleElement(styleElement);
      }
    };
  }
  module.exports = domAPI;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function styleTagTransform(css, styleElement) {
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }
  module.exports = styleTagTransform;
  
  /***/ }),
  
  /***/ "./src/dom.js":
  /*!********************!*\
    !*** ./src/dom.js ***!
    \********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   addProjectTabs: () => (/* binding */ addProjectTabs),
  /* harmony export */   displayForm: () => (/* binding */ displayForm),
  /* harmony export */   displayToDos: () => (/* binding */ displayToDos),
  /* harmony export */   form: () => (/* binding */ form),
  /* harmony export */   hideForm: () => (/* binding */ hideForm),
  /* harmony export */   historyTabListener: () => (/* binding */ historyTabListener),
  /* harmony export */   projectForm: () => (/* binding */ projectForm),
  /* harmony export */   projectNow: () => (/* binding */ projectNow),
  /* harmony export */   projectTabListener: () => (/* binding */ projectTabListener),
  /* harmony export */   removeProjectTabs: () => (/* binding */ removeProjectTabs),
  /* harmony export */   selectProject: () => (/* binding */ selectProject)
  /* harmony export */ });
  /* harmony import */ var _factoryfunct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryfunct */ "./src/factoryfunct.js");
  
  
  //set project var
  //let returnProject = []
  //module for current project
  
  const newProject = (() => {
    let currentProjectArray = []
  
    //adds new project
    const changeProject = (newProject) => {
  
      currentProjectArray[0] = (newProject)
    };
    return { currentProjectArray, changeProject };
  })();
  
  
  
  
  projectNow('Inbox')
  
  // display todos
  
  function displayToDos(todoArray) {
  
  //change title
    const title = document.querySelector('#title');
    title.textContent = newProject.currentProjectArray[0];
    
    
  
    for (let i = 0; i < todoArray.length; i++) {
      let table = document.getElementById("todoTable");
      let row = table.insertRow(1);
      row.id = 'row'
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
  
      let cell4 = row.insertCell(3);
      cell4.setAttribute('id', 'cell4');
  
      if (newProject.currentProjectArray[0] == 'Due This Week' 
      || newProject.currentProjectArray[0] == 'Due This Month' ){
  
      cell1.textContent = todoArray[i].description + '(' + todoArray[i].project + ')' ;
      }
  
      if (newProject.currentProjectArray[0] != 'Due This Week' 
      && newProject.currentProjectArray[0] != 'Due This Month' ){
  
      cell1.textContent = todoArray[i].description;
      }
      cell2.textContent = todoArray[i].dueDate;
      cell3.textContent = todoArray[i].priority;
  
      
  
      if (newProject.currentProjectArray[0] != 'Due This Week' 
      && newProject.currentProjectArray[0] != 'Due This Month' ){
      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('id', 'deleteButton');
      deleteButton.setAttribute('value', i);
      deleteButton.textContent = 'Delete'
      cell4.appendChild(deleteButton);
      }
      /*delete button event listener*/
  
      const number = document.querySelectorAll('#deleteButton');
  
      number.forEach((button) => {
  
        button.addEventListener('click', (e) => {
          let value = button.value
  
          deleteToDo(value, todoArray)
          e.stopImmediatePropagation();
  
  
        })
      })
  
  
  
    }
  }
  
  // delete table function when deleting to do **** may just use clear table now
  /*
  function deleteTable(todoArray) {
  
  
  
    for (let i = 1; i < todoArray.length + 2; i++) {
      document.getElementById("todoTable").deleteRow(1);
  
  
    }
  }*/
  
  
  // clear table when adding new item
  function clearTable() {
  
    const rowRem = document.querySelectorAll('#row');
  
    rowRem.forEach(proj => {
      proj.remove();
    });
  
  
  }
  
  
  
  //delete todo
  function deleteToDo(value) {
  
  
  (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteToDoFromProjectArray)(newProject.currentProjectArray[0], value)
  
    clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
  }
  
  
  
  function form() {
  //let todoArray = addToProject()
  
  //let todoArray = returnProjectArray(returnProject[0])
  
    document.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault()
      hideForm()
      const data = Object.fromEntries(new FormData(e.target).entries());
      let descriptionForm = data.description
      let dateForm = data.date
      let priorityForm = data.priority
      let projectForm = projectNow()
  
      let todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0])
     
      if (todoArray.length > 0) {
        clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
      }
      todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0])
     
      ;(0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.addToProject)(projectForm, descriptionForm, dateForm, priorityForm)
     
      displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
     
    
  
    });
    
  }
  
  
  
  
  
  
  
  //project form
  function projectForm() {
    document.getElementById('projform').addEventListener('submit', (e) => {
      e.preventDefault()
      const data = Object.fromEntries(new FormData(e.target).entries());
      let projectForm = data.project
      
      let projectList = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.projectTaken)(projectForm)
  
      if (projectList == -1){
      (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.projectNameArray)(projectForm)
      }
  
  
    });
  }
  //adds new project tabs and buttons
  function addProjectTabs(projectListArray) {
  //const grid = document.getElementById('grid')
    const menu = document.getElementById('menuContainer')
  
  
    for (let i = 0; i < projectListArray.length; i++) {
     
      const projectContainer = document.createElement('div');
  
      projectContainer.id = 'projectContainer';
      const div1 = document.createElement('div');
      div1.id = 'projecttab';
      div1.value = i
      div1.textContent = projectListArray[i]
  
      projectContainer.appendChild(div1);
  
      //buttons
      if (i > 0) {
      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('id', 'projectDelete');
      deleteButton.setAttribute('value', i);
      deleteButton.classList.add(projectListArray[i]);
      deleteButton.textContent = 'Delete'
      projectContainer.appendChild(deleteButton);
      }
     
      
      menu.appendChild(projectContainer)
    //grid.appendChild(menu)
  
    //document.body.appendChild(projectContainer)
    //document.menu.appendChild(menu)
    }
    
    projectDeleteListener()
    projectTabListener()
    
    return
  }
  
  // project delete event listener
  
  function projectDeleteListener() {
    const select = document.querySelectorAll('#projectDelete');
  
    select.forEach((button) => {
  
      button.addEventListener('click', deleteProject)
  
  
    })
  }
  // delete project
  
  function deleteProject (e) {
  
  
  (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromProjectArray)(e.target.className)
  let projectListArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromProjectListArray)(e.target.className)
  
  removeProjectTabs()
  addProjectTabs(projectListArray)
  
  }
  
  
  
  //removes project tabs when refresh
  
  function removeProjectTabs() {
  
    const projectTab = document.querySelectorAll('#projecttab');
  
    projectTab.forEach(proj => {
      proj.remove();
    });
  
    const deleteTab = document.querySelectorAll('#projectDelete');
  
    deleteTab.forEach(proj => {
      proj.remove();
    });
  
    const container = document.querySelectorAll('#projectContainer');
    container.forEach(proj => {
      proj.remove();
    });
  }
  
  
  //project tab event listener
  function projectTabListener() {
    const select = document.querySelectorAll('#projecttab');
  
    select.forEach((button) => {
  
      button.addEventListener('click', selectProject)
  
  
    })
  }
  
  //selects project
  
  function selectProject(e) {
  
    showButton()
  
    newProject.changeProject((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.currentProject)(e.target.value))
    clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]))
  
  
    return (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.currentProject)(e.target.value)
  
  }
  //saves keeps track of current project
  function projectNow(project){
    if (project == undefined) {
      return newProject.currentProjectArray[0]
    }
    
    newProject.changeProject(project)
  
    return newProject.currentProjectArray[0]
  }
  // history tab event listener
  
  function historyTabListener() {
    const select = document.querySelectorAll('#timetab');
  
    select.forEach((button) => {
  
      button.addEventListener('click', selectTime)
  
  
    })
  }
  
  function selectTime (e) {
  
    hideButton()
  
    if (e.target.classList.value == 'week') {
      newProject.changeProject('Due This Week')
      clearTable()
      displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getWeek)())
      
    }
  
    if (e.target.classList.value == 'month') {
      newProject.changeProject('Due This Month')
      clearTable()
      displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)())
  
    }
  
  
  }
  
  //display form
  
  function displayForm() {
  const btn = document.getElementById('showMenu');
  
  btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    form.style.display = 'block';
    btn.style.display = 'none';
  })
  }
  function hideForm() {
  const form = document.getElementById('form');
  form.style.display = 'none';
  const btn = document.getElementById('showMenu');
  btn.style.display = 'block';
  }
  
  function hideButton() { 
    const btn = document.getElementById('showMenu');
  btn.style.display = 'none';
  }
  
  function showButton() {
    const btn = document.getElementById('showMenu');
  btn.style.display = 'block';
  }
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./src/factoryfunct.js":
  /*!*****************************!*\
    !*** ./src/factoryfunct.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   addToProject: () => (/* binding */ addToProject),
  /* harmony export */   currentProject: () => (/* binding */ currentProject),
  /* harmony export */   deleteProjectFromProjectArray: () => (/* binding */ deleteProjectFromProjectArray),
  /* harmony export */   deleteProjectFromProjectListArray: () => (/* binding */ deleteProjectFromProjectListArray),
  /* harmony export */   deleteToDoFromProjectArray: () => (/* binding */ deleteToDoFromProjectArray),
  /* harmony export */   getDaysInMonth: () => (/* binding */ getDaysInMonth),
  /* harmony export */   getStoredArrays: () => (/* binding */ getStoredArrays),
  /* harmony export */   getWeek: () => (/* binding */ getWeek),
  /* harmony export */   projectNameArray: () => (/* binding */ projectNameArray),
  /* harmony export */   projectTaken: () => (/* binding */ projectTaken),
  /* harmony export */   returnProjectArray: () => (/* binding */ returnProjectArray)
  /* harmony export */ });
  /* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
  /* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
  
  
  
  
  
  
  
  
  
  function getStoredArrays() {
    
    let storedTodo1 = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storedToDo)()
    let storedProject1 = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storedProject)()
  
  
  if (storedTodo1 != null) {
  for (let i = 0; i < storedTodo1.length; i++) {
  
    toDo.addToDo(storedTodo1[i])
  }
  }
  
  //displayToDos(toDo.toDoArray)
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayToDos)(returnProjectArray('Inbox'))
  
  if (storedProject1 != null) {
  for (let i = 1; i < storedProject1.length; i++) {
  
    projectList.addProject(storedProject1[i])
  }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectTabs)()
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectTabs)(projectList.projectListArr)
  }
  }
  
  //to do factory funct
  
  const todoFactory = (project, description, dueDate, priority) => {
  
    return { project, description, dueDate, priority };
  
  };
  
  //to do array module
  const toDo = (() => {
    let toDoArray = []
  
    //adds new todos to array
    const addToDo = (newToDo) => {
      console.log(toDo.toDoArray)
      toDoArray.push(newToDo)
    };
  
  
    return { toDoArray, addToDo };
  })();
  
  //project array module
  const projectList = (() => {
  
    let projectListArr = ['Inbox']
  
    //adds new todos to array
    const addProject = (project) => {
  
      projectListArr.push(project)
  
      ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProject)(projectListArr)
    };
  
  
    return { projectListArr, addProject };
  })();
  
  
  /*add to project array*/
  function addToProject(projectName, description, dueDate, priority) {
  
    if (description == undefined) {
      //return projectArray
      return toDo.toDoArray
    }
    toDo.addToDo(todoFactory(projectName, description, dueDate, priority))
  
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeToDo)(toDo.toDoArray)
    
    return toDo.toDoArray
  }
  
  //filter array 
  function returnProjectArray(projectName) {
  
    return toDo.toDoArray.filter(function (x) { return x.project == projectName })
  
    //return projectArray.filter(function (x) { return x.project == projectName })
  
  }
  
  // find the indexes of all projects in the projectArray
  function findProjects(projectFind) {
    let result = [];
  
    toDo.toDoArray.forEach((project, index) => project.project === projectFind ? result.push(index) : null)
    //projectArray.forEach((project, index) => project.project === projectFind ? result.push(index) : null)
  
    return result
  }
  
  //delete todo from array
  
  function deleteToDoFromProjectArray(project, value) {
  
    let projectArr = findProjects(project)
  
    toDo.toDoArray.splice(projectArr[value], 1)
  
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeToDo)(toDo.toDoArray)
  
    return toDo.toDoArray
  }
  
  // delete project from array
  
  function deleteProjectFromProjectArray(project) {
  
    function recursion() {
  
      let projectArr = findProjects(project)
      if (projectArr.length == 0) {
  
        return toDo.toDoArray
      }
  
      toDo.toDoArray.splice(projectArr[0], 1)
  
      
      recursion()
  
    }
    recursion()
  }
  
  // delete project from projectlistarray
  
  function deleteProjectFromProjectListArray(project) {
  
    
  
    let index = projectList.projectListArr.indexOf(project)
  
    projectList.projectListArr.splice(index, 1)
  
  ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProject)(projectList.projectListArr)
  
    return projectList.projectListArr
  
  }
  
  
  
  
  // project name array for new projects
  
  
  function projectNameArray(projectName) {
  
    projectList.addProject(projectName)
  
  
    if (projectList.projectListArr.length > 1) {
  
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectTabs)()
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectTabs)(projectList.projectListArr)
  
    //return projectListArray
  }
  
  function projectTaken(project) {
  
    return projectList.projectListArr.indexOf(project)
  
  }
  
  function currentProject(arrayNumber) {
  
    if (projectList.projectListArr.length == 1) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectNow)(projectList.projectListArr[0])
      return projectList.projectListArr[0]
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectNow)(projectList.projectListArr[arrayNumber])
    return (projectList.projectListArr[arrayNumber])
  
  }
  
  //get dates for the week
  function getWeek() {
    let curr = new Date
    let week = []
  
    for (let i = 0; i <= 6; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
    }
    //push new array with todos for the week
    let result = [];
    for (let i = 0; i < week.length; i++) {
      let weekResult = week[i]
      toDo.toDoArray.forEach((project, index) => project.dueDate === weekResult ? result.push(index) : null)
  
    }
  
    let weekArray = []
    for (let i = 0; i < result.length; i++) {
  
      weekArray.push(toDo.toDoArray[result[i]])
    }
    
    return weekArray
  }
  
  
  
  //get days of the month
  
  function getDaysInMonth() {
    const d = new Date();
    let month = d.getMonth()
    let year = d.getFullYear()
  
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toISOString().slice(0, 10));
      date.setDate(date.getDate() + 1);
    }
  
    let result = [];
    for (let i = 0; i < days.length; i++) {
      let monthResult = days[i]
      toDo.toDoArray.forEach((project, index) => project.dueDate === monthResult ? result.push(index) : null)
  
    }
  
    let monthArray = []
    for (let i = 0; i < result.length; i++) {
  
      monthArray.push(toDo.toDoArray[result[i]])
    }
    
    return monthArray
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./src/storage.js":
  /*!************************!*\
    !*** ./src/storage.js ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   storeProject: () => (/* binding */ storeProject),
  /* harmony export */   storeToDo: () => (/* binding */ storeToDo),
  /* harmony export */   storedProject: () => (/* binding */ storedProject),
  /* harmony export */   storedToDo: () => (/* binding */ storedToDo)
  /* harmony export */ });
  //import {  } from './factoryfunct';
  
  function storeToDo(toDoArray) {
      console.log(toDoArray)
      console.log('storage')
  
      localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
  
  
  }
  
  function storeProject(projectArray) {
  
      localStorage.setItem("projectArray", JSON.stringify(projectArray));
  
  }
  
  function storedToDo() {
  
      let storedToDos = JSON.parse(localStorage.getItem("toDoArray"));
      return storedToDos
  }
  
  function storedProject() {
  
      //localStorage.removeItem("projectArray");
  
      let storedProjects = JSON.parse(localStorage.getItem("projectArray")); 
      return storedProjects
  
  }
  
  
  
  
  
  
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/nonce */
  /******/ 	(() => {
  /******/ 		__webpack_require__.nc = undefined;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
  /* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
  /* harmony import */ var _factoryfunct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factoryfunct */ "./src/factoryfunct.js");
  
  
  
  
  
  
  
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.form)()
  ;(0,_factoryfunct__WEBPACK_IMPORTED_MODULE_2__.getStoredArrays)()
  
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayForm)()
  
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.hideForm)()
  
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectForm)()
  
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.historyTabListener)()
  
  ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectTabListener)()
  
  
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNDc0I7QUFDaUY7QUFDeEQ7Ozs7QUFJL0MsMENBQUk7QUFDSiwrREFBZTs7QUFFZixrREFBVzs7QUFFWCwrQ0FBUTs7QUFFUixrREFBVzs7QUFFWCx5REFBa0I7O0FBRWxCLHlEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZhY3RvcnlmdW5jdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbiNncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgIH1cblxuICAjcHJvamVjdENvbnRhaW5lciB7XG4gICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5tYWluQ29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcbiAgfVxuXG4gI3Byb2plY3REZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gfVxuXG4gI2RlbGV0ZUJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiB9XG5cbiAjdGltZXRhYiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuIH1cblxuICNtZW51Q29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuIH1cblxuIC50aDEge1xuICAgIHdpZHRoOiA1MHZ3O1xuIH1cblxuIC50aDIge1xuICAgIHdpZHRoOiAxNXZ3O1xuIH1cblxuICN0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiB9XG5cbiB0ciB7XG4gICBmb250LXNpemU6IDE4cHg7XG4gfVxuXG4gLnRoMyB7XG4gICAgd2lkdGg6IDEwdnc7XG4gfVxuXG4gI3JvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuXG4gdGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gfVxuICBcbiAjY2VsbDQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGViZTQ7XG4gfVxuXG4gLnN1Ym1pdEJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gfVxuXG4gLnN1Ym1pdCB7XG4gICAgcGFkZGluZzogNXB4O1xuIH1cblxuICNkZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDYwdndcbiB9XG5cbi5zdWJtaXRwcm9qZWN0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sYWJlbCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFLQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0dBQ1osYUFBYTtJQUNaLDhCQUE4QjtJQUM5Qix1QkFBdUI7O0lBRXZCLHFCQUFxQjtJQUNyQixhQUFhO0tBQ1o7O0VBRUg7O0lBRUUsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztDQUVEO0lBQ0cscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztDQUVBO0lBQ0cscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtDQUNmOztDQUVBO0lBQ0csYUFBYTs7Q0FFaEI7O0NBRUE7SUFDRyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxzQkFBc0I7SUFDdEIsWUFBWTtDQUNmOztDQUVBO0lBQ0csYUFBYTtDQUNoQjs7Q0FFQTtJQUNHLHlCQUF5QjtDQUM1Qjs7Q0FFQTtJQUNHLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztDQUVBO0lBQ0csWUFBWTtDQUNmOztDQUVBO0lBQ0c7Q0FDSDs7QUFFRDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2dyaWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgICB9XFxuXFxuICAjcHJvamVjdENvbnRhaW5lciB7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5tYWluQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcXG4gIH1cXG5cXG4gI3Byb2plY3REZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiB9XFxuXFxuICNkZWxldGVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiB9XFxuXFxuICN0aW1ldGFiIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gfVxcblxcbiAjbWVudUNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuIH1cXG5cXG4gLnRoMSB7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiB9XFxuXFxuIC50aDIge1xcbiAgICB3aWR0aDogMTV2dztcXG4gfVxcblxcbiAjdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gfVxcblxcbiB0ciB7XFxuICAgZm9udC1zaXplOiAxOHB4O1xcbiB9XFxuXFxuIC50aDMge1xcbiAgICB3aWR0aDogMTB2dztcXG4gfVxcblxcbiAjcm93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiB9XFxuXFxuIHRkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gfVxcbiAgXFxuICNjZWxsNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGViZTQ7XFxuIH1cXG5cXG4gLnN1Ym1pdEJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIH1cXG5cXG4gLnN1Ym1pdCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gfVxcblxcbiAjZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogNjB2d1xcbiB9XFxuXFxuLnN1Ym1pdHByb2plY3Qge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZFRvUHJvamVjdCxcbiAgIHByb2plY3ROYW1lQXJyYXksIFxuICAgY3VycmVudFByb2plY3QsIFxuICAgcmV0dXJuUHJvamVjdEFycmF5LCBcbiAgIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5LFxuICAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0QXJyYXksXG4gICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gICBwcm9qZWN0VGFrZW4sXG4gICBnZXRXZWVrLFxuICAgZ2V0RGF5c0luTW9udGhcbiAgIH0gZnJvbSAnLi9mYWN0b3J5ZnVuY3QnO1xuXG4vL3NldCBwcm9qZWN0IHZhclxuLy9sZXQgcmV0dXJuUHJvamVjdCA9IFtdXG4vL21vZHVsZSBmb3IgY3VycmVudCBwcm9qZWN0XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IFtdXG5cbiAgLy9hZGRzIG5ldyBwcm9qZWN0XG4gIGNvbnN0IGNoYW5nZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuXG4gICAgY3VycmVudFByb2plY3RBcnJheVswXSA9IChuZXdQcm9qZWN0KVxuICB9O1xuICByZXR1cm4geyBjdXJyZW50UHJvamVjdEFycmF5LCBjaGFuZ2VQcm9qZWN0IH07XG59KSgpO1xuXG5cblxuXG5wcm9qZWN0Tm93KCdJbmJveCcpXG5cbi8vIGRpc3BsYXkgdG9kb3NcblxuZnVuY3Rpb24gZGlzcGxheVRvRG9zKHRvZG9BcnJheSkge1xuXG4vL2NoYW5nZSB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXTtcbiAgXG4gIFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGFibGVcIik7XG4gICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygxKTtcbiAgICByb3cuaWQgPSAncm93J1xuICAgIGxldCBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApO1xuICAgIGxldCBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDEpO1xuICAgIGxldCBjZWxsMyA9IHJvdy5pbnNlcnRDZWxsKDIpO1xuXG4gICAgbGV0IGNlbGw0ID0gcm93Lmluc2VydENlbGwoMyk7XG4gICAgY2VsbDQuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxsNCcpO1xuXG4gICAgaWYgKG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSA9PSAnRHVlIFRoaXMgV2VlaycgXG4gICAgfHwgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdID09ICdEdWUgVGhpcyBNb250aCcgKXtcblxuICAgIGNlbGwxLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmRlc2NyaXB0aW9uICsgJygnICsgdG9kb0FycmF5W2ldLnByb2plY3QgKyAnKScgO1xuICAgIH1cblxuICAgIGlmIChuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gIT0gJ0R1ZSBUaGlzIFdlZWsnIFxuICAgICYmIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSAnRHVlIFRoaXMgTW9udGgnICl7XG5cbiAgICBjZWxsMS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgY2VsbDIudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBjZWxsMy50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5wcmlvcml0eTtcblxuICAgIFxuXG4gICAgaWYgKG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSAnRHVlIFRoaXMgV2VlaycgXG4gICAgJiYgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdICE9ICdEdWUgVGhpcyBNb250aCcgKXtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVCdXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgY2VsbDQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG4gICAgLypkZWxldGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyKi9cblxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGVCdXR0b24nKTtcblxuICAgIG51bWJlci5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gYnV0dG9uLnZhbHVlXG5cbiAgICAgICAgZGVsZXRlVG9Ebyh2YWx1ZSwgdG9kb0FycmF5KVxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG5cbiAgICAgIH0pXG4gICAgfSlcblxuXG5cbiAgfVxufVxuXG4vLyBkZWxldGUgdGFibGUgZnVuY3Rpb24gd2hlbiBkZWxldGluZyB0byBkbyAqKioqIG1heSBqdXN0IHVzZSBjbGVhciB0YWJsZSBub3dcbi8qXG5mdW5jdGlvbiBkZWxldGVUYWJsZSh0b2RvQXJyYXkpIHtcblxuXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b2RvQXJyYXkubGVuZ3RoICsgMjsgaSsrKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGFibGVcIikuZGVsZXRlUm93KDEpO1xuXG5cbiAgfVxufSovXG5cblxuLy8gY2xlYXIgdGFibGUgd2hlbiBhZGRpbmcgbmV3IGl0ZW1cbmZ1bmN0aW9uIGNsZWFyVGFibGUoKSB7XG5cbiAgY29uc3Qgcm93UmVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3JvdycpO1xuXG4gIHJvd1JlbS5mb3JFYWNoKHByb2ogPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xuXG5cbn1cblxuXG5cbi8vZGVsZXRlIHRvZG9cbmZ1bmN0aW9uIGRlbGV0ZVRvRG8odmFsdWUpIHtcblxuXG5kZWxldGVUb0RvRnJvbVByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0sIHZhbHVlKVxuXG4gIGNsZWFyVGFibGUocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG4gIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSlcbn1cblxuXG5cbmZ1bmN0aW9uIGZvcm0oKSB7XG4vL2xldCB0b2RvQXJyYXkgPSBhZGRUb1Byb2plY3QoKVxuXG4vL2xldCB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaGlkZUZvcm0oKVxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KS5lbnRyaWVzKCkpO1xuICAgIGxldCBkZXNjcmlwdGlvbkZvcm0gPSBkYXRhLmRlc2NyaXB0aW9uXG4gICAgbGV0IGRhdGVGb3JtID0gZGF0YS5kYXRlXG4gICAgbGV0IHByaW9yaXR5Rm9ybSA9IGRhdGEucHJpb3JpdHlcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBwcm9qZWN0Tm93KClcblxuICAgIGxldCB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKVxuICAgXG4gICAgaWYgKHRvZG9BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBjbGVhclRhYmxlKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxuICAgIH1cbiAgICB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKVxuICAgXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3RGb3JtLCBkZXNjcmlwdGlvbkZvcm0sIGRhdGVGb3JtLCBwcmlvcml0eUZvcm0pXG4gICBcbiAgICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG4gICBcbiAgXG5cbiAgfSk7XG4gIFxufVxuXG5cblxuXG5cblxuXG4vL3Byb2plY3QgZm9ybVxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG4gICAgbGV0IHByb2plY3RGb3JtID0gZGF0YS5wcm9qZWN0XG4gICAgXG4gICAgbGV0IHByb2plY3RMaXN0ID0gcHJvamVjdFRha2VuKHByb2plY3RGb3JtKVxuXG4gICAgaWYgKHByb2plY3RMaXN0ID09IC0xKXtcbiAgICBwcm9qZWN0TmFtZUFycmF5KHByb2plY3RGb3JtKVxuICAgIH1cblxuXG4gIH0pO1xufVxuLy9hZGRzIG5ldyBwcm9qZWN0IHRhYnMgYW5kIGJ1dHRvbnNcbmZ1bmN0aW9uIGFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpIHtcbi8vY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkJylcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Q29udGFpbmVyJylcblxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0Q29udGFpbmVyJztcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MS5pZCA9ICdwcm9qZWN0dGFiJztcbiAgICBkaXYxLnZhbHVlID0gaVxuICAgIGRpdjEudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjEpO1xuXG4gICAgLy9idXR0b25zXG4gICAgaWYgKGkgPiAwKSB7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdERlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaSk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdExpc3RBcnJheVtpXSk7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxuICAgXG4gICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAvL2dyaWQuYXBwZW5kQ2hpbGQobWVudSlcblxuICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgLy9kb2N1bWVudC5tZW51LmFwcGVuZENoaWxkKG1lbnUpXG4gIH1cbiAgXG4gIHByb2plY3REZWxldGVMaXN0ZW5lcigpXG4gIHByb2plY3RUYWJMaXN0ZW5lcigpXG4gIFxuICByZXR1cm5cbn1cblxuLy8gcHJvamVjdCBkZWxldGUgZXZlbnQgbGlzdGVuZXJcblxuZnVuY3Rpb24gcHJvamVjdERlbGV0ZUxpc3RlbmVyKCkge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdERlbGV0ZScpO1xuXG4gIHNlbGVjdC5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpXG5cblxuICB9KVxufVxuLy8gZGVsZXRlIHByb2plY3RcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCAoZSkge1xuXG5cbmRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5KGUudGFyZ2V0LmNsYXNzTmFtZSlcbmxldCBwcm9qZWN0TGlzdEFycmF5ID0gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5KGUudGFyZ2V0LmNsYXNzTmFtZSlcblxucmVtb3ZlUHJvamVjdFRhYnMoKVxuYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3RBcnJheSlcblxufVxuXG5cblxuLy9yZW1vdmVzIHByb2plY3QgdGFicyB3aGVuIHJlZnJlc2hcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRhYnMoKSB7XG5cbiAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0dGFiJyk7XG5cbiAgcHJvamVjdFRhYi5mb3JFYWNoKHByb2ogPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0RGVsZXRlJyk7XG5cbiAgZGVsZXRlVGFiLmZvckVhY2gocHJvaiA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RDb250YWluZXInKTtcbiAgY29udGFpbmVyLmZvckVhY2gocHJvaiA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG59XG5cblxuLy9wcm9qZWN0IHRhYiBldmVudCBsaXN0ZW5lclxuZnVuY3Rpb24gcHJvamVjdFRhYkxpc3RlbmVyKCkge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHRhYicpO1xuXG4gIHNlbGVjdC5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFByb2plY3QpXG5cblxuICB9KVxufVxuXG4vL3NlbGVjdHMgcHJvamVjdFxuXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KGUpIHtcblxuICBzaG93QnV0dG9uKClcblxuICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3QoY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpKVxuICBjbGVhclRhYmxlKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxuICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG5cblxuICByZXR1cm4gY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpXG5cbn1cbi8vc2F2ZXMga2VlcHMgdHJhY2sgb2YgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBwcm9qZWN0Tm93KHByb2plY3Qpe1xuICBpZiAocHJvamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdXG4gIH1cbiAgXG4gIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdChwcm9qZWN0KVxuXG4gIHJldHVybiBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF1cbn1cbi8vIGhpc3RvcnkgdGFiIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIGhpc3RvcnlUYWJMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RpbWV0YWInKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUaW1lKVxuXG5cbiAgfSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0VGltZSAoZSkge1xuXG4gIGhpZGVCdXR0b24oKVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gJ3dlZWsnKSB7XG4gICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KCdEdWUgVGhpcyBXZWVrJylcbiAgICBjbGVhclRhYmxlKClcbiAgICBkaXNwbGF5VG9Eb3MoZ2V0V2VlaygpKVxuICAgIFxuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSAnbW9udGgnKSB7XG4gICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KCdEdWUgVGhpcyBNb250aCcpXG4gICAgY2xlYXJUYWJsZSgpXG4gICAgZGlzcGxheVRvRG9zKGdldERheXNJbk1vbnRoKCkpXG5cbiAgfVxuXG5cbn1cblxuLy9kaXNwbGF5IGZvcm1cblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd01lbnUnKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KVxufVxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93TWVudScpO1xuYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlQnV0dG9uKCkgeyBcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dNZW51Jyk7XG5idG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gc2hvd0J1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dNZW51Jyk7XG5idG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmV4cG9ydCB7XG4gIGZvcm0sXG4gIHByb2plY3RGb3JtLFxuICBhZGRQcm9qZWN0VGFicyxcbiAgcmVtb3ZlUHJvamVjdFRhYnMsXG4gIHNlbGVjdFByb2plY3QsXG4gIHByb2plY3ROb3csXG4gIGhpc3RvcnlUYWJMaXN0ZW5lcixcbiAgcHJvamVjdFRhYkxpc3RlbmVyLFxuICBkaXNwbGF5VG9Eb3MsXG4gIGRpc3BsYXlGb3JtLFxuICBoaWRlRm9ybVxufTtcblxuXG4iLCJcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZFByb2plY3RUYWJzLCByZW1vdmVQcm9qZWN0VGFicywgcHJvamVjdE5vdywgZGlzcGxheVRvRG9zIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgc3RvcmVUb0RvLCBzdG9yZVByb2plY3QsIHN0b3JlZFRvRG8sIHN0b3JlZFByb2plY3QgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cblxuZnVuY3Rpb24gZ2V0U3RvcmVkQXJyYXlzKCkge1xuICBcbiAgbGV0IHN0b3JlZFRvZG8xID0gc3RvcmVkVG9EbygpXG4gIGxldCBzdG9yZWRQcm9qZWN0MSA9IHN0b3JlZFByb2plY3QoKVxuXG5cbmlmIChzdG9yZWRUb2RvMSAhPSBudWxsKSB7XG5mb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFRvZG8xLmxlbmd0aDsgaSsrKSB7XG5cbiAgdG9Eby5hZGRUb0RvKHN0b3JlZFRvZG8xW2ldKVxufVxufVxuXG4vL2Rpc3BsYXlUb0Rvcyh0b0RvLnRvRG9BcnJheSlcbmRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkoJ0luYm94JykpXG5cbmlmIChzdG9yZWRQcm9qZWN0MSAhPSBudWxsKSB7XG5mb3IgKGxldCBpID0gMTsgaSA8IHN0b3JlZFByb2plY3QxLmxlbmd0aDsgaSsrKSB7XG5cbiAgcHJvamVjdExpc3QuYWRkUHJvamVjdChzdG9yZWRQcm9qZWN0MVtpXSlcbn1cbiAgcmVtb3ZlUHJvamVjdFRhYnMoKVxuICBhZGRQcm9qZWN0VGFicyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFycilcbn1cbn1cblxuLy90byBkbyBmYWN0b3J5IGZ1bmN0XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gIHJldHVybiB7IHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xuXG59O1xuXG4vL3RvIGRvIGFycmF5IG1vZHVsZVxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XG4gIGxldCB0b0RvQXJyYXkgPSBbXVxuXG4gIC8vYWRkcyBuZXcgdG9kb3MgdG8gYXJyYXlcbiAgY29uc3QgYWRkVG9EbyA9IChuZXdUb0RvKSA9PiB7XG4gICAgY29uc29sZS5sb2codG9Eby50b0RvQXJyYXkpXG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9EbylcbiAgfTtcblxuXG4gIHJldHVybiB7IHRvRG9BcnJheSwgYWRkVG9EbyB9O1xufSkoKTtcblxuLy9wcm9qZWN0IGFycmF5IG1vZHVsZVxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXG4gIGxldCBwcm9qZWN0TGlzdEFyciA9IFsnSW5ib3gnXVxuXG4gIC8vYWRkcyBuZXcgdG9kb3MgdG8gYXJyYXlcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBwcm9qZWN0TGlzdEFyci5wdXNoKHByb2plY3QpXG5cbiAgICBzdG9yZVByb2plY3QocHJvamVjdExpc3RBcnIpXG4gIH07XG5cblxuICByZXR1cm4geyBwcm9qZWN0TGlzdEFyciwgYWRkUHJvamVjdCB9O1xufSkoKTtcblxuXG4vKmFkZCB0byBwcm9qZWN0IGFycmF5Ki9cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdChwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgaWYgKGRlc2NyaXB0aW9uID09IHVuZGVmaW5lZCkge1xuICAgIC8vcmV0dXJuIHByb2plY3RBcnJheVxuICAgIHJldHVybiB0b0RvLnRvRG9BcnJheVxuICB9XG4gIHRvRG8uYWRkVG9Ebyh0b2RvRmFjdG9yeShwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSlcblxuICBzdG9yZVRvRG8odG9Eby50b0RvQXJyYXkpXG4gIFxuICByZXR1cm4gdG9Eby50b0RvQXJyYXlcbn1cblxuLy9maWx0ZXIgYXJyYXkgXG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0QXJyYXkocHJvamVjdE5hbWUpIHtcblxuICByZXR1cm4gdG9Eby50b0RvQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnByb2plY3QgPT0gcHJvamVjdE5hbWUgfSlcblxuICAvL3JldHVybiBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnByb2plY3QgPT0gcHJvamVjdE5hbWUgfSlcblxufVxuXG4vLyBmaW5kIHRoZSBpbmRleGVzIG9mIGFsbCBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdEFycmF5XG5mdW5jdGlvbiBmaW5kUHJvamVjdHMocHJvamVjdEZpbmQpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIHRvRG8udG9Eb0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0LnByb2plY3QgPT09IHByb2plY3RGaW5kID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcbiAgLy9wcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3QucHJvamVjdCA9PT0gcHJvamVjdEZpbmQgPyByZXN1bHQucHVzaChpbmRleCkgOiBudWxsKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy9kZWxldGUgdG9kbyBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5KHByb2plY3QsIHZhbHVlKSB7XG5cbiAgbGV0IHByb2plY3RBcnIgPSBmaW5kUHJvamVjdHMocHJvamVjdClcblxuICB0b0RvLnRvRG9BcnJheS5zcGxpY2UocHJvamVjdEFyclt2YWx1ZV0sIDEpXG5cbiAgc3RvcmVUb0RvKHRvRG8udG9Eb0FycmF5KVxuXG4gIHJldHVybiB0b0RvLnRvRG9BcnJheVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5KHByb2plY3QpIHtcblxuICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XG5cbiAgICBsZXQgcHJvamVjdEFyciA9IGZpbmRQcm9qZWN0cyhwcm9qZWN0KVxuICAgIGlmIChwcm9qZWN0QXJyLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgIHJldHVybiB0b0RvLnRvRG9BcnJheVxuICAgIH1cblxuICAgIHRvRG8udG9Eb0FycmF5LnNwbGljZShwcm9qZWN0QXJyWzBdLCAxKVxuXG4gICAgXG4gICAgcmVjdXJzaW9uKClcblxuICB9XG4gIHJlY3Vyc2lvbigpXG59XG5cbi8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gcHJvamVjdGxpc3RhcnJheVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXkocHJvamVjdCkge1xuXG4gIFxuXG4gIGxldCBpbmRleCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyLmluZGV4T2YocHJvamVjdClcblxuICBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5zcGxpY2UoaW5kZXgsIDEpXG5cbnN0b3JlUHJvamVjdChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFycilcblxuICByZXR1cm4gcHJvamVjdExpc3QucHJvamVjdExpc3RBcnJcblxufVxuXG5cblxuXG4vLyBwcm9qZWN0IG5hbWUgYXJyYXkgZm9yIG5ldyBwcm9qZWN0c1xuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lQXJyYXkocHJvamVjdE5hbWUpIHtcblxuICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKVxuXG5cbiAgaWYgKHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyLmxlbmd0aCA+IDEpIHtcblxuICAgIHJlbW92ZVByb2plY3RUYWJzKClcbiAgfVxuICBhZGRQcm9qZWN0VGFicyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFycilcblxuICAvL3JldHVybiBwcm9qZWN0TGlzdEFycmF5XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUYWtlbihwcm9qZWN0KSB7XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyLmluZGV4T2YocHJvamVjdClcblxufVxuXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdChhcnJheU51bWJlcikge1xuXG4gIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5sZW5ndGggPT0gMSkge1xuICAgIHByb2plY3ROb3cocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbMF0pXG4gICAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyWzBdXG4gIH1cbiAgcHJvamVjdE5vdyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyclthcnJheU51bWJlcl0pXG4gIHJldHVybiAocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbYXJyYXlOdW1iZXJdKVxuXG59XG5cbi8vZ2V0IGRhdGVzIGZvciB0aGUgd2Vla1xuZnVuY3Rpb24gZ2V0V2VlaygpIHtcbiAgbGV0IGN1cnIgPSBuZXcgRGF0ZVxuICBsZXQgd2VlayA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgbGV0IGZpcnN0ID0gY3Vyci5nZXREYXRlKCkgLSBjdXJyLmdldERheSgpICsgaVxuICAgIGxldCBkYXkgPSBuZXcgRGF0ZShjdXJyLnNldERhdGUoZmlyc3QpKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgIHdlZWsucHVzaChkYXkpXG4gIH1cbiAgLy9wdXNoIG5ldyBhcnJheSB3aXRoIHRvZG9zIGZvciB0aGUgd2Vla1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vlay5sZW5ndGg7IGkrKykge1xuICAgIGxldCB3ZWVrUmVzdWx0ID0gd2Vla1tpXVxuICAgIHRvRG8udG9Eb0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0LmR1ZURhdGUgPT09IHdlZWtSZXN1bHQgPyByZXN1bHQucHVzaChpbmRleCkgOiBudWxsKVxuXG4gIH1cblxuICBsZXQgd2Vla0FycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcblxuICAgIHdlZWtBcnJheS5wdXNoKHRvRG8udG9Eb0FycmF5W3Jlc3VsdFtpXV0pXG4gIH1cbiAgXG4gIHJldHVybiB3ZWVrQXJyYXlcbn1cblxuXG5cbi8vZ2V0IGRheXMgb2YgdGhlIG1vbnRoXG5cbmZ1bmN0aW9uIGdldERheXNJbk1vbnRoKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgbGV0IG1vbnRoID0gZC5nZXRNb250aCgpXG4gIGxldCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpXG5cbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XG4gIGxldCBkYXlzID0gW107XG4gIHdoaWxlIChkYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoKSB7XG4gICAgZGF5cy5wdXNoKG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG1vbnRoUmVzdWx0ID0gZGF5c1tpXVxuICAgIHRvRG8udG9Eb0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0LmR1ZURhdGUgPT09IG1vbnRoUmVzdWx0ID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcblxuICB9XG5cbiAgbGV0IG1vbnRoQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuXG4gICAgbW9udGhBcnJheS5wdXNoKHRvRG8udG9Eb0FycmF5W3Jlc3VsdFtpXV0pXG4gIH1cbiAgXG4gIHJldHVybiBtb250aEFycmF5XG5cblxufVxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7XG5cbiAgYWRkVG9Qcm9qZWN0LFxuICBwcm9qZWN0TmFtZUFycmF5LFxuICBjdXJyZW50UHJvamVjdCxcbiAgcmV0dXJuUHJvamVjdEFycmF5LFxuICBkZWxldGVUb0RvRnJvbVByb2plY3RBcnJheSxcbiAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheSxcbiAgcHJvamVjdFRha2VuLFxuICBnZXRXZWVrLFxuICBnZXREYXlzSW5Nb250aCxcbiAgZ2V0U3RvcmVkQXJyYXlzXG59O1xuXG5cblxuXG5cblxuIiwiLy9pbXBvcnQgeyAgfSBmcm9tICcuL2ZhY3RvcnlmdW5jdCc7XG5cbmZ1bmN0aW9uIHN0b3JlVG9Ebyh0b0RvQXJyYXkpIHtcbiAgICBjb25zb2xlLmxvZyh0b0RvQXJyYXkpXG4gICAgY29uc29sZS5sb2coJ3N0b3JhZ2UnKVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0FycmF5KSk7XG5cblxufVxuXG5mdW5jdGlvbiBzdG9yZVByb2plY3QocHJvamVjdEFycmF5KSB7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcblxufVxuXG5mdW5jdGlvbiBzdG9yZWRUb0RvKCkge1xuXG4gICAgbGV0IHN0b3JlZFRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9BcnJheVwiKSk7XG4gICAgcmV0dXJuIHN0b3JlZFRvRG9zXG59XG5cbmZ1bmN0aW9uIHN0b3JlZFByb2plY3QoKSB7XG5cbiAgICAvL2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvamVjdEFycmF5XCIpO1xuXG4gICAgbGV0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVwiKSk7IFxuICAgIHJldHVybiBzdG9yZWRQcm9qZWN0c1xuXG59XG5cblxuXG5cbmV4cG9ydCB7XG4gICAgc3RvcmVUb0RvLFxuICAgIHN0b3JlUHJvamVjdCxcbiAgICBzdG9yZWRUb0RvLFxuICAgIHN0b3JlZFByb2plY3Rcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Zm9ybSwgcHJvamVjdEZvcm0sIGhpc3RvcnlUYWJMaXN0ZW5lciwgcHJvamVjdFRhYkxpc3RlbmVyLCBkaXNwbGF5Rm9ybSwgaGlkZUZvcm19IGZyb20gJy4vZG9tJztcbmltcG9ydCB7Z2V0U3RvcmVkQXJyYXlzfSBmcm9tICcuL2ZhY3RvcnlmdW5jdCc7XG5cblxuXG5mb3JtKClcbmdldFN0b3JlZEFycmF5cygpXG5cbmRpc3BsYXlGb3JtKClcblxuaGlkZUZvcm0oKVxuXG5wcm9qZWN0Rm9ybSgpXG5cbmhpc3RvcnlUYWJMaXN0ZW5lcigpXG5cbnByb2plY3RUYWJMaXN0ZW5lcigpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
  