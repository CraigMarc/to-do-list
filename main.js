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

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







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
/* harmony export */   storeToDo: () => (/* binding */ storeToDo)
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

;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.projectTabListener)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzFLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7QUFLRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1AsS0FBSzs7OztBQUlMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsa0JBQWtCLDBCQUEwQjtBQUM1Qzs7O0FBR0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDs7OztBQUlBO0FBQ0E7OztBQUdBLHlFQUEwQjs7QUFFMUIsYUFBYSxpRUFBa0I7QUFDL0IsZUFBZSxpRUFBa0I7QUFDakM7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpRUFBa0I7QUFDdEM7QUFDQTtBQUNBLGlCQUFpQixpRUFBa0I7QUFDbkM7QUFDQSxnQkFBZ0IsaUVBQWtCO0FBQ2xDO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjtBQUNBLGlCQUFpQixpRUFBa0I7QUFDbkM7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQVk7O0FBRWxDO0FBQ0EsSUFBSSwrREFBZ0I7QUFDcEI7OztBQUdBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7QUFJQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7OztBQUdBLDRFQUE2QjtBQUM3Qix1QkFBdUIsZ0ZBQWlDOztBQUV4RDtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiw2REFBYztBQUN6QyxhQUFhLGlFQUFrQjtBQUMvQixlQUFlLGlFQUFrQjs7O0FBR2pDLFNBQVMsNkRBQWM7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQWM7O0FBRS9COzs7QUFHQTs7OztBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbldXOztBQUV5RDtBQUNsQjs7OztBQUlwRDs7QUFFQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHVEQUFZO0FBQ2hCOzs7QUFHQSxXQUFXO0FBQ1gsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0RBQVM7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsaUNBQWlDOztBQUUvRSw4Q0FBOEMsaUNBQWlDOztBQUUvRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQVM7O0FBRVg7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQSxJQUFJLHVEQUFpQjtBQUNyQjtBQUNBLEVBQUUsb0RBQWM7O0FBRWhCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLGdEQUFVO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsZ0RBQVU7QUFDWjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1COztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLG1CQUFtQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7QUFzQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUEYsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUtFOzs7Ozs7O1VDcEJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0NzQjtBQUMwRDs7Ozs7O0FBTWhGLDBDQUFJOztBQUVKLGtEQUFXOztBQUVYLHlEQUFrQjs7QUFFbEIseURBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZmFjdG9yeWZ1bmN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWFpbiB7XG4gICAgY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkVG9Qcm9qZWN0LFxuICAgcHJvamVjdE5hbWVBcnJheSwgXG4gICBjdXJyZW50UHJvamVjdCwgXG4gICByZXR1cm5Qcm9qZWN0QXJyYXksIFxuICAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheSxcbiAgIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheSxcbiAgIHByb2plY3RUYWtlbixcbiAgIGdldFdlZWssXG4gICBnZXREYXlzSW5Nb250aFxuICAgfSBmcm9tICcuL2ZhY3RvcnlmdW5jdCc7XG5cbi8vc2V0IHByb2plY3QgdmFyXG4vL2xldCByZXR1cm5Qcm9qZWN0ID0gW11cbi8vbW9kdWxlIGZvciBjdXJyZW50IHByb2plY3RcblxuY29uc3QgbmV3UHJvamVjdCA9ICgoKSA9PiB7XG4gIGxldCBjdXJyZW50UHJvamVjdEFycmF5ID0gW11cblxuICAvL2FkZHMgbmV3IHByb2plY3RcbiAgY29uc3QgY2hhbmdlUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG5cbiAgICBjdXJyZW50UHJvamVjdEFycmF5WzBdID0gKG5ld1Byb2plY3QpXG4gIH07XG4gIHJldHVybiB7IGN1cnJlbnRQcm9qZWN0QXJyYXksIGNoYW5nZVByb2plY3QgfTtcbn0pKCk7XG5cblxuXG5cbnByb2plY3ROb3coJ0luYm94JylcblxuLy8gZGlzcGxheSB0b2Rvc1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3ModG9kb0FycmF5KSB7XG5cbi8vY2hhbmdlIHRpdGxlXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdO1xuICBcbiAgXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UYWJsZVwiKTtcbiAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KDEpO1xuICAgIHJvdy5pZCA9ICdyb3cnXG4gICAgbGV0IGNlbGwxID0gcm93Lmluc2VydENlbGwoMCk7XG4gICAgbGV0IGNlbGwyID0gcm93Lmluc2VydENlbGwoMSk7XG4gICAgbGV0IGNlbGwzID0gcm93Lmluc2VydENlbGwoMik7XG5cbiAgICBsZXQgY2VsbDQgPSByb3cuaW5zZXJ0Q2VsbCgzKTtcbiAgICBjZWxsNC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NlbGw0Jyk7XG5cbiAgICBpZiAobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdID09ICdEdWUgVGhpcyBXZWVrJyBcbiAgICB8fCBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gPT0gJ0R1ZSBUaGlzIE1vbnRoJyApe1xuXG4gICAgY2VsbDEudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZGVzY3JpcHRpb24gKyAnKCcgKyB0b2RvQXJyYXlbaV0ucHJvamVjdCArICcpJyA7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSAhPSAnRHVlIFRoaXMgV2VlaycgXG4gICAgJiYgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdICE9ICdEdWUgVGhpcyBNb250aCcgKXtcblxuICAgIGNlbGwxLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBjZWxsMi50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlO1xuICAgIGNlbGwzLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLnByaW9yaXR5O1xuXG4gICAgXG5cbiAgICBpZiAobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdICE9ICdEdWUgVGhpcyBXZWVrJyBcbiAgICAmJiBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0gIT0gJ0R1ZSBUaGlzIE1vbnRoJyApe1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZUJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaSk7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBjZWxsNC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIH1cbiAgICAvKmRlbGV0ZSBidXR0b24gZXZlbnQgbGlzdGVuZXIqL1xuXG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZUJ1dHRvbicpO1xuXG4gICAgbnVtYmVyLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBidXR0b24udmFsdWVcblxuICAgICAgICBkZWxldGVUb0RvKHZhbHVlLCB0b2RvQXJyYXkpXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cblxuICAgICAgfSlcbiAgICB9KVxuXG5cblxuICB9XG59XG5cbi8vIGRlbGV0ZSB0YWJsZSBmdW5jdGlvbiB3aGVuIGRlbGV0aW5nIHRvIGRvICoqKiogbWF5IGp1c3QgdXNlIGNsZWFyIHRhYmxlIG5vd1xuLypcbmZ1bmN0aW9uIGRlbGV0ZVRhYmxlKHRvZG9BcnJheSkge1xuXG5cblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHRvZG9BcnJheS5sZW5ndGggKyAyOyBpKyspIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UYWJsZVwiKS5kZWxldGVSb3coMSk7XG5cblxuICB9XG59Ki9cblxuXG4vLyBjbGVhciB0YWJsZSB3aGVuIGFkZGluZyBuZXcgaXRlbVxuZnVuY3Rpb24gY2xlYXJUYWJsZSgpIHtcblxuICBjb25zdCByb3dSZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcm93Jyk7XG5cbiAgcm93UmVtLmZvckVhY2gocHJvaiA9PiB7XG4gICAgcHJvai5yZW1vdmUoKTtcbiAgfSk7XG5cblxufVxuXG5cblxuLy9kZWxldGUgdG9kb1xuZnVuY3Rpb24gZGVsZXRlVG9Ebyh2YWx1ZSkge1xuXG5cbmRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSwgdmFsdWUpXG5cbiAgY2xlYXJUYWJsZShyZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKSlcbiAgZGlzcGxheVRvRG9zKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxufVxuXG5cblxuZnVuY3Rpb24gZm9ybSgpIHtcbi8vbGV0IHRvZG9BcnJheSA9IGFkZFRvUHJvamVjdCgpXG5cbi8vbGV0IHRvZG9BcnJheSA9IHJldHVyblByb2plY3RBcnJheShyZXR1cm5Qcm9qZWN0WzBdKVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGUudGFyZ2V0KS5lbnRyaWVzKCkpO1xuICAgIGxldCBkZXNjcmlwdGlvbkZvcm0gPSBkYXRhLmRlc2NyaXB0aW9uXG4gICAgbGV0IGRhdGVGb3JtID0gZGF0YS5kYXRlXG4gICAgbGV0IHByaW9yaXR5Rm9ybSA9IGRhdGEucHJpb3JpdHlcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBwcm9qZWN0Tm93KClcblxuICAgIGxldCB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKVxuICAgXG4gICAgaWYgKHRvZG9BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBjbGVhclRhYmxlKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxuICAgIH1cbiAgICB0b2RvQXJyYXkgPSByZXR1cm5Qcm9qZWN0QXJyYXkobmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdKVxuICAgXG4gICAgYWRkVG9Qcm9qZWN0KHByb2plY3RGb3JtLCBkZXNjcmlwdGlvbkZvcm0sIGRhdGVGb3JtLCBwcmlvcml0eUZvcm0pXG4gICBcbiAgICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG4gICBcbiAgXG5cbiAgfSk7XG59XG5cblxuXG5cblxuXG5cbi8vcHJvamVjdCBmb3JtXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkuZW50cmllcygpKTtcbiAgICBsZXQgcHJvamVjdEZvcm0gPSBkYXRhLnByb2plY3RcbiAgICBcbiAgICBsZXQgcHJvamVjdExpc3QgPSBwcm9qZWN0VGFrZW4ocHJvamVjdEZvcm0pXG5cbiAgICBpZiAocHJvamVjdExpc3QgPT0gLTEpe1xuICAgIHByb2plY3ROYW1lQXJyYXkocHJvamVjdEZvcm0pXG4gICAgfVxuXG5cbiAgfSk7XG59XG4vL2FkZHMgbmV3IHByb2plY3QgdGFicyBhbmQgYnV0dG9uc1xuZnVuY3Rpb24gYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3RBcnJheSkge1xuXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0Q29udGFpbmVyJztcbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MS5pZCA9ICdwcm9qZWN0dGFiJztcbiAgICBkaXYxLnZhbHVlID0gaVxuICAgIGRpdjEudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdEFycmF5W2ldXG5cbiAgICAvL2J1dHRvbnNcbiAgICBpZiAoaSA+IDApIHtcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0RGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChwcm9qZWN0TGlzdEFycmF5W2ldKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9XG4gICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdjEpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuICAgIFxuICB9XG4gIFxuICBwcm9qZWN0RGVsZXRlTGlzdGVuZXIoKVxuICBwcm9qZWN0VGFiTGlzdGVuZXIoKVxuICBcbiAgcmV0dXJuXG59XG5cbi8vIHByb2plY3QgZGVsZXRlIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIHByb2plY3REZWxldGVMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3REZWxldGUnKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KVxuXG5cbiAgfSlcbn1cbi8vIGRlbGV0ZSBwcm9qZWN0XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QgKGUpIHtcblxuXG5kZWxldGVQcm9qZWN0RnJvbVByb2plY3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5sZXQgcHJvamVjdExpc3RBcnJheSA9IGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3RBcnJheShlLnRhcmdldC5jbGFzc05hbWUpXG5cbnJlbW92ZVByb2plY3RUYWJzKClcbmFkZFByb2plY3RUYWJzKHByb2plY3RMaXN0QXJyYXkpXG5cbn1cblxuXG5cbi8vcmVtb3ZlcyBwcm9qZWN0IHRhYnMgd2hlbiByZWZyZXNoXG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RUYWJzKCkge1xuXG4gIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHRhYicpO1xuXG4gIHByb2plY3RUYWIuZm9yRWFjaChwcm9qID0+IHtcbiAgICBwcm9qLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdERlbGV0ZScpO1xuXG4gIGRlbGV0ZVRhYi5mb3JFYWNoKHByb2ogPT4ge1xuICAgIHByb2oucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcblxufVxuXG5cbi8vcHJvamVjdCB0YWIgZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIHByb2plY3RUYWJMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3R0YWInKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KVxuXG5cbiAgfSlcbn1cblxuLy9zZWxlY3RzIHByb2plY3RcblxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdChlKSB7XG4gIFxuICBuZXdQcm9qZWN0LmNoYW5nZVByb2plY3QoY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpKVxuICBjbGVhclRhYmxlKHJldHVyblByb2plY3RBcnJheShuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF0pKVxuICBkaXNwbGF5VG9Eb3MocmV0dXJuUHJvamVjdEFycmF5KG5ld1Byb2plY3QuY3VycmVudFByb2plY3RBcnJheVswXSkpXG5cblxuICByZXR1cm4gY3VycmVudFByb2plY3QoZS50YXJnZXQudmFsdWUpXG5cbn1cbi8vc2F2ZXMga2VlcHMgdHJhY2sgb2YgY3VycmVudCBwcm9qZWN0XG5mdW5jdGlvbiBwcm9qZWN0Tm93KHByb2plY3Qpe1xuICBpZiAocHJvamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdEFycmF5WzBdXG4gIH1cbiAgXG4gIG5ld1Byb2plY3QuY2hhbmdlUHJvamVjdChwcm9qZWN0KVxuXG4gIHJldHVybiBuZXdQcm9qZWN0LmN1cnJlbnRQcm9qZWN0QXJyYXlbMF1cbn1cbi8vIGhpc3RvcnkgdGFiIGV2ZW50IGxpc3RlbmVyXG5cbmZ1bmN0aW9uIGhpc3RvcnlUYWJMaXN0ZW5lcigpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RpbWV0YWInKTtcblxuICBzZWxlY3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUaW1lKVxuXG5cbiAgfSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0VGltZSAoZSkge1xuXG4gIFxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gJ3dlZWsnKSB7XG4gICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KCdEdWUgVGhpcyBXZWVrJylcbiAgICBjbGVhclRhYmxlKClcbiAgICBkaXNwbGF5VG9Eb3MoZ2V0V2VlaygpKVxuICAgIFxuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSAnbW9udGgnKSB7XG4gICAgbmV3UHJvamVjdC5jaGFuZ2VQcm9qZWN0KCdEdWUgVGhpcyBNb250aCcpXG4gICAgY2xlYXJUYWJsZSgpXG4gICAgZGlzcGxheVRvRG9zKGdldERheXNJbk1vbnRoKCkpXG5cbiAgfVxuXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gIGZvcm0sXG4gIHByb2plY3RGb3JtLFxuICBhZGRQcm9qZWN0VGFicyxcbiAgcmVtb3ZlUHJvamVjdFRhYnMsXG4gIHNlbGVjdFByb2plY3QsXG4gIHByb2plY3ROb3csXG4gIGhpc3RvcnlUYWJMaXN0ZW5lcixcbiAgcHJvamVjdFRhYkxpc3RlbmVyXG59O1xuXG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0VGFicywgcmVtb3ZlUHJvamVjdFRhYnMsIHByb2plY3ROb3cgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBzdG9yZVRvRG8sIHN0b3JlUHJvamVjdCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cblxuXG5jb25zdCB0b2RvRmFjdG9yeSA9IChwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICByZXR1cm4geyBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcblxufTtcblxuLy90byBkbyBhcnJheSBtb2R1bGVcbmNvbnN0IHRvRG8gPSAoKCkgPT4ge1xuICBsZXQgdG9Eb0FycmF5ID0gW11cblxuICAvL2FkZHMgbmV3IHRvZG9zIHRvIGFycmF5XG4gIGNvbnN0IGFkZFRvRG8gPSAobmV3VG9EbykgPT4ge1xuXG4gICAgdG9Eb0FycmF5LnB1c2gobmV3VG9EbylcbiAgfTtcblxuXG4gIHJldHVybiB7IHRvRG9BcnJheSwgYWRkVG9EbyB9O1xufSkoKTtcblxuLy9wcm9qZWN0IGFycmF5IG1vZHVsZVxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXG4gIGxldCBwcm9qZWN0TGlzdEFyciA9IFsnSW5ib3gnXVxuXG4gIC8vYWRkcyBuZXcgdG9kb3MgdG8gYXJyYXlcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG5cbiAgICBwcm9qZWN0TGlzdEFyci5wdXNoKHByb2plY3QpXG5cbiAgICBzdG9yZVByb2plY3QocHJvamVjdExpc3RBcnIpXG4gIH07XG5cblxuICByZXR1cm4geyBwcm9qZWN0TGlzdEFyciwgYWRkUHJvamVjdCB9O1xufSkoKTtcblxuXG4vKmFkZCB0byBwcm9qZWN0IGFycmF5Ki9cbmZ1bmN0aW9uIGFkZFRvUHJvamVjdChwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgaWYgKGRlc2NyaXB0aW9uID09IHVuZGVmaW5lZCkge1xuICAgIC8vcmV0dXJuIHByb2plY3RBcnJheVxuICAgIHJldHVybiB0b0RvLnRvRG9BcnJheVxuICB9XG4gIHRvRG8uYWRkVG9Ebyh0b2RvRmFjdG9yeShwcm9qZWN0TmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSlcblxuICBzdG9yZVRvRG8odG9Eby50b0RvQXJyYXkpXG4gIFxuICByZXR1cm4gdG9Eby50b0RvQXJyYXlcbn1cblxuLy9maWx0ZXIgYXJyYXkgXG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0QXJyYXkocHJvamVjdE5hbWUpIHtcblxuICByZXR1cm4gdG9Eby50b0RvQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnByb2plY3QgPT0gcHJvamVjdE5hbWUgfSlcblxuICAvL3JldHVybiBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnByb2plY3QgPT0gcHJvamVjdE5hbWUgfSlcblxufVxuXG4vLyBmaW5kIHRoZSBpbmRleGVzIG9mIGFsbCBwcm9qZWN0cyBpbiB0aGUgcHJvamVjdEFycmF5XG5mdW5jdGlvbiBmaW5kUHJvamVjdHMocHJvamVjdEZpbmQpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIHRvRG8udG9Eb0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiBwcm9qZWN0LnByb2plY3QgPT09IHByb2plY3RGaW5kID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcbiAgLy9wcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3QucHJvamVjdCA9PT0gcHJvamVjdEZpbmQgPyByZXN1bHQucHVzaChpbmRleCkgOiBudWxsKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy9kZWxldGUgdG9kbyBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdEFycmF5KHByb2plY3QsIHZhbHVlKSB7XG5cbiAgbGV0IHByb2plY3RBcnIgPSBmaW5kUHJvamVjdHMocHJvamVjdClcblxuICB0b0RvLnRvRG9BcnJheS5zcGxpY2UocHJvamVjdEFyclt2YWx1ZV0sIDEpXG5cbiAgc3RvcmVUb0RvKHRvRG8udG9Eb0FycmF5KVxuXG4gIHJldHVybiB0b0RvLnRvRG9BcnJheVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIGFycmF5XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5KHByb2plY3QpIHtcblxuICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XG5cbiAgICBsZXQgcHJvamVjdEFyciA9IGZpbmRQcm9qZWN0cyhwcm9qZWN0KVxuICAgIGlmIChwcm9qZWN0QXJyLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgIHJldHVybiB0b0RvLnRvRG9BcnJheVxuICAgIH1cblxuICAgIHRvRG8udG9Eb0FycmF5LnNwbGljZShwcm9qZWN0QXJyWzBdLCAxKVxuXG4gICAgLy8gcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0QXJyWzBdLCAxKVxuICAgIHJlY3Vyc2lvbigpXG5cbiAgfVxuICByZWN1cnNpb24oKVxufVxuXG4vLyBkZWxldGUgcHJvamVjdCBmcm9tIHByb2plY3RsaXN0YXJyYXlcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdEFycmF5KHByb2plY3QpIHtcblxuICAvL2xldCBpbmRleCA9IHByb2plY3RMaXN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KVxuXG4gIC8vIHByb2plY3RMaXN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuXG4gIC8vY29uc29sZS5sb2cocHJvamVjdExpc3RBcnJheSlcbiAgLy8gcmV0dXJuIHByb2plY3RMaXN0QXJyYXlcblxuICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbiAgcHJvamVjdExpc3QucHJvamVjdExpc3RBcnIuc3BsaWNlKGluZGV4LCAxKVxuXG5cbiAgcmV0dXJuIHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyXG5cbn1cblxuXG5cblxuLy8gcHJvamVjdCBuYW1lIGFycmF5IGZvciBuZXcgcHJvamVjdHNcblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUFycmF5KHByb2plY3ROYW1lKSB7XG5cbiAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSlcblxuXG4gIGlmIChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5sZW5ndGggPiAxKSB7XG5cbiAgICByZW1vdmVQcm9qZWN0VGFicygpXG4gIH1cbiAgYWRkUHJvamVjdFRhYnMocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIpXG5cbiAgLy9yZXR1cm4gcHJvamVjdExpc3RBcnJheVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0VGFrZW4ocHJvamVjdCkge1xuXG4gIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyci5pbmRleE9mKHByb2plY3QpXG5cbn1cblxuZnVuY3Rpb24gY3VycmVudFByb2plY3QoYXJyYXlOdW1iZXIpIHtcblxuICBpZiAocHJvamVjdExpc3QucHJvamVjdExpc3RBcnIubGVuZ3RoID09IDEpIHtcbiAgICBwcm9qZWN0Tm93KHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyWzBdKVxuICAgIHJldHVybiBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdEFyclswXVxuICB9XG4gIHByb2plY3ROb3cocHJvamVjdExpc3QucHJvamVjdExpc3RBcnJbYXJyYXlOdW1iZXJdKVxuICByZXR1cm4gKHByb2plY3RMaXN0LnByb2plY3RMaXN0QXJyW2FycmF5TnVtYmVyXSlcblxufVxuXG4vL2dldCBkYXRlcyBmb3IgdGhlIHdlZWtcbmZ1bmN0aW9uIGdldFdlZWsoKSB7XG4gIGxldCBjdXJyID0gbmV3IERhdGVcbiAgbGV0IHdlZWsgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgIGxldCBmaXJzdCA9IGN1cnIuZ2V0RGF0ZSgpIC0gY3Vyci5nZXREYXkoKSArIGlcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoY3Vyci5zZXREYXRlKGZpcnN0KSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICB3ZWVrLnB1c2goZGF5KVxuICB9XG4gIC8vcHVzaCBuZXcgYXJyYXkgd2l0aCB0b2RvcyBmb3IgdGhlIHdlZWtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd2Vla1Jlc3VsdCA9IHdlZWtbaV1cbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5kdWVEYXRlID09PSB3ZWVrUmVzdWx0ID8gcmVzdWx0LnB1c2goaW5kZXgpIDogbnVsbClcblxuICB9XG5cbiAgbGV0IHdlZWtBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICB3ZWVrQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKVxuICB9XG4gIFxuICByZXR1cm4gd2Vla0FycmF5XG59XG5cblxuXG4vL2dldCBkYXlzIG9mIHRoZSBtb250aFxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gIGxldCBtb250aCA9IGQuZ2V0TW9udGgoKVxuICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKVxuXG4gIGxldCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xuICBsZXQgZGF5cyA9IFtdO1xuICB3aGlsZSAoZGF0ZS5nZXRNb250aCgpID09PSBtb250aCkge1xuICAgIGRheXMucHVzaChuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBtb250aFJlc3VsdCA9IGRheXNbaV1cbiAgICB0b0RvLnRvRG9BcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4gcHJvamVjdC5kdWVEYXRlID09PSBtb250aFJlc3VsdCA/IHJlc3VsdC5wdXNoKGluZGV4KSA6IG51bGwpXG5cbiAgfVxuXG4gIGxldCBtb250aEFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcblxuICAgIG1vbnRoQXJyYXkucHVzaCh0b0RvLnRvRG9BcnJheVtyZXN1bHRbaV1dKVxuICB9XG4gIFxuICByZXR1cm4gbW9udGhBcnJheVxuXG5cbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge1xuXG4gIGFkZFRvUHJvamVjdCxcbiAgcHJvamVjdE5hbWVBcnJheSxcbiAgY3VycmVudFByb2plY3QsXG4gIHJldHVyblByb2plY3RBcnJheSxcbiAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0QXJyYXksXG4gIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0QXJyYXksXG4gIHByb2plY3RUYWtlbixcbiAgZ2V0V2VlayxcbiAgZ2V0RGF5c0luTW9udGgsXG4gIFxufTtcblxuXG5cblxuXG5cbiIsIi8vaW1wb3J0IHsgIH0gZnJvbSAnLi9mYWN0b3J5ZnVuY3QnO1xuXG5mdW5jdGlvbiBzdG9yZVRvRG8odG9Eb0FycmF5KSB7XG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5KVxuICAgIGNvbnNvbGUubG9nKCdzdG9yYWdlJylcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHRvRG9BcnJheSkpO1xuXG5cbn1cblxuZnVuY3Rpb24gc3RvcmVQcm9qZWN0KHByb2plY3RBcnJheSkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG5cbn1cblxuZXhwb3J0IHtcbiAgICBzdG9yZVRvRG8sXG4gICAgc3RvcmVQcm9qZWN0XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2Zvcm0sIHByb2plY3RGb3JtLCBoaXN0b3J5VGFiTGlzdGVuZXIsIHByb2plY3RUYWJMaXN0ZW5lcn0gZnJvbSAnLi9kb20nO1xuXG5cblxuXG5cbmZvcm0oKVxuXG5wcm9qZWN0Rm9ybSgpXG5cbmhpc3RvcnlUYWJMaXN0ZW5lcigpXG5cbnByb2plY3RUYWJMaXN0ZW5lcigpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==