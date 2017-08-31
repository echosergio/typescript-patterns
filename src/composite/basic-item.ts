import { Item } from './item';

export class BasicItem extends Item {

    constructor(hours: number) {
        super(hours);
    }

    public getHours(): number {
        return this._hours;
    }
}