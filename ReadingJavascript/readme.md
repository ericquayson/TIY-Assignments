# About JavaScript

JavaScript is a programming language that allows the user to add functionality to their web application or website. JavaScript comes equip with powerful tools that allow for the developer to listen for events, store data, create clean and concise code. 

### Basic JavaScript

## 4 Primitive Types

#### null - which is an empty value
#### boolean - which returns two value (true or false)
#### numeric value - any number
#### string - "any set of characters or none at all within quotations marks"

### Basic Operators

## Arithmetic

addition

1 + 1

returns 2

operator - +=

multiple 

2 * 3 

returns 6

operator - *=
 
divide 

5 / 2

return 2.5

operator - /=

subtract 

 1 - 1

returns 0

operator - -=

Comparison

6 == 6

true

6 === 7

false

6 > 4

true

5 < 10

false

6 != 1

true

1 !== 2

true

NaN - Not a Number

Undefined - indicates that a variable is not defined before being called

Infinity - 


Variables declared within Javascript can be known as Identifiers 
= allows you to assign a value to an identifiers
delimitiers = " " or ' ' or , 

Example of a 'bear' word = var foo = foo; 

+ -- catenation -- specifically, refer to strings and "smashingthemtogether"

semicolon - is a statement operator 

Sometimes Javascript can be read from left to right or right to left (depending on hierarchy of the operations)

function identifier () {}; -- the function definition

To invoke a function     ____();
                      function name
  
  weirdos operators: . () 
  
  comparsion  operators: === (this means a strict comparsion which is best practice)
                      
  console.log -- is an unanimous function

## Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... (you fill in the rest)

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `functionName`...
    function functionName ( /* arguments go here */ ) {
      // body of function goes here
    }
// the start of the function definition
function hello (name) {
// the body of the function `hello`
 console.log("My name is " + " ")
// the function innovocation
} hello(eric);
Once a function has been defined, it can be _invoked_ by... 
functionName(); 

### `typeof` keyword

The `typeof` keyword function determines which of the 4 primitive types that element could be 

However, beyond the four primitive types, `typeof` can tell you if the element `undefined` or `null` are objects

