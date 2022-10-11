import { Coach } from './class/class_coach'
import { SoccerPlayer } from './class/class_soccerPlayer'
import { MassageTherapist } from './class/class_massageTherapist'
import { TeamSoccer } from './class/class_teamSoccer'

// Instanciamos las clases Jugadores, Masajista y Entrenador

let playerOne = new SoccerPlayer (31819248,"Daniel","Jerez",true, 8,"Delantero",75,1.75)
let playerTwo = new SoccerPlayer (32979801,"Jose Felix","Figueras",true, 9,"Delantero",60,1.55)
let playerThree = new SoccerPlayer (34521579,"Marcos","Gallardo",true, 3,"Defensor",82,1.84)
let playerA = new SoccerPlayer (35780564,"Juan","De los Palotes",true, 1,"Arquero",81,1.80)

let coachOne = new Coach (33974451,"Jacinto","Barcelo",true,"Entrenador Principal");
let coachTwo = new Coach (34619853,"Gema","Manrique",true,"Entrenador De Arqueros");
let coachA = new Coach (32443205,"Esteban","Quito",true,"Entrenador Campo");

let theMassageOne = new MassageTherapist (34195158,"Cayetano","Farre",true,"Deportivo de Carga");
let theMassageTwo = new MassageTherapist (32979801,"Aya","Sales",true,"Linfatico");
let theMassageA = new MassageTherapist (31065924,"Valeria","Masa",true,"Deportivo de Carga");

// Creo las listas de Clases
let listSoccerPlayersA : SoccerPlayer [] = [playerOne,playerTwo,playerThree];
let listCoachA : Coach [] = [coachOne,coachTwo];
let listMassageA : MassageTherapist [] = [theMassageOne,theMassageTwo];

// Instanciamos la clase Equipo de Futbol
let TeamSoccerONE = new TeamSoccer (listSoccerPlayersA,listMassageA,listCoachA);

//UNO DE METODOS

// Agregamos Jugardor a la Lita del equipo-

TeamSoccerONE.addSoccerPlayer(playerA);

// Agregamos Entrenador a la lista del equipo-

TeamSoccerONE.addCoach(coachA);

// Agregamos Masjista al equipo4

TeamSoccerONE.addMassageTherapist(theMassageA);

// Buscamos Persona en el Equipo

TeamSoccerONE.searchForSurname("Manrique");









