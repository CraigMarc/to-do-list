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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  width: 100%;
  font-family: "Roboto", sans-serif;
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
  width: 60vw;
}

.submitproject {
  padding: 5px;
}

.label {
  padding: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;;EAEvB,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\nbody {\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#grid {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr;\n\n  justify-items: center;\n  height: 100vh;\n}\n\n#projectContainer {\n  display: flex;\n  padding-top: 20px;\n  padding-left: 10px;\n  align-items: center;\n  gap: 10px;\n}\n\n.mainContainer {\n  height: 100%;\n  width: 100%;\n  background-color: #edebe4;\n}\n\n#projectDelete {\n  background-color: red;\n  color: white;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n#deleteButton {\n  background-color: red;\n  border-radius: 10px;\n  color: white;\n  padding: 5px;\n}\n\n#timetab {\n  padding: 20px;\n}\n\n#menuContainer {\n  background-color: gray;\n  height: 100%;\n  text-align: center;\n  color: white;\n}\n\n.th1 {\n  width: 50vw;\n}\n\n.th2 {\n  width: 15vw;\n}\n\n#title {\n  text-align: center;\n  font-size: 30px;\n}\n\ntr {\n  font-size: 18px;\n}\n\n.th3 {\n  width: 10vw;\n}\n\n#row {\n  background-color: grey;\n  color: white;\n}\n\ntd {\n  padding: 10px;\n}\n\n#cell4 {\n  background-color: #edebe4;\n}\n\n.submitButton {\n  padding: 5px;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.submit {\n  padding: 5px;\n}\n\n#description {\n  width: 60vw;\n}\n\n.submitproject {\n  padding: 5px;\n}\n\n.label {\n  padding: 10px;\n}\n"],"sourceRoot":""}]);
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
  let currentProjectArray = [];

  //adds new project
  const changeProject = (newProject) => {
    currentProjectArray[0] = newProject;
  };
  return { currentProjectArray, changeProject };
})();

projectNow("Inbox");

// display todos

function displayToDos(todoArray) {
  //change title
  const title = document.querySelector("#title");
  title.textContent = newProject.currentProjectArray[0];

  for (let i = 0; i < todoArray.length; i++) {
    let table = document.getElementById("todoTable");
    let row = table.insertRow(1);
    row.id = "row";
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let cell4 = row.insertCell(3);
    cell4.setAttribute("id", "cell4");

    if (
      newProject.currentProjectArray[0] == "Due This Week" ||
      newProject.currentProjectArray[0] == "Due This Month"
    ) {
      cell1.textContent =
        todoArray[i].description + "(" + todoArray[i].project + ")";
    }

    if (
      newProject.currentProjectArray[0] != "Due This Week" &&
      newProject.currentProjectArray[0] != "Due This Month"
    ) {
      cell1.textContent = todoArray[i].description;
    }
    cell2.textContent = todoArray[i].dueDate;
    cell3.textContent = todoArray[i].priority;

    if (
      newProject.currentProjectArray[0] != "Due This Week" &&
      newProject.currentProjectArray[0] != "Due This Month"
    ) {
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("type", "button");
      deleteButton.setAttribute("id", "deleteButton");
      deleteButton.setAttribute("value", i);
      deleteButton.textContent = "Delete";
      cell4.appendChild(deleteButton);
    }
    /*delete button event listener*/

    const number = document.querySelectorAll("#deleteButton");

    number.forEach((button) => {
      button.addEventListener("click", (e) => {
        let value = button.value;

        deleteToDo(value, todoArray);
        e.stopImmediatePropagation();
      });
    });
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
  const rowRem = document.querySelectorAll("#row");

  rowRem.forEach((proj) => {
    proj.remove();
  });
}

//delete todo
function deleteToDo(value) {
  (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteToDoFromProjectArray)(newProject.currentProjectArray[0], value);

  clearTable();
  displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]));
}

function form() {
  //let todoArray = addToProject()

  //let todoArray = returnProjectArray(returnProject[0])

  document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    hideForm();
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description;
    let dateForm = data.date;
    let priorityForm = data.priority;
    let projectForm = projectNow();
    document.getElementById("form").reset();

    let todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]);

    if (todoArray.length > 0) {
      clearTable();
    }
    todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]);

    (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.addToProject)(projectForm, descriptionForm, dateForm, priorityForm);

    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]));
  });
}

//project form
function projectForm() {
  document.getElementById("projform").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    let projectForm = data.project;

    let projectList = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.projectTaken)(projectForm);

    if (projectList == -1) {
      (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.projectNameArray)(projectForm);
      document.getElementById("projform").reset();
    }
  });
}
//adds new project tabs and buttons
function addProjectTabs(projectListArray) {
  //const grid = document.getElementById('grid')
  const menu = document.getElementById("menuContainer");

  for (let i = 0; i < projectListArray.length; i++) {
    const projectContainer = document.createElement("div");

    projectContainer.id = "projectContainer";
    const div1 = document.createElement("div");
    div1.id = "projecttab";
    div1.value = i;
    div1.textContent = projectListArray[i];

    projectContainer.appendChild(div1);

    //buttons
    if (i > 0) {
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("type", "button");
      deleteButton.setAttribute("id", "projectDelete");
      deleteButton.setAttribute("value", i);
      deleteButton.classList.add(projectListArray[i]);
      deleteButton.textContent = "Delete";
      projectContainer.appendChild(deleteButton);
    }

    menu.appendChild(projectContainer);
    //grid.appendChild(menu)

    //document.body.appendChild(projectContainer)
    //document.menu.appendChild(menu)
  }

  projectDeleteListener();
  projectTabListener();

  return;
}

// project delete event listener

function projectDeleteListener() {
  const select = document.querySelectorAll("#projectDelete");

  select.forEach((button) => {
    button.addEventListener("click", deleteProject);
  });
}
// delete project

function deleteProject(e) {
  (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromProjectArray)(e.target.className);
  let projectListArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromProjectListArray)(e.target.className);

  removeProjectTabs();
  addProjectTabs(projectListArray);
  //may delete ********
  newProject.changeProject("Inbox");
  clearTable();
  displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]));
}

//removes project tabs when refresh

function removeProjectTabs() {
  const projectTab = document.querySelectorAll("#projecttab");

  projectTab.forEach((proj) => {
    proj.remove();
  });

  const deleteTab = document.querySelectorAll("#projectDelete");

  deleteTab.forEach((proj) => {
    proj.remove();
  });

  const container = document.querySelectorAll("#projectContainer");
  container.forEach((proj) => {
    proj.remove();
  });
}

//project tab event listener
function projectTabListener() {
  const select = document.querySelectorAll("#projecttab");

  select.forEach((button) => {
    button.addEventListener("click", selectProject);
  });
}

//selects project

function selectProject(e) {
  hideForm();
  showButton();

  newProject.changeProject((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.currentProject)(e.target.value));
  clearTable();
  displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(newProject.currentProjectArray[0]));

  return (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.currentProject)(e.target.value);
}
//saves keeps track of current project
function projectNow(project) {
  if (project == undefined) {
    return newProject.currentProjectArray[0];
  }

  newProject.changeProject(project);

  return newProject.currentProjectArray[0];
}
// history tab event listener

function historyTabListener() {
  const select = document.querySelectorAll("#timetab");

  select.forEach((button) => {
    button.addEventListener("click", selectTime);
  });
}

function selectTime(e) {
  hideButton();

  if (e.target.classList.value == "week") {
    newProject.changeProject("Due This Week");
    clearTable();
    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getWeek)());
  }

  if (e.target.classList.value == "month") {
    newProject.changeProject("Due This Month");
    clearTable();
    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)());
  }
}

//display form

function displayForm() {
  const btn = document.getElementById("showMenu");

  btn.addEventListener("click", () => {
    const form = document.getElementById("form");
    form.style.display = "block";
    btn.style.display = "none";
  });
}
function hideForm() {
  const form = document.getElementById("form");
  form.style.display = "none";
  const btn = document.getElementById("showMenu");
  btn.style.display = "block";
}

function hideButton() {
  const btn = document.getElementById("showMenu");
  btn.style.display = "none";
}

function showButton() {
  const btn = document.getElementById("showMenu");
  btn.style.display = "block";
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
  let storedTodo1 = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storedToDo)();
  let storedProject1 = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storedProject)();

  if (storedTodo1 != null) {
    for (let i = 0; i < storedTodo1.length; i++) {
      toDo.addToDo(storedTodo1[i]);
    }
  }

  //displayToDos(toDo.toDoArray)
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayToDos)(returnProjectArray("Inbox"));

  if (storedProject1 != null) {
    for (let i = 1; i < storedProject1.length; i++) {
      projectList.addProject(storedProject1[i]);
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectTabs)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectTabs)(projectList.projectListArr);
  }
}

//to do factory funct

const todoFactory = (project, description, dueDate, priority) => {
  return { project, description, dueDate, priority };
};

//to do array module
const toDo = (() => {
  let toDoArray = [];

  //adds new todos to array
  const addToDo = (newToDo) => {
    toDoArray.push(newToDo);
  };

  return { toDoArray, addToDo };
})();

//project array module
const projectList = (() => {
  let projectListArr = ["Inbox"];

  //adds new todos to array
  const addProject = (project) => {
    projectListArr.push(project);

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProject)(projectListArr);
  };

  return { projectListArr, addProject };
})();

/*add to project array*/
function addToProject(projectName, description, dueDate, priority) {
  if (description == undefined) {
    //return projectArray
    return toDo.toDoArray;
  }
  toDo.addToDo(todoFactory(projectName, description, dueDate, priority));

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeToDo)(toDo.toDoArray);

  return toDo.toDoArray;
}

//filter array
function returnProjectArray(projectName) {
  return toDo.toDoArray.filter(function (x) {
    return x.project == projectName;
  });
}

// find the indexes of all projects in the projectArray
function findProjects(projectFind) {
  let result = [];

  toDo.toDoArray.forEach((project, index) =>
    project.project === projectFind ? result.push(index) : null,
  );

  return result;
}

//delete todo from array

function deleteToDoFromProjectArray(project, value) {
  let projectArr = findProjects(project);

  toDo.toDoArray.splice(projectArr[value], 1);

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeToDo)(toDo.toDoArray);

  return toDo.toDoArray;
}

// delete project from array

function deleteProjectFromProjectArray(project) {
  function recursion() {
    let projectArr = findProjects(project);
    if (projectArr.length == 0) {
      return toDo.toDoArray;
    }

    toDo.toDoArray.splice(projectArr[0], 1);
    //may remove
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeToDo)(toDo.toDoArray);

    recursion();
  }
  recursion();
}

// delete project from projectlistarray

function deleteProjectFromProjectListArray(project) {
  let index = projectList.projectListArr.indexOf(project);

  projectList.projectListArr.splice(index, 1);

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProject)(projectList.projectListArr);

  return projectList.projectListArr;
}

// project name array for new projects

function projectNameArray(projectName) {
  projectList.addProject(projectName);

  if (projectList.projectListArr.length > 1) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeProjectTabs)();
  }
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectTabs)(projectList.projectListArr);

  //return projectListArray
}

function projectTaken(project) {
  return projectList.projectListArr.indexOf(project);
}

function currentProject(arrayNumber) {
  if (projectList.projectListArr.length == 1) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectNow)(projectList.projectListArr[0]);
    return projectList.projectListArr[0];
  }
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.projectNow)(projectList.projectListArr[arrayNumber]);
  return projectList.projectListArr[arrayNumber];
}

//get dates for the week
function getWeek() {
  let curr = new Date();
  let week = [];

  for (let i = 0; i <= 6; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  //push new array with todos for the week
  let result = [];
  for (let i = 0; i < week.length; i++) {
    let weekResult = week[i];
    toDo.toDoArray.forEach((project, index) =>
      project.dueDate === weekResult ? result.push(index) : null,
    );
  }

  let weekArray = [];
  for (let i = 0; i < result.length; i++) {
    weekArray.push(toDo.toDoArray[result[i]]);
  }

  return weekArray;
}

//get days of the month

function getDaysInMonth() {
  const d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();

  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).toISOString().slice(0, 10));
    date.setDate(date.getDate() + 1);
  }

  let result = [];
  for (let i = 0; i < days.length; i++) {
    let monthResult = days[i];
    toDo.toDoArray.forEach((project, index) =>
      project.dueDate === monthResult ? result.push(index) : null,
    );
  }

  let monthArray = [];
  for (let i = 0; i < result.length; i++) {
    monthArray.push(toDo.toDoArray[result[i]]);
  }

  return monthArray;
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
  //localStorage.removeItem('toDoArray')
  localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
}

function storeProject(projectArray) {
  //localStorage.removeItem('projectArray')
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

function storedToDo() {
  let storedToDos = JSON.parse(localStorage.getItem("toDoArray"));
  return storedToDos;
}

function storedProject() {
  //localStorage.removeItem("projectArray");

  let storedProjects = JSON.parse(localStorage.getItem("projectArray"));
  return storedProjects;
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




(0,_dom__WEBPACK_IMPORTED_MODULE_1__.form)();
(0,_factoryfunct__WEBPACK_IMPORTED_MODULE_2__.getStoredArrays)();

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayForm)();

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.hideForm)();

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectForm)();

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.historyTabListener)();

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectTabListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBUVA7QUFDa0M7O0FBRWpELDBDQUFJO0FBQ0osOERBQWU7O0FBRWYsaURBQVc7O0FBRVgsOENBQVE7O0FBRVIsaURBQVc7O0FBRVgsd0RBQWtCOztBQUVsQix3REFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mYWN0b3J5ZnVuY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3Byb2plY3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5tYWluQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcbn1cblxuI3Byb2plY3REZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jZGVsZXRlQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI3RpbWV0YWIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jbWVudUNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aDEge1xuICB3aWR0aDogNTB2dztcbn1cblxuLnRoMiB7XG4gIHdpZHRoOiAxNXZ3O1xufVxuXG4jdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxudHIge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50aDMge1xuICB3aWR0aDogMTB2dztcbn1cblxuI3JvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jY2VsbDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlYmU0O1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnN1Ym1pdCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuI2Rlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDYwdnc7XG59XG5cbi5zdWJtaXRwcm9qZWN0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubGFiZWwge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7O0VBRXZCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3Byb2plY3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlYmU0O1xcbn1cXG5cXG4jcHJvamVjdERlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiN0aW1ldGFiIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNtZW51Q29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50aDEge1xcbiAgd2lkdGg6IDUwdnc7XFxufVxcblxcbi50aDIge1xcbiAgd2lkdGg6IDE1dnc7XFxufVxcblxcbiN0aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbnRyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRoMyB7XFxuICB3aWR0aDogMTB2dztcXG59XFxuXFxuI3JvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG50ZCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jY2VsbDQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWJlNDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDYwdnc7XFxufVxcblxcbi5zdWJtaXRwcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGFkZFRvUHJvamVjdCxcbiAgcHJvamVjdE5hbWVBcnJheSxcbiAgY3VycmVudFByb2plY3QsXG4gIHJldHVyblByb2plY3RBcnJheSxcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gIHByb2plY3RUYWtlbixcbiAgZ2V0V2VlayxcbiAgZ2V0RGF5c0luTW9udGgsXG59IGZyb20gXCIuL2ZhY3RvcnlmdW5jdFwiO1xuXG4vL3NldCBwcm9qZWN0IHZhclxuLy9sZXQgcmV0dXJuUHJvamVjdCA9IFtdXG4vL21vZHVsZSBmb3IgY3VycmVudCBwcm9qZWN0XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IFtdO1xuXG4gIC8vYWRkcyBuZXcgcHJvamVjdFxuICBjb25zdCBjaGFuZ2VQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdEFycmF5WzBdID0gbmV3UHJvamVjdDtcbiAgfTtcbiAgcmV0dXJuIHsgY3VycmVudFByb2plY3RBcnJheSwgY2hhbmdlUHJvamVjdCB9O1xufSkoKTtcblxucHJvamVjdE5vdyhcIkluYm94XCIpO1xuXG4vLyBkaXNwbGF5IHRvZG9zXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0Rvcyh0b2RvQXJyYXkpIHtcbiAgLy9jaGFuZ2UgdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RhYmxlXCIpO1xuICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coMSk7XG4gICAgcm93LmlkID0gXCJyb3dcIjtcbiAgICBsZXQgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgICBsZXQgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICBsZXQgY2VsbDMgPSByb3cuaW5zZXJ0Q2VsbCgyKTtcblxuICAgIGxldCBjZWxsNCA9IHJvdy5pbnNlcnRDZWxsKDMpO1xuICAgIGNlbGw0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2VsbDRcIik7XG5cbiAgICBpZiAoXG4gICAgICBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gPT0gXCJEdWUgVGhpcyBXZWVrXCIgfHxcbiAgICAgIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSA9PSBcIkR1ZSBUaGlzIE1vbnRoXCJcbiAgICApIHtcbiAgICAgIGNlbGwxLnRleHRDb250ZW50ID1cbiAgICAgICAgdG9kb0FycmF5W2ldLmRlc2NyaXB0aW9uICsgXCIoXCIgKyB0b2RvQXJyYXlbaV0ucHJvamVjdCArIFwiKVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSBcIkR1ZSBUaGlzIFdlZWtcIiAmJlxuICAgICAgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdICE9IFwiRHVlIFRoaXMgTW9udGhcIlxuICAgICkge1xuICAgICAgY2VsbDEudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGNlbGwyLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmR1ZURhdGU7XG4gICAgY2VsbDMudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0ucHJpb3JpdHk7XG5cbiAgICBpZiAoXG4gICAgICBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gIT0gXCJEdWUgVGhpcyBXZWVrXCIgJiZcbiAgICAgIG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSBcIkR1ZSBUaGlzIE1vbnRoXCJcbiAgICApIHtcbiAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVCdXR0b25cIik7XG4gICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XG4gICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgY2VsbDQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG4gICAgLypkZWxldGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyKi9cblxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZGVsZXRlQnV0dG9uXCIpO1xuXG4gICAgbnVtYmVyLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBidXR0b24udmFsdWU7XG5cbiAgICAgICAgZGVsZXRlVG9Ebyh2YWx1ZSwgdG9kb0FycmF5KTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGRlbGV0ZSB0YWJsZSBmdW5jdGlvbiB3aGVuIGRlbGV0aW5nIHRvIGRvICoqKiogbWF5IGp1c3QgdXNlIGNsZWFyIHRhYmxlIG5vd1xuLypcbmZ1bmN0aW9uIGRlbGV0ZVRhYmxlKHRvZG9BcnJheSkge1xuXG5cblxuIGZvciAobGV0IGkgPSAxOyBpIDwgdG9kb0FycmF5Lmxlbmd0aCArIDI7IGkrKykge1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGFibGVcIikuZGVsZXRlUm93KDEpO1xuXG5cbiB9XG59Ki9cblxuLy8gY2xlYXIgdGFibGUgd2hlbiBhZGRpbmcgbmV3IGl0ZW1cbmZ1bmN0aW9uIGNsZWFyVGFibGUoKSB7XG4gIGNvbnN0IHJvd1JlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcm93XCIpO1xuXG4gIHJvd1JlbS5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbi8vZGVsZXRlIHRvZG9cbmZ1bmN0aW9uIGRlbGV0ZVRvRG8odmFsdWUpIHtcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdLCB2YWx1ZSk7XG5cbiAgY2xlYXJUYWJsZSgpO1xuICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpO1xufVxuXG5mdW5jdGlvbiBmb3JtKCkge1xuICAvL2xldCB0b2RvQXJyYXkgPSBhZGRUb1Byb2plY3QoKVxuXG4gIC8vbGV0IHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShyZXR1cm5Qcm9qZWN0WzBdKVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpZGVGb3JtKCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG4gICAgbGV0IGRlc2NyaXB0aW9uRm9ybSA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgbGV0IGRhdGVGb3JtID0gZGF0YS5kYXRlO1xuICAgIGxldCBwcmlvcml0eUZvcm0gPSBkYXRhLnByaW9yaXR5O1xuICAgIGxldCBwcm9qZWN0Rm9ybSA9IHByb2plY3ROb3coKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikucmVzZXQoKTtcblxuICAgIGxldCB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKTtcblxuICAgIGlmICh0b2RvQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgY2xlYXJUYWJsZSgpO1xuICAgIH1cbiAgICB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKTtcblxuICAgIGFkZFRvUHJvamVjdChwcm9qZWN0Rm9ybSwgZGVzY3JpcHRpb25Gb3JtLCBkYXRlRm9ybSwgcHJpb3JpdHlGb3JtKTtcblxuICAgIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSk7XG4gIH0pO1xufVxuXG4vL3Byb2plY3QgZm9ybVxuZnVuY3Rpb24gcHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKTtcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkYXRhLnByb2plY3Q7XG5cbiAgICBsZXQgcHJvamVjdExpc3QgPSBwcm9qZWN0VGFrZW4ocHJvamVjdEZvcm0pO1xuXG4gICAgaWYgKHByb2plY3RMaXN0ID09IC0xKSB7XG4gICAgICBwcm9qZWN0TmFtZUFycmF5KHByb2plY3RGb3JtKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamZvcm1cIikucmVzZXQoKTtcbiAgICB9XG4gIH0pO1xufVxuLy9hZGRzIG5ldyBwcm9qZWN0IHRhYnMgYW5kIGJ1dHRvbnNcbmZ1bmN0aW9uIGFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpIHtcbiAgLy9jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQnKVxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51Q29udGFpbmVyXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9IFwicHJvamVjdENvbnRhaW5lclwiO1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdjEuaWQgPSBcInByb2plY3R0YWJcIjtcbiAgICBkaXYxLnZhbHVlID0gaTtcbiAgICBkaXYxLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RBcnJheVtpXTtcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2MSk7XG5cbiAgICAvL2J1dHRvbnNcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0RGVsZXRlXCIpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xuICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQocHJvamVjdExpc3RBcnJheVtpXSk7XG4gICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgLy9ncmlkLmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgICAvL2RvY3VtZW50Lm1lbnUuYXBwZW5kQ2hpbGQobWVudSlcbiAgfVxuXG4gIHByb2plY3REZWxldGVMaXN0ZW5lcigpO1xuICBwcm9qZWN0VGFiTGlzdGVuZXIoKTtcblxuICByZXR1cm47XG59XG5cbi8vIHByb2plY3QgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0RGVsZXRlXCIpO1xuXG4gIHNlbGVjdC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICB9KTtcbn1cbi8vIGRlbGV0ZSBwcm9qZWN0XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpO1xuICBsZXQgcHJvamVjdExpc3RBcnJheSA9IGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpO1xuXG4gIHJlbW92ZVByb2plY3RUYWJzKCk7XG4gIGFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpO1xuICAvL21heSBkZWxldGUgKioqKioqKipcbiAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KFwiSW5ib3hcIik7XG4gIGNsZWFyVGFibGUoKTtcbiAgZGlzcGxheVRvRG9zKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKTtcbn1cblxuLy9yZW1vdmVzIHByb2plY3QgdGFicyB3aGVuIHJlZnJlc2hcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdFRhYnMoKSB7XG4gIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3R0YWJcIik7XG5cbiAgcHJvamVjdFRhYi5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0RGVsZXRlXCIpO1xuXG4gIGRlbGV0ZVRhYi5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0Q29udGFpbmVyXCIpO1xuICBjb250YWluZXIuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG4vL3Byb2plY3QgdGFiIGV2ZW50IGxpc3RlbmVyXG5mdW5jdGlvbiBwcm9qZWN0VGFiTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHRhYlwiKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RQcm9qZWN0KTtcbiAgfSk7XG59XG5cbi8vc2VsZWN0cyBwcm9qZWN0XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoZSkge1xuICBoaWRlRm9ybSgpO1xuICBzaG93QnV0dG9uKCk7XG5cbiAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LnZhbHVlKSk7XG4gIGNsZWFyVGFibGUoKTtcbiAgZGlzcGxheVRvRG9zKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKTtcblxuICByZXR1cm4gY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpO1xufVxuLy9zYXZlcyBrZWVwcyB0cmFjayBvZiBjdXJyZW50IHByb2plY3RcbmZ1bmN0aW9uIHByb2plY3ROb3cocHJvamVjdCkge1xuICBpZiAocHJvamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdO1xuICB9XG5cbiAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KHByb2plY3QpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF07XG59XG4vLyBoaXN0b3J5IHRhYiBldmVudCBsaXN0ZW5lclxuXG5mdW5jdGlvbiBoaXN0b3J5VGFiTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGltZXRhYlwiKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RUaW1lKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFRpbWUoZSkge1xuICBoaWRlQnV0dG9uKCk7XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSBcIndlZWtcIikge1xuICAgIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdChcIkR1ZSBUaGlzIFdlZWtcIik7XG4gICAgY2xlYXJUYWJsZSgpO1xuICAgIGRpc3BsYXlUb0RvcyhnZXRXZWVrKCkpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSBcIm1vbnRoXCIpIHtcbiAgICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3QoXCJEdWUgVGhpcyBNb250aFwiKTtcbiAgICBjbGVhclRhYmxlKCk7XG4gICAgZGlzcGxheVRvRG9zKGdldERheXNJbk1vbnRoKCkpO1xuICB9XG59XG5cbi8vZGlzcGxheSBmb3JtXG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dNZW51XCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dNZW51XCIpO1xuICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93TWVudVwiKTtcbiAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gc2hvd0J1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93TWVudVwiKTtcbiAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCB7XG4gIGZvcm0sXG4gIHByb2plY3RGb3JtLFxuICBhZGRQcm9qZWN0VGFicyxcbiAgcmVtb3ZlUHJvamVjdFRhYnMsXG4gIHNlbGVjdFByb2plY3QsXG4gIHByb2plY3ROb3csXG4gIGhpc3RvcnlUYWJMaXN0ZW5lcixcbiAgcHJvamVjdFRhYkxpc3RlbmVyLFxuICBkaXNwbGF5VG9Eb3MsXG4gIGRpc3BsYXlGb3JtLFxuICBoaWRlRm9ybSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtcbiAgYWRkUHJvamVjdFRhYnMsXG4gIHJlbW92ZVByb2plY3RUYWJzLFxuICBwcm9qZWN0Tm93LFxuICBkaXNwbGF5VG9Eb3MsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgc3RvcmVUb0RvLCBzdG9yZVByb2plY3QsIHN0b3JlZFRvRG8sIHN0b3JlZFByb2plY3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIGdldFN0b3JlZEFycmF5cygpIHtcbiAgbGV0IHN0b3JlZFRvZG8xID0gc3RvcmVkVG9EbygpO1xuICBsZXQgc3RvcmVkUHJvamVjdDEgPSBzdG9yZWRQcm9qZWN0KCk7XG5cbiAgaWYgKHN0b3JlZFRvZG8xICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFRvZG8xLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b0RvLmFkZFRvRG8oc3RvcmVkVG9kbzFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vZGlzcGxheVRvRG9zKHRvRG8udG9Eb0FycmF5KVxuICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KFwiSW5ib3hcIikpO1xuXG4gIGlmIChzdG9yZWRQcm9qZWN0MSAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdG9yZWRQcm9qZWN0MS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChzdG9yZWRQcm9qZWN0MVtpXSk7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3RUYWJzKCk7XG4gICAgYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpO1xuICB9XG59XG5cbi8vdG8gZG8gZmFjdG9yeSBmdW5jdFxuXG5jb25zdCB0b2RvRmFjdG9yeSA9IChwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgcmV0dXJuIHsgcHJvamVjdCwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59O1xuXG4vL3RvIGRvIGFycmF5IG1vZHVsZVxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XG4gIGxldCB0b0RvQXJyYXkgPSBbXTtcblxuICAvL2FkZHMgbmV3IHRvZG9zIHRvIGFycmF5XG4gIGNvbnN0IGFkZFRvRG8gPSAobmV3VG9EbykgPT4ge1xuICAgIHRvRG9BcnJheS5wdXNoKG5ld1RvRG8pO1xuICB9O1xuXG4gIHJldHVybiB7IHRvRG9BcnJheSwgYWRkVG9EbyB9O1xufSkoKTtcblxuLy9wcm9qZWN0IGFycmF5IG1vZHVsZVxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3RBcnIgPSBbXCJJbmJveFwiXTtcblxuICAvL2FkZHMgbmV3IHRvZG9zIHRvIGFycmF5XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RMaXN0QXJyLnB1c2gocHJvamVjdCk7XG5cbiAgICBzdG9yZVByb2plY3QocHJvamVjdExpc3RBcnIpO1xuICB9O1xuXG4gIHJldHVybiB7IHByb2plY3RMaXN0QXJyLCBhZGRQcm9qZWN0IH07XG59KSgpO1xuXG4vKmFkZCB0byBwcm9qZWN0IGFycmF5Ki9cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdChwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGlmIChkZXNjcmlwdGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAvL3JldHVybiBwcm9qZWN0QXJyYXlcbiAgICByZXR1cm4gdG9Eby50b0RvQXJyYXk7XG4gIH1cbiAgdG9Eby5hZGRUb0RvKHRvZG9GYWN0b3J5KHByb2plY3ROYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcblxuICBzdG9yZVRvRG8odG9Eby50b0RvQXJyYXkpO1xuXG4gIHJldHVybiB0b0RvLnRvRG9BcnJheTtcbn1cblxuLy9maWx0ZXIgYXJyYXlcbmZ1bmN0aW9uIHJldHVyblByb2plY3RBcnJheShwcm9qZWN0TmFtZSkge1xuICByZXR1cm4gdG9Eby50b0RvQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHgucHJvamVjdCA9PSBwcm9qZWN0TmFtZTtcbiAgfSk7XG59XG5cbi8vIGZpbmQgdGhlIGluZGV4ZXMgb2YgYWxsIHByb2plY3RzIGluIHRoZSBwcm9qZWN0QXJyYXlcbmZ1bmN0aW9uIGZpbmRQcm9qZWN0cyhwcm9qZWN0RmluZCkge1xuICBsZXQgcmVzdWx0ID0gW107XG5cbiAgdG9Eby50b0RvQXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+XG4gICAgcHJvamVjdC5wcm9qZWN0ID09PSBwcm9qZWN0RmluZCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwsXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy9kZWxldGUgdG9kbyBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5KHByb2plY3QsIHZhbHVlKSB7XG4gIGxldCBwcm9qZWN0QXJyID0gZmluZFByb2plY3RzKHByb2plY3QpO1xuXG4gIHRvRG8udG9Eb0FycmF5LnNwbGljZShwcm9qZWN0QXJyW3ZhbHVlXSwgMSk7XG5cbiAgc3RvcmVUb0RvKHRvRG8udG9Eb0FycmF5KTtcblxuICByZXR1cm4gdG9Eby50b0RvQXJyYXk7XG59XG5cbi8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gYXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0QXJyYXkocHJvamVjdCkge1xuICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XG4gICAgbGV0IHByb2plY3RBcnIgPSBmaW5kUHJvamVjdHMocHJvamVjdCk7XG4gICAgaWYgKHByb2plY3RBcnIubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiB0b0RvLnRvRG9BcnJheTtcbiAgICB9XG5cbiAgICB0b0RvLnRvRG9BcnJheS5zcGxpY2UocHJvamVjdEFyclswXSwgMSk7XG4gICAgLy9tYXkgcmVtb3ZlXG4gICAgc3RvcmVUb0RvKHRvRG8udG9Eb0FycmF5KTtcblxuICAgIHJlY3Vyc2lvbigpO1xuICB9XG4gIHJlY3Vyc2lvbigpO1xufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIHByb2plY3RsaXN0YXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5KHByb2plY3QpIHtcbiAgbGV0IGluZGV4ID0gcHJvamVjdExpc3QucHJvamVjdExpc3RBcnIuaW5kZXhPZihwcm9qZWN0KTtcblxuICBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIHN0b3JlUHJvamVjdChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFycik7XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyO1xufVxuXG4vLyBwcm9qZWN0IG5hbWUgYXJyYXkgZm9yIG5ldyBwcm9qZWN0c1xuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUFycmF5KHByb2plY3ROYW1lKSB7XG4gIHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5sZW5ndGggPiAxKSB7XG4gICAgcmVtb3ZlUHJvamVjdFRhYnMoKTtcbiAgfVxuICBhZGRQcm9qZWN0VGFicyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFycik7XG5cbiAgLy9yZXR1cm4gcHJvamVjdExpc3RBcnJheVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGFrZW4ocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdExpc3QucHJvamVjdExpc3RBcnIuaW5kZXhPZihwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoYXJyYXlOdW1iZXIpIHtcbiAgaWYgKHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyLmxlbmd0aCA9PSAxKSB7XG4gICAgcHJvamVjdE5vdyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyclswXSk7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyWzBdO1xuICB9XG4gIHByb2plY3ROb3cocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbYXJyYXlOdW1iZXJdKTtcbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyW2FycmF5TnVtYmVyXTtcbn1cblxuLy9nZXQgZGF0ZXMgZm9yIHRoZSB3ZWVrXG5mdW5jdGlvbiBnZXRXZWVrKCkge1xuICBsZXQgY3VyciA9IG5ldyBEYXRlKCk7XG4gIGxldCB3ZWVrID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgbGV0IGZpcnN0ID0gY3Vyci5nZXREYXRlKCkgLSBjdXJyLmdldERheSgpICsgaTtcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoY3Vyci5zZXREYXRlKGZpcnN0KSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgd2Vlay5wdXNoKGRheSk7XG4gIH1cbiAgLy9wdXNoIG5ldyBhcnJheSB3aXRoIHRvZG9zIGZvciB0aGUgd2Vla1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vlay5sZW5ndGg7IGkrKykge1xuICAgIGxldCB3ZWVrUmVzdWx0ID0gd2Vla1tpXTtcbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT5cbiAgICAgIHByb2plY3QuZHVlRGF0ZSA9PT0gd2Vla1Jlc3VsdCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwsXG4gICAgKTtcbiAgfVxuXG4gIGxldCB3ZWVrQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICB3ZWVrQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKTtcbiAgfVxuXG4gIHJldHVybiB3ZWVrQXJyYXk7XG59XG5cbi8vZ2V0IGRheXMgb2YgdGhlIG1vbnRoXG5cbmZ1bmN0aW9uIGdldERheXNJbk1vbnRoKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgbGV0IG1vbnRoID0gZC5nZXRNb250aCgpO1xuICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgd2hpbGUgKGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgpIHtcbiAgICBkYXlzLnB1c2gobmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbW9udGhSZXN1bHQgPSBkYXlzW2ldO1xuICAgIHRvRG8udG9Eb0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PlxuICAgICAgcHJvamVjdC5kdWVEYXRlID09PSBtb250aFJlc3VsdCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwsXG4gICAgKTtcbiAgfVxuXG4gIGxldCBtb250aEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbW9udGhBcnJheS5wdXNoKHRvRG8udG9Eb0FycmF5W3Jlc3VsdFtpXV0pO1xuICB9XG5cbiAgcmV0dXJuIG1vbnRoQXJyYXk7XG59XG5cbmV4cG9ydCB7XG4gIGFkZFRvUHJvamVjdCxcbiAgcHJvamVjdE5hbWVBcnJheSxcbiAgY3VycmVudFByb2plY3QsXG4gIHJldHVyblByb2plY3RBcnJheSxcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gIHByb2plY3RUYWtlbixcbiAgZ2V0V2VlayxcbiAgZ2V0RGF5c0luTW9udGgsXG4gIGdldFN0b3JlZEFycmF5cyxcbn07XG4iLCIvL2ltcG9ydCB7ICB9IGZyb20gJy4vZmFjdG9yeWZ1bmN0JztcblxuZnVuY3Rpb24gc3RvcmVUb0RvKHRvRG9BcnJheSkge1xuICAvL2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b0RvQXJyYXknKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9BcnJheVwiLCBKU09OLnN0cmluZ2lmeSh0b0RvQXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3RBcnJheSkge1xuICAvL2xvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0QXJyYXknKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gc3RvcmVkVG9EbygpIHtcbiAgbGV0IHN0b3JlZFRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9BcnJheVwiKSk7XG4gIHJldHVybiBzdG9yZWRUb0Rvcztcbn1cblxuZnVuY3Rpb24gc3RvcmVkUHJvamVjdCgpIHtcbiAgLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2plY3RBcnJheVwiKTtcblxuICBsZXQgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpKTtcbiAgcmV0dXJuIHN0b3JlZFByb2plY3RzO1xufVxuXG5leHBvcnQgeyBzdG9yZVRvRG8sIHN0b3JlUHJvamVjdCwgc3RvcmVkVG9Ebywgc3RvcmVkUHJvamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge1xuICBmb3JtLFxuICBwcm9qZWN0Rm9ybSxcbiAgaGlzdG9yeVRhYkxpc3RlbmVyLFxuICBwcm9qZWN0VGFiTGlzdGVuZXIsXG4gIGRpc3BsYXlGb3JtLFxuICBoaWRlRm9ybSxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBnZXRTdG9yZWRBcnJheXMgfSBmcm9tIFwiLi9mYWN0b3J5ZnVuY3RcIjtcblxuZm9ybSgpO1xuZ2V0U3RvcmVkQXJyYXlzKCk7XG5cbmRpc3BsYXlGb3JtKCk7XG5cbmhpZGVGb3JtKCk7XG5cbnByb2plY3RGb3JtKCk7XG5cbmhpc3RvcnlUYWJMaXN0ZW5lcigpO1xuXG5wcm9qZWN0VGFiTGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==