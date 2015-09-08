var test = require('mocha').it,
  expect = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([0]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(3)).to.deep.equal([1, 2, 3, 5 ]);
  expect(fibonacci(4)).to.deep.equal([1, 2, 3, 5, 8]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5, 8, 13]);
  expect(fibonacci(6)).to.deep.equal([1, 2, 3, 5, 8, 13, 21]);
  expect(fibonacci(7)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibonacci(8)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55]);
  expect(fibonacci(9)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  expect(fibonancci(10)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);

  // ...ad nauseum.
}); // END test(fibonacci)

// Hey, where's `fibonacci`...? Uh oh...
//

function fibonancci (number) {

  var fibonan = [];
    if (var i = 0; i <= 10; i++) {
    fibonan.push(i);
  }
}

test('evens', function(){
  expect(evens([ 0 ]).to.deep.equal([0]));
  expect(evens([ 1 ]).to.deep.equal([]));
  expect(evens([ 1, 1, 1 ]).to.deep.equal([ ]));
  expect(evens([ 2 ]).to.deep.equal([ 2 ]));
  expect(evens([ 1, 2 ]).to.deep.equal([ 2 ]));
  expect(evens([1, 2, 3, 5, 8, 13]).to.deep.equal([2, 8]))
  // More tests, perhaps?
}); // END test(evens)

function evens (number) {

  while(a < 4000000000) {

    if (a % 2 === 0) {
      sum +=
    }
  }

}

test('sum', function(){
  expect(sum([0 ]), 0);
  expect(sum([ 1 ]), 1);
  expect(sum([ 1, 1 ]), 2);
  expect(sum([1, 1, 1]), 3);
  expect(sum([1, 1, 1, 1]), 4);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
