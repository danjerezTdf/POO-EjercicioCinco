import { Person } from './class_person'

export class MassageTherapist extends Person {
    private _tipeTherapist: string;

    constructor(_id,_name,_surName, _condition,p_tipeTherapist) {
        super(_id,_name,_surName,_condition);
        this._tipeTherapist = p_tipeTherapist;
    }

    public getTipeTherapist(): string{
        return this._tipeTherapist;
    }
    public setTipeTherapist(p_tipeTherapist:string){
        this._tipeTherapist = p_tipeTherapist;
    }
    public changeCondition ():boolean {
        if (this._condition === true) {
            this._condition = false
            console.log("Se desvinculo Masajista")
        }else {
            this._condition = true
            console.log("Se constrato Masajista")
        }
        return this._condition
    }
}


