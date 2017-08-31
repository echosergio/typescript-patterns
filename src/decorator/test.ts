import { Chocolate } from './chocolate';
import { Coffee } from './coffee';
import { WithMilk } from './with-milk';
import { WithCream } from './with-cream';
import { WithCinnamon } from './with-cinnamon';
import { WithSoya } from './with-soya';
import { WithOrujo } from './with-orujo';

import { expect } from 'chai';
import 'mocha';

describe('Drinks', () => {
    it('should return the price of a single coffee', () => {

        var drink = new Coffee();

        expect(Math.round(drink.getCost()*100)/100).to.equal(1);
    });
    
    it('should return the price of a coffee with orujo', () => {

        var drink = new Coffee();
        drink = new WithOrujo(drink);

        expect(Math.round(drink.getCost()*100)/100).to.equal(2);
    });

    it('should return the price of a single chocolate', () => {

        var drink = new Chocolate();

        expect(Math.round(drink.getCost()*100)/100).to.equal(1.2);
    });

    it('should return the price of a chocolate with cinnamon', () => {

        var drink = new Chocolate();
        drink = new WithCinnamon(drink);

        expect(Math.round(drink.getCost()*100)/100).to.equal(1.35);
    });

    it('should return the price of a coffee with soya', () => {

        var drink = new Coffee();
        drink = new WithSoya(drink);

        expect(Math.round(drink.getCost()*100)/100).to.equal(1.20);
    });

    it('should return the price of a coffee with milk and cream', () => {

        var drink = new Coffee();
        drink = new WithMilk(drink);
        drink = new WithCream(drink);

        expect(Math.round(drink.getCost()*100)/100).to.equal(1.60);
    });

    it('should return the price of a coffee with double of milk, cream and orujo', () => {

        var drink = new Coffee();
        drink = new WithMilk(drink);
        drink = new WithMilk(drink);
        drink = new WithCream(drink);
        drink = new WithOrujo(drink);

        expect(Math.round(drink.getCost()*100)/100).to.equal(2.70);
    });
});