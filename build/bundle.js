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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_bad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _classes_fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var readline = __webpack_require__(5);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Name your hero : ', function (answer) {
    var good = new _classes_good__WEBPACK_IMPORTED_MODULE_0__["default"](answer);
    console.log(good);
    var bad = new _classes_bad__WEBPACK_IMPORTED_MODULE_1__["default"]();
    console.log(bad);
    rl.close();
    var fight = new _classes_fight__WEBPACK_IMPORTED_MODULE_2__["default"](good, bad);
    console.log(fight.start);
});
// let good = new Good('pierre')
// console.log(good.name);
// console.log(good.pv);
// console.log(good.pvMax);
// let bad = new Bad()
// console.log(bad.name);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Good = /** @class */ (function (_super) {
    __extends(Good, _super);
    function Good(name) {
        if (name === void 0) { name = ''; }
        var _this = _super.call(this, name) || this;
        _this.heal = function () {
            var plusPv = Math.floor(Math.random() * 20);
            if (_this.pv + plusPv >= _this.pvMax) {
                _this.pv = _this.pvMax;
            }
            else {
                _this.pv += plusPv;
            }
        };
        return _this;
    }
    return Good;
}(_characters__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Good);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Character = /** @class */ (function () {
    function Character(name) {
        if (name === void 0) { name = ""; }
        this._pv = Math.floor(Math.random() * 100 + 100);
        this._pvMax = this._pv;
        this._defense = Math.floor(Math.random() * 100 + 80);
        this._name = name;
        this._weapon = new _weapon__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "pv", {
        get: function () {
            return this._pv;
        },
        set: function (pv) {
            this._pv = pv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "pvMax", {
        get: function () {
            return this._pvMax;
        },
        set: function (pvMax) {
            this._pvMax = pvMax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "defense", {
        get: function () {
            return this._defense;
        },
        set: function (defense) {
            this._defense = defense;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        set: function (weapon) {
            this._weapon = weapon;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
/* harmony default export */ __webpack_exports__["default"] = (Character);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Weapon = /** @class */ (function () {
    function Weapon() {
        this._minDamage = Math.floor(Math.random() * 200);
        this._maxDamage = this._minDamage + Math.floor(Math.random() * 10);
        this._criticalHit = Math.floor(Math.random() * 10);
    }
    Object.defineProperty(Weapon.prototype, "minDamage", {
        get: function () {
            return this._minDamage;
        },
        set: function (minDamage) {
            this._minDamage = minDamage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "maxDamage", {
        get: function () {
            return this._maxDamage;
        },
        set: function (maxDamage) {
            this._maxDamage = maxDamage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "criticalHit", {
        get: function () {
            return this._criticalHit;
        },
        set: function (criticalHit) {
            if (criticalHit < 50) {
                this._criticalHit = criticalHit;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());
/* harmony default export */ __webpack_exports__["default"] = (Weapon);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Bad = /** @class */ (function (_super) {
    __extends(Bad, _super);
    function Bad(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = _this.randomName();
        return _this;
    }
    Bad.prototype.randomName = function () {
        var name = Math.random().toString(36).replace(/[^a-z]+/g, '');
        return name[0].toUpperCase() + name.substring(1);
    };
    return Bad;
}(_characters__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Bad);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var Fight = /** @class */ (function () {
    function Fight(good, bad) {
        var _this = this;
        this._start = Math.random() >= 0.5;
        this.fight = function () {
            while (_this.good.pv != 0 && _this.bad.pv != 0) {
                if (_this.start === true) {
                    new _run__WEBPACK_IMPORTED_MODULE_0__["default"](_this.good, _this.bad);
                }
                else {
                    new _run__WEBPACK_IMPORTED_MODULE_0__["default"](_this.bad, _this.good);
                }
            }
        };
        this._good = good;
        this._bad = bad;
    }
    Object.defineProperty(Fight.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (start) {
            this._start = start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fight.prototype, "good", {
        get: function () {
            return this._good;
        },
        set: function (good) {
            this._good = good;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fight.prototype, "bad", {
        get: function () {
            return this._bad;
        },
        set: function (bad) {
            this._bad = bad;
        },
        enumerable: true,
        configurable: true
    });
    return Fight;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fight);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Run = /** @class */ (function () {
    function Run(target, attacker) {
        var _this = this;
        this.hit = function () {
            var damagePts = Math.floor(Math.random() * _this.attacker.weapon.minDamage + _this.attacker.weapon.maxDamage);
            _this.target.pv = _this.target.pv - (damagePts + _this.target.defense);
            return _this.target;
        };
        this._target = target;
        this._attacker = attacker;
        this.hit();
    }
    Object.defineProperty(Run.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (target) {
            this._target = target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Run.prototype, "attacker", {
        get: function () {
            return this._attacker;
        },
        set: function (attacker) {
            this._attacker = attacker;
        },
        enumerable: true,
        configurable: true
    });
    return Run;
}());
/* harmony default export */ __webpack_exports__["default"] = (Run);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvY2hhcmFjdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYmFkLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvcnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ0Q7QUFDRztBQUNuQyxJQUFNLFFBQVEsR0FB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SUFBSSxDQUFDLE9BQU87UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBZ0I7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkseUJBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVM7UUFDekIsQ0FBQzthQUVELFVBQWEsUUFBa0I7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRO1FBQzdCLENBQUM7OztPQUpBO0lBV0wsVUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdvb2QgZnJvbSAnLi9jbGFzc2VzL2dvb2QnXG5pbXBvcnQgQmFkIGZyb20gJy4vY2xhc3Nlcy9iYWQnO1xuaW1wb3J0IEZpZ2h0IGZyb20gJy4vY2xhc3Nlcy9maWdodCdcbmNvbnN0IHJlYWRsaW5lID0gcmVxdWlyZSgncmVhZGxpbmUnKTtcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XG4gIH0pO1xuICBcblxucmwucXVlc3Rpb24oJ05hbWUgeW91ciBoZXJvIDogJywgKGFuc3dlcjpzdHJpbmcpID0+IHtcbiAgICAgIGxldCBnb29kID0gbmV3IEdvb2QoYW5zd2VyKVxuICAgICAgY29uc29sZS5sb2coZ29vZCk7XG4gICAgICBsZXQgYmFkID0gbmV3IEJhZCgpXG4gICAgICBjb25zb2xlLmxvZyhiYWQpO1xuICAgIHJsLmNsb3NlKCk7XG4gICAgbGV0IGZpZ2h0ID0gbmV3IEZpZ2h0KGdvb2QsIGJhZClcbiAgICBjb25zb2xlLmxvZyhmaWdodC5zdGFydCk7XG4gICAgXG4gIH0pO1xuICBcbi8vIGxldCBnb29kID0gbmV3IEdvb2QoJ3BpZXJyZScpXG4vLyBjb25zb2xlLmxvZyhnb29kLm5hbWUpO1xuLy8gY29uc29sZS5sb2coZ29vZC5wdik7XG4vLyBjb25zb2xlLmxvZyhnb29kLnB2TWF4KTtcbi8vIGxldCBiYWQgPSBuZXcgQmFkKClcbi8vIGNvbnNvbGUubG9nKGJhZC5uYW1lKTtcbiIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXJzJ1xuXG5jbGFzcyBHb29kIGV4dGVuZHMgQ2hhcmFjdGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSAnJyl7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgfVxuXG4gICAgaGVhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGx1c1B2ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApXG4gICAgICAgIGlmICh0aGlzLnB2ICsgcGx1c1B2ID49IHRoaXMucHZNYXgpIHtcbiAgICAgICAgICAgIHRoaXMucHYgPSB0aGlzLnB2TWF4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB2ICs9IHBsdXNQdlxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29kIiwiaW1wb3J0IFdlYXBvbiBmcm9tIFwiLi93ZWFwb25cIlxuXG5jbGFzcyBDaGFyYWN0ZXJ7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nXG4gICAgcHJpdmF0ZSBfcHY6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEwMClcbiAgICBwcml2YXRlIF9wdk1heDogbnVtYmVyID0gdGhpcy5fcHZcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyA4MClcbiAgICBwcml2YXRlIF93ZWFwb246IFdlYXBvblxuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWFwb24gPSBuZXcgV2VhcG9uKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IG5hbWUoKTpzdHJpbmcge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldCBuYW1lKG5hbWU6c3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IHB2KCk6bnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0IHB2KHB2Om51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B2ID0gcHZcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IHB2TWF4KCk6bnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHZNYXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0IHB2TWF4KHB2TWF4Om51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B2TWF4ID0gcHZNYXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IGRlZmVuc2UoKTpudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldCBkZWZlbnNlKGRlZmVuc2U6bnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IHdlYXBvbigpOldlYXBvbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlYXBvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXQgd2VhcG9uKHdlYXBvbjpXZWFwb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb25cbiAgICAgICAgICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9ue1xuICAgIHByaXZhdGUgX21pbkRhbWFnZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKVxuICAgIHByaXZhdGUgX21heERhbWFnZTogbnVtYmVyID0gdGhpcy5fbWluRGFtYWdlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgcHJpdmF0ZSBfY3JpdGljYWxIaXQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gICAgZ2V0IG1pbkRhbWFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYW1hZ2VcbiAgICB9XG5cbiAgICBzZXQgbWluRGFtYWdlKG1pbkRhbWFnZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGFtYWdlID0gbWluRGFtYWdlXG4gICAgfVxuXG4gICAgZ2V0IG1heERhbWFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYW1hZ2VcbiAgICB9XG5cbiAgICBzZXQgbWF4RGFtYWdlKG1heERhbWFnZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4RGFtYWdlID0gbWF4RGFtYWdlXG4gICAgfVxuXG4gICAgZ2V0IGNyaXRpY2FsSGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JpdGljYWxIaXRcbiAgICB9XG5cbiAgICBzZXQgY3JpdGljYWxIaXQoY3JpdGljYWxIaXQpIHtcbiAgICAgICAgaWYgKGNyaXRpY2FsSGl0IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMuX2NyaXRpY2FsSGl0ID0gY3JpdGljYWxIaXRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vY2hhcmFjdGVycydcblxuY2xhc3MgQmFkIGV4dGVuZHMgQ2hhcmFjdGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nID0gXCJcIil7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFuZG9tTmFtZSgpICAgICAgICBcbiAgICB9XG5cbiAgICByYW5kb21OYW1lKCk6c3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxuICAgICAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSlcbiAgICB9XG4gICAgLy8gTWV0aG9kZSBkZSBjcsOpYXRpb24gZGUgbm9tIGFsw6lhdG9pcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiaW1wb3J0IEdvb2QgZnJvbSAnLi9nb29kJ1xuaW1wb3J0IEJhZCBmcm9tICcuL2JhZCdcbmltcG9ydCBSdW4gZnJvbSAnLi9ydW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZ2h0IHtcbiAgICBfc3RhcnQ6Ym9vbGVhbiA9IE1hdGgucmFuZG9tKCkgPj0gMC41XG4gICAgX2dvb2Q6R29vZFxuICAgIF9iYWQ6QmFkXG5cbiAgICBjb25zdHJ1Y3Rvcihnb29kOkdvb2QsIGJhZDpCYWQpIHtcbiAgICAgICAgdGhpcy5fZ29vZCA9IGdvb2RcbiAgICAgICAgdGhpcy5fYmFkID0gYmFkXG4gICAgfVxuXG4gICAgZ2V0IHN0YXJ0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydFxuICAgIH1cblxuICAgIHNldCBzdGFydChzdGFydDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnRcbiAgICB9XG5cbiAgICBnZXQgZ29vZCgpOkdvb2Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ29vZFxuICAgIH1cblxuICAgIHNldCBnb29kKGdvb2Q6R29vZCkge1xuICAgICAgICB0aGlzLl9nb29kID0gZ29vZFxuICAgIH1cblxuICAgIGdldCBiYWQoKTpCYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFkXG4gICAgfVxuXG4gICAgc2V0IGJhZChiYWQ6QmFkKSB7XG4gICAgICAgIHRoaXMuX2JhZCA9IGJhZFxuICAgIH1cblxuICAgIGZpZ2h0ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAodGhpcy5nb29kLnB2ICE9IDAgJiYgdGhpcy5iYWQucHYgIT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBuZXcgUnVuKHRoaXMuZ29vZCwgdGhpcy5iYWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ldyBSdW4odGhpcy5iYWQsIHRoaXMuZ29vZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVue1xuICAgIF90YXJnZXQ6Q2hhcmFjdGVyXG4gICAgX2F0dGFja2VyOkNoYXJhY3RlclxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OkNoYXJhY3RlciwgYXR0YWNrZXI6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgICAgICB0aGlzLl9hdHRhY2tlciA9IGF0dGFja2VyXG4gICAgICAgIHRoaXMuaGl0KClcbiAgICB9XG5cbiAgICBnZXQgdGFyZ2V0KCk6Q2hhcmFjdGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldFxuICAgIH1cblxuICAgIHNldCB0YXJnZXQodGFyZ2V0OkNoYXJhY3Rlcikge1xuICAgICAgICB0aGlzLl90YXJnZXQgPSB0YXJnZXRcbiAgICB9XG5cbiAgICBnZXQgYXR0YWNrZXIoKTpDaGFyYWN0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrZXJcbiAgICB9XG5cbiAgICBzZXQgYXR0YWNrZXIoYXR0YWNrZXI6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX2F0dGFja2VyID0gYXR0YWNrZXJcbiAgICB9XG5cbiAgICBoaXQgPSAoKTpDaGFyYWN0ZXIgPT4ge1xuICAgICAgICBjb25zdCBkYW1hZ2VQdHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF0dGFja2VyLndlYXBvbi5taW5EYW1hZ2UgKyB0aGlzLmF0dGFja2VyLndlYXBvbi5tYXhEYW1hZ2UpXG4gICAgICAgIHRoaXMudGFyZ2V0LnB2ID0gdGhpcy50YXJnZXQucHYgLSAoZGFtYWdlUHRzICsgdGhpcy50YXJnZXQuZGVmZW5zZSlcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=