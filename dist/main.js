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

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./template.js\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ \"./keyboard.js\");\n\r\n\r\n\r\n\r\nconst container = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'container', document.body);\r\nconst descr = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  'div',\r\n  'descr',\r\n  container.element,\r\n  'Virtual Keyboard',\r\n);\r\n\r\nconst descrMake = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  'div',\r\n  'descr__make',\r\n  descr.element,\r\n  'maked on Windows',\r\n);\r\nconst descrLang = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  'div',\r\n  'descr__lang',\r\n  descr.element,\r\n  'To change the language press the \"ALT + SHIFT\" combination',\r\n);\r\n\r\nlet lang = localStorage.getItem('lang');\r\nfunction changeLang() {\r\n  if (localStorage.getItem('lang')) {\r\n    lang = localStorage.getItem('lang');\r\n    if (lang === 'en') {\r\n      localStorage.removeItem('lang', 'en');\r\n      localStorage.setItem('lang', 'ru');\r\n      lang = localStorage.getItem('lang');\r\n    } else {\r\n      localStorage.removeItem('lang', 'ru');\r\n      localStorage.setItem('lang', 'en');\r\n      lang = localStorage.getItem('lang');\r\n    }\r\n  } else {\r\n    localStorage.setItem('lang', 'en');\r\n    lang = localStorage.getItem('lang');\r\n  }\r\n}\r\n\r\nlet keyboard = (0,_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang);\r\nconst inputText = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('textarea', 'input', container.element);\r\n\r\nfunction insertKeyboard() {\r\n  container.element.appendChild(keyboard.element);\r\n  const keys = document.querySelectorAll('.key');\r\n  const shiftLeft = document.querySelector('.key_leftshift');\r\n  const shiftRight = document.querySelector('.key_rightshift');\r\n  // const enter = document.querySelector('.key_enter');\r\n  const capsLock = document.querySelector('.CapsLock');\r\n  capsLock.appendChild(new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'capsIndicator').element);\r\n  const capsIndicator = document.querySelector('.capsIndicator');\r\n  const tab = document.querySelector('.Tab');\r\n  const altLeft = document.querySelector('.AltLeft');\r\n  const altRight = document.querySelector('.AltRight');\r\n  const controlLeft = document.querySelector('.ControlLeft');\r\n  const controlRight = document.querySelector('.ControlRight');\r\n  const ArrowUp = document.querySelector('.ArrowUp');\r\n  const ArrowDown = document.querySelector('.ArrowDown');\r\n  const ArrowLeft = document.querySelector('.ArrowLeft');\r\n  const ArrowRight = document.querySelector('.ArrowRight');\r\n\r\n  for (let i = 0; i < keys.length; i += 1) {\r\n    keys[i].setAttribute('keyname', keys[i].textContent);\r\n    keys[i].setAttribute('upperCaseName', keys[i].textContent.toUpperCase());\r\n  }\r\n\r\n  function keyDown(e) {\r\n    for (let i = 0; i < keys.length; i += 1) {\r\n      inputText.element.focus();\r\n\r\n      if (\r\n        (e.key !== 'Shift' &&\r\n          e.key !== 'Alt' &&\r\n          e.key !== 'Control' &&\r\n          e.key !== 'AltGraph' &&\r\n          e.key !== 'CapsLock' &&\r\n          e.key === keys[i].getAttribute('keyname')) ||\r\n        e.key === keys[i].getAttribute('upperCaseName')\r\n      ) {\r\n        inputText.element.focus();\r\n        keys[i].classList.add('active');\r\n      }\r\n      if (e.code === 'CapsLock') {\r\n        e.preventDefault();\r\n        capsLock.classList.add('active');\r\n        if (capsIndicator.classList.contains('capsIndicator-active')) {\r\n          capsIndicator.classList.remove('capsIndicator-active');\r\n        } else {\r\n          capsIndicator.classList.add('capsIndicator-active');\r\n        }\r\n      }\r\n      if (e.code === 'Tab') {\r\n        e.preventDefault();\r\n        tab.classList.add('active');\r\n      }\r\n      if (e.code === 'ShiftLeft') {\r\n        shiftLeft.classList.add('active');\r\n      }\r\n      if (e.code === 'ShiftRight') {\r\n        shiftRight.classList.add('active');\r\n      }\r\n      if (e.code === 'AltLeft') {\r\n        e.preventDefault();\r\n        altLeft.classList.add('active');\r\n      }\r\n      if (e.code === 'AltRight') {\r\n        e.preventDefault();\r\n        altRight.classList.add('active');\r\n      }\r\n      if (e.code === 'ControlLeft') {\r\n        e.preventDefault();\r\n        controlLeft.classList.add('active');\r\n      }\r\n      if (e.code === 'ControlRight') {\r\n        e.preventDefault();\r\n        controlRight.classList.add('active');\r\n      }\r\n      if (e.key === 'AltGraph') {\r\n        e.preventDefault();\r\n      }\r\n      if (e.key === 'ArrowUp') {\r\n        ArrowUp.classList.add('active');\r\n      }\r\n      if (e.key === 'ArrowDown') {\r\n        ArrowDown.classList.add('active');\r\n      }\r\n      if (e.key === 'ArrowLeft') {\r\n        ArrowLeft.classList.add('active');\r\n      }\r\n      if (e.key === 'ArrowRight') {\r\n        ArrowRight.classList.add('active');\r\n      }\r\n    }\r\n  }\r\n\r\n  function keyUp(e) {\r\n    for (let i = 0; i < keys.length; i += 1) {\r\n      if (\r\n        (e.key !== 'Shift' &&\r\n          e.key !== 'Alt' &&\r\n          e.key !== 'Control' &&\r\n          e.key !== 'AltGraph' &&\r\n          e.key !== 'CapsLock' &&\r\n          e.key === keys[i].getAttribute('keyname')) ||\r\n        e.key === keys[i].getAttribute('upperCaseName')\r\n      ) {\r\n        keys[i].classList.remove('active');\r\n        keys[i].classList.add('remove');\r\n      }\r\n      if (e.code === 'CapsLock') {\r\n        e.preventDefault();\r\n        capsLock.classList.remove('active');\r\n        capsLock.classList.add('remove');\r\n      }\r\n      if (e.code === 'Tab') {\r\n        e.preventDefault();\r\n        tab.classList.remove('active');\r\n        tab.classList.add('remove');\r\n        window.addEventListener('keydown', keyDown);\r\n      }\r\n      if (e.code === 'ShiftLeft') {\r\n        shiftLeft.classList.remove('active');\r\n        shiftLeft.classList.add('remove');\r\n      }\r\n      if (e.code === 'ShiftRight') {\r\n        shiftRight.classList.remove('active');\r\n        shiftRight.classList.add('remove');\r\n      }\r\n      if (e.code === 'AltLeft') {\r\n        altLeft.classList.remove('active');\r\n        altLeft.classList.add('remove');\r\n      }\r\n      if (e.code === 'AltRight') {\r\n        altRight.classList.remove('active');\r\n        altRight.classList.add('remove');\r\n      }\r\n      if (e.code === 'ControlLeft') {\r\n        controlLeft.classList.remove('active');\r\n        controlLeft.classList.add('remove');\r\n      }\r\n      if (e.code === 'ControlRight') {\r\n        controlRight.classList.remove('active');\r\n        controlRight.classList.add('remove');\r\n      }\r\n      if (e.key === 'ArrowUp') {\r\n        ArrowUp.classList.remove('active');\r\n        ArrowUp.classList.add('remove');\r\n      }\r\n      if (e.key === 'ArrowDown') {\r\n        ArrowDown.classList.remove('active');\r\n        ArrowDown.classList.add('remove');\r\n      }\r\n      if (e.key === 'ArrowLeft') {\r\n        ArrowLeft.classList.remove('active');\r\n        ArrowLeft.classList.add('remove');\r\n      }\r\n      if (e.key === 'ArrowRight') {\r\n        ArrowRight.classList.remove('active');\r\n        ArrowRight.classList.add('remove');\r\n      }\r\n      setTimeout(() => {\r\n        keys[i].classList.remove('remove');\r\n      }, 600);\r\n    }\r\n  }\r\n  window.addEventListener('keydown', keyDown);\r\n  window.addEventListener('keyup', keyUp);\r\n}\r\ninsertKeyboard();\r\n\r\nwindow.addEventListener('keydown', (e) => {\r\n  if (e.code === 'Tab') {\r\n    inputText.element.value += '  ';\r\n  }\r\n  if (e.key === 'Shift' && e.altKey === true) {\r\n    changeLang();\r\n    keyboard.element.remove();\r\n    keyboard = (0,_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(lang);\r\n    insertKeyboard();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./keyInfo.js":
/*!********************!*\
  !*** ./keyInfo.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keyInfo = [\r\n  [\r\n    // row 1\r\n    {\r\n      key: { ru: 'ё', en: '`' },\r\n      shift: { ru: 'Ё', en: '~' },\r\n      code: 'Backquote',\r\n      class: 'key tilda Backquote',\r\n    },\r\n    {\r\n      key: { ru: '1', en: '1' },\r\n      shift: { ru: '!', en: '!' },\r\n      code: 'Digit1',\r\n      class: 'key Digit1',\r\n    },\r\n    {\r\n      key: { ru: '2', en: '2' },\r\n      shift: { ru: '\"', en: '@' },\r\n      code: 'Digit2',\r\n      class: 'key Digit2',\r\n    },\r\n    {\r\n      key: { ru: '3', en: '3' },\r\n      shift: { ru: '№', en: '#' },\r\n      code: 'Digit3',\r\n      class: 'key Digit3',\r\n    },\r\n    {\r\n      key: { ru: '4', en: '4' },\r\n      shift: { ru: ';', en: '$' },\r\n      code: 'Digit4',\r\n      class: 'key Digit4',\r\n    },\r\n    {\r\n      key: { ru: '5', en: '5' },\r\n      shift: { ru: '%', en: '%' },\r\n      code: 'Digit5',\r\n      class: 'key Digit5',\r\n    },\r\n    {\r\n      key: { ru: '6', en: '6' },\r\n      shift: { ru: ':', en: '^' },\r\n      code: 'Digit6',\r\n      class: 'key Digit6',\r\n    },\r\n    {\r\n      key: { ru: '7', en: '7' },\r\n      shift: { ru: '?', en: '&' },\r\n      code: 'Digit7',\r\n      class: 'key Digit7',\r\n    },\r\n    {\r\n      key: { ru: '8', en: '8' },\r\n      shift: { ru: '*', en: '*' },\r\n      code: 'Digit8',\r\n      class: 'key Digit8',\r\n    },\r\n    {\r\n      key: { ru: '9', en: '9' },\r\n      shift: { ru: '(', en: '(' },\r\n      code: 'Digit9',\r\n      class: 'key Digit9',\r\n    },\r\n    {\r\n      key: { ru: '0', en: '0' },\r\n      shift: { ru: ')', en: ')' },\r\n      code: 'Digit0',\r\n      class: 'key Digit0',\r\n    },\r\n    {\r\n      key: { ru: '-', en: '-' },\r\n      shift: { ru: '_', en: '_' },\r\n      code: 'Minus',\r\n      class: 'key Minus',\r\n    },\r\n    {\r\n      key: { ru: '=', en: '=' },\r\n      shift: { ru: '+', en: '+' },\r\n      code: 'Equal',\r\n      class: 'key Equal',\r\n    },\r\n    {\r\n      key: { ru: 'Backspace', en: 'Backspace' },\r\n      code: 'Backspace',\r\n      class: 'key key_backspace Backspace',\r\n      noType: true,\r\n    },\r\n  ],\r\n  [\r\n    // row 2\r\n    {\r\n      key: { ru: 'Tab', en: 'Tab' },\r\n      code: 'Tab',\r\n      class: 'key key_tab Tab',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: 'й', en: 'q' },\r\n      shift: { ru: 'Й', en: 'Q' },\r\n      code: 'KeyQ',\r\n      class: 'key KeyQ',\r\n    },\r\n    {\r\n      key: { ru: 'ц', en: 'w' },\r\n      shift: { ru: 'Ц', en: 'W' },\r\n      code: 'KeyW',\r\n      class: 'key KeyW',\r\n    },\r\n    {\r\n      key: { ru: 'у', en: 'e' },\r\n      shift: { ru: 'У', en: 'E' },\r\n      code: 'KeyE',\r\n      class: 'key KeyE',\r\n    },\r\n    {\r\n      key: { ru: 'к', en: 'r' },\r\n      shift: { ru: 'К', en: 'R' },\r\n      code: 'KeyR',\r\n      class: 'key KeyR',\r\n    },\r\n    {\r\n      key: { ru: 'е', en: 't' },\r\n      shift: { ru: 'Е', en: 'T' },\r\n      code: 'KeyT',\r\n      class: 'key KeyT',\r\n    },\r\n    {\r\n      key: { ru: 'н', en: 'y' },\r\n      shift: { ru: 'Н', en: 'Y' },\r\n      code: 'KeyY',\r\n      class: 'key KeyY',\r\n    },\r\n    {\r\n      key: { ru: 'г', en: 'u' },\r\n      shift: { ru: 'Г', en: 'U' },\r\n      code: 'KeyU',\r\n      class: 'key KeyU',\r\n    },\r\n    {\r\n      key: { ru: 'ш', en: 'i' },\r\n      shift: { ru: 'Ш', en: 'I' },\r\n      code: 'KeyI',\r\n      class: 'key KeyI',\r\n    },\r\n    {\r\n      key: { ru: 'щ', en: 'o' },\r\n      shift: { ru: 'Щ', en: 'O' },\r\n      code: 'KeyO',\r\n      class: 'key KeyO',\r\n    },\r\n    {\r\n      key: { ru: 'з', en: 'p' },\r\n      shift: { ru: 'З', en: 'P' },\r\n      code: 'KeyP',\r\n      class: 'key KeyP',\r\n    },\r\n    {\r\n      key: { ru: 'х', en: '[' },\r\n      shift: { ru: 'Х', en: '{' },\r\n      code: 'BracketLeft',\r\n      class: 'key BracketLeft',\r\n    },\r\n    {\r\n      key: { ru: 'ъ', en: ']' },\r\n      shift: { ru: 'Ъ', en: '}' },\r\n      code: 'BracketRight',\r\n      class: 'key BracketRight',\r\n    },\r\n    {\r\n      key: { ru: '\\\\', en: '\\\\' },\r\n      shift: { ru: '|', en: '|' },\r\n      code: 'Backslash',\r\n      class: 'key key_backslash Backslash',\r\n    },\r\n    {\r\n      key: { ru: 'Del', en: 'Del' },\r\n      code: 'Delete',\r\n      class: 'key key_del Delete',\r\n    },\r\n  ],\r\n  [\r\n    // row 3\r\n    {\r\n      key: { ru: 'CapsLock', en: 'CapsLock' },\r\n      code: 'CapsLock',\r\n      class: 'key CapsLock',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: 'ф', en: 'a' },\r\n      shift: { ru: 'Ф', en: 'A' },\r\n      code: 'KeyA',\r\n      class: 'key KeyA',\r\n    },\r\n    {\r\n      key: { ru: 'ы', en: 's' },\r\n      shift: { ru: 'Ы', en: 'S' },\r\n      code: 'KeyS',\r\n      class: 'key KeyS',\r\n    },\r\n    {\r\n      key: { ru: 'в', en: 'd' },\r\n      shift: { ru: 'В', en: 'D' },\r\n      code: 'KeyD',\r\n      class: 'key KeyD',\r\n    },\r\n    {\r\n      key: { ru: 'а', en: 'f' },\r\n      shift: { ru: 'А', en: 'F' },\r\n      code: 'KeyF',\r\n      class: 'key KeyF',\r\n    },\r\n    {\r\n      key: { ru: 'п', en: 'g' },\r\n      shift: { ru: 'П', en: 'G' },\r\n      code: 'KeyG',\r\n      class: 'key KeyG',\r\n    },\r\n    {\r\n      key: { ru: 'р', en: 'h' },\r\n      shift: { ru: 'Р', en: 'H' },\r\n      code: 'KeyH',\r\n      class: 'key KeyH',\r\n    },\r\n    {\r\n      key: { ru: 'о', en: 'j' },\r\n      shift: { ru: 'О', en: 'J' },\r\n      code: 'KeyJ',\r\n      class: 'key KeyJ',\r\n    },\r\n    {\r\n      key: { ru: 'л', en: 'k' },\r\n      shift: { ru: 'Л', en: 'K' },\r\n      code: 'KeyK',\r\n      class: 'key KeyK',\r\n    },\r\n    {\r\n      key: { ru: 'д', en: 'l' },\r\n      shift: { ru: 'Д', en: 'L' },\r\n      code: 'KeyL',\r\n      class: 'key KeyL',\r\n    },\r\n    {\r\n      key: { ru: 'ж', en: ';' },\r\n      shift: { ru: 'Ж', en: ':' },\r\n      code: 'Semicolon',\r\n      class: 'key Semicolon',\r\n    },\r\n    {\r\n      key: { ru: 'э', en: \"'\" },\r\n      shift: { ru: 'Э', en: '\"' },\r\n      code: 'Quote',\r\n      class: 'key Quote',\r\n    },\r\n    {\r\n      key: { ru: 'Enter', en: 'Enter' },\r\n      code: 'Enter',\r\n      class: 'key key_enter Enter',\r\n      noType: true,\r\n    },\r\n  ],\r\n  [\r\n    // row 4\r\n    {\r\n      key: { ru: 'Shift', en: 'Shift' },\r\n      code: 'ShiftLeft',\r\n      class: 'key key_leftshift ShiftLeft',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: 'я', en: 'z' },\r\n      shift: { ru: 'Я', en: 'Z' },\r\n      code: 'KeyZ',\r\n      class: 'key KeyZ',\r\n    },\r\n    {\r\n      key: { ru: 'ч', en: 'x' },\r\n      shift: { ru: 'Ч', en: 'X' },\r\n      code: 'KeyX',\r\n      class: 'key KeyX',\r\n    },\r\n    {\r\n      key: { ru: 'с', en: 'c' },\r\n      shift: { ru: 'С', en: 'C' },\r\n      code: 'KeyC',\r\n      class: 'key KeyC',\r\n    },\r\n    {\r\n      key: { ru: 'м', en: 'v' },\r\n      shift: { ru: 'М', en: 'V' },\r\n      code: 'KeyV',\r\n      class: 'key KeyV',\r\n    },\r\n    {\r\n      key: { ru: 'и', en: 'b' },\r\n      shift: { ru: 'И', en: 'B' },\r\n      code: 'KeyB',\r\n      class: 'key KeyB',\r\n    },\r\n    {\r\n      key: { ru: 'т', en: 'n' },\r\n      shift: { ru: 'Т', en: 'N' },\r\n      code: 'KeyN',\r\n      class: 'key KeyN',\r\n    },\r\n    {\r\n      key: { ru: 'ь', en: 'm' },\r\n      shift: { ru: 'Ь', en: 'M' },\r\n      code: 'KeyM',\r\n      class: 'key KeyM',\r\n    },\r\n    {\r\n      key: { ru: 'б', en: ',' },\r\n      shift: { ru: 'Б', en: '<' },\r\n      code: 'Comma',\r\n      class: 'key Comma',\r\n    },\r\n    {\r\n      key: { ru: 'ю', en: '.' },\r\n      shift: { ru: 'Ю', en: '>' },\r\n      code: 'Period',\r\n      class: 'key Period',\r\n    },\r\n    {\r\n      key: { ru: '.', en: '/' },\r\n      shift: { ru: ',', en: '?' },\r\n      code: 'Slash',\r\n      class: 'key Slash',\r\n    },\r\n    {\r\n      key: { ru: '▲', en: '▲' },\r\n      code: 'ArrowUp',\r\n      noType: true,\r\n      class: 'key ArrowUp',\r\n    },\r\n    {\r\n      key: { ru: 'Shift', en: 'Shift' },\r\n      code: 'ShiftRight',\r\n      class: 'key key_rightshift ShiftRight',\r\n      noType: true,\r\n    },\r\n  ],\r\n  [\r\n    // row 5\r\n    {\r\n      key: { ru: 'Ctrl', en: 'Ctrl' },\r\n      code: 'ControlLeft',\r\n      class: 'key key_leftctrl ControlLeft',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: 'Alt', en: 'Alt' },\r\n      code: 'AltLeft',\r\n      class: 'key key_leftalt AltLeft',\r\n      noType: true,\r\n    },\r\n    { key: { ru: ' ', en: ' ' }, code: 'Space', class: 'key key_space Space' },\r\n    {\r\n      key: { ru: 'Alt', en: 'Alt' },\r\n      code: 'AltRight',\r\n      class: 'key key_rightalt AltRight',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: 'Ctrl', en: 'Ctrl' },\r\n      code: 'ControlRight',\r\n      class: 'key key_rightctrl ControlRight',\r\n      noType: true,\r\n    },\r\n    {\r\n      key: { ru: '◄', en: '◄' },\r\n      code: 'ArrowLeft',\r\n      noType: true,\r\n      class: 'key ArrowLeft',\r\n    },\r\n    {\r\n      key: { ru: '▼', en: '▼' },\r\n      code: 'ArrowDown',\r\n      noType: true,\r\n      class: 'key ArrowDown',\r\n    },\r\n    {\r\n      key: { ru: '►', en: '►' },\r\n      code: 'ArrowRight',\r\n      noType: true,\r\n      class: 'key ArrowRight',\r\n    },\r\n    {\r\n      key: { ru: '🇷🇺', en: 'en' },\r\n      code: 'Lang',\r\n      class: 'key key_lang Lang',\r\n      noType: true,\r\n    },\r\n  ],\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyInfo);\r\n\n\n//# sourceURL=webpack:///./keyInfo.js?");

/***/ }),

/***/ "./keyboard.js":
/*!*********************!*\
  !*** ./keyboard.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./template.js\");\n/* harmony import */ var _keyInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyInfo */ \"./keyInfo.js\");\n\r\n\r\n\r\nfunction createKeyboard(lang) {\r\n  const abc = lang;\r\n  const keyboard = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', 'keyboard', false);\r\n  for (let i = 0; i < _keyInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i += 1) {\r\n    // const a;\r\n    const a = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', `row${i} row`, keyboard.element);\r\n    for (let j = 0; j < _keyInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].length; j += 1) {\r\n      // const b;\r\n      const b = new _template__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n        'div',\r\n        `${_keyInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i][j].class}`,\r\n        a.element,\r\n        `${_keyInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i][j].key[abc]}`,\r\n      );\r\n    }\r\n  }\r\n  return keyboard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKeyboard);\r\n\n\n//# sourceURL=webpack:///./keyboard.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Template {\r\n  constructor(tagName, className, parent, innerHTML) {\r\n    this.element = document.createElement(tagName);\r\n    this.element.className = className;\r\n    if (parent) {\r\n      parent.append(this.element);\r\n    }\r\n    if (innerHTML) {\r\n      this.element.innerHTML = innerHTML;\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\r\n\n\n//# sourceURL=webpack:///./template.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;