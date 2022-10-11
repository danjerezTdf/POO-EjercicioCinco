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
exports.SoccerPlayer = void 0;
var class_person_1 = require("./class_person");
var SoccerPlayer = /** @class */ (function (_super) {
    __extends(SoccerPlayer, _super);
    function SoccerPlayer(_id, _name, _surName, _condition, p_shirtNumber, p_teamPosition, p_weight, p_height) {
        var _this = _super.call(this, _id, _name, _surName, _condition) || this;
        _this._shirtNumber = p_shirtNumber;
        _this._teamPosition = p_teamPosition;
        _this._weight = p_weight;
        _this._height = p_height;
        return _this;
    }
    SoccerPlayer.prototype.getShirtNumber = function () {
        return this._shirtNumber;
    };
    SoccerPlayer.prototype.setShirtNumber = function (p_shirtNumber) {
        this._shirtNumber = p_shirtNumber;
    };
    SoccerPlayer.prototype.getTeamPosition = function () {
        return this._teamPosition;
    };
    SoccerPlayer.prototype.setTeamPosition = function (p_teamPosition) {
        this._teamPosition = p_teamPosition;
    };
    SoccerPlayer.prototype.getWeight = function () {
        return this._weight;
    };
    SoccerPlayer.prototype.setWeight = function (p_weight) {
        this._weight = p_weight;
    };
    SoccerPlayer.prototype.getHeight = function () {
        return this._height;
    };
    SoccerPlayer.prototype.setHeight = function (p_height) {
        this._height = p_height;
    };
    SoccerPlayer.prototype.changeCondition = function () {
        if (this._condition === true) {
            this._condition = false;
            console.log("Se desvinculo Jugador");
        }
        else {
            this._condition = true;
            console.log("Se constrato Jugador");
        }
        return this._condition;
    };
    return SoccerPlayer;
}(class_person_1.Person));
exports.SoccerPlayer = SoccerPlayer;
