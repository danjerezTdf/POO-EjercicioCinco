"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Coach = void 0;
var class_person_1 = require("./class_person");
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(_id, _name, _surName, _condition, p_tipeCoach) {
        var _this = _super.call(this, _id, _name, _surName, _condition) || this;
        _this._tipeCoach = p_tipeCoach;
        return _this;
    }
    Coach.prototype.getTipeCoach = function () {
        return this._tipeCoach;
    };
    Coach.prototype.setTipeCoach = function (p_tipeCoach) {
        this._tipeCoach = p_tipeCoach;
    };
    Coach.prototype.changeCondition = function () {
        if (this._condition === true) {
            this._condition = false;
            console.log("Se desvinculo Entrenador");
        }
        else {
            this._condition = true;
            console.log("Se constrato Entrenador");
        }
        return this._condition;
    };
    return Coach;
}(class_person_1.Person));
exports.Coach = Coach;
