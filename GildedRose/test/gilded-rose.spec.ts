import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { specials } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it should reduce quality of standard products
    it('should reduce quality of standard products', function () {
        const gildedRose = new GildedRose([new Item('Fruit', 3, 5), new Item('Vegetable', 6, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(4);
        expect(items[1].quality).to.equal(43);
    });


    // it should reduce quality of standard products by 2 if sellIn <0
    it('should reduce quality of standard products by 2 if sellIn <0', function () {
        const gildedRose = new GildedRose([new Item('Fruit', 0, 5), new Item('Vegetable', 0, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
        expect(items[1].quality).to.equal(42);
    });


    // it should reduce sell by date of standard products
    it('should reduce sell by date of standard products', function () {
        const gildedRose = new GildedRose([new Item('Fruit', 3, 5), new Item('Vegetable', 0, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(2);
        expect(items[1].sellIn).to.equal(-1);
    });


    // it should ensure quality of an item never goes below 0 or above 50 (sulfuras is exception)
    it('should ensure quality of an item never goes below 0 or above 50 (sulfuras is exception)', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 3, 50), new Item('Vegetable', 0, 0), new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(80);
    });


    // it should increase quality of Aged Brie
    it('should increase quality of Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 3, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    });


    // it should increase quality of Aged Brie by 2 if sellIn<=0
    it('should increase quality of Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    });


    // it should increase quality of Backstage by 1 
    it('should increase quality of Backstage by 1', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    });


    // it should increase quality of Backstage by 2 if sellIn <= 10 
    it('should increase quality of Backstage by 2 if sellIn <= 10', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    });


    // it should increase quality of Backstage by 3 if sellIn <= 5 
    it('should increase quality of Backstage by 3 if sellIn <= 5', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });


    // it should reduce quality of Backstage to zero if sellIn <=0
    it('should reduce quality of Backstage to zero if sellIn <=0', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });


    // it should do nothing to quality of sellIn of Sulfuras
    it('should do nothing to quality of sellIn of Sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(5);
        expect(items[0].quality).to.equal(80);
    });

    // it should reduce quality of Conjured Mana Cake by 2
    it('should reduce quality of Conjured Mana Cake by 2', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 33)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(31);
    });


    // it should reduce quality of Conjured Mana Cake by 4 if sellIn <0
    it('should reduce quality of Conjured Mana Cake by 4 if sellIn <0', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 25)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
    });


    /*
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });
    */

});