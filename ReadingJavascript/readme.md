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

+ addition

+ 1 + 1

+ returns 2

+ operator - +=

+ multiple

+ 2 * 3

+ returns 6

+ operator - *=

+ divide

+ 5 / 2

+ return 2.5

+ operator - /=

+ subtract

+ 1 - 1

+ returns 0

+ operator - -=

+ Comparison

+ 6 == 6

+ true

+ 6 === 7

+ false

+ 6 > 4

+ true

+ 5 < 10

+ false

+ 6 != 1

+ true

+ 1 !== 2

+ true

+ NaN - Not a Number

+ Undefined - indicates that a variable is not defined before being called

+ Infinity -


+ Variables declared within Javascript can be known as Identifiers
+ = allows you to assign a value to an identifiers
+ delimitiers = " " or ' ' or ,

+ Example of a 'bear' word = var foo = foo;

+ -- catenation -- specifically, refer to strings and "smashingthemtogether"

+ semicolon - is a statement operator

+ Sometimes Javascript can be read from left to right or right to left (depending on hierarchy of the operations)

+ function identifier () {}; -- the function definition

+ To invoke a function     ____();
                      function name

 + weirdos operators: . ()

 + comparsion  operators: === (this means a strict comparsion which is best practice)

  + console.log -- is an unanimous function

## Functions

+ Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... (you fill in the rest)

### `function` keyword

+ The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `functionName`...
    function functionName ( /* arguments go here */ ) {
      // body of function goes here
    }
+ // the start of the function definition
+ function hello (name) {
+ // the body of the function `hello`
 + console.log("My name is " + " ")
+ // the function innovocation
+ } hello(eric);
+ Once a function has been defined, it can be _invoked_ by...
+ functionName();

### `typeof` keyword

+ The `typeof` keyword function determines which of the 4 primitive types that element could be

+ However, beyond the four primitive types, `typeof` can tell you if the element `undefined` or `null` are objects

### Block Operator

+ Block Operator - is used to group zero or more statemens. The block statements can be defined with curley brackets.

+ example:

{




}

### If, else statement

+ If statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed

//if statement defition
if (true) {

}

### Multiple If statements

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




## Event Bubbling


DOM elements can be nested inside each other. When the user clicks on the deepest possible child element , the parent element or node can be triggered as well. The event bubbling is the reason for the reaction.

There is concept called the `bubbling order` because an event bubbles from the innermost element up through parents, like a bubble of air in the water

The deepest element is also called the target or the originating element

Target is simply the element or node you want to work with specifically,

Specifically, event bubbling will eventually bubble up to the top until it gets to the HTML tag. In order to stop this reaction of the onclick event is event.stopPropagation() or IE<9 event.cancelBubble = true

Captures down will start from the topmost element then one move into next element down from it (the opposite of bubbling up)

All handlers work on bubbling stage excepts addEventListener with last argument true, which is the only way to catch the event on capturing stage


## Event Methods


Event.preventDefault() – cancels the event (if it is cancelable)

Mouse events (sometimes are better to used than click events, but some browsers may not execute the code)

Mousedown – user depresses the mouse button on the element

Mouseup – user releases the mouse button on this element

Dblclick – event is rarely used


## Form Events

Events triggered by actions inside of a HTML form (applies to almost all HTML elements, but is most used in form elements)

## Events


Onblur  - Fires he moment that the element loses focus

Onchange – Fires the moment when the value of the element is changed

Oncontextmenu – script to be run when a context menu is triggered

Onfocus – fires the moment when the element gets focus

Oninput – script to be run when an element gets user input

Oninvalid – script to the run when an element is invalid

Onreset – fires when the reset button in a form is clicked

Onsubmit – fires when a form is submitted

Scroll – fires when the user scrolls an element by any means (arrow keys, scrollbar or mouse wheel). You cannot prevent the scrolling.

Mousewheel – fires when the user uses the mouse wheel. You can prevent this event’s default. Note that the page does not have to scroll in order to fire this event

The change event is fired for <input>, <select>, and <textarea> elements when a change to the element’s value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element’s value

	Context situations for the change event

When the element is activated (by clicking or using the keyboard) for  <input type=”radio”> and <input type=”checkbox”>;

When the user commits the change explicitly (e.g by selecting a value from a <select>’s dropdown with a mouse click, by selecting a date from a date picker for <input type=”date”>,  by selecting a file in the file picker for <input type=”file”>

When the element loses focus after its value was changed, but not committed (e.g after editing the value of <textarea> or <input type=”text”>)

I have to be mindful for the browsers because sometimes they do not always agree whether a change event should be fired for certain types of interaction


### Load and Unload events


`onload` event happens when the window and it’s dependent resources,  including images, scripts, styles are loaded
Attaching an `onload` handler allows to execute the code when all DOM elements are rendered and the whole document is complete

`DOMContentLoaded` is another event that can be triggered just  like `onload` it triggers when the HTML page is parsed and DOM tree is built. Developers made this event because they noticed that visitors have to wait for all images, external counters to completely load for onload to fire

The onunload event happens when a window is closed or changes it’s location

	The syntax is similar: window.onunload
The `onbeforeunload` event is special, because it triggers before the window is closed or changes location

Unlike unload, it can be used to cancel the change

To do so, the handler should return the text. Before unloading the window, the browser will output the returned text and ask the user, if he really want to leave the page

The event is useful, for example with working with documents. The web-application can check if the document is saved and ask the user if he really wants to leave without saving the job.

KeyboardEvent

KeyboardEvent objects describe a user interaction with the keyboard. Each event describes a key; the event type (keydown, keypress, or keyup) identifies what kind of activity was performed
