import { Item } from './item';
import { BasicItem } from './basic-item';
import { CompositeItem } from './composite-item';

import { expect } from 'chai';
import 'mocha';

describe('Items hours', () => {
    it('should return 3 hours in total', () => {

        var task = new BasicItem(3);

        expect(task.getHours()).to.equal(3);
    });

    it('should return 4 hours in total', () => {

        var bug = new BasicItem(4);

        expect(bug.getHours()).to.equal(4);
    });

    it('should return 7 hours in total', () => {

        var task1 = new BasicItem(2);
        var task2 = new BasicItem(5);

        var userStory = new CompositeItem();
        userStory.add(task1);
        userStory.add(task2);

        expect(userStory.getHours()).to.equal(7);
    });

    it('should return 11 hours in total', () => {

        var task1 = new BasicItem(2);
        var task2 = new BasicItem(9);
        
        var userStory = new CompositeItem();
        userStory.add(task1);
        userStory.add(task2);

        var feature = new CompositeItem();
        feature.add(userStory);

        expect(userStory.getHours()).to.equal(11);
    });
    it('should return 20 hours in total', () => {

        var task1 = new BasicItem(2);
        var task2 = new BasicItem(9);
        
        var userStory1 = new CompositeItem();
        userStory1.add(task1);
        userStory1.add(task2);

        var task3 = new BasicItem(1);
        var task4 = new BasicItem(4);
        var task5 = new BasicItem(4);
        
        var userStory2 = new CompositeItem();
        userStory2.add(task3);
        userStory2.add(task4);
        userStory2.add(task5);

        var feature = new CompositeItem();
        feature.add(userStory1);
        feature.add(userStory2);

        var epic = new CompositeItem();
        epic.add(feature);

        expect(epic.getHours()).to.equal(20);
    });
});