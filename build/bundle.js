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
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _classes_weapon1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _classes_weapon2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var inputReader = function (question) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rl = readline__WEBPACK_IMPORTED_MODULE_3___default.a.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        rl.question("" + question, function (answer) {
                            resolve(answer);
                        });
                    }).then(function (onfull) {
                        response = onfull;
                        rl.close();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
var m = function () { return __awaiter(void 0, void 0, void 0, function () {
    var goodName, weapon, good, bad;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inputReader('Nommez votre héro : ')];
            case 1:
                goodName = _a.sent();
                return [4 /*yield*/, weaponChoice()];
            case 2:
                weapon = _a.sent();
                good = new _classes_good__WEBPACK_IMPORTED_MODULE_0__["default"](goodName, weapon);
                bad = new _classes_bad__WEBPACK_IMPORTED_MODULE_1__["default"]();
                console.log(good);
                console.log(bad);
                new _classes_fight__WEBPACK_IMPORTED_MODULE_2__["default"](good, bad);
                return [2 /*return*/];
        }
    });
}); };
var weaponChoice = function () { return __awaiter(void 0, void 0, void 0, function () {
    var weapon, choice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                weapon = new _classes_weapon__WEBPACK_IMPORTED_MODULE_4__["default"]();
                return [4 /*yield*/, inputReader('Choisissez votre arme : 1 ou 2 :')];
            case 1:
                choice = _a.sent();
                if (choice === 1) {
                    weapon = new _classes_weapon1__WEBPACK_IMPORTED_MODULE_5__["Weapon1"]();
                }
                else {
                    weapon = new _classes_weapon2__WEBPACK_IMPORTED_MODULE_6__["Weapon2"]();
                }
                return [2 /*return*/, weapon];
        }
    });
}); };
m();


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
    function Good(name, weapon) {
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
        _this.weapon = weapon;
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
        this._defense = Math.floor(Math.random() * 20);
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
        this._minDamage = Math.floor(Math.random() * 80 + 20);
        this._maxDamage = this._minDamage + Math.floor(Math.random() * 10);
        this._criticalHit = Math.random() * 25;
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
            if (Math.random() * 100 < _this._attacker.weapon._criticalHit) {
                damagePts *= 2;
            }
            _this.target.pv = _this.target.pv - (damagePts - _this.target.defense);
            console.log(_this.attacker.name + " inflige " + (damagePts - _this.target.defense) + " dégat à son adversaire");
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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon1", function() { return Weapon1; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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

var Weapon1 = /** @class */ (function (_super) {
    __extends(Weapon1, _super);
    function Weapon1() {
        var _this = _super.call(this) || this;
        _this._maxDamage * 2;
        return _this;
    }
    return Weapon1;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon2", function() { return Weapon2; });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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

var Weapon2 = /** @class */ (function (_super) {
    __extends(Weapon2, _super);
    function Weapon2() {
        var _this = _super.call(this) || this;
        _this._criticalHit * 1.5;
        return _this;
    }
    return Weapon2;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dvb2QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvY2hhcmFjdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYmFkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2ZpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3J1bi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3dlYXBvbjEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvd2VhcG9uMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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QUMsQ0FMNEIsK0NBQU0sR0FLbEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdvb2QgZnJvbSAnLi9jbGFzc2VzL2dvb2QnXG5pbXBvcnQgQmFkIGZyb20gJy4vY2xhc3Nlcy9iYWQnO1xuaW1wb3J0IEZpZ2h0IGZyb20gJy4vY2xhc3Nlcy9maWdodCdcbmltcG9ydCByZWFkbGluZSBmcm9tICdyZWFkbGluZSdcbmltcG9ydCBXZWFwb24gZnJvbSAnLi9jbGFzc2VzL3dlYXBvbidcbmltcG9ydCB7IFdlYXBvbjEgfSBmcm9tICcuL2NsYXNzZXMvd2VhcG9uMSc7XG5pbXBvcnQgeyBXZWFwb24yIH0gZnJvbSAnLi9jbGFzc2VzL3dlYXBvbjInO1xuXG5jb25zdCBpbnB1dFJlYWRlciA9IGFzeW5jIChxdWVzdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcbiAgICB9KVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmwucXVlc3Rpb24oYCR7cXVlc3Rpb259YCwgKGFuc3dlcjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGFuc3dlcilcbiAgICAgICAgfSlcbiAgICB9KS50aGVuKG9uZnVsbCA9PiB7XG4gICAgICAgIHJlc3BvbnNlID0gb25mdWxsO1xuICAgICAgICBybC5jbG9zZSgpXG4gICAgfSlcblxuICAgIHJldHVybiByZXNwb25zZVxufVxuIFxuY29uc3QgbSA9IGFzeW5jICgpID0+IHtcbmxldCBnb29kTmFtZSA9IGF3YWl0IGlucHV0UmVhZGVyKCdOb21tZXogdm90cmUgaMOpcm8gOiAnKVxubGV0IHdlYXBvbiA9IGF3YWl0IHdlYXBvbkNob2ljZSgpIGFzIFdlYXBvblxubGV0IGdvb2QgPSBuZXcgR29vZChnb29kTmFtZSwgd2VhcG9uKVxubGV0IGJhZCA9IG5ldyBCYWQoKVxuY29uc29sZS5sb2coZ29vZCk7XG5jb25zb2xlLmxvZyhiYWQpO1xubmV3IEZpZ2h0KGdvb2QsIGJhZClcbn1cblxuY29uc3Qgd2VhcG9uQ2hvaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB3ZWFwb24gPSBuZXcgV2VhcG9uKClcbiAgICBsZXQgY2hvaWNlID0gYXdhaXQgaW5wdXRSZWFkZXIoJ0Nob2lzaXNzZXogdm90cmUgYXJtZSA6IDEgb3UgMiA6JylcbiAgICBpZiAoY2hvaWNlID09PSAxKSB7XG4gICAgICAgIHdlYXBvbiA9IG5ldyBXZWFwb24xKClcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWFwb24gPSBuZXcgV2VhcG9uMigpXG4gICAgfVxuICAgIHJldHVybiB3ZWFwb25cbn1cblxubSgpOyIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXJzJ1xuaW1wb3J0IFdlYXBvbiBmcm9tICcuL3dlYXBvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZCBleHRlbmRzIENoYXJhY3RlcntcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIHdlYXBvbjpXZWFwb24pe1xuICAgICAgICBzdXBlcihuYW1lKVxuICAgICAgICB0aGlzLndlYXBvbiA9IHdlYXBvblxuICAgIH1cblxuICAgIGhlYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsdXNQdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKVxuICAgICAgICBpZiAodGhpcy5wdiArIHBsdXNQdiA+PSB0aGlzLnB2TWF4KSB7XG4gICAgICAgICAgICB0aGlzLnB2ID0gdGhpcy5wdk1heFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdiArPSBwbHVzUHZcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgV2VhcG9uIGZyb20gXCIuL3dlYXBvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlcntcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmdcbiAgICBwcml2YXRlIF9wdjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwICsgMzAwKVxuICAgIHByaXZhdGUgX3B2TWF4OiBudW1iZXIgPSB0aGlzLl9wdlxuICAgIHByaXZhdGUgX2RlZmVuc2U6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKVxuICAgIHByaXZhdGUgX3dlYXBvbjogV2VhcG9uXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZVxuICAgICAgICAgICAgICAgIHRoaXMuX3dlYXBvbiA9IG5ldyBXZWFwb24oKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXQgbmFtZSgpOnN0cmluZyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0IG5hbWUobmFtZTpzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXQgcHYoKTpudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXQgcHYocHY6bnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHB2ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHYgPSBwdlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B2ID0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IHB2TWF4KCk6bnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHZNYXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0IHB2TWF4KHB2TWF4Om51bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B2TWF4ID0gcHZNYXhcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IGRlZmVuc2UoKTpudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldCBkZWZlbnNlKGRlZmVuc2U6bnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0IHdlYXBvbigpOldlYXBvbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlYXBvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXQgd2VhcG9uKHdlYXBvbjpXZWFwb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb25cbiAgICAgICAgICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb257XG4gICAgIF9taW5EYW1hZ2U6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgwICsgMjApXG4gICAgIF9tYXhEYW1hZ2U6IG51bWJlciA9IHRoaXMuX21pbkRhbWFnZSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICBfY3JpdGljYWxIaXQ6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAyNVxuXG4gICAgZ2V0IG1pbkRhbWFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EYW1hZ2VcbiAgICB9XG5cbiAgICBzZXQgbWluRGFtYWdlKG1pbkRhbWFnZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGFtYWdlID0gbWluRGFtYWdlXG4gICAgfVxuXG4gICAgZ2V0IG1heERhbWFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEYW1hZ2VcbiAgICB9XG5cbiAgICBzZXQgbWF4RGFtYWdlKG1heERhbWFnZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4RGFtYWdlID0gbWF4RGFtYWdlXG4gICAgfVxuXG4gICAgZ2V0IGNyaXRpY2FsSGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JpdGljYWxIaXRcbiAgICB9XG5cbiAgICBzZXQgY3JpdGljYWxIaXQoY3JpdGljYWxIaXQpIHtcbiAgICAgICAgaWYgKGNyaXRpY2FsSGl0IDwgNTApIHtcbiAgICAgICAgICAgIHRoaXMuX2NyaXRpY2FsSGl0ID0gY3JpdGljYWxIaXRcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vY2hhcmFjdGVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFkIGV4dGVuZHMgQ2hhcmFjdGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nID0gXCJcIil7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFuZG9tTmFtZSgpICAgICAgICBcbiAgICB9XG5cbiAgICByYW5kb21OYW1lKCk6c3RyaW5nIHtcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxuICAgICAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSlcbiAgICB9XG4gICAgLy8gTWV0aG9kZSBkZSBjcsOpYXRpb24gZGUgbm9tIGFsw6lhdG9pcmVcbn0iLCJpbXBvcnQgR29vZCBmcm9tICcuL2dvb2QnXG5pbXBvcnQgQmFkIGZyb20gJy4vYmFkJ1xuaW1wb3J0IFJ1biBmcm9tICcuL3J1bidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlnaHQge1xuICAgIF9zdGFydDpib29sZWFuID0gTWF0aC5yYW5kb20oKSA+PSAwLjVcbiAgICBfZ29vZDpHb29kXG4gICAgX2JhZDpCYWRcblxuICAgIGNvbnN0cnVjdG9yKGdvb2Q6R29vZCwgYmFkOkJhZCkge1xuICAgICAgICB0aGlzLl9nb29kID0gZ29vZFxuICAgICAgICB0aGlzLl9iYWQgPSBiYWRcbiAgICAgICAgdGhpcy5maWdodCgpXG4gICAgfVxuXG4gICAgZ2V0IHN0YXJ0KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydFxuICAgIH1cblxuICAgIHNldCBzdGFydChzdGFydDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnRcbiAgICB9XG5cbiAgICBnZXQgZ29vZCgpOkdvb2Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ29vZFxuICAgIH1cblxuICAgIHNldCBnb29kKGdvb2Q6R29vZCkge1xuICAgICAgICB0aGlzLl9nb29kID0gZ29vZFxuICAgIH1cblxuICAgIGdldCBiYWQoKTpCYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFkXG4gICAgfVxuXG4gICAgc2V0IGJhZChiYWQ6QmFkKSB7XG4gICAgICAgIHRoaXMuX2JhZCA9IGJhZFxuICAgIH1cblxuICAgIGZpZ2h0ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAodGhpcy5nb29kLnB2ID4gMCAmJiB0aGlzLmJhZC5wdiA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbmV3IFJ1bih0aGlzLmdvb2QsIHRoaXMuYmFkKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXcgUnVuKHRoaXMuYmFkLCB0aGlzLmdvb2QpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ29vZC5uYW1lICsgXCIgZXN0IEtPXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5iYWQubmFtZSArIFwiIGVzdCBLT1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVue1xuICAgIF90YXJnZXQ6Q2hhcmFjdGVyXG4gICAgX2F0dGFja2VyOkNoYXJhY3RlclxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OkNoYXJhY3RlciwgYXR0YWNrZXI6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgICAgICB0aGlzLl9hdHRhY2tlciA9IGF0dGFja2VyICAgICAgICBcbiAgICAgICAgdGhpcy5oaXQoKVxuICAgIH1cblxuICAgIGdldCB0YXJnZXQoKTpDaGFyYWN0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0XG4gICAgfVxuXG4gICAgc2V0IHRhcmdldCh0YXJnZXQ6Q2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldFxuICAgIH1cblxuICAgIGdldCBhdHRhY2tlcigpOkNoYXJhY3RlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2tlclxuICAgIH1cblxuICAgIHNldCBhdHRhY2tlcihhdHRhY2tlcjpDaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5fYXR0YWNrZXIgPSBhdHRhY2tlclxuICAgIH1cblxuICAgIGhpdCA9ICgpOkNoYXJhY3RlciA9PiB7XG4gICAgICAgIGxldCBkYW1hZ2VQdHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF0dGFja2VyLndlYXBvbi5taW5EYW1hZ2UgKyB0aGlzLmF0dGFja2VyLndlYXBvbi5tYXhEYW1hZ2UpXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpICogMTAwIDwgdGhpcy5fYXR0YWNrZXIud2VhcG9uLl9jcml0aWNhbEhpdCkge1xuICAgICAgICAgICAgZGFtYWdlUHRzICo9IDJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC5wdiA9IHRoaXMudGFyZ2V0LnB2IC0gKGRhbWFnZVB0cyAtIHRoaXMudGFyZ2V0LmRlZmVuc2UpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXR0YWNrZXIubmFtZSArIFwiIGluZmxpZ2UgXCIgKyAoZGFtYWdlUHRzIC0gdGhpcy50YXJnZXQuZGVmZW5zZSkgKyBcIiBkw6lnYXQgw6Agc29uIGFkdmVyc2FpcmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0Lm5hbWUgKyBcIiBuJ2EgcGx1cyBxdWUgXCIgKyB0aGlzLnRhcmdldC5wdiArIFwiIHB2XCIpXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiLCJpbXBvcnQgV2VhcG9uIGZyb20gXCIuL3dlYXBvblwiO1xuXG5leHBvcnQgY2xhc3MgV2VhcG9uMSBleHRlbmRzIFdlYXBvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9tYXhEYW1hZ2UgKiAyXG4gICAgfVxufSIsImltcG9ydCBXZWFwb24gZnJvbSBcIi4vd2VhcG9uXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWFwb24yIGV4dGVuZHMgV2VhcG9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2NyaXRpY2FsSGl0ICogMS41XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=