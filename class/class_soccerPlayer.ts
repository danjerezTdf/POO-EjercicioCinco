import { Person } from './class_person'

export class SoccerPlayer extends Person {
    private _shirtNumber: number;
    private _teamPosition: string;
    private _weight: number;
    private _height: number;

    constructor(_id:number, _name:string, _surName:string,_condition: boolean,p_shirtNumber:number,p_teamPosition:string,p_weight:number,p_height:number) {
        super(_id,_name,_surName, _condition)
        this._shirtNumber = p_shirtNumber;
        this._teamPosition = p_teamPosition;
        this._weight = p_weight;
        this._height = p_height;
    }

    public getShirtNumber():number {
        return this._shirtNumber;
    }
    public setShirtNumber(p_shirtNumber:number) {
        this._shirtNumber = p_shirtNumber;
    }
    public getTeamPosition():string {
        return this._teamPosition;
    }
    public setTeamPosition(p_teamPosition:string) {
        this._teamPosition = p_teamPosition;
    }
    public getWeight ():number {
        return this._weight;
    }
    public setWeight (p_weight:number) {
        this._weight = p_weight;
    }
    public getHeight ():number {
        return this._height;
    }
    public setHeight (p_height:number) {
        this._height = p_height;
    }
}



let playerOne = new SoccerPlayer (31819248,"Daniel","Jerez",true, 8,"Delantero",75,1.75)
let playerTwo = new SoccerPlayer (32979801,"Jose Felix","Figueras",true, 8,"Delantero",75,1.75)
let playerTree = new SoccerPlayer (34521579,"Marcos","Gallardo",true, 8,"Delantero",75,1.75)


