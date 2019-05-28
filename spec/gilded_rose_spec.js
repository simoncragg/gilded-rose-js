describe("Gilded Rose test suite:", () => {

  var item;

  given("(0 < quality < 50)", () => {

    var quality = 45;

    and("(sell_in > 0)", () => {

      var sellInDays = 10;

      when("a simple item is updated", () => {

        beforeEach(() => {
          item = new Item("+5 Dexterity Vest", sellInDays, quality);
          items = [item];
          updateItems();
        });

        then("sell_in must be decremented by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1);
        });

        then("quality must be decremented by 1", () => {
          expect(item.quality).toBe(quality - 1);
        });
      });

      when("a maturing item is updated", () => {

        beforeEach(() => {
          item = new Item("Aged Brie", sellInDays, quality);
          items = [item];
          updateItems();
        });

        then("sell_in must be decremented by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1);
        });

        then("quality must be incremented by 1", () => {
          expect(item.quality).toBe(quality + 1);
        });
      });

      when("a legendary item is updated", () => {

        var maxQuality = 80;

        beforeEach(() => {
          item = new Item("Sulfuras, Hand of Ragnaros", sellInDays, maxQuality - 1);
          items = [item];
          updateItems();
        });

        then("sell_in must not change", () => {
          expect(item.sell_in).toBe(sellInDays)
        });

        then("quality must be 80", () => {
          expect(item.quality).toBe(maxQuality);
        });
      });

      when("a conjured item is updated", () => {

        beforeEach(() => {
          item = new Item("Conjured Mana Cake", sellInDays, quality);
          items = [item];
          updateItems();
        });

        then("sell_in must be decremented by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1)
        });

        then("quality must be decremented by 2", () => {
          expect(item.quality).toBe(quality - 2);
        });
      });

    });

    var backstagePass = "Backstage passes to a TAFKAL80ETC concert"

    and("(sell_in > 10)", () => {

      var sellInDays = 11;
    
      when("an ticket item is updated", () => {
      
        beforeEach(() => {
          item = new Item(backstagePass, sellInDays, quality);
          items = [item];
          updateItems(); 
        });

        then("sell_in must be decremented by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1);
        });

        then("quality must be INCREMENTED by 1", () => {
          expect(item.quality).toBe(quality + 1);
        });
      });
    });

    and("(5 > sell_in <= 10)", () => {

      var sellInDays = 10;

      when("an ticket item is updated", () => {

        beforeEach(() => {
          item = new Item(backstagePass, sellInDays, quality);
          items = [item];
          updateItems();      
        });

        then("sell_in must be decrement by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1);
        });

        then("quality must be incremented by 2", () => {
          expect(item.quality).toBe(quality + 2);
        });
      });
    });

    and("(0 > sell_in <= 5)", () => {

      when("an ticket item is updated", () => {

        var sellInDays = 5;

        beforeEach(() => {
          item = new Item(backstagePass, sellInDays, quality);
          items = [item];
          updateItems();
        });

        then("sell_in must be decremented by 1", () => {
          expect(item.sell_in).toBe(sellInDays - 1);
        });

        then("quality must be incremented by 3", () => {
          expect(item.quality).toBe(quality + 3);
        });
      });
    });

    and("(sell_in <= 0)", () => {

      var sellInDays = 0;
  
      when("a simple item is updated", () => {
  
        var quality = 10;
  
        beforeEach(() => {
          item = new Item("+5 Dexterity Vest", sellInDays, quality);
          items = [item];
          updateItems();
        });
  
        then("quality must be decremented by 2", () => {
          expect(item.quality).toBe(quality - 2);
        });
      });
    });

  });

  given("(quality >= 50)", () => {
    
    var quality = 50;

    and("(sell_in > 0)", () => {

      var sellInDays = 10;

      when("maturing item is updated", () => {

        beforeEach(() => {
          item = new Item("Aged Brie", sellInDays, quality);
          items = [item];
          updateItems();
        });

        then("quality must not exceed 50", () => {
          expect(item.quality).toBe(50);
        });
      });
    });
  });

});
