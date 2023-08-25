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
    grid-template-columns: 0.3fr 5fr;
    grid-template-rows: 1fr;

    justify-items: center;
    height: 100vh;
     }

  #projectContainer {
   
    display: flex;
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;
    gap: 5px;
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

table {
   padding-left: 5px;
}

.showMenuContainer {
   padding: 5px;
}

#project {
   width: 80%;

}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";;AAKA;IACI,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,WAAW;GACZ,aAAa;IACZ,gCAAgC;IAChC,uBAAuB;;IAEvB,qBAAqB;IACrB,aAAa;KACZ;;EAEH;;IAEE,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;EACV;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,yBAAyB;EAC3B;;CAED;IACG,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,YAAY;CACf;;CAEA;IACG,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,YAAY;CACf;;CAEA;IACG,aAAa;;CAEhB;;CAEA;IACG,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,YAAY;CACf;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,kBAAkB;IAClB,eAAe;CAClB;;CAEA;GACE,eAAe;CACjB;;CAEA;IACG,WAAW;CACd;;CAEA;IACG,sBAAsB;IACtB,YAAY;;CAEf;;CAEA;IACG,aAAa;CAChB;;CAEA;IACG,yBAAyB;CAC5B;;CAEA;IACG,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;CACtB;;CAEA;IACG,YAAY;CACf;;CAEA;IACG;CACH;;AAED;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;GACG,iBAAiB;AACpB;;AAEA;GACG,YAAY;AACf;;AAEA;GACG,UAAU;;AAEb","sourcesContent":["\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n\nbody {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n}\n\n#grid {\n    width: 100%;\n   display: grid;\n    grid-template-columns: 0.3fr 5fr;\n    grid-template-rows: 1fr;\n\n    justify-items: center;\n    height: 100vh;\n     }\n\n  #projectContainer {\n   \n    display: flex;\n    padding-top: 20px;\n    padding-left: 5px;\n    padding-right: 5px;\n    align-items: center;\n    gap: 5px;\n  }\n\n  .mainContainer {\n    height: 100%;\n    width: 100%;\n    background-color: #edebe4;\n  }\n\n #projectDelete {\n    background-color: red;\n    color: white;\n    border-radius: 10px;\n    padding: 5px;\n }\n\n #deleteButton {\n    background-color: red;\n    border-radius: 10px;\n    color: white;\n    padding: 5px;\n }\n\n #timetab {\n    padding: 20px;\n\n }\n\n #menuContainer {\n    background-color: gray;\n    height: 100%;\n    text-align: center;\n    color: white;\n }\n\n .th1 {\n    width: 50vw;\n }\n\n .th2 {\n    width: 15vw;\n }\n\n #title {\n    text-align: center;\n    font-size: 30px;\n }\n\n tr {\n   font-size: 18px;\n }\n\n .th3 {\n    width: 10vw;\n }\n\n #row {\n    background-color: grey;\n    color: white;\n    \n }\n\n td {\n    padding: 10px;\n }\n  \n #cell4 {\n    background-color: #edebe4;\n }\n\n .submitButton {\n    padding: 5px;\n    background-color: white;\n    border-radius: 10px;\n }\n\n .submit {\n    padding: 5px;\n }\n\n #description {\n    width: 60vw\n }\n\n.submitproject {\n    padding: 5px;\n}\n\n.label {\n    padding: 10px;\n}\n\ntable {\n   padding-left: 5px;\n}\n\n.showMenuContainer {\n   padding: 5px;\n}\n\n#project {\n   width: 80%;\n\n}\n"],"sourceRoot":""}]);
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
   
    document.getElementById("form").reset();
  

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
    document.getElementById("projform").reset();

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

  const container = document.getElementById('projectContainer');
  container.remove();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQ3NCO0FBQ2lGO0FBQ3hEOzs7O0FBSS9DLDBDQUFJO0FBQ0osK0RBQWU7O0FBRWYsa0RBQVc7O0FBRVgsK0NBQVE7O0FBRVIsa0RBQVc7O0FBRVgseURBQWtCOztBQUVsQix5REFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mYWN0b3J5ZnVuY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4jZ3JpZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgIH1cblxuICAjcHJvamVjdENvbnRhaW5lciB7XG4gICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICB9XG5cbiAgLm1haW5Db250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlYmU0O1xuICB9XG5cbiAjcHJvamVjdERlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiB9XG5cbiAjZGVsZXRlQnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuIH1cblxuICN0aW1ldGFiIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gfVxuXG4gI21lbnVDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuXG4gLnRoMSB7XG4gICAgd2lkdGg6IDUwdnc7XG4gfVxuXG4gLnRoMiB7XG4gICAgd2lkdGg6IDE1dnc7XG4gfVxuXG4gI3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuIH1cblxuIHRyIHtcbiAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG5cbiAudGgzIHtcbiAgICB3aWR0aDogMTB2dztcbiB9XG5cbiAjcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiB9XG5cbiB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiB9XG4gIFxuICNjZWxsNCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcbiB9XG5cbiAuc3VibWl0QnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiB9XG5cbiAuc3VibWl0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gfVxuXG4gI2Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNjB2d1xuIH1cblxuLnN1Ym1pdHByb2plY3Qge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmxhYmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG50YWJsZSB7XG4gICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnNob3dNZW51Q29udGFpbmVyIHtcbiAgIHBhZGRpbmc6IDVweDtcbn1cblxuI3Byb2plY3Qge1xuICAgd2lkdGg6IDgwJTtcblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUtBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7R0FDWixhQUFhO0lBQ1osZ0NBQWdDO0lBQ2hDLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLGFBQWE7S0FDWjs7RUFFSDs7SUFFRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztDQUVEO0lBQ0cscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztDQUVBO0lBQ0cscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtDQUNmOztDQUVBO0lBQ0csYUFBYTs7Q0FFaEI7O0NBRUE7SUFDRyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7SUFDRyxXQUFXO0NBQ2Q7O0NBRUE7SUFDRyxzQkFBc0I7SUFDdEIsWUFBWTs7Q0FFZjs7Q0FFQTtJQUNHLGFBQWE7Q0FDaEI7O0NBRUE7SUFDRyx5QkFBeUI7Q0FDNUI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7Q0FFQTtJQUNHLFlBQVk7Q0FDZjs7Q0FFQTtJQUNHO0NBQ0g7O0FBRUQ7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtHQUNHLFlBQVk7QUFDZjs7QUFFQTtHQUNHLFVBQVU7O0FBRWJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jZ3JpZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgfVxcblxcbiAgI3Byb2plY3RDb250YWluZXIge1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICB9XFxuXFxuICAubWFpbkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGViZTQ7XFxuICB9XFxuXFxuICNwcm9qZWN0RGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gfVxcblxcbiAjZGVsZXRlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gfVxcblxcbiAjdGltZXRhYiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuIH1cXG5cXG4gI21lbnVDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiB9XFxuXFxuIC50aDEge1xcbiAgICB3aWR0aDogNTB2dztcXG4gfVxcblxcbiAudGgyIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuIH1cXG5cXG4gI3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuIH1cXG5cXG4gdHIge1xcbiAgIGZvbnQtc2l6ZTogMThweDtcXG4gfVxcblxcbiAudGgzIHtcXG4gICAgd2lkdGg6IDEwdnc7XFxuIH1cXG5cXG4gI3JvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuIH1cXG5cXG4gdGQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiB9XFxuICBcXG4gI2NlbGw0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcXG4gfVxcblxcbiAuc3VibWl0QnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gfVxcblxcbiAuc3VibWl0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiB9XFxuXFxuICNkZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA2MHZ3XFxuIH1cXG5cXG4uc3VibWl0cHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxudGFibGUge1xcbiAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4uc2hvd01lbnVDb250YWluZXIge1xcbiAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Byb2plY3Qge1xcbiAgIHdpZHRoOiA4MCU7XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZFRvUHJvamVjdCxcbiAgIHByb2plY3ROYW1lQXJyYXksIFxuICAgY3VycmVudFByb2plY3QsIFxuICAgcmV0dXJuUHJvamVjdEFycmF5LCBcbiAgIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5LFxuICAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0QXJyYXksXG4gICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gICBwcm9qZWN0VGFrZW4sXG4gICBnZXRXZWVrLFxuICAgZ2V0RGF5c0luTW9udGhcbiAgIH0gZnJvbSAnLi9mYWN0b3J5ZnVuY3QnO1xuXG4vL3NldCBwcm9qZWN0IHZhclxuLy9sZXQgcmV0dXJuUHJvamVjdCA9IFtdXG4vL21vZHVsZSBmb3IgY3VycmVudCBwcm9qZWN0XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IFtdXG5cbiAgLy9hZGRzIG5ldyBwcm9qZWN0XG4gIGNvbnN0IGNoYW5nZVByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuXG4gICAgY3VycmVudFByb2plY3RBcnJheVswXSA9IChuZXdQcm9qZWN0KVxuICB9O1xuICByZXR1cm4geyBjdXJyZW50UHJvamVjdEFycmF5LCBjaGFuZ2VQcm9qZWN0IH07XG59KSgpO1xuXG5cblxuXG5wcm9qZWN0Tm93KCdJbmJveCcpXG5cbi8vIGRpc3BsYXkgdG9kb3NcblxuZnVuY3Rpb24gZGlzcGxheVRvRG9zKHRvZG9BcnJheSkge1xuXG4vL2NoYW5nZSB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXTtcbiAgXG4gIFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGFibGVcIik7XG4gICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygxKTtcbiAgICByb3cuaWQgPSAncm93J1xuICAgIGxldCBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApO1xuICAgIGxldCBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDEpO1xuICAgIGxldCBjZWxsMyA9IHJvdy5pbnNlcnRDZWxsKDIpO1xuXG4gICAgbGV0IGNlbGw0ID0gcm93Lmluc2VydENlbGwoMyk7XG4gICAgY2VsbDQuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxsNCcpO1xuXG4gICAgaWYgKG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSA9PSAnRHVlIFRoaXMgV2VlaycgXG4gICAgfHwgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdID09ICdEdWUgVGhpcyBNb250aCcgKXtcblxuICAgIGNlbGwxLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmRlc2NyaXB0aW9uICsgJygnICsgdG9kb0FycmF5W2ldLnByb2plY3QgKyAnKScgO1xuICAgIH1cblxuICAgIGlmIChuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gIT0gJ0R1ZSBUaGlzIFdlZWsnIFxuICAgICYmIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSAnRHVlIFRoaXMgTW9udGgnICl7XG5cbiAgICBjZWxsMS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgY2VsbDIudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBjZWxsMy50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5wcmlvcml0eTtcblxuICAgIFxuXG4gICAgaWYgKG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSAnRHVlIFRoaXMgV2VlaycgXG4gICAgJiYgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdICE9ICdEdWUgVGhpcyBNb250aCcgKXtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVCdXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgY2VsbDQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG4gICAgLypkZWxldGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyKi9cblxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGVCdXR0b24nKTtcblxuICAgIG51bWJlci5mb3JFYWNoKChidXR0b24pID0+IHtcblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gYnV0dG9uLnZhbHVlXG5cbiAgICAgICAgZGVsZXRlVG9Ebyh2YWx1ZSwgdG9kb0FycmF5KVxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG5cbiAgICAgIH0pXG4gICAgfSlcblxuXG5cbiAgfVxufVxuXG5cblxuXG4vLyBjbGVhciB0YWJsZSB3aGVuIGFkZGluZyBuZXcgaXRlbVxuZnVuY3Rpb24gY2xlYXJUYWJsZSgpIHtcblxuICBjb25zdCByb3dSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcm93Jyk7XG5cbiAgcm93UmVtLmZvckVhY2gocHJvaiA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG5cblxufVxuXG5cblxuLy9kZWxldGUgdG9kb1xuZnVuY3Rpb24gZGVsZXRlVG9Ebyh2YWx1ZSkge1xuXG5cbmRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSwgdmFsdWUpXG5cbiAgY2xlYXJUYWJsZShyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSlcbiAgZGlzcGxheVRvRG9zKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxufVxuXG5cblxuZnVuY3Rpb24gZm9ybSgpIHtcbi8vbGV0IHRvZG9BcnJheSA9IGFkZFRvUHJvamVjdCgpXG5cbi8vbGV0IHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShyZXR1cm5Qcm9qZWN0WzBdKVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBoaWRlRm9ybSgpXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG4gICAgbGV0IGRlc2NyaXB0aW9uRm9ybSA9IGRhdGEuZGVzY3JpcHRpb25cbiAgICBsZXQgZGF0ZUZvcm0gPSBkYXRhLmRhdGVcbiAgICBsZXQgcHJpb3JpdHlGb3JtID0gZGF0YS5wcmlvcml0eVxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IHByb2plY3ROb3coKVxuXG4gICAgbGV0IHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pXG4gICBcbiAgICBpZiAodG9kb0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNsZWFyVGFibGUocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG4gICAgfVxuICAgIHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pXG4gICBcbiAgICBhZGRUb1Byb2plY3QocHJvamVjdEZvcm0sIGRlc2NyaXB0aW9uRm9ybSwgZGF0ZUZvcm0sIHByaW9yaXR5Rm9ybSlcbiAgIFxuICAgIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSlcbiAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5yZXNldCgpO1xuICBcblxuICB9KTtcbiAgXG59XG5cblxuXG5cblxuXG5cbi8vcHJvamVjdCBmb3JtXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKTtcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkYXRhLnByb2plY3RcbiAgICBcbiAgICBsZXQgcHJvamVjdExpc3QgPSBwcm9qZWN0VGFrZW4ocHJvamVjdEZvcm0pXG5cbiAgICBpZiAocHJvamVjdExpc3QgPT0gLTEpe1xuICAgIHByb2plY3ROYW1lQXJyYXkocHJvamVjdEZvcm0pXG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamZvcm1cIikucmVzZXQoKTtcblxuICB9KTtcbn1cbi8vYWRkcyBuZXcgcHJvamVjdCB0YWJzIGFuZCBidXR0b25zXG5mdW5jdGlvbiBhZGRQcm9qZWN0VGFicyhwcm9qZWN0TGlzdEFycmF5KSB7XG4vL2NvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudUNvbnRhaW5lcicpXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgIFxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RDb250YWluZXIuaWQgPSAncHJvamVjdENvbnRhaW5lcic7XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjEuaWQgPSAncHJvamVjdHRhYic7XG4gICAgZGl2MS52YWx1ZSA9IGlcbiAgICBkaXYxLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RBcnJheVtpXVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYxKTtcblxuICAgIC8vYnV0dG9uc1xuICAgIGlmIChpID4gMCkge1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3REZWxldGUnKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByb2plY3RMaXN0QXJyYXlbaV0pO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH1cbiAgIFxuICAgIFxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgLy9ncmlkLmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gIC8vZG9jdW1lbnQubWVudS5hcHBlbmRDaGlsZChtZW51KVxuICB9XG4gIFxuICBwcm9qZWN0RGVsZXRlTGlzdGVuZXIoKVxuICBwcm9qZWN0VGFiTGlzdGVuZXIoKVxuICBcbiAgcmV0dXJuXG59XG5cbi8vIHByb2plY3QgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3REZWxldGUnKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KVxuXG5cbiAgfSlcbn1cbi8vIGRlbGV0ZSBwcm9qZWN0XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKGUpIHtcblxuXG5kZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5sZXQgcHJvamVjdExpc3RBcnJheSA9IGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5cbnJlbW92ZVByb2plY3RUYWJzKClcbmFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpXG5cbn1cblxuXG5cbi8vcmVtb3ZlcyBwcm9qZWN0IHRhYnMgd2hlbiByZWZyZXNoXG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RUYWJzKCkge1xuXG4gIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHRhYicpO1xuXG4gIHByb2plY3RUYWIuZm9yRWFjaChwcm9qID0+IHtcbiAgICBwcm9qLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdERlbGV0ZScpO1xuXG4gIGRlbGV0ZVRhYi5mb3JFYWNoKHByb2ogPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcblxufVxuXG5cbi8vcHJvamVjdCB0YWIgZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIHByb2plY3RUYWJMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3R0YWInKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KVxuXG5cbiAgfSlcbn1cblxuLy9zZWxlY3RzIHByb2plY3RcblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKSB7XG5cbiAgc2hvd0J1dHRvbigpXG5cbiAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LnZhbHVlKSlcbiAgY2xlYXJUYWJsZShyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSlcbiAgZGlzcGxheVRvRG9zKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxuXG5cbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LnZhbHVlKVxuXG59XG4vL3NhdmVzIGtlZXBzIHRyYWNrIG9mIGN1cnJlbnQgcHJvamVjdFxuZnVuY3Rpb24gcHJvamVjdE5vdyhwcm9qZWN0KXtcbiAgaWYgKHByb2plY3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXVxuICB9XG4gIFxuICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3QocHJvamVjdClcblxuICByZXR1cm4gbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdXG59XG4vLyBoaXN0b3J5IHRhYiBldmVudCBsaXN0ZW5lclxuXG5mdW5jdGlvbiBoaXN0b3J5VGFiTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0aW1ldGFiJyk7XG5cbiAgc2VsZWN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGltZSlcblxuXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNlbGVjdFRpbWUgKGUpIHtcblxuICBoaWRlQnV0dG9uKClcblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09ICd3ZWVrJykge1xuICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdCgnRHVlIFRoaXMgV2VlaycpXG4gICAgY2xlYXJUYWJsZSgpXG4gICAgZGlzcGxheVRvRG9zKGdldFdlZWsoKSlcbiAgICBcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gJ21vbnRoJykge1xuICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdCgnRHVlIFRoaXMgTW9udGgnKVxuICAgIGNsZWFyVGFibGUoKVxuICAgIGRpc3BsYXlUb0RvcyhnZXREYXlzSW5Nb250aCgpKVxuXG4gIH1cblxuXG59XG5cbi8vZGlzcGxheSBmb3JtXG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dNZW51Jyk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSlcbn1cbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd01lbnUnKTtcbmJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbigpIHsgXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93TWVudScpO1xuYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHNob3dCdXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93TWVudScpO1xuYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5leHBvcnQge1xuICBmb3JtLFxuICBwcm9qZWN0Rm9ybSxcbiAgYWRkUHJvamVjdFRhYnMsXG4gIHJlbW92ZVByb2plY3RUYWJzLFxuICBzZWxlY3RQcm9qZWN0LFxuICBwcm9qZWN0Tm93LFxuICBoaXN0b3J5VGFiTGlzdGVuZXIsXG4gIHByb2plY3RUYWJMaXN0ZW5lcixcbiAgZGlzcGxheVRvRG9zLFxuICBkaXNwbGF5Rm9ybSxcbiAgaGlkZUZvcm1cbn07XG5cblxuIiwiXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0VGFicywgcmVtb3ZlUHJvamVjdFRhYnMsIHByb2plY3ROb3csIGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHN0b3JlVG9Ebywgc3RvcmVQcm9qZWN0LCBzdG9yZWRUb0RvLCBzdG9yZWRQcm9qZWN0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuXG5cbmZ1bmN0aW9uIGdldFN0b3JlZEFycmF5cygpIHtcbiAgXG4gIGxldCBzdG9yZWRUb2RvMSA9IHN0b3JlZFRvRG8oKVxuICBsZXQgc3RvcmVkUHJvamVjdDEgPSBzdG9yZWRQcm9qZWN0KClcblxuXG5pZiAoc3RvcmVkVG9kbzEgIT0gbnVsbCkge1xuZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZWRUb2RvMS5sZW5ndGg7IGkrKykge1xuXG4gIHRvRG8uYWRkVG9EbyhzdG9yZWRUb2RvMVtpXSlcbn1cbn1cblxuLy9kaXNwbGF5VG9Eb3ModG9Eby50b0RvQXJyYXkpXG5kaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KCdJbmJveCcpKVxuXG5pZiAoc3RvcmVkUHJvamVjdDEgIT0gbnVsbCkge1xuZm9yIChsZXQgaSA9IDE7IGkgPCBzdG9yZWRQcm9qZWN0MS5sZW5ndGg7IGkrKykge1xuXG4gIHByb2plY3RMaXN0LmFkZFByb2plY3Qoc3RvcmVkUHJvamVjdDFbaV0pXG59XG4gIHJlbW92ZVByb2plY3RUYWJzKClcbiAgYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpXG59XG59XG5cbi8vdG8gZG8gZmFjdG9yeSBmdW5jdFxuXG5jb25zdCB0b2RvRmFjdG9yeSA9IChwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICByZXR1cm4geyBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcblxufTtcblxuLy90byBkbyBhcnJheSBtb2R1bGVcbmNvbnN0IHRvRG8gPSAoKCkgPT4ge1xuICBsZXQgdG9Eb0FycmF5ID0gW11cblxuICAvL2FkZHMgbmV3IHRvZG9zIHRvIGFycmF5XG4gIGNvbnN0IGFkZFRvRG8gPSAobmV3VG9EbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvRG8udG9Eb0FycmF5KVxuICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pXG4gIH07XG5cblxuICByZXR1cm4geyB0b0RvQXJyYXksIGFkZFRvRG8gfTtcbn0pKCk7XG5cbi8vcHJvamVjdCBhcnJheSBtb2R1bGVcbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblxuICBsZXQgcHJvamVjdExpc3RBcnIgPSBbJ0luYm94J11cblxuICAvL2FkZHMgbmV3IHRvZG9zIHRvIGFycmF5XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgcHJvamVjdExpc3RBcnIucHVzaChwcm9qZWN0KVxuXG4gICAgc3RvcmVQcm9qZWN0KHByb2plY3RMaXN0QXJyKVxuICB9O1xuXG5cbiAgcmV0dXJuIHsgcHJvamVjdExpc3RBcnIsIGFkZFByb2plY3QgfTtcbn0pKCk7XG5cblxuLyphZGQgdG8gcHJvamVjdCBhcnJheSovXG5mdW5jdGlvbiBhZGRUb1Byb2plY3QocHJvamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gIGlmIChkZXNjcmlwdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAvL3JldHVybiBwcm9qZWN0QXJyYXlcbiAgICByZXR1cm4gdG9Eby50b0RvQXJyYXlcbiAgfVxuICB0b0RvLmFkZFRvRG8odG9kb0ZhY3RvcnkocHJvamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpXG5cbiAgc3RvcmVUb0RvKHRvRG8udG9Eb0FycmF5KVxuICBcbiAgcmV0dXJuIHRvRG8udG9Eb0FycmF5XG59XG5cbi8vZmlsdGVyIGFycmF5IFxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdEFycmF5KHByb2plY3ROYW1lKSB7XG5cbiAgcmV0dXJuIHRvRG8udG9Eb0FycmF5LmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5wcm9qZWN0ID09IHByb2plY3ROYW1lIH0pXG5cbiAgLy9yZXR1cm4gcHJvamVjdEFycmF5LmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5wcm9qZWN0ID09IHByb2plY3ROYW1lIH0pXG5cbn1cblxuLy8gZmluZCB0aGUgaW5kZXhlcyBvZiBhbGwgcHJvamVjdHMgaW4gdGhlIHByb2plY3RBcnJheVxuZnVuY3Rpb24gZmluZFByb2plY3RzKHByb2plY3RGaW5kKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcblxuICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5wcm9qZWN0ID09PSBwcm9qZWN0RmluZCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwpXG4gIC8vcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0LnByb2plY3QgPT09IHByb2plY3RGaW5kID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vZGVsZXRlIHRvZG8gZnJvbSBhcnJheVxuXG5mdW5jdGlvbiBkZWxldGVUb0RvRnJvbVByb2plY3RBcnJheShwcm9qZWN0LCB2YWx1ZSkge1xuXG4gIGxldCBwcm9qZWN0QXJyID0gZmluZFByb2plY3RzKHByb2plY3QpXG5cbiAgdG9Eby50b0RvQXJyYXkuc3BsaWNlKHByb2plY3RBcnJbdmFsdWVdLCAxKVxuXG4gIHN0b3JlVG9Ebyh0b0RvLnRvRG9BcnJheSlcblxuICByZXR1cm4gdG9Eby50b0RvQXJyYXlcbn1cblxuLy8gZGVsZXRlIHByb2plY3QgZnJvbSBhcnJheVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheShwcm9qZWN0KSB7XG5cbiAgZnVuY3Rpb24gcmVjdXJzaW9uKCkge1xuXG4gICAgbGV0IHByb2plY3RBcnIgPSBmaW5kUHJvamVjdHMocHJvamVjdClcbiAgICBpZiAocHJvamVjdEFyci5sZW5ndGggPT0gMCkge1xuXG4gICAgICByZXR1cm4gdG9Eby50b0RvQXJyYXlcbiAgICB9XG5cbiAgICB0b0RvLnRvRG9BcnJheS5zcGxpY2UocHJvamVjdEFyclswXSwgMSlcblxuICAgIFxuICAgIHJlY3Vyc2lvbigpXG5cbiAgfVxuICByZWN1cnNpb24oKVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIHByb2plY3RsaXN0YXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5KHByb2plY3QpIHtcblxuICBcblxuICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbiAgcHJvamVjdExpc3QucHJvamVjdExpc3RBcnIuc3BsaWNlKGluZGV4LCAxKVxuXG5zdG9yZVByb2plY3QocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpXG5cbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyXG5cbn1cblxuXG5cblxuLy8gcHJvamVjdCBuYW1lIGFycmF5IGZvciBuZXcgcHJvamVjdHNcblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUFycmF5KHByb2plY3ROYW1lKSB7XG5cbiAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSlcblxuXG4gIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5sZW5ndGggPiAxKSB7XG5cbiAgICByZW1vdmVQcm9qZWN0VGFicygpXG4gIH1cbiAgYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpXG5cbiAgLy9yZXR1cm4gcHJvamVjdExpc3RBcnJheVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGFrZW4ocHJvamVjdCkge1xuXG4gIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbn1cblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoYXJyYXlOdW1iZXIpIHtcblxuICBpZiAocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIubGVuZ3RoID09IDEpIHtcbiAgICBwcm9qZWN0Tm93KHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyWzBdKVxuICAgIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyclswXVxuICB9XG4gIHByb2plY3ROb3cocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbYXJyYXlOdW1iZXJdKVxuICByZXR1cm4gKHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyW2FycmF5TnVtYmVyXSlcblxufVxuXG4vL2dldCBkYXRlcyBmb3IgdGhlIHdlZWtcbmZ1bmN0aW9uIGdldFdlZWsoKSB7XG4gIGxldCBjdXJyID0gbmV3IERhdGVcbiAgbGV0IHdlZWsgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgIGxldCBmaXJzdCA9IGN1cnIuZ2V0RGF0ZSgpIC0gY3Vyci5nZXREYXkoKSArIGlcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoY3Vyci5zZXREYXRlKGZpcnN0KSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICB3ZWVrLnB1c2goZGF5KVxuICB9XG4gIC8vcHVzaCBuZXcgYXJyYXkgd2l0aCB0b2RvcyBmb3IgdGhlIHdlZWtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd2Vla1Jlc3VsdCA9IHdlZWtbaV1cbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5kdWVEYXRlID09PSB3ZWVrUmVzdWx0ID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcblxuICB9XG5cbiAgbGV0IHdlZWtBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICB3ZWVrQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKVxuICB9XG4gIFxuICByZXR1cm4gd2Vla0FycmF5XG59XG5cblxuXG4vL2dldCBkYXlzIG9mIHRoZSBtb250aFxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGxldCBtb250aCA9IGQuZ2V0TW9udGgoKVxuICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKVxuXG4gIGxldCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICBsZXQgZGF5cyA9IFtdO1xuICB3aGlsZSAoZGF0ZS5nZXRNb250aCgpID09PSBtb250aCkge1xuICAgIGRheXMucHVzaChuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBtb250aFJlc3VsdCA9IGRheXNbaV1cbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5kdWVEYXRlID09PSBtb250aFJlc3VsdCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwpXG5cbiAgfVxuXG4gIGxldCBtb250aEFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcblxuICAgIG1vbnRoQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKVxuICB9XG4gIFxuICByZXR1cm4gbW9udGhBcnJheVxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge1xuXG4gIGFkZFRvUHJvamVjdCxcbiAgcHJvamVjdE5hbWVBcnJheSxcbiAgY3VycmVudFByb2plY3QsXG4gIHJldHVyblByb2plY3RBcnJheSxcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gIHByb2plY3RUYWtlbixcbiAgZ2V0V2VlayxcbiAgZ2V0RGF5c0luTW9udGgsXG4gIGdldFN0b3JlZEFycmF5c1xufTtcblxuXG5cblxuXG5cbiIsIi8vaW1wb3J0IHsgIH0gZnJvbSAnLi9mYWN0b3J5ZnVuY3QnO1xuXG5mdW5jdGlvbiBzdG9yZVRvRG8odG9Eb0FycmF5KSB7XG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5KVxuICAgIGNvbnNvbGUubG9nKCdzdG9yYWdlJylcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHRvRG9BcnJheSkpO1xuXG5cbn1cblxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3RBcnJheSkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG5cbn1cblxuZnVuY3Rpb24gc3RvcmVkVG9EbygpIHtcblxuICAgIGxldCBzdG9yZWRUb0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvQXJyYXlcIikpO1xuICAgIHJldHVybiBzdG9yZWRUb0Rvc1xufVxuXG5mdW5jdGlvbiBzdG9yZWRQcm9qZWN0KCkge1xuXG4gICAgLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2plY3RBcnJheVwiKTtcblxuICAgIGxldCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikpOyBcbiAgICByZXR1cm4gc3RvcmVkUHJvamVjdHNcblxufVxuXG5cblxuXG5leHBvcnQge1xuICAgIHN0b3JlVG9EbyxcbiAgICBzdG9yZVByb2plY3QsXG4gICAgc3RvcmVkVG9EbyxcbiAgICBzdG9yZWRQcm9qZWN0XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2Zvcm0sIHByb2plY3RGb3JtLCBoaXN0b3J5VGFiTGlzdGVuZXIsIHByb2plY3RUYWJMaXN0ZW5lciwgZGlzcGxheUZvcm0sIGhpZGVGb3JtfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQge2dldFN0b3JlZEFycmF5c30gZnJvbSAnLi9mYWN0b3J5ZnVuY3QnO1xuXG5cblxuZm9ybSgpXG5nZXRTdG9yZWRBcnJheXMoKVxuXG5kaXNwbGF5Rm9ybSgpXG5cbmhpZGVGb3JtKClcblxucHJvamVjdEZvcm0oKVxuXG5oaXN0b3J5VGFiTGlzdGVuZXIoKVxuXG5wcm9qZWN0VGFiTGlzdGVuZXIoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=