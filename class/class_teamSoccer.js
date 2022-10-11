"use strict";
exports.__esModule = true;
exports.TeamSoccer = void 0;
var TeamSoccer = /** @class */ (function () {
    function TeamSoccer(p_listSoccerPlayers, p_listMassageTherapist, p_listCoach) {
        this._listSoccerPlayers = p_listSoccerPlayers;
        this._listMassageTherapist = p_listMassageTherapist;
        this._listCoach = p_listCoach;
    }
    TeamSoccer.prototype.addSoccerPlayer = function (p_soccerPlayer) {
        this._listSoccerPlayers.push(p_soccerPlayer);
        var aux = this._listSoccerPlayers.length;
        console.log("Se Agrego Jugador: " + this._listSoccerPlayers[aux - 1].getSurName() + ", " + this._listSoccerPlayers[aux - 1].getName());
    };
    TeamSoccer.prototype.removeSoccerPlayer = function (p_soccerPlayer) {
        for (var i = 0; i <= this._listSoccerPlayers.length; i++) {
            if (p_soccerPlayer = this._listSoccerPlayers[i]) {
                console.log("Se Quito Jugador: " + this._listSoccerPlayers[i].getSurName() + ", " + this._listSoccerPlayers[i].getName());
                this._listSoccerPlayers.splice(i, 1);
            }
        }
    };
    TeamSoccer.prototype.addMassageTherapist = function (p_massageTherapist) {
        this._listMassageTherapist.push(p_massageTherapist);
        var aux = this._listMassageTherapist.length;
        console.log("Se Agrego Masajista; " + this._listMassageTherapist[aux - 1].getSurName() + " " + this._listMassageTherapist[aux - 1].getName());
    };
    TeamSoccer.prototype.removeMassageTherapist = function (p_massageTherapist) {
        for (var i = 0; i <= this._listMassageTherapist.length; i++) {
            if (p_massageTherapist = this._listMassageTherapist[i]) {
                console.log("Se Quito Masagista: " + this._listMassageTherapist[i].getSurName() + ", " + this._listMassageTherapist[i].getName());
                this._listMassageTherapist.splice(i, 1);
            }
        }
    };
    TeamSoccer.prototype.addCoach = function (p_coach) {
        this._listCoach.push(p_coach);
        var aux = this._listCoach.length;
        console.log("Se Agrego Entrenador: " + this._listCoach[aux - 1].getSurName() + ", " + this._listCoach[aux - 1].getName());
    };
    TeamSoccer.prototype.removeCoach = function (p_coach) {
        for (var i = 0; i <= this._listCoach.length; i++) {
            if (p_coach = this._listCoach[i]) {
                console.log("Se Quito Entrnador: " + this._listCoach[i].getSurName() + ", " + this._listCoach[i].getName());
                this._listCoach.splice(i, 1);
            }
        }
    };
    TeamSoccer.prototype.searchForSurname = function (p_surName) {
        for (var i = 0; i < this._listCoach.length; i++) {
            if (p_surName === this._listCoach[i].getSurName()) {
                console.log(this._listCoach[i]);
                return ("Se encontro Entrenador");
            }
            else if (p_surName === this._listMassageTherapist[i].getSurName()) {
                console.log(this._listMassageTherapist[i]);
                return ("Se encontro Masajista");
            }
            else if (p_surName === this._listSoccerPlayers[i].getSurName()) {
                console.log(this._listSoccerPlayers[i]);
                return ("Se encontro Futbolista");
            }
        }
        return ("No se encotro Persona");
    };
    return TeamSoccer;
}());
exports.TeamSoccer = TeamSoccer;
