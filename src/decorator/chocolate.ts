import { IDrink } from './drink.interface';

export class Chocolate implements IDrink {

    public getCost(): number {
        return 1.20;
    }

    public getIngredients(): String {
        return "Chocolate";
    }
}