/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/addNewColor.js":
/*!***************************!*\
  !*** ./js/addNewColor.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.listenToNewColorEvent = undefined;\n\nvar _loadPalettes = __webpack_require__(/*! ./loadPalettes */ \"./js/loadPalettes.js\");\n\nvar load = _interopRequireWildcard(_loadPalettes);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar domToListen = document.querySelector(\"#palette--new\");\n\nvar listenToNewColorEvent = exports.listenToNewColorEvent = function listenToNewColorEvent() {\n  console.log(\"listenToNewColorEvent\");\n  domToListen.addEventListener(\"click\", askForNewColor);\n};\n\nvar askForNewColor = function askForNewColor() {\n  domToListen.removeEventListener(\"click\", askForNewColor);\n  var colorPicker = this.querySelector(\"input\");\n  colorPicker.click();\n\n  colorPicker.addEventListener(\"change\", createNewColor, false);\n};\n\nfunction createNewColor() {\n  this.removeEventListener(\"change\", createNewColor);\n\n  var color = this.value;\n\n  domToListen.insertAdjacentHTML(\"beforebegin\", load.createDomColorPalette(color, color));\n  load.changePaletteBgColor();\n  domToListen.addEventListener(\"click\", askForNewColor);\n}\n\n//# sourceURL=webpack:///./js/addNewColor.js?");

/***/ }),

/***/ "./js/loadPalettes.js":
/*!****************************!*\
  !*** ./js/loadPalettes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar domRoot = exports.domRoot = document.querySelector(\".list-palette\");\n\nvar createDomColorPalette = exports.createDomColorPalette = function createDomColorPalette() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"#fff\";\n\n  var domLiColor = \"\\n    <li class=\\\"palette palette--round\\\">\\n      <div data-color=\\\"\" + color + \"\\\" class=\\\"palette-color\\\">\\n        <div class=\\\"palette-color__square palette-color__lighten\\\"></div>\\n        <div class=\\\"palette-color__square palette-color__darken\\\"></div>\\n      </div>\\n      <div class=\\\"palette-color__content\\\">\\n        <h1 class=\\\"palette-color__name\\\">\" + name + \"</h1>\\n        <span class=\\\"palette-color__code\\\">\" + color + \"</span>\\n      </div>\\n    </li>\\n    \";\n  return domLiColor;\n};\n\nvar changePaletteBgColor = exports.changePaletteBgColor = function changePaletteBgColor() {\n  var dom = document.querySelectorAll(\".palette-color\");\n\n  var getDataAndChangeIt = function getDataAndChangeIt(dom) {\n    var bgColor = dom.getAttribute(\"data-color\");\n\n    if (typeof bgColor === \"string\") {\n      Array.from(dom.children).forEach(function (el) {\n        return el.style[\"background-color\"] = bgColor;\n      });\n    }\n  };\n  Array.from(dom).forEach(function (el) {\n    return getDataAndChangeIt(el);\n  });\n};\n\n//# sourceURL=webpack:///./js/loadPalettes.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _loadPalettes = __webpack_require__(/*! ./loadPalettes */ \"./js/loadPalettes.js\");\n\nvar load = _interopRequireWildcard(_loadPalettes);\n\nvar _addNewColor = __webpack_require__(/*! ./addNewColor */ \"./js/addNewColor.js\");\n\nvar newColor = _interopRequireWildcard(_addNewColor);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n{\n  var urlJson = 'color-list.json';\n\n  //call JSON to load the palette app\n  fetch(urlJson).then(function (response) {\n    return response.json();\n  }).then(function (myJson) {\n    return Array.from(myJson).forEach(function (el) {\n      return load.domRoot.insertAdjacentHTML(\"afterbegin\", load.createDomColorPalette(el.name, el.color));\n    });\n  }).then(load.changePaletteBgColor);\n\n  newColor.listenToNewColorEvent();\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });