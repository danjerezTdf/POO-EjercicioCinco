import { Person } from './class_person'

export class Coach extends Person {
    private _tipeCoach: string;

    constructor(_id,_name,_surName, _condition,p_tipeCoach:string){
        super(_id,_name,_surName, _condition);
        this._tipeCoach = p_tipeCoach;
    }

    public getTipeCoach():string{
        return this._tipeCoach;
    }
    public setTipeCoach(p_tipeCoach:string){
        this._tipeCoach = p_tipeCoach;
    }
}


let coachOne = new Coach (33974451,"Jacinto","Barcelo",true,"Entrenador Principal");
let coachTwo = new Coach (34619853,"Gema","Manrique",true,"Entrenador De Arqueros");