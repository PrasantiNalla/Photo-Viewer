import { Item, GildedRose } from '../app/gilded-rose';

//Create a list of items similar to (perhaps identical to??) the items that are used in the real program

//generate an array of items, ideally include special cases.
const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 12),new Item('Sulfuras, Hand of Ragnaros', 0, 80),new Item('Backstage passes to a TAFKAL80ETC concert', 8, 25),new Item('Apple', 5, 15),new Item('Cola', 15, 7),new Item('Socks', 2, 14) ]);
//console.log(gildedRose);

//Run the 'update' function a few times with these items
   
let items = gildedRose.updateQuality();
items = gildedRose.updateQuality();
items = gildedRose.updateQuality();

//Note down the answer that they gave.
console.log(items);

/*
[
  Item { name: 'Aged Brie', sellIn: 7, quality: 15 },
  Item {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 5,
    quality: 31
  },
  Item { name: 'Apple', sellIn: 2, quality: 12 },
  Item { name: 'Cola', sellIn: 12, quality: 4 },
  Item { name: 'Socks', sellIn: -1, quality: 10 }
]
*/

//Assert that all future runs of this test give the same result. (after refactoring)

// Add a master test here