import { SoccerPlayer } from './class_soccerPlayer';
import { MassageTherapist } from './class_massageTherapist';
import { Coach } from './class_coach';

export class TeamSoccer {
    private _listSoccerPlayers : SoccerPlayer [];
    private _listMassageTherapist : MassageTherapist[];
    private _listCoach : Coach[];

    constructor ( p_listSoccerPlayers : SoccerPlayer[], p_listMassageTherapist : MassageTherapist[], p_listCoach : Coach[]){
        this._listSoccerPlayers = p_listSoccerPlayers;
        this._listMassageTherapist = p_listMassageTherapist;
        this._listCoach = p_listCoach;
    }

    public addSoccerPlayer (p_soccerPlayer:SoccerPlayer){
        this._listSoccerPlayers.push(p_soccerPlayer);
        let aux : number = this._listSoccerPlayers.length
        console.log("Se Agrego Jugador: "+ this._listSoccerPlayers[aux-1].getSurName() +", "+ this._listSoccerPlayers[aux-1].getName());
    }
    public removeSoccerPlayer (p_soccerPlayer:SoccerPlayer){
        for ( let i:number=0; i<= this._listSoccerPlayers.length; i++){
            if (p_soccerPlayer = this._listSoccerPlayers[i]){
                console.log("Se Quito Jugador: "+ this._listSoccerPlayers[i].getSurName()+" "+ this._listSoccerPlayers[i].getName());
                this._listSoccerPlayers.splice(i, 1);
            }
        }
    }
    public addMassageTherapist (p_massageTherapist:MassageTherapist){
        this._listMassageTherapist.push(p_massageTherapist);
        let aux : number = this._listMassageTherapist.length
        console.log("Se Agrego Masajista; "+ this._listMassageTherapist[aux-1].getSurName()+" "+ this._listMassageTherapist[aux-1].getName());
    }
    public removeMassageTherapist (p_massageTherapist:MassageTherapist){
        for ( let i:number=0; i<= this._listMassageTherapist.length; i++){
            if (p_massageTherapist = this._listMassageTherapist[i]){
                console.log("Se Quito Masagista: "+ this._listMassageTherapist[i].getSurName()+" "+ this._listMassageTherapist[i].getName());
                this._listMassageTherapist.splice(i, 1);
            }
        }
    }

    public addCoach (p_coach:Coach){
        this._listCoach.push(p_coach);
        let aux : number = this._listCoach.length
        console.log("Se Agrego Entrenador: "+ this._listCoach[aux-1].getSurName()+", "+ this._listCoach[aux-1].getName());
    }
    public removeCoach (p_coach:Coach){
        for ( let i:number=0; i<= this._listCoach.length; i++){
            if (p_coach = this._listCoach[i]){
                console.log("Se Quito Entrnador: "+ this._listCoach[i].getSurName()+", "+ this._listCoach[i].getName());
                this._listCoach.splice(i, 1);
            }
        }
    } 

    public searchForSurname(p_surName: string):string {
        for (let i = 0; i < this._listCoach.length;i++){
            if(p_surName === this._listCoach[i].getSurName()){
                console.log(this._listCoach[i])
                return ("Se encontro Entrenador")
            } else if(p_surName === this._listMassageTherapist[i].getSurName()){
                    console.log(this._listMassageTherapist[i])
                    return ("Se encontro Masajista")
                }else if (p_surName === this._listSoccerPlayers[i].getSurName()){
                    console.log(this._listSoccerPlayers[i])
                    return ("Se encontro Futbolista")
                }
            }
            return ("No se encotro Persona");
        } 
    }
