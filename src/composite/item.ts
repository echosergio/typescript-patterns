export abstract class Item {

    protected _hours: number;

    constructor(hours?: number) {
        this._hours = hours;
    }

    abstract getHours(): number; 
}