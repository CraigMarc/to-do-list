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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main {
    color: red;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd","sourcesContent":[".main {\n    color: red;\n}"],"sourceRoot":""}]);
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
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   historyTabListener: () => (/* binding */ historyTabListener),
/* harmony export */   projectForm: () => (/* binding */ projectForm),
/* harmony export */   projectNow: () => (/* binding */ projectNow),
/* harmony export */   removeProjectTabs: () => (/* binding */ removeProjectTabs),
/* harmony export */   selectProject: () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _factoryfunct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryfunct */ "./src/factoryfunct.js");


//set project var
let returnProject = []
projectNow('inbox')

// display todos

function displayToDos(todoArray) {

//change title
  const title = document.querySelector('#title');
  title.textContent = returnProject[0];
  
  

  for (let i = 0; i < todoArray.length; i++) {
    let table = document.getElementById("todoTable");
    let row = table.insertRow(1);
    row.id = 'row'
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let cell4 = row.insertCell(3);
    cell4.setAttribute('id', 'cell4');


    cell1.textContent = todoArray[i].description;
    cell2.textContent = todoArray[i].dueDate;
    cell3.textContent = todoArray[i].priority;


    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', 'deleteButton');
    deleteButton.setAttribute('value', i);
    deleteButton.textContent = 'Delete'
    cell4.appendChild(deleteButton);

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


(0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.deleteToDoFromProjectArray)(returnProject[0], value)

  clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))
  displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))
}



function form() {
//let todoArray = addToProject()

//let todoArray = returnProjectArray(returnProject[0])

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    let descriptionForm = data.description
    let dateForm = data.date
    let priorityForm = data.priority
    let projectForm = projectNow()

    let todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0])
   
    if (todoArray.length > 0) {
      clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))
    }
    todoArray = (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0])
   
    ;(0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.addToProject)(projectForm, descriptionForm, dateForm, priorityForm)
   
    displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))
   
  

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



  for (let i = 0; i < projectListArray.length; i++) {
    
    const projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    const div1 = document.createElement('div');
    div1.id = 'projecttab';
    div1.value = i
    div1.textContent = projectListArray[i]

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
   
    projectContainer.appendChild(div1);

    document.body.appendChild(projectContainer)
    
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

  clearTable((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))
  displayToDos((0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.returnProjectArray)(returnProject[0]))


  return (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.currentProject)(e.target.value)

}
//saves keeps track of current project
function projectNow(project){
  if (project == undefined) {
    return returnProject[0]
  }
  returnProject[0] = project
  return returnProject
}
// history tab event listener

function historyTabListener() {
  const select = document.querySelectorAll('#timetab');

  select.forEach((button) => {

    button.addEventListener('click', selectTime)


  })
}

function selectTime (e) {

  console.log(e.target.classList.value)

  if (e.target.classList.value == 'week') {
    (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getWeek)()
  }

  if (e.target.classList.value == 'month') {
    (0,_factoryfunct__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)()
  }


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
/* harmony export */   getWeek: () => (/* binding */ getWeek),
/* harmony export */   projectNameArray: () => (/* binding */ projectNameArray),
/* harmony export */   projectTaken: () => (/* binding */ projectTaken),
/* harmony export */   returnProjectArray: () => (/* binding */ returnProjectArray)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





//let projectListArray = ['inbox',]
//let projectArray = []

const todoFactory = (project, description, dueDate, priority) => {

  return { project, description, dueDate, priority };

};

//to do array module
const toDo = (() => {
  let toDoArray = []

  //adds new todos to array
  const addToDo = (newToDo) => {

    toDoArray.push(newToDo)
  };


  return { toDoArray, addToDo };
})();

//project array module
const projectList = (() => {

  let projectListArr = ['inbox']

  //adds new todos to array
  const addProject = (project) => {

    projectListArr.push(project)
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

  //projectArray.push(todoFactory(projectName, description, dueDate, priority))

  //return projectArray
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

  //projectArray.splice(projectArr[value], 1)
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

    // projectArray.splice(projectArr[0], 1)
    recursion()

  }
  recursion()
}

// delete project from projectlistarray

function deleteProjectFromProjectListArray(project) {

  //let index = projectListArray.indexOf(project)

  // projectListArray.splice(index, 1)

  //console.log(projectListArray)
  // return projectListArray

  let index = projectList.projectListArr.indexOf(project)

  projectList.projectListArr.splice(index, 1)


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
  console.log(weekArray)
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
  console.log(monthArray)
  return monthArray


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








(0,_dom__WEBPACK_IMPORTED_MODULE_1__.form)()

;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectForm)()

;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.historyTabListener)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxJQUFJLGdEQUFVO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsZ0RBQVU7QUFDWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1COztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLG1CQUFtQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7QUFxQkU7Ozs7Ozs7Ozs7Ozs7VUN4UEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQ3NCO0FBQ3NDOzs7Ozs7QUFNNUQsMENBQUk7O0FBRUosa0RBQVc7O0FBRVgseURBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZmFjdG9yeWZ1bmN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluIHtcbiAgICBjb2xvcjogcmVkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRUb1Byb2plY3QsXG4gICBwcm9qZWN0TmFtZUFycmF5LCBcbiAgIGN1cnJlbnRQcm9qZWN0LCBcbiAgIHJldHVyblByb2plY3RBcnJheSwgXG4gICBkZWxldGVUb0RvRnJvbVByb2plY3RBcnJheSxcbiAgIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5LFxuICAgcHJvamVjdFRha2VuLFxuICAgZ2V0V2VlayxcbiAgIGdldERheXNJbk1vbnRoXG4gICB9IGZyb20gJy4vZmFjdG9yeWZ1bmN0JztcblxuLy9zZXQgcHJvamVjdCB2YXJcbmxldCByZXR1cm5Qcm9qZWN0ID0gW11cbnByb2plY3ROb3coJ2luYm94JylcblxuLy8gZGlzcGxheSB0b2Rvc1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3ModG9kb0FycmF5KSB7XG5cbi8vY2hhbmdlIHRpdGxlXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gcmV0dXJuUHJvamVjdFswXTtcbiAgXG4gIFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGFibGVcIik7XG4gICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygxKTtcbiAgICByb3cuaWQgPSAncm93J1xuICAgIGxldCBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApO1xuICAgIGxldCBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDEpO1xuICAgIGxldCBjZWxsMyA9IHJvdy5pbnNlcnRDZWxsKDIpO1xuXG4gICAgbGV0IGNlbGw0ID0gcm93Lmluc2VydENlbGwoMyk7XG4gICAgY2VsbDQuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxsNCcpO1xuXG5cbiAgICBjZWxsMS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICBjZWxsMi50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlO1xuICAgIGNlbGwzLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLnByaW9yaXR5O1xuXG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVCdXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgY2VsbDQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIC8qZGVsZXRlIGJ1dHRvbiBldmVudCBsaXN0ZW5lciovXG5cbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVsZXRlQnV0dG9uJyk7XG5cbiAgICBudW1iZXIuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGJ1dHRvbi52YWx1ZVxuXG4gICAgICAgIGRlbGV0ZVRvRG8odmFsdWUsIHRvZG9BcnJheSlcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuXG4gICAgICB9KVxuICAgIH0pXG5cblxuXG4gIH1cbn1cblxuLy8gZGVsZXRlIHRhYmxlIGZ1bmN0aW9uIHdoZW4gZGVsZXRpbmcgdG8gZG8gKioqKiBtYXkganVzdCB1c2UgY2xlYXIgdGFibGUgbm93XG4vKlxuZnVuY3Rpb24gZGVsZXRlVGFibGUodG9kb0FycmF5KSB7XG5cblxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdG9kb0FycmF5Lmxlbmd0aCArIDI7IGkrKykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RhYmxlXCIpLmRlbGV0ZVJvdygxKTtcblxuXG4gIH1cbn0qL1xuXG5cbi8vIGNsZWFyIHRhYmxlIHdoZW4gYWRkaW5nIG5ldyBpdGVtXG5mdW5jdGlvbiBjbGVhclRhYmxlKCkge1xuXG4gIGNvbnN0IHJvd1JlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNyb3cnKTtcblxuICByb3dSZW0uZm9yRWFjaChwcm9qID0+IHtcbiAgICBwcm9qLnJlbW92ZSgpO1xuICB9KTtcblxuXG59XG5cblxuXG4vL2RlbGV0ZSB0b2RvXG5mdW5jdGlvbiBkZWxldGVUb0RvKHZhbHVlKSB7XG5cblxuZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSwgdmFsdWUpXG5cbiAgY2xlYXJUYWJsZShyZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSkpXG4gIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSkpXG59XG5cblxuXG5mdW5jdGlvbiBmb3JtKCkge1xuLy9sZXQgdG9kb0FycmF5ID0gYWRkVG9Qcm9qZWN0KClcblxuLy9sZXQgdG9kb0FycmF5ID0gcmV0dXJuUHJvamVjdEFycmF5KHJldHVyblByb2plY3RbMF0pXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpLmVudHJpZXMoKSk7XG4gICAgbGV0IGRlc2NyaXB0aW9uRm9ybSA9IGRhdGEuZGVzY3JpcHRpb25cbiAgICBsZXQgZGF0ZUZvcm0gPSBkYXRhLmRhdGVcbiAgICBsZXQgcHJpb3JpdHlGb3JtID0gZGF0YS5wcmlvcml0eVxuICAgIGxldCBwcm9qZWN0Rm9ybSA9IHByb2plY3ROb3coKVxuXG4gICAgbGV0IHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShyZXR1cm5Qcm9qZWN0WzBdKVxuICAgXG4gICAgaWYgKHRvZG9BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBjbGVhclRhYmxlKHJldHVyblByb2plY3RBcnJheShyZXR1cm5Qcm9qZWN0WzBdKSlcbiAgICB9XG4gICAgdG9kb0FycmF5ID0gcmV0dXJuUHJvamVjdEFycmF5KHJldHVyblByb2plY3RbMF0pXG4gICBcbiAgICBhZGRUb1Byb2plY3QocHJvamVjdEZvcm0sIGRlc2NyaXB0aW9uRm9ybSwgZGF0ZUZvcm0sIHByaW9yaXR5Rm9ybSlcbiAgIFxuICAgIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSkpXG4gICBcbiAgXG5cbiAgfSk7XG59XG5cblxuXG5cblxuXG5cbi8vcHJvamVjdCBmb3JtXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKTtcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkYXRhLnByb2plY3RcbiAgICBcbiAgICBsZXQgcHJvamVjdExpc3QgPSBwcm9qZWN0VGFrZW4ocHJvamVjdEZvcm0pXG5cbiAgICBpZiAocHJvamVjdExpc3QgPT0gLTEpe1xuICAgIHByb2plY3ROYW1lQXJyYXkocHJvamVjdEZvcm0pXG4gICAgfVxuXG5cbiAgfSk7XG59XG4vL2FkZHMgbmV3IHByb2plY3QgdGFicyBhbmQgYnV0dG9uc1xuZnVuY3Rpb24gYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3RBcnJheSkge1xuXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0Q29udGFpbmVyJztcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MS5pZCA9ICdwcm9qZWN0dGFiJztcbiAgICBkaXYxLnZhbHVlID0gaVxuICAgIGRpdjEudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldXG5cbiAgICAvL2J1dHRvbnNcbiAgICBpZiAoaSA+IDApIHtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0RGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qZWN0TGlzdEFycmF5W2ldKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG4gICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjEpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgIFxuICB9XG4gIFxuICBwcm9qZWN0RGVsZXRlTGlzdGVuZXIoKVxuICBwcm9qZWN0VGFiTGlzdGVuZXIoKVxuICBcbiAgcmV0dXJuXG59XG5cbi8vIHByb2plY3QgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3REZWxldGUnKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KVxuXG5cbiAgfSlcbn1cbi8vIGRlbGV0ZSBwcm9qZWN0XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKGUpIHtcblxuXG5kZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5sZXQgcHJvamVjdExpc3RBcnJheSA9IGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5cbnJlbW92ZVByb2plY3RUYWJzKClcbmFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpXG5cbn1cblxuXG5cbi8vcmVtb3ZlcyBwcm9qZWN0IHRhYnMgd2hlbiByZWZyZXNoXG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RUYWJzKCkge1xuXG4gIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHRhYicpO1xuXG4gIHByb2plY3RUYWIuZm9yRWFjaChwcm9qID0+IHtcbiAgICBwcm9qLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdERlbGV0ZScpO1xuXG4gIGRlbGV0ZVRhYi5mb3JFYWNoKHByb2ogPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcblxufVxuXG5cbi8vcHJvamVjdCB0YWIgZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIHByb2plY3RUYWJMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3R0YWInKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KVxuXG5cbiAgfSlcbn1cblxuLy9zZWxlY3RzIHByb2plY3RcblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKSB7XG5cbiAgY2xlYXJUYWJsZShyZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSkpXG4gIGRpc3BsYXlUb0RvcyhyZXR1cm5Qcm9qZWN0QXJyYXkocmV0dXJuUHJvamVjdFswXSkpXG5cblxuICByZXR1cm4gY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpXG5cbn1cbi8vc2F2ZXMga2VlcHMgdHJhY2sgb2YgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBwcm9qZWN0Tm93KHByb2plY3Qpe1xuICBpZiAocHJvamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmV0dXJuUHJvamVjdFswXVxuICB9XG4gIHJldHVyblByb2plY3RbMF0gPSBwcm9qZWN0XG4gIHJldHVybiByZXR1cm5Qcm9qZWN0XG59XG4vLyBoaXN0b3J5IHRhYiBldmVudCBsaXN0ZW5lclxuXG5mdW5jdGlvbiBoaXN0b3J5VGFiTGlzdGVuZXIoKSB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0aW1ldGFiJyk7XG5cbiAgc2VsZWN0LmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGltZSlcblxuXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNlbGVjdFRpbWUgKGUpIHtcblxuICBjb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUpXG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSAnd2VlaycpIHtcbiAgICBnZXRXZWVrKClcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gJ21vbnRoJykge1xuICAgIGdldERheXNJbk1vbnRoKClcbiAgfVxuXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gIGZvcm0sXG4gIHByb2plY3RGb3JtLFxuICBhZGRQcm9qZWN0VGFicyxcbiAgcmVtb3ZlUHJvamVjdFRhYnMsXG4gIHNlbGVjdFByb2plY3QsXG4gIHByb2plY3ROb3csXG4gIGhpc3RvcnlUYWJMaXN0ZW5lcixcbiAgXG59O1xuXG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0VGFicywgcmVtb3ZlUHJvamVjdFRhYnMsIHByb2plY3ROb3cgfSBmcm9tICcuL2RvbSc7XG5cblxuLy9sZXQgcHJvamVjdExpc3RBcnJheSA9IFsnaW5ib3gnLF1cbi8vbGV0IHByb2plY3RBcnJheSA9IFtdXG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gIHJldHVybiB7IHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xuXG59O1xuXG4vL3RvIGRvIGFycmF5IG1vZHVsZVxuY29uc3QgdG9EbyA9ICgoKSA9PiB7XG4gIGxldCB0b0RvQXJyYXkgPSBbXVxuXG4gIC8vYWRkcyBuZXcgdG9kb3MgdG8gYXJyYXlcbiAgY29uc3QgYWRkVG9EbyA9IChuZXdUb0RvKSA9PiB7XG5cbiAgICB0b0RvQXJyYXkucHVzaChuZXdUb0RvKVxuICB9O1xuXG5cbiAgcmV0dXJuIHsgdG9Eb0FycmF5LCBhZGRUb0RvIH07XG59KSgpO1xuXG4vL3Byb2plY3QgYXJyYXkgbW9kdWxlXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG5cbiAgbGV0IHByb2plY3RMaXN0QXJyID0gWydpbmJveCddXG5cbiAgLy9hZGRzIG5ldyB0b2RvcyB0byBhcnJheVxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcblxuICAgIHByb2plY3RMaXN0QXJyLnB1c2gocHJvamVjdClcbiAgfTtcblxuXG4gIHJldHVybiB7IHByb2plY3RMaXN0QXJyLCBhZGRQcm9qZWN0IH07XG59KSgpO1xuXG5cbi8qYWRkIHRvIHByb2plY3QgYXJyYXkqL1xuZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHByb2plY3ROYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICBpZiAoZGVzY3JpcHRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9yZXR1cm4gcHJvamVjdEFycmF5XG4gICAgcmV0dXJuIHRvRG8udG9Eb0FycmF5XG4gIH1cbiAgdG9Eby5hZGRUb0RvKHRvZG9GYWN0b3J5KHByb2plY3ROYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKVxuXG4gIC8vcHJvamVjdEFycmF5LnB1c2godG9kb0ZhY3RvcnkocHJvamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpXG5cbiAgLy9yZXR1cm4gcHJvamVjdEFycmF5XG4gIHJldHVybiB0b0RvLnRvRG9BcnJheVxufVxuXG4vL2ZpbHRlciBhcnJheSBcbmZ1bmN0aW9uIHJldHVyblByb2plY3RBcnJheShwcm9qZWN0TmFtZSkge1xuXG4gIHJldHVybiB0b0RvLnRvRG9BcnJheS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgucHJvamVjdCA9PSBwcm9qZWN0TmFtZSB9KVxuXG4gIC8vcmV0dXJuIHByb2plY3RBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgucHJvamVjdCA9PSBwcm9qZWN0TmFtZSB9KVxuXG59XG5cbi8vIGZpbmQgdGhlIGluZGV4ZXMgb2YgYWxsIHByb2plY3RzIGluIHRoZSBwcm9qZWN0QXJyYXlcbmZ1bmN0aW9uIGZpbmRQcm9qZWN0cyhwcm9qZWN0RmluZCkge1xuICBsZXQgcmVzdWx0ID0gW107XG5cbiAgdG9Eby50b0RvQXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3QucHJvamVjdCA9PT0gcHJvamVjdEZpbmQgPyByZXN1bHQucHVzaChpbmRleCkgOiBudWxsKVxuICAvL3Byb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5wcm9qZWN0ID09PSBwcm9qZWN0RmluZCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vL2RlbGV0ZSB0b2RvIGZyb20gYXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXkocHJvamVjdCwgdmFsdWUpIHtcblxuICBsZXQgcHJvamVjdEFyciA9IGZpbmRQcm9qZWN0cyhwcm9qZWN0KVxuXG4gIHRvRG8udG9Eb0FycmF5LnNwbGljZShwcm9qZWN0QXJyW3ZhbHVlXSwgMSlcblxuICAvL3Byb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEFyclt2YWx1ZV0sIDEpXG4gIHJldHVybiB0b0RvLnRvRG9BcnJheVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5KHByb2plY3QpIHtcblxuICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XG5cbiAgICBsZXQgcHJvamVjdEFyciA9IGZpbmRQcm9qZWN0cyhwcm9qZWN0KVxuICAgIGlmIChwcm9qZWN0QXJyLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgIHJldHVybiB0b0RvLnRvRG9BcnJheVxuICAgIH1cblxuICAgIHRvRG8udG9Eb0FycmF5LnNwbGljZShwcm9qZWN0QXJyWzBdLCAxKVxuXG4gICAgLy8gcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0QXJyWzBdLCAxKVxuICAgIHJlY3Vyc2lvbigpXG5cbiAgfVxuICByZWN1cnNpb24oKVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIHByb2plY3RsaXN0YXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5KHByb2plY3QpIHtcblxuICAvL2xldCBpbmRleCA9IHByb2plY3RMaXN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KVxuXG4gIC8vIHByb2plY3RMaXN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuXG4gIC8vY29uc29sZS5sb2cocHJvamVjdExpc3RBcnJheSlcbiAgLy8gcmV0dXJuIHByb2plY3RMaXN0QXJyYXlcblxuICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbiAgcHJvamVjdExpc3QucHJvamVjdExpc3RBcnIuc3BsaWNlKGluZGV4LCAxKVxuXG5cbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyXG5cbn1cblxuXG5cblxuLy8gcHJvamVjdCBuYW1lIGFycmF5IGZvciBuZXcgcHJvamVjdHNcblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUFycmF5KHByb2plY3ROYW1lKSB7XG5cbiAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSlcblxuXG4gIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5sZW5ndGggPiAxKSB7XG5cbiAgICByZW1vdmVQcm9qZWN0VGFicygpXG4gIH1cbiAgYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpXG5cbiAgLy9yZXR1cm4gcHJvamVjdExpc3RBcnJheVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGFrZW4ocHJvamVjdCkge1xuXG4gIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbn1cblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoYXJyYXlOdW1iZXIpIHtcblxuICBpZiAocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIubGVuZ3RoID09IDEpIHtcbiAgICBwcm9qZWN0Tm93KHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyWzBdKVxuICAgIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyclswXVxuICB9XG4gIHByb2plY3ROb3cocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbYXJyYXlOdW1iZXJdKVxuICByZXR1cm4gKHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyW2FycmF5TnVtYmVyXSlcblxufVxuXG4vL2dldCBkYXRlcyBmb3IgdGhlIHdlZWtcbmZ1bmN0aW9uIGdldFdlZWsoKSB7XG4gIGxldCBjdXJyID0gbmV3IERhdGVcbiAgbGV0IHdlZWsgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgIGxldCBmaXJzdCA9IGN1cnIuZ2V0RGF0ZSgpIC0gY3Vyci5nZXREYXkoKSArIGlcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoY3Vyci5zZXREYXRlKGZpcnN0KSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICB3ZWVrLnB1c2goZGF5KVxuICB9XG4gIC8vcHVzaCBuZXcgYXJyYXkgd2l0aCB0b2RvcyBmb3IgdGhlIHdlZWtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd2Vla1Jlc3VsdCA9IHdlZWtbaV1cbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5kdWVEYXRlID09PSB3ZWVrUmVzdWx0ID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcblxuICB9XG5cbiAgbGV0IHdlZWtBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICB3ZWVrQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKVxuICB9XG4gIGNvbnNvbGUubG9nKHdlZWtBcnJheSlcbiAgcmV0dXJuIHdlZWtBcnJheVxufVxuXG5cblxuLy9nZXQgZGF5cyBvZiB0aGUgbW9udGhcblxuZnVuY3Rpb24gZ2V0RGF5c0luTW9udGgoKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICBsZXQgbW9udGggPSBkLmdldE1vbnRoKClcbiAgbGV0IHllYXIgPSBkLmdldEZ1bGxZZWFyKClcblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgd2hpbGUgKGRhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGgpIHtcbiAgICBkYXlzLnB1c2gobmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpO1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbW9udGhSZXN1bHQgPSBkYXlzW2ldXG4gICAgdG9Eby50b0RvQXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3QuZHVlRGF0ZSA9PT0gbW9udGhSZXN1bHQgPyByZXN1bHQucHVzaChpbmRleCkgOiBudWxsKVxuXG4gIH1cblxuICBsZXQgbW9udGhBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICBtb250aEFycmF5LnB1c2godG9Eby50b0RvQXJyYXlbcmVzdWx0W2ldXSlcbiAgfVxuICBjb25zb2xlLmxvZyhtb250aEFycmF5KVxuICByZXR1cm4gbW9udGhBcnJheVxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge1xuXG4gIGFkZFRvUHJvamVjdCxcbiAgcHJvamVjdE5hbWVBcnJheSxcbiAgY3VycmVudFByb2plY3QsXG4gIHJldHVyblByb2plY3RBcnJheSxcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gIHByb2plY3RUYWtlbixcbiAgZ2V0V2VlayxcbiAgZ2V0RGF5c0luTW9udGhcbn07XG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7Zm9ybSwgcHJvamVjdEZvcm0sIGhpc3RvcnlUYWJMaXN0ZW5lcn0gZnJvbSAnLi9kb20nO1xuXG5cblxuXG5cbmZvcm0oKVxuXG5wcm9qZWN0Rm9ybSgpXG5cbmhpc3RvcnlUYWJMaXN0ZW5lcigpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==