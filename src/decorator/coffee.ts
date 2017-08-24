import { IDrink } from './drink.interface';

export class Coffee implements IDrink {

    public getCost(): number {
        return 1;
    }

    public getIngredients(): String {
        return "Coffee";
    }
}