import { Item } from './item';
import { ICompositeItem } from './composite-item.interface';

export class CompositeItem extends Item implements ICompositeItem {

    private _items: Array<Item> = new Array();

    public add(item: Item) {
        this._items.push(item);
    }

    public remove(item: Item) {
        let itemIndex = this._items.indexOf(item);
        this._items.splice(itemIndex, 1);
    }

    public getHours(): number {
        var hours: number = 0;
        this._items.forEach(item => { hours += item.getHours() });
        return hours;
    }
}