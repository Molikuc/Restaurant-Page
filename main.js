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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n\r\n    const tel = document.createElement('p');\r\n    tel.textContent = \"123 456 789\";\r\n\r\n    const address = document.createElement('p');\r\n    address.textContent = \"Nice Boulevard 42, Sweet City\";\r\n\r\n    contact.appendChild(tel);\r\n    contact.appendChild(address);\r\n\r\n    return contact;\r\n}\r\n\r\nfunction contactLoad(){\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome(){\r\n    const home = document.createElement('div');\r\n    home.classList.add('home');\r\n\r\n    const image = document.createElement(\"img\");\r\n\r\n    image.src = \"./images/image.jpg\";\r\n\r\n\r\n    home.appendChild(createParagraph(\"Midnight Pretenders has the best Japaanes food all around\"));\r\n    home.appendChild(createParagraph(\"Since 1789\"));\r\n    home.appendChild(image);\r\n    home.appendChild(createParagraph('Please visit us'));\r\n\r\n    return home;\r\n}\r\n\r\nfunction createParagraph(text){\r\n    const paragraph = document.createElement('p');\r\n    paragraph.textContent = text;\r\n    return paragraph;\r\n}\r\n\r\nfunction homeLoad(){\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\r\n    const menu = document.createElement('div');\r\n    menu.classList.add(\"menu\");\r\n\r\n    menu.appendChild(\r\n        createItem(\r\n            \"Ramen\",\r\n            \"Ramen with chicken or anything else, so good\"\r\n        ));\r\n\r\n    menu.appendChild(\r\n        createItem(\r\n            \"Takoyaki\",\r\n            \"Octopus balls, ball shaped snack, delicious\"\r\n        )\r\n    );\r\n\r\n    menu.appendChild(\r\n        createItem(\r\n            \"Sushi\",\r\n            \"The famous Japanese dish, with fish\"\r\n        )\r\n    );\r\n\r\n    menu.appendChild(\r\n        createItem(\r\n            \"Yakitori\",\r\n            \"The Japanese type of skewered chicken, enjoy it\",\r\n        )\r\n    );\r\n\r\n        return menu;\r\n}\r\n\r\nfunction createItem(name, description){\r\n    const menuItem = document.createElement('div');\r\n    menuItem.classList.add(\"menu-item\");\r\n\r\n    const itemName = document.createElement(\"H2\");\r\n    itemName.textContent = name;\r\n\r\n    const itemDescription = document.createElement(\"p\");\r\n    itemDescription.textContent = description;\r\n\r\n    const itemImage = document.createElement('img');\r\n    itemImage.src = `images/${name.toLowerCase()}.jpg`;\r\n    itemImage.alt = `${name}`;\r\n\r\n    menuItem.appendChild(itemImage);\r\n    menuItem.appendChild(itemName);\r\n    menuItem.appendChild(itemDescription);\r\n\r\n    return menuItem;\r\n}\r\n\r\nfunction menuLoad(){\r\n    const main = document.getElementById('main');\r\n    main.textContent =\"\";\r\n    main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement('header');\r\n    const restoName = document.createElement('h1');\r\n\r\n    restoName.classList.add('restaurant-name');\r\n    restoName.textContent = \"Midnight Pretenders\";\r\n    header.appendChild(restoName);\r\n    header.appendChild(createNav());\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNav(){\r\n    const nav = document.createElement(\"nav\");\r\n\r\n    const homeBtn = document.createElement(\"button\");\r\n    homeBtn.classList.add('button-nav');\r\n    homeBtn.textContent = \"Home\";\r\n    homeBtn.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActiveButton(homeBtn);\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.classList.add('button-nav');\r\n    menuBtn.textContent = \"Menu\";\r\n    menuBtn.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActiveButton(menuBtn);\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    const contactBtn = document.createElement('button');\r\n    contactBtn.classList.add('button-nav');\r\n    contactBtn.textContent = \"Contact\";\r\n    contactBtn.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains(\"active\")) return;\r\n        setActiveButton(contactBtn);\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n\r\n    nav.appendChild(homeBtn);\r\n    nav.appendChild(menuBtn);\r\n    nav.appendChild(contactBtn);\r\n\r\n    return nav\r\n}\r\n\r\nfunction createMain(){\r\n    const main = document.createElement('main');\r\n\r\n    main.classList.add('main');\r\n    main.setAttribute('id', 'main');\r\n\r\n    return main;\r\n}\r\n\r\nfunction setActiveButton(button){\r\n    const buttons = document.querySelectorAll('.button-nav');\r\n\r\n    buttons.forEach((button) => {\r\n        if (button !== this){\r\n            button.classList.remove(\"active\");\r\n        }\r\n    });\r\n\r\n    button.classList.add(\"active\");\r\n}\r\n\r\nfunction createFooter(){\r\n    const footer = document.createElement('footer');\r\n\r\n    footer.classList.add('footer');\r\n    footer.textContent = \"Copyright Molikuc\";\r\n\r\n    return footer;\r\n}\r\n\r\nfunction pageLoad() {\r\n   const content = document.getElementById('content');\r\n\r\n   content.appendChild(createHeader());\r\n   content.appendChild(createMain());\r\n   content.appendChild(createFooter());\r\n\r\n   console.log(\"I'm a statement\");\r\n   setActiveButton(document.querySelector(\".button-nav\"));\r\n   (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;