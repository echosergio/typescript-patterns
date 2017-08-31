import { Item } from './item';

export interface ICompositeItem {
    add(item: Item) 
    remove(item: Item) 
}