import { sep } from "path";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

// array of special names
export const specials = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros', 'Conjured Mana Cake'];

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    // Suggestions for refactoring:
    // 1. Write a function for each special and normal item and import them here 



    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name != specials[0] && this.items[i].name != specials[1] && this.items[i].name != specials[2] && this.items[i].name != specials[3]) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality--
                }
            } else if (this.items[i].name === specials[3]) {
                this.items[i].quality -= 2
            }
            else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality++
                    if (this.items[i].name == specials[1]) {
                        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                            this.items[i].quality++
                        }
                        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                            this.items[i].quality++
                        }
                    }
                }
            }
            if (this.items[i].name != specials[2]) {
                this.items[i].sellIn--;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != specials[0]) {
                    if (this.items[i].name != specials[1]) {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != specials[2] && this.items[i].name != specials[3]) {
                                this.items[i].quality--
                            } else if (this.items[i].name === specials[3]) {
                                this.items[i].quality -= 2
                            }
                        }
                    } else {
                        this.items[i].quality = 0
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality++
                    }
                }
            }
        }
        return this.items;
    }
}