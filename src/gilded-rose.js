var items = [];

function updateItems() {
  var categoryRepo = new CategoryRepository();
  items.forEach(item => {
    const category = categoryRepo.getForItemName(item.name);
    switch (category) {
      case "simple": 
        updateSimpleItem(item); 
        break;
      case "maturing": 
        updateMaturingItem(item); 
        break;
      case "legendary": 
        updateLegendaryItem(item); 
        break;
      case "ticket": 
        updateTicketItem(item); 
        break;
      case "conjured": 
        updateConjuredItem(item); 
        break;        
      default: 
        throw "No update func found for category " + category; 
    }
  });
}

function updateSimpleItem(item) {
  item.sell_in -= 1;
  item.quality = decrement(item.quality, (item.sell_in < 0) ? 2 : 1);
}

function updateMaturingItem(item) {
  item.sell_in -= 1;
  item.quality = increment(item.quality, 1);
}

function updateLegendaryItem(item) {
  const fixedLegendaryQuality = 80;
  item.quality = fixedLegendaryQuality;
}

function updateTicketItem(item) {
  var s = item.sell_in;
  if (s > 10) {
    item.quality = increment(item.quality, 1);
  } else if (s > 5 && s <= 10) {
    item.quality = increment(item.quality, 2);
  } else if (s > 0 && s <= 5) {
    item.quality = increment(item.quality, 3);
  }
  item.sell_in -= 1;
}

function updateConjuredItem(item) {
  item.sell_in -= 1;
  item.quality = decrement(item.quality, 2)
}

function decrement(quality, by) {
  var newQuality = quality - by;
  return newQuality > 0
    ? newQuality
    : 0;
}

function increment(quality, by) {
  const max = 50;
  var newQuality = quality + by;
  return newQuality < max
    ? newQuality
    : max;
}