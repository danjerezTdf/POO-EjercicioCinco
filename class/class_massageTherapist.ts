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
}


let theMassageOne = new MassageTherapist (34195158,"Cayetano","Farre",true,"Deportivo de Carga");
let theMassageTwo = new MassageTherapist (32979801,"Aya","Sales",true,"Linfatico");