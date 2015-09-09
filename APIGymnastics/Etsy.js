// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');

// TODO: Setup mocha and chai...
var test = require('mocha').it,
  expect = require('chai').expect;

test('this is the easy one', function(){
  expect(items).to.exist;
  expect(Array.isArray(items)).to.be.true; // What.

  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});

test('finding the average price', function(){
  // var yourAnswer = "start with `items`; use `Array` methods";
  var yourAnswer = 0;

  // To calculate the average price, we need:
  // * each item's price
  var prices = [ ], item;

  function forEachItem(index, length){
    // For the first item in the list...
    item = items[index];

    expect(item).to.be.an('object');
    expect(item.price).to.be.a('number');
    // expect(item.price).to.be.equal(12);

    prices.push(item.price);

    // expect(prices).to.deep.equal([ 12 ]);
    expect(prices.length).to.equal(length);
  }

  var index, length;

  // for (var index = 0; index < items.length; index++) {
  //   item = items[index];
  //   prices.push(item.price);
  // }

  items.forEach(function(item, index, all){
    forEachItem(index, index + 1);
  })
  // forEachItem(0, 1);
  // forEachItem(1, 2);
  // forEachItem(2, 3);
  // forEachItem(3, 4);
  // index = 0; length = 1;
  // {
  //   // For the first item in the list...
  //   item = items[index];
  //
  //   expect(item).to.be.an('object');
  //   expect(item.price).to.be.a('number');
  //   // expect(item.price).to.be.equal(12);
  //
  //   prices.push(item.price);
  //
  //   // expect(prices).to.deep.equal([ 12 ]);
  //   expect(prices.length).to.equal(length);
  // }

  // index = 1; length = 2;
  // {
  //   // For the second item in items...
  //   item = items[index];
  //
  //   expect(item).to.be.an('object');
  //   expect(item.price).to.be.a('number');
  //   // expect(item.price).to.be.equal(20);
  //
  //   prices.push(item.price);
  //
  //   // expect(prices).to.deep.equal([ 12, 20 ])
  //   expect(prices.length).to.equal(length);
  // }
  // * sum of all item's prices
  // * total number of items
  //
  // sum of all item prices / number of items
  expect(items.length).to.equal(25);

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */


  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
