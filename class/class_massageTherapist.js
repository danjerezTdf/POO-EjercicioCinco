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
exports.MassageTherapist = void 0;
var class_person_1 = require("./class_person");
var MassageTherapist = /** @class */ (function (_super) {
    __extends(MassageTherapist, _super);
    function MassageTherapist(_id, _name, _surName, _condition, p_tipeTherapist) {
        var _this = _super.call(this, _id, _name, _surName, _condition) || this;
        _this._tipeTherapist = p_tipeTherapist;
        return _this;
    }
    MassageTherapist.prototype.getTipeTherapist = function () {
        return this._tipeTherapist;
    };
    MassageTherapist.prototype.setTipeTherapist = function (p_tipeTherapist) {
        this._tipeTherapist = p_tipeTherapist;
    };
    MassageTherapist.prototype.changeCondition = function () {
        if (this._condition === true) {
            this._condition = false;
            console.log("Se desvinculo Masajista");
        }
        else {
            this._condition = true;
            console.log("Se constrato Masajista");
        }
        return this._condition;
    };
    return MassageTherapist;
}(class_person_1.Person));
exports.MassageTherapist = MassageTherapist;
