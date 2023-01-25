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

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    // array of special names  names = [brie, backstage, sulfuras] ---- if this != names[0] 

    public specials = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name != this.specials[0] && this.items[i].name != this.specials[1] && this.items[i].name != this.specials[2]) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality--
                }
            } else {
                // combine some of the if statements
                if (this.items[i].quality < 50) {
                    this.items[i].quality++
                    if (this.items[i].name == this.specials[1]) {
                        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                            this.items[i].quality++
                        }
                        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                            this.items[i].quality++
                        }
                    }
                }
            }
            if (this.items[i].name != this.specials[2]) {
                this.items[i].sellIn--;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != this.specials[0]) {
                    if (this.items[i].name != this.specials[1]) {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != this.specials[2]) {
                                this.items[i].quality--
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