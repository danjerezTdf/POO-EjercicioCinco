"use strict";
exports.__esModule = true;
var class_coach_1 = require("./class/class_coach");
var class_soccerPlayer_1 = require("./class/class_soccerPlayer");
var class_massageTherapist_1 = require("./class/class_massageTherapist");
var class_teamSoccer_1 = require("./class/class_teamSoccer");
// Instanciamos las clases Jugadores, Masajista y Entrenador
var playerOne = new class_soccerPlayer_1.SoccerPlayer(31819248, "Daniel", "Jerez", true, 8, "Delantero", 75, 1.75);
var playerTwo = new class_soccerPlayer_1.SoccerPlayer(32979801, "Jose Felix", "Figueras", true, 9, "Delantero", 60, 1.55);
var playerThree = new class_soccerPlayer_1.SoccerPlayer(34521579, "Marcos", "Gallardo", true, 3, "Defensor", 82, 1.84);
var playerA = new class_soccerPlayer_1.SoccerPlayer(35780564, "Juan", "De los Palotes", true, 1, "Arquero", 81, 1.80);
var coachOne = new class_coach_1.Coach(33974451, "Jacinto", "Barcelo", true, "Entrenador Principal");
var coachTwo = new class_coach_1.Coach(34619853, "Gema", "Manrique", true, "Entrenador De Arqueros");
var coachA = new class_coach_1.Coach(32443205, "Esteban", "Quito", true, "Entrenador Campo");
var theMassageOne = new class_massageTherapist_1.MassageTherapist(34195158, "Cayetano", "Farre", true, "Deportivo de Carga");
var theMassageTwo = new class_massageTherapist_1.MassageTherapist(32979801, "Aya", "Sales", true, "Linfatico");
var theMassageA = new class_massageTherapist_1.MassageTherapist(31065924, "Valeria", "Masa", true, "Deportivo de Carga");
// Creo las listas de Clases
var listSoccerPlayersA = [playerOne, playerTwo, playerThree];
var listCoachA = [coachOne, coachTwo];
var listMassageA = [theMassageOne, theMassageTwo];
// Instanciamos la clase Equipo de Futbol
var TeamSoccerONE = new class_teamSoccer_1.TeamSoccer(listSoccerPlayersA, listMassageA, listCoachA);
//UNO DE METODOS
// Agregamos Jugardor a la Lita del equipo-
TeamSoccerONE.addSoccerPlayer(playerA);
// Agregamos Entrenador a la lista del equipo-
TeamSoccerONE.addCoach(coachA);
// Agregamos Masjista al equipo4
TeamSoccerONE.addMassageTherapist(theMassageA);
// Buscamos Persona en el Equipo
TeamSoccerONE.searchForSurname("Manrique");
