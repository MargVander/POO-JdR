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
/* harmony import */ var _classes_fight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



var readline = __webpack_require__(7);
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
    new _classes_fight__WEBPACK_IMPORTED_MODULE_2__["default"](good, bad);
});


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
        this._pv = Math.floor(Math.random() * 200 + 300);
        this._pvMax = this._pv;
        this._defense = Math.floor(Math.random() * 80);
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
            if (pv >= 0) {
                this._pv = pv;
            }
            else {
                this._pv = 0;
            }
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

var Fight = /** @class */ (function () {
    function Fight(good, bad) {
        var _this = this;
        this._start = Math.random() >= 0.5;
        this.fight = function () {
            while (_this.good.pv > 0 && _this.bad.pv > 0) {
                if (_this.start === true) {
                    new _run__WEBPACK_IMPORTED_MODULE_0__["default"](_this.good, _this.bad);
                    _this.start = false;
                }
                else {
                    new _run__WEBPACK_IMPORTED_MODULE_0__["default"](_this.bad, _this.good);
                    _this.start = true;
                }
            }
            if (_this.start === false) {
                console.log(_this.good.name + " est KO");
            }
            else {
                console.log(_this.bad.name + " est KO");
            }
        };
        this._good = good;
        this._bad = bad;
        this.fight();
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Run = /** @class */ (function () {
    function Run(target, attacker) {
        var _this = this;
        this.hit = function () {
            var damagePts = Math.floor(Math.random() * _this.attacker.weapon.minDamage + _this.attacker.weapon.maxDamage);
            _this.target.pv = _this.target.pv - (damagePts - _this.target.defense);
            console.log(_this.attacker.name + " cause " + (damagePts - _this.target.defense) + " dégat à son adversaire");
            console.log(_this.target.name + " n'a plus que " + _this.target.pv + " pv");
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvY2hhcmFjdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYmFkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2ZpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3J1bi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ0Q7QUFDRztBQUNuQyxJQUFNLFFBQVEsR0FB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UyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcseUJBQXlCLENBQUMsQ0FBQztZQUM1RyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUN6RSxPQUFPLEtBQUksQ0FBQyxNQUFNO1FBQ3RCLENBQUM7UUEzQkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUN6QixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2QsQ0FBQztJQUVELHNCQUFJLHVCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPO1FBQ3ZCLENBQUM7YUFFRCxVQUFXLE1BQWdCO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTTtRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlCQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTO1FBQ3pCLENBQUM7YUFFRCxVQUFhLFFBQWtCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUM3QixDQUFDOzs7T0FKQTtJQWFMLFVBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ25DRCxxQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR29vZCBmcm9tICcuL2NsYXNzZXMvZ29vZCdcbmltcG9ydCBCYWQgZnJvbSAnLi9jbGFzc2VzL2JhZCc7XG5pbXBvcnQgRmlnaHQgZnJvbSAnLi9jbGFzc2VzL2ZpZ2h0J1xuY29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xuY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcbiAgfSk7XG4gIFxuXG5ybC5xdWVzdGlvbignTmFtZSB5b3VyIGhlcm8gOiAnLCAoYW5zd2VyOnN0cmluZykgPT4ge1xuICAgICAgbGV0IGdvb2QgPSBuZXcgR29vZChhbnN3ZXIpXG4gICAgICBjb25zb2xlLmxvZyhnb29kKTtcbiAgICAgIGxldCBiYWQgPSBuZXcgQmFkKClcbiAgICAgIGNvbnNvbGUubG9nKGJhZCk7XG4gICAgcmwuY2xvc2UoKTtcbiAgICBuZXcgRmlnaHQoZ29vZCwgYmFkKVxuICB9KTsiLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vY2hhcmFjdGVycydcblxuY2xhc3MgR29vZCBleHRlbmRzIENoYXJhY3RlcntcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJycpe1xuICAgICAgICBzdXBlcihuYW1lKVxuICAgIH1cblxuICAgIGhlYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsdXNQdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKVxuICAgICAgICBpZiAodGhpcy5wdiArIHBsdXNQdiA+PSB0aGlzLnB2TWF4KSB7XG4gICAgICAgICAgICB0aGlzLnB2ID0gdGhpcy5wdk1heFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdiArPSBwbHVzUHZcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZCIsImltcG9ydCBXZWFwb24gZnJvbSBcIi4vd2VhcG9uXCJcblxuY2xhc3MgQ2hhcmFjdGVye1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZ1xuICAgIHByaXZhdGUgX3B2OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAgKyAzMDApXG4gICAgcHJpdmF0ZSBfcHZNYXg6IG51bWJlciA9IHRoaXMuX3B2XG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODApXG4gICAgcHJpdmF0ZSBfd2VhcG9uOiBXZWFwb25cblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nID0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXG4gICAgICAgICAgICAgICAgdGhpcy5fd2VhcG9uID0gbmV3IFdlYXBvbigpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldCBuYW1lKCk6c3RyaW5nIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXQgbmFtZShuYW1lOnN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldCBwdigpOm51bWJlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B2XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldCBwdihwdjpudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAocHYgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdiA9IHB2XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHYgPSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXQgcHZNYXgoKTpudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdk1heFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXQgcHZNYXgocHZNYXg6bnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHZNYXggPSBwdk1heFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXQgZGVmZW5zZSgpOm51bWJlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0IGRlZmVuc2UoZGVmZW5zZTpudW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXQgd2VhcG9uKCk6V2VhcG9uIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2VhcG9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldCB3ZWFwb24od2VhcG9uOldlYXBvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlYXBvbiA9IHdlYXBvblxuICAgICAgICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb257XG4gICAgcHJpdmF0ZSBfbWluRGFtYWdlOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDApXG4gICAgcHJpdmF0ZSBfbWF4RGFtYWdlOiBudW1iZXIgPSB0aGlzLl9taW5EYW1hZ2UgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICBwcml2YXRlIF9jcml0aWNhbEhpdDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cbiAgICBnZXQgbWluRGFtYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRhbWFnZVxuICAgIH1cblxuICAgIHNldCBtaW5EYW1hZ2UobWluRGFtYWdlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5EYW1hZ2UgPSBtaW5EYW1hZ2VcbiAgICB9XG5cbiAgICBnZXQgbWF4RGFtYWdlKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERhbWFnZVxuICAgIH1cblxuICAgIHNldCBtYXhEYW1hZ2UobWF4RGFtYWdlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhEYW1hZ2UgPSBtYXhEYW1hZ2VcbiAgICB9XG5cbiAgICBnZXQgY3JpdGljYWxIaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcml0aWNhbEhpdFxuICAgIH1cblxuICAgIHNldCBjcml0aWNhbEhpdChjcml0aWNhbEhpdCkge1xuICAgICAgICBpZiAoY3JpdGljYWxIaXQgPCA1MCkge1xuICAgICAgICAgICAgdGhpcy5fY3JpdGljYWxIaXQgPSBjcml0aWNhbEhpdFxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXJzJ1xuXG5jbGFzcyBCYWQgZXh0ZW5kcyBDaGFyYWN0ZXJ7XG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcgPSBcIlwiKXtcbiAgICAgICAgc3VwZXIobmFtZSlcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYW5kb21OYW1lKCkgICAgICAgIFxuICAgIH1cblxuICAgIHJhbmRvbU5hbWUoKTpzdHJpbmcge1xuICAgICAgICBsZXQgbmFtZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpXG4gICAgICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxuICAgIH1cbiAgICAvLyBNZXRob2RlIGRlIGNyw6lhdGlvbiBkZSBub20gYWzDqWF0b2lyZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWQiLCJpbXBvcnQgR29vZCBmcm9tICcuL2dvb2QnXG5pbXBvcnQgQmFkIGZyb20gJy4vYmFkJ1xuaW1wb3J0IFJ1biBmcm9tICcuL3J1bidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlnaHQge1xuICAgIF9zdGFydDpib29sZWFuID0gTWF0aC5yYW5kb20oKSA+PSAwLjVcbiAgICBfZ29vZDpHb29kXG4gICAgX2JhZDpCYWRcblxuICAgIGNvbnN0cnVjdG9yKGdvb2Q6R29vZCwgYmFkOkJhZCkge1xuICAgICAgICB0aGlzLl9nb29kID0gZ29vZFxuICAgICAgICB0aGlzLl9iYWQgPSBiYWRcbiAgICAgICAgdGhpcy5maWdodCgpXG4gICAgfVxuXG4gICAgZ2V0IHN0YXJ0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydFxuICAgIH1cblxuICAgIHNldCBzdGFydChzdGFydDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnRcbiAgICB9XG5cbiAgICBnZXQgZ29vZCgpOkdvb2Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ29vZFxuICAgIH1cblxuICAgIHNldCBnb29kKGdvb2Q6R29vZCkge1xuICAgICAgICB0aGlzLl9nb29kID0gZ29vZFxuICAgIH1cblxuICAgIGdldCBiYWQoKTpCYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFkXG4gICAgfVxuXG4gICAgc2V0IGJhZChiYWQ6QmFkKSB7XG4gICAgICAgIHRoaXMuX2JhZCA9IGJhZFxuICAgIH1cblxuICAgIGZpZ2h0ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAodGhpcy5nb29kLnB2ID4gMCAmJiB0aGlzLmJhZC5wdiA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3IFJ1bih0aGlzLmdvb2QsIHRoaXMuYmFkKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXcgUnVuKHRoaXMuYmFkLCB0aGlzLmdvb2QpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ29vZC5uYW1lICsgXCIgZXN0IEtPXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5iYWQubmFtZSArIFwiIGVzdCBLT1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVue1xuICAgIF90YXJnZXQ6Q2hhcmFjdGVyXG4gICAgX2F0dGFja2VyOkNoYXJhY3RlclxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OkNoYXJhY3RlciwgYXR0YWNrZXI6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgICAgICB0aGlzLl9hdHRhY2tlciA9IGF0dGFja2VyICAgICAgICBcbiAgICAgICAgdGhpcy5oaXQoKVxuICAgIH1cblxuICAgIGdldCB0YXJnZXQoKTpDaGFyYWN0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0XG4gICAgfVxuXG4gICAgc2V0IHRhcmdldCh0YXJnZXQ6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgIH1cblxuICAgIGdldCBhdHRhY2tlcigpOkNoYXJhY3RlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2tlclxuICAgIH1cblxuICAgIHNldCBhdHRhY2tlcihhdHRhY2tlcjpDaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5fYXR0YWNrZXIgPSBhdHRhY2tlclxuICAgIH1cblxuICAgIGhpdCA9ICgpOkNoYXJhY3RlciA9PiB7XG4gICAgICAgIGNvbnN0IGRhbWFnZVB0cyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXR0YWNrZXIud2VhcG9uLm1pbkRhbWFnZSArIHRoaXMuYXR0YWNrZXIud2VhcG9uLm1heERhbWFnZSlcbiAgICAgICAgdGhpcy50YXJnZXQucHYgPSB0aGlzLnRhcmdldC5wdiAtIChkYW1hZ2VQdHMgLSB0aGlzLnRhcmdldC5kZWZlbnNlKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja2VyLm5hbWUgKyBcIiBjYXVzZSBcIiArIChkYW1hZ2VQdHMgLSB0aGlzLnRhcmdldC5kZWZlbnNlKSArIFwiIGTDqWdhdCDDoCBzb24gYWR2ZXJzYWlyZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXJnZXQubmFtZSArIFwiIG4nYSBwbHVzIHF1ZSBcIiArIHRoaXMudGFyZ2V0LnB2ICsgXCIgcHZcIilcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=