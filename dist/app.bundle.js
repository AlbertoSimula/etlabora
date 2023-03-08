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

/***/ "./esercizi.js":
/*!*********************!*\
  !*** ./esercizi.js ***!
  \*********************/
/***/ (() => {

eval("/*esercizio for*/\n/*a%b se da 0, l'if ritorna false*/\n/*potevo usare anche NOT mettendo !davanti alla parentesi dell'if*/\n/*messi i prompt per fare degli input, ma è solo per provarli*/\n/*\nfor (var i=1; i<=100; i=i+2){\n    if (i%5==0) {\n    console.log(i + \" è multiplo di 5\")\n    }\n};\n*/\n/*esercizio paridispari*/\n/*\nvar n=0;\nvar d=2;\nvar i=1;\nwhile (d*i<n){\n    i=i+1;\n};\nif(d*i==n){\n    console.log(\"il numero \" + n + \" diviso per \" + d + \" non da resto quindi è paro\")\n} else{\n    console.log(\"il numero \" + n + \" diviso per \" + d + \" da resto quindi è disparo\")\n};\n\n/*metodo for utile, ma poco elegante*/\n\n/*\nfor(var i=1; i<n/d; i=i+1){\n}\nif(d*i==n){\n    console.log(\"il numero \" + n + \" diviso per \" + d + \" non da resto quindi è paro\")\n} else{\n    console.log(\"il numero \" + n + \" diviso per \" + d + \" da resto quindi è disparo\")\n};\n*/\n/*sottrazione*/\n/*\nvar n=0;\nvar t=n;\nvar d=2;\ndo{\n    t=t-d;\n} while(t>0);\nif(t==0 || t==-d){\n    console.log(n + \" è pari\")\n}else{\n    console.log(n + \" è dispari\")\n}\n*/\n/*funzione*/\n/*\nvar d=prompt((\"dimmi un numero, che mi serve un incremento\"),\"\");\nfunction isEven(n){\n    var t=n;\n    do{\n        t=t-d;\n    } while(t>0);\n    if(t==0 || t==-d){\n        return(\"Pari\")\n    }\n    return(\"Dispari\");\n};\n*/\n/*\nvar res = isEven(prompt(\"dimmi un numero e capisco se è pari o dispari\"), \"\");\nconsole.log(res);\n*/\n/*funzioni ricorsive*/\n/*\nvar res = 1;\nfunction fattoriale(n){\n    if(n==0){\n        return res;\n    }\n    return res = n*fattoriale(n-1)\n}\nfattoriale(prompt(\"dimmi un numero e ci faccio il fattoriale\"), \"\");\nconsole.log(res);\n*/\n/*esercizi bubbling*/\n/*\n    *var butts = document.body.querySelectorAll(\"form button\");\n\n    *for(i=0; i<butts.length; i++){\n    *butts[i].addEventListener(\"click\", function(e){\n    *    e.preventDefault();\n    *    var email = document.body.querySelector('input[name=\"email\"]');*/ /*meglio evitare di usare gli id, usare cose del genere*/\n/*   console.log(email.value);       */ /*potevo scrivere direttamente email.value e prendeva uguale*/\n/*   var psswd = document.body.querySelector('input[name=\"password\"]')\n    console.log(psswd.value);\n});\n};\n*/\n\nvar arr = [2, 45, 14, 27, 15, 38];\nvar fn = arr.filter(function (n) {\n  return n % 2 == 1 && n > 25;\n});\nconsole.log(fn);\n\n//# sourceURL=webpack://etlabora/./esercizi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./esercizi.js"]();
/******/ 	
/******/ })()
;