"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(p_id, p_name, p_surName, p_condition) {
        this._id = p_id;
        this._name = p_name;
        this._surName = p_surName;
        this._condition = p_condition;
    }
    Person.prototype.getId = function () {
        return this._id;
    };
    Person.prototype.setId = function (p_id) {
        this._id = p_id;
    };
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setName = function (p_name) {
        this._name = p_name;
    };
    Person.prototype.getSurName = function () {
        return this._surName;
    };
    Person.prototype.setSurName = function (p_surName) {
        this._surName = p_surName;
    };
    Person.prototype.getCondition = function () {
        return this._condition;
    };
    Person.prototype.setCondition = function (p_condition) {
        this._condition = p_condition;
    };
    Person.prototype.changeCondition = function () {
        if (this._condition === true) {
            this._condition = false;
        }
        else {
            this._condition = true;
        }
        return this._condition;
    };
    return Person;
}());
exports.Person = Person;
