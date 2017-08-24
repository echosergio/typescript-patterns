import { DrinkDecorator } from './drink-decorator';
import { IDrink } from './drink.interface';

export class WithMilk extends DrinkDecorator {

    constructor(drink: IDrink) {
        super(drink);
    }

    public getCost(): number {
        return super.getCost() + 0.1;
    }

    public getIngredients(): String {
        return super.getIngredients() + ", Milk";
    }
}