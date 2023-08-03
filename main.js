/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\nvar getElementDom = function getElementDom(element) {\n  return document.querySelector(\".\".concat(element));\n};\nvar createItem = function createItem(item) {\n  return document.createElement(item);\n};\nvar todoInput = getElementDom(\"todo__form-input\");\nvar todoAddBtn = getElementDom(\"todo__form-btn\");\nvar todoList = getElementDom(\"todo__list\");\nvar popupCloseBtn = getElementDom(\"popup-edit__btn-close\");\nvar popupSaveBtn = getElementDom(\"popup-edit__btn-save\");\nvar popupCancelBtn = getElementDom(\"popup-edit__btn-cancel\");\nvar popupInput = getElementDom(\"popup-edit__input\");\nvar popup = getElementDom(\"popup\");\nvar localArr = JSON.parse(localStorage.getItem(\"arr\")) || [];\nvar setLocalStorage = function setLocalStorage() {\n  return localStorage.setItem(\"arr\", JSON.stringify(localArr));\n};\nfunction render() {\n  todoList.innerHTML = \"\";\n  var _loop = function _loop(i) {\n    var li = createItem(\"li\");\n    li.classList.add(\"todo__list-item\");\n    var input = createItem(\"input\");\n    input.setAttribute(\"type\", \"checkbox\");\n    input.classList.add(\"todo__list-item-input\");\n    var span = createItem(\"span\");\n    span.classList.add(\"todo__list-item-text\");\n    span.textContent = localArr[i];\n    input.addEventListener(\"change\", function () {\n      span.classList.toggle(\"done\");\n    });\n    var div = createItem(\"div\");\n    div.classList.add(\"todo__list-item-svg\");\n    var buttonEdit = createItem(\"button\");\n    buttonEdit.className = \"btn todo__list-item-edit\";\n    buttonEdit.addEventListener(\"click\", function () {\n      editTodoElement(i);\n    });\n    buttonEdit.removeEventListener(\"click\", function () {\n      editTodoElement(i);\n    });\n    var buttonDelete = createItem(\"button\");\n    buttonDelete.className = \"btn todo__list-item-delete\";\n    buttonDelete.addEventListener(\"click\", function () {\n      deleteTodoElement(i);\n    });\n    buttonDelete.removeEventListener(\"click\", function () {\n      deleteTodoElement(i);\n    });\n    div.append(buttonEdit, buttonDelete);\n    li.append(input, span, div);\n    todoList.append(li);\n  };\n  for (var i = 0; i < localArr.length; i++) {\n    _loop(i);\n  }\n}\nfunction addElement(e) {\n  e.preventDefault();\n  var value = todoInput.value;\n  if (value.length > 0) {\n    localArr.push(value);\n    todoInput.value = \"\";\n  }\n  setLocalStorage();\n  render();\n}\nfunction editTodoElement(index) {\n  var item = localArr[index];\n  if (index !== undefined) {\n    togglePopup();\n    popupInput.value = item;\n    popupSaveBtn.addEventListener(\"click\", function () {\n      localArr[index] = popupInput.value;\n      togglePopup();\n      setLocalStorage();\n      render();\n    });\n  }\n}\nfunction deleteTodoElement(index) {\n  if (index !== undefined) {\n    localArr.splice(index, 1);\n  }\n  localStorage.setItem(\"arr\", JSON.stringify(localArr));\n  render();\n}\ntodoAddBtn.addEventListener(\"click\", addElement);\nfunction togglePopup() {\n  popup.classList.toggle(\"open-popup\");\n}\npopupCancelBtn.addEventListener(\"click\", togglePopup);\npopupCloseBtn.addEventListener(\"click\", togglePopup);\nrender();\n\n//# sourceURL=webpack://todo-list-js/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list-js/./src/styles/index.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;