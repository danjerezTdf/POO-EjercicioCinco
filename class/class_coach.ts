import { Person } from './class_person'

export class Coach extends Person {
    private _tipeCoach: string;

    constructor(_id:number,_name:string,_surName:string, _condition: boolean,p_tipeCoach:string){
        super(_id,_name,_surName, _condition);
        this._tipeCoach = p_tipeCoach;
    }

    public getTipeCoach():string{
        return this._tipeCoach;
    }
    public setTipeCoach(p_tipeCoach:string){
        this._tipeCoach = p_tipeCoach;
    }
    public changeCondition ():boolean {
        if (this._condition === true) {
            this._condition = false
            console.log("Se desvinculo Entrenador")
        }else {
            this._condition = true
            console.log("Se constrato Entrenador")
        }
        return this._condition
    }
}

