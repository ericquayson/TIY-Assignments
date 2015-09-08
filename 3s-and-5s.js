var test = require('mocha').it,
    //expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('three', function(){
  // Now what should go in here?
  assert.equal(three([3, 6, 9]), 18);
  assert.equal(three([3, 6, 9, 12, 15, 18]), 63);
  assert.equal(sumofthree([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]), 408);
}); // END test 3s

function three (number) {
  var emptyThree = [];
  for (var count = 3; count <= 144; count++ ) {
    Emptythree.push[count]
  }

}

test('five', function() {
  // Now what should go in here?
  assert.equal(five([5]), 5);
  assert.equal(five([5, 10, 15]), 30);
  assert.equal(five([5, 10, 15, 20, 25, 30, 35, 40, 45]), 225);
}); // End test 5s

function five (number)
  var emptyFive = [];
  for (var count = 5; count <= 144; count++ ) {
    emptyFive.push[count]
  }
