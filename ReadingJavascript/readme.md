# About JavaScript
===================
> JavaScript is a programming language that allows the user to add functionality to their web application or website.          JavaScript comes equip with powerful tools that allow for the developer to listen for events, store data, create clean and concise code. 

### Basic JavaScript
===================
## 4 Primitive Types
---------------------
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

### Block Operator

Block Operator - is used to group zero or more statemens. The block statements can be defined with curley brackets.

example:

{




}

### If, else statement

If statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed

//if statement defition
if (true) {
  
}

Multiple If statements

if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
...
else
   statementN
   
   +There are multiple variations of what If statements can consist of
   
   if (condition1)
   statement1
else
   if (condition2)
      statement2
   else
      if (condition3)
...

While statements creates a loop that executes a specficied statement as long as the test condition `eval` to true. 

while (condition) {
  statement
}

do While statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. 

#### Example 

do
   statement
while (condition);

switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case

switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}

### Array 

>  An Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects. 
>  Create an Array

var names = ["Eric", "Tee"];

## Array come equipped with a lot of functionality

 ##Methods
 
 + push
 
## Adds to the end of an Array
 
 var newNames = names.push("Quan");
 // ["Eric", "Tee", "Quan"]
 
 + pop
 
## Remove from the end of an Array
 
 var lastName = names.pop(); //removes Quan from the end
 // ["Eric", "Tee"]
 
## Remove from the front of an Array
 
 var lastLastName = names.shift(); // remove Eric from the front
 // ["Tee"]
 
## Add to the front of an Array
 
 var lasttName = names.unshift("Teach") // adds Teach to the front of the array
 
 // ["Teach", "Tee"]
 
 ## Find the index of an item in the Array
 
 names.push("Cecil");
 // ["Teach", "Tee", "Cecil"]
 
 var pos = names.indexOf("Tee");
 // 1
 
 ## Remove an item by Index Position
 
 var removedItem = names.splice(pos, 1); // this is how to remove an element 
 // ["Teach", "Cecil"]
 
 
## finding the length of the array
 
 names.length //2 

## DOM

DOM stands for Document Object Model

The `DOM` explicitly describes a programming interface for HTML, XML and SVG documents. The DOM provides a structured representation of a document tree and it defines a way that the structure can be accessed from programs so that they can change the  document structure, style and content.

A document object can be obtained from various APIs:

`document` provides developers with a lot of functionality to maniuplate or extract things

 Document object Methods

  + `getElementById`  - will allow for a developer to select an element or dom node by id that is given to it in the HTML
  +                  Example document.getElementById("
  +  `getElementsByClassName` - will allow for a developer to select an element or dom node by it's class  that is given to 
  +                             it in the HTML
  +  `appendChild` -   will take the child element within it's parent and place it at the bottom of the node
  +  `write` -  Writes a string of text to a document stream opened by document.open();
  +  `writeIn` - Writes a string of text followed by a newline character to a document
  + 

Most commonly, you work with the document the script is running in by using document in document's scripts

`window.document` returns a reference to the document contanied in the window

`window.location` returns a location object that contains information about the current URL

`window.history` returns a read-only property that only refers to the History object, which provides an interface for manipulating the browser session history

`window.alert` (method) - displays an alert box with the optional specified content and an Ok button

`window.confirm` (method) - displays a modal dialog with an optional message and two buttons, OK and cancel

`window.reload` (method) - will allow for the page or that specific window to be renderred again

`window.open` (method) -- will open up a new broswer window for the element or link that is an argument for the `window.open` function call





`window.close` (method) 


`HTMLElement` -- interfaces represents any HTML element

### Properties

 + `id` -- sets or returns the value of the id attribute of an element
 + `classname` - sets or returns the value of the class attribute of an element
 + `innerHTML` - sets or returns the content of an element
 + `outerHTML` - sets or returns the content
 + `children` - returns a collection of an element's child element (excluding text and comment nodes)
 + `parent` - returns the parent node of an element
 + `nextSibling` - returns the next node at the same node tree level
 + `firstChild` - returns the first child node of an element
 + 
### Methods

 + `addEventListener` - attaches an event handler to the specficied element
 + `dispatchEvent`
 + `Attribute` family - 
 + 
 `HTMLCollection`
 + `nodeList` - represents a list of nodes, like an HTML element's collection of child nodes
 ## The Difference
+ While a NodeList can contain any node type, an HTMLCollection is supposed to only contain Element nodes
+ An HTMLCollection provides the same methods as a NodeList and additionally a method called nameItem
 

