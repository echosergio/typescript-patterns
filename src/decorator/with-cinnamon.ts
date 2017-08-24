import { DrinkDecorator } from './drink-decorator';
import { IDrink } from './drink.interface';

export class WithCinnamon extends DrinkDecorator {

    constructor(drink: IDrink) {
        super(drink);
    }

    public getCost(): number {
        return super.getCost() + 0.15;
    }

    public getIngredients(): String {
        return super.getIngredients() + ", Cinnamon";
    }
}