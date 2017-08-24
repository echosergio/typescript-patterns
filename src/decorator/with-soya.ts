import { DrinkDecorator } from './drink-decorator';
import { IDrink } from './drink.interface';

export class WithSoya extends DrinkDecorator {

    constructor(drink: IDrink) {
        super(drink);
    }

    public getCost(): number {
        return super.getCost() + 0.2;
    }

    public getIngredients(): String {
        return super.getIngredients() + ", Soya";
    }
}