function CategoryRepository() {

    this.categories = {
      simple    : ["+5 Dexterity Vest", "Elixir of the Mongoose"],
      maturing  : ["Aged Brie"],
      ticket    : ["Backstage passes to a TAFKAL80ETC concert"],
      legendary : ["Sulfuras, Hand of Ragnaros"],
      conjured  : ["Conjured Mana Cake"]
    };

    this.getForItemName = (itemName) => {
      var category = "";
      Object
        .getOwnPropertyNames(this.categories)
        .forEach(c => {
          if (this.categories[c].indexOf(itemName) > -1) {
            category = c;
            return;
          }
      });
      return category;
    };
};