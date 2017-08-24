import { Coffee } from './coffee';
import { WithMilk } from './with-milk';

var drink = new Coffee();
console.log(drink.getCost());

drink = new WithMilk(drink);
console.log(drink.getCost());
