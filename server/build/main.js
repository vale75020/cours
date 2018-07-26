require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_cours__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cors__);






const Port = process.env.PORT || 5000;

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_4_cors___default()());

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect('mongodb://localhost/level1');
const db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !');
});

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default()());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("ciao");
});

app.use('/cours', __WEBPACK_IMPORTED_MODULE_3__routes_cours__["a" /* default */]);

app.listen(Port, () => {
    console.log("app is listen on port 5000");
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cours__ = __webpack_require__(7);




const coursRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

var storage = __WEBPACK_IMPORTED_MODULE_1_multer___default.a.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.fieldname);
    }
});

var upload = __WEBPACK_IMPORTED_MODULE_1_multer___default()({ storage: storage });

coursRouter.get("/", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_cours__["a" /* default */].find({}, (err, cours) => {
        if (err) console.log(err);
        res.json(cours);
    });
});

coursRouter.get("/add", (req, res) => {
    res.send('add a cours');
});

coursRouter.post("/add", upload.single("img"), (req, res) => {
    const datas = req.body;
    datas["img"] = req.file.filename;

    const newCours = new __WEBPACK_IMPORTED_MODULE_2__models_cours__["a" /* default */](datas);

    newCours.save((err, saveCour) => {
        if (err) console.log(err);
        res.redirect('http://localhost:3000/cours');
    });
});

coursRouter.get("/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_cours__["a" /* default */].findById(req.params.id, (err, cour) => {
        if (err) console.log(err);
        res.json(cour); //je recupere l'id et tout les données en format json
    });
});

coursRouter.post("/edit/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_cours__["a" /* default */].findByIdAndUpdate(req.params.id, req.body, (err, cour) => {
        if (err) console.log(err);
        res.redirect('http://localhost:3000/cours');
    });
});

coursRouter.get("/delete/:id", (req, res) => {
    //let idParams = { _id: req.params.id }
    __WEBPACK_IMPORTED_MODULE_2__models_cours__["a" /* default */].findByIdAndRemove(req.params.id, (err, cour) => {
        if (err) console.log(err);
        res.redirect('http://localhost:3000/cours');
    });
});

/* harmony default export */ __webpack_exports__["a"] = (coursRouter);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const coursSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    tags: [],
    date: { type: Date, default: Date.now },
    img: { type: String }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('cours', coursSchema));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map