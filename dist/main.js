/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Create a \"close\" button and append it to each list item\nvar myNodelist = document.getElementsByTagName(\"LI\");\nvar i;\nfor (i = 0; i < myNodelist.length; i++) {\n  var span = document.createElement(\"SPAN\");\n  var txt = document.createTextNode(\"\\u00D7\");\n  span.className = \"close\";\n  span.appendChild(txt);\n  myNodelist[i].appendChild(span);\n}\n\n// Click on a close button to hide the current list item\nvar close = document.getElementsByClassName(\"close\");\nvar i;\nfor (i = 0; i < close.length; i++) {\n  close[i].onclick = function () {\n    var div = this.parentElement;\n    div.style.display = \"none\";\n  }\n}\n\n// Add a \"checked\" symbol when clicking on a list item\nvar list = document.querySelector('ul');\nlist.addEventListener('click', function (ev) {\n  if (ev.target.tagName === 'LI') {\n    ev.target.classList.toggle('checked');\n  }\n}, false);\n\n// Create a new list item when clicking on the \"Add\" button\nfunction newElement() {\n  var li = document.createElement(\"li\");\n  var inputValue = document.getElementById(\"myInput\").value;\n  var t = document.createTextNode(inputValue);\n  li.appendChild(t);\n  if (inputValue === '') {\n    alert(\"You must write something!\");\n  } else {\n    document.getElementById(\"myUL\").appendChild(li);\n  }\n  document.getElementById(\"myInput\").value = \"\";\n\n  var span = document.createElement(\"SPAN\");\n  var txt = document.createTextNode(\"\\u00D7\");\n  span.className = \"close\";\n  span.appendChild(txt);\n  li.appendChild(span);\n\n  for (i = 0; i < close.length; i++) {\n    close[i].onclick = function () {\n      var div = this.parentElement;\n      div.style.display = \"none\";\n    }\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;