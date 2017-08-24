import { IDrink } from './drink.interface';

export abstract class DrinkDecorator implements IDrink {

    private decoratedDrink: IDrink;

    constructor(drink: IDrink) {
        this.decoratedDrink = drink;
    }

    public getCost(): number {
        return this.decoratedDrink.getCost();
    }

    public getIngredients(): String {
        return this.decoratedDrink.getIngredients();
    }
}