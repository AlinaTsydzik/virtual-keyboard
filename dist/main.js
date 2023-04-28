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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_KeyboardCreateClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/KeyboardCreateClass */ \"./src/js/KeyboardCreateClass.js\");\n\n\nconst keyboardCreater = new _js_KeyboardCreateClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst mainWrapper = document.createElement('div');\nmainWrapper.className = 'main-wrapper';\ndocument.body.append(mainWrapper);\n\nmainWrapper.insertAdjacentHTML('afterbegin', `\n<textarea inputmode=\"text\" class=\"textarea\"></textarea>`);\n\nconst textarea = document.querySelector('.textarea');\n\nkeyboardCreater.keyboardContainer.className = 'keyboard-container';\nmainWrapper.append(keyboardCreater.keyboardContainer);\n\nlet keyboardMode = localStorage.getItem('mode');\nif (!keyboardMode) keyboardMode = 'en';\n\nlet capsLockOn = false;\n\nkeyboardCreater.createKeyboardBtns();\n\nfunction changeLang() {\n  if (keyboardMode === 'en') {\n    keyboardMode = 'ru';\n    localStorage.setItem('mode', 'ru');\n  } else if (keyboardMode === 'ru') {\n    keyboardMode = 'en';\n    localStorage.setItem('mode', 'en');\n  } else if (keyboardMode === 'enCaps') {\n    keyboardMode = 'ruCaps';\n    localStorage.setItem('mode', 'ru');\n  } else if (keyboardMode === 'ruCaps') {\n    keyboardMode = 'enCaps';\n    localStorage.setItem('mode', 'en');\n  }\n  keyboardCreater.createKeyboardLayout(keyboardMode);\n}\n\ndocument.addEventListener('keydown', (event) => {\n  if (event.altKey && event.ctrlKey) {\n    changeLang();\n  }\n});\n\nfunction changeCapsLock() {\n  const capsKey = document.querySelector('.btn-id27');\n  if (keyboardMode === 'en') {\n    keyboardMode = 'enCaps';\n    capsKey.classList.add('active');\n    capsLockOn = true;\n  } else if (keyboardMode === 'ru') {\n    keyboardMode = 'ruCaps';\n    capsKey.classList.add('active');\n    capsLockOn = true;\n  } else if (keyboardMode === 'enCaps') {\n    keyboardMode = 'en';\n    capsKey.classList.remove('active');\n    capsLockOn = false;\n  } else if (keyboardMode === 'ruCaps') {\n    keyboardMode = 'ru';\n    capsKey.classList.remove('active');\n    capsLockOn = false;\n  }\n  keyboardCreater.createKeyboardLayout(keyboardMode);\n}\n\ndocument.addEventListener('keyup', (event) => {\n  if (event.code === 'CapsLock') {\n    changeCapsLock();\n  }\n});\n\nfunction ShiftOn() {\n  if (keyboardMode === 'en' || keyboardMode === 'enCaps') {\n    keyboardMode = 'enShift';\n  } else {\n    keyboardMode = 'ruShift';\n  }\n  keyboardCreater.createKeyboardLayout(keyboardMode);\n}\n\nfunction ShiftOff() {\n  if (keyboardMode === 'enShift' && capsLockOn === false) {\n    keyboardMode = 'en';\n  } else if (keyboardMode === 'ruShift' && capsLockOn === false) {\n    keyboardMode = 'ru';\n  } else if (keyboardMode === 'enShift' && capsLockOn === true) {\n    keyboardMode = 'enCaps';\n  } else if (keyboardMode === 'ruShift' && capsLockOn === true) {\n    keyboardMode = 'ruCaps';\n  }\n  keyboardCreater.createKeyboardLayout(keyboardMode);\n}\n\nconst shiftLRBtns = document.querySelectorAll('.btn-id41, .btn-id53');\nshiftLRBtns.forEach((el) => el.addEventListener('mousedown', ShiftOn));\nshiftLRBtns.forEach((el) => el.addEventListener('mouseup', ShiftOff));\n\ndocument.addEventListener('keydown', (event) => {\n  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n    ShiftOn();\n  }\n});\ndocument.addEventListener('keyup', (event) => {\n  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {\n    ShiftOff();\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/js/KeyboardCreateClass.js":
/*!***************************************!*\
  !*** ./src/js/KeyboardCreateClass.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardCreate)\n/* harmony export */ });\nclass KeyboardCreate {\n  keyboardContainer = document.createElement('div');\n\n  keyCode = [\n    'Backquote',\n    'Digit1',\n    'Digit2',\n    'Digit3',\n    'Digit4',\n    'Digit5',\n    'Digit6',\n    'Digit7',\n    'Digit8',\n    'Digit9',\n    'Digit0',\n    'Minus',\n    'Equal',\n    'Backspace',\n    'Tab',\n    'KeyQ',\n    'KeyW',\n    'KeyE',\n    'KeyR',\n    'KeyT',\n    'KeyY',\n    'KeyU',\n    'KeyI',\n    'KeyO',\n    'KeyP',\n    'BracketLeft',\n    'BracketRight',\n    'CapsLock',\n    'KeyA',\n    'KeyS',\n    'KeyD',\n    'KeyF',\n    'KeyG',\n    'KeyH',\n    'KeyJ',\n    'KeyK',\n    'KeyL',\n    'Semicolon',\n    'Quote',\n    'Backslash',\n    'Enter',\n    'ShiftLeft',\n    'KeyZ',\n    'KeyX',\n    'KeyC',\n    'KeyV',\n    'KeyB',\n    'KeyN',\n    'KeyM',\n    'Comma',\n    'Period',\n    'Slash',\n    'ArrowUp',\n    'ShiftRight',\n    'ControlLeft',\n    'AltLeft',\n    'CommandLeft',\n    'Space',\n    'CommandRight',\n    'AltRight',\n    'ArrowLeft',\n    'ArrowDown',\n    'ArrowRight',\n  ];\n\n  keyValueObj = {\n    en: {\n      Backquote: '`',\n      Digit1: '1',\n      Digit2: '2',\n      Digit3: '3',\n      Digit4: '4',\n      Digit5: '5',\n      Digit6: '6',\n      Digit7: '7',\n      Digit8: '8',\n      Digit9: '9',\n      Digit0: '0',\n      Minus: '-',\n      Equal: '=',\n      Backspace: '←',\n      Tab: 'Tab',\n      KeyQ: 'q',\n      KeyW: 'w',\n      KeyE: 'e',\n      KeyR: 'r',\n      KeyT: 't',\n      KeyY: 'y',\n      KeyU: 'u',\n      KeyI: 'i',\n      KeyO: 'o',\n      KeyP: 'p',\n      BracketLeft: '[',\n      BracketRight: ']',\n      CapsLock: 'CapsLock',\n      KeyA: 'a',\n      KeyS: 's',\n      KeyD: 'd',\n      KeyF: 'f',\n      KeyG: 'g',\n      KeyH: 'h',\n      KeyJ: 'j',\n      KeyK: 'k',\n      KeyL: 'l',\n      Semicolon: ';',\n      Quote: '\\'',\n      Backslash: '\\\\',\n      Enter: '↵',\n      ShiftLeft: 'Shift',\n      KeyZ: 'z',\n      KeyX: 'x',\n      KeyC: 'c',\n      KeyV: 'v',\n      KeyB: 'b',\n      KeyN: 'n',\n      KeyM: 'm',\n      Comma: ',',\n      Period: '.',\n      Slash: '/',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n    enCaps: {\n      Backquote: '`',\n      Digit1: '1',\n      Digit2: '2',\n      Digit3: '3',\n      Digit4: '4',\n      Digit5: '5',\n      Digit6: '6',\n      Digit7: '7',\n      Digit8: '8',\n      Digit9: '9',\n      Digit0: '0',\n      Minus: '-',\n      Equal: '=',\n      Backspace: 'Backspace',\n      Tab: 'Tab',\n      KeyQ: 'Q',\n      KeyW: 'W',\n      KeyE: 'E',\n      KeyR: 'R',\n      KeyT: 'T',\n      KeyY: 'Y',\n      KeyU: 'U',\n      KeyI: 'I',\n      KeyO: 'O',\n      KeyP: 'P',\n      BracketLeft: '[',\n      BracketRight: ']',\n      CapsLock: 'CapsLock',\n      KeyA: 'A',\n      KeyS: 'S',\n      KeyD: 'D',\n      KeyF: 'F',\n      KeyG: 'G',\n      KeyH: 'H',\n      KeyJ: 'J',\n      KeyK: 'K',\n      KeyL: 'L',\n      Semicolon: ';',\n      Quote: '\\'',\n      Backslash: '\\\\',\n      Enter: 'Enter',\n      ShiftLeft: 'Shift',\n      KeyZ: 'Z',\n      KeyX: 'X',\n      KeyC: 'C',\n      KeyV: 'V',\n      KeyB: 'B',\n      KeyN: 'N',\n      KeyM: 'M',\n      Comma: ',',\n      Period: '.',\n      Slash: '/',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n\n    enShift: {\n      Backquote: '~',\n      Digit1: '!',\n      Digit2: '@',\n      Digit3: '#',\n      Digit4: '$',\n      Digit5: '%',\n      Digit6: '^',\n      Digit7: '&',\n      Digit8: '*',\n      Digit9: '(',\n      Digit0: ')',\n      Minus: '_',\n      Equal: '+',\n      Backspace: 'Backspace',\n      Tab: 'Tab',\n      KeyQ: 'Q',\n      KeyW: 'W',\n      KeyE: 'E',\n      KeyR: 'R',\n      KeyT: 'T',\n      KeyY: 'Y',\n      KeyU: 'U',\n      KeyI: 'I',\n      KeyO: 'O',\n      KeyP: 'P',\n      BracketLeft: '{',\n      BracketRight: '}',\n      CapsLock: 'CapsLock',\n      KeyA: 'A',\n      KeyS: 'S',\n      KeyD: 'D',\n      KeyF: 'F',\n      KeyG: 'G',\n      KeyH: 'H',\n      KeyJ: 'J',\n      KeyK: 'K',\n      KeyL: 'L',\n      Semicolon: ':',\n      Quote: '\"',\n      Backslash: '|',\n      Enter: 'Enter',\n      ShiftLeft: 'Shift',\n      KeyZ: 'Z',\n      KeyX: 'X',\n      KeyC: 'C',\n      KeyV: 'V',\n      KeyB: 'B',\n      KeyN: 'N',\n      KeyM: 'M',\n      Comma: '<',\n      Period: '>',\n      Slash: '?',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n\n    ru: {\n      Backquote: ']',\n      Digit1: '1',\n      Digit2: '2',\n      Digit3: '3',\n      Digit4: '4',\n      Digit5: '5',\n      Digit6: '6',\n      Digit7: '7',\n      Digit8: '8',\n      Digit9: '9',\n      Digit0: '0',\n      Minus: '-',\n      Equal: '=',\n      Backspace: 'Backspace',\n      Tab: 'Tab',\n      KeyQ: 'й',\n      KeyW: 'ц',\n      KeyE: 'у',\n      KeyR: 'к',\n      KeyT: 'е',\n      KeyY: 'н',\n      KeyU: 'г',\n      KeyI: 'ш',\n      KeyO: 'щ',\n      KeyP: 'з',\n      BracketLeft: 'х',\n      BracketRight: 'ъ',\n      CapsLock: 'CapsLock',\n      KeyA: 'ф',\n      KeyS: 'ы',\n      KeyD: 'в',\n      KeyF: 'а',\n      KeyG: 'п',\n      KeyH: 'р',\n      KeyJ: 'о',\n      KeyK: 'л',\n      KeyL: 'д',\n      Semicolon: 'ж',\n      Quote: 'э',\n      Backslash: 'ё',\n      Enter: 'Enter',\n      ShiftLeft: 'Shift',\n      KeyZ: 'я',\n      KeyX: 'ч',\n      KeyC: 'с',\n      KeyV: 'м',\n      KeyB: 'и',\n      KeyN: 'т',\n      KeyM: 'ь',\n      Comma: 'б',\n      Period: 'ю',\n      Slash: '/',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n\n    ruCaps: {\n      Backquote: ']',\n      Digit1: '1',\n      Digit2: '2',\n      Digit3: '3',\n      Digit4: '4',\n      Digit5: '5',\n      Digit6: '6',\n      Digit7: '7',\n      Digit8: '8',\n      Digit9: '9',\n      Digit0: '0',\n      Minus: '-',\n      Equal: '=',\n      Backspace: 'Backspace',\n      Tab: 'Tab',\n      KeyQ: 'Й',\n      KeyW: 'Ц',\n      KeyE: 'У',\n      KeyR: 'К',\n      KeyT: 'Е',\n      KeyY: 'Н',\n      KeyU: 'Г',\n      KeyI: 'Ш',\n      KeyO: 'Щ',\n      KeyP: 'З',\n      BracketLeft: 'Х',\n      BracketRight: 'Ъ',\n      CapsLock: 'CapsLock',\n      KeyA: 'Ф',\n      KeyS: 'Ы',\n      KeyD: 'В',\n      KeyF: 'А',\n      KeyG: 'П',\n      KeyH: 'Р',\n      KeyJ: 'О',\n      KeyK: 'Л',\n      KeyL: 'Д',\n      Semicolon: 'Ж',\n      Quote: 'Э',\n      Backslash: 'Ё',\n      Enter: 'Enter',\n      ShiftLeft: 'Shift',\n      KeyZ: 'Я',\n      KeyX: 'Ч',\n      KeyC: 'С',\n      KeyV: 'М',\n      KeyB: 'И',\n      KeyN: 'Т',\n      KeyM: 'Ь',\n      Comma: 'Б',\n      Period: 'Ю',\n      Slash: '/',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n\n    ruShift: {\n      Backquote: '[',\n      Digit1: '!',\n      Digit2: '\"',\n      Digit3: '№',\n      Digit4: '%',\n      Digit5: ':',\n      Digit6: ',',\n      Digit7: '.',\n      Digit8: '*',\n      Digit9: '(',\n      Digit0: ')',\n      Minus: '_',\n      Equal: '+',\n      Backspace: 'Backspace',\n      Tab: 'Tab',\n      KeyQ: 'Й',\n      KeyW: 'Ц',\n      KeyE: 'У',\n      KeyR: 'К',\n      KeyT: 'Е',\n      KeyY: 'Н',\n      KeyU: 'Г',\n      KeyI: 'Ш',\n      KeyO: 'Щ',\n      KeyP: 'З',\n      BracketLeft: 'Х',\n      BracketRight: 'Ъ',\n      CapsLock: 'CapsLock',\n      KeyA: 'Ф',\n      KeyS: 'Ы',\n      KeyD: 'В',\n      KeyF: 'А',\n      KeyG: 'П',\n      KeyH: 'Р',\n      KeyJ: 'О',\n      KeyK: 'Л',\n      KeyL: 'Д',\n      Semicolon: 'Ж',\n      Quote: 'Э',\n      Backslash: 'Ё',\n      Enter: 'Enter',\n      ShiftLeft: 'Shift',\n      KeyZ: 'Я',\n      KeyX: 'Ч',\n      KeyC: 'С',\n      KeyV: 'М',\n      KeyB: 'И',\n      KeyN: 'Т',\n      KeyM: 'Ь',\n      Comma: 'Б',\n      Period: 'Ю',\n      Slash: '?',\n      ArrowUp: '▲',\n      ShiftRight: 'Shift',\n      ControlLeft: 'Ctrl',\n      AltLeft: 'Alt',\n      CommandLeft: 'Cmd',\n      Space: '',\n      CommandRight: 'Cmd',\n      AltRight: 'Alt',\n      ArrowLeft: '◄',\n      ArrowDown: '▼',\n      ArrowRight: '►',\n    },\n  };\n\n  createKeyboardLayout(keyboardMode) {\n    const keyValue = document.querySelectorAll('.btn');\n    keyValue.forEach((e) => {\n      if (e.classList.contains('btn-id27')) {\n        e.innerHTML = `<span class=\"btn-led\"></span>${this.keyValueObj[keyboardMode][e.dataset.key]}`;\n      } else e.textContent = this.keyValueObj[keyboardMode][e.dataset.key];\n    });\n  }\n\n  createKeyboardBtns(keyboardMode = 'en') {\n    for (let i = 0; i < this.keyCode.length; i += 1) {\n      this.keyboardContainer.insertAdjacentHTML('beforeend', `\n          <button id=\"${this.keyCode[i]}\" class=\"btn  btn-id${i}\" data-key=\"${this.keyCode[i]}\"></button>`);\n    }\n    this.createKeyboardLayout(keyboardMode);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/KeyboardCreateClass.js?");

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