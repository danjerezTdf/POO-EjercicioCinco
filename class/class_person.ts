export class Person {
    protected _id: number;
    protected _name: string;
    protected _surName: string;
    protected _condition: boolean;

    constructor (p_id: number, p_name: string,p_surName: string,p_condition: boolean) {
        this._id = p_id;
        this._name = p_name;
        this._surName = p_surName;
        this._condition = p_condition;
    }
    
    public getId ():number { 
        return this._id; }

    public setId (p_id:number):void {
        this._id = p_id;
    }
    public getName ():string {
        return this._name;
    }
    public setName (p_name:string):void {
        this._name = p_name;
    }
    public getSurName ():string {
        return this._surName;
    }
    public setSurName (p_surName:string):void {
        this._surName = p_surName;
    }
    public getCondition () :boolean {
        return this._condition;
    }
    public setCondition (p_condition:boolean):void {
        this._condition = p_condition
    }
}