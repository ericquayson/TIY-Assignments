# Reading CSS

## Selectors

* class selector will select the class by using "."
* id selectors will select the element by using "#"
* * -- will select all of your items

* descendant selector.

* you can select all of the elements on the page by simply using their HTML element name for example

* a - will select the a tags

* ul - will select the unordered list

* X:link - targets all anchor tags which have ye to be clicked

* X:visited - allows us to apply specific styling to only the anchor tags on the page which have been clicked on, or visited

* X > Y - will select the direct children of that element

* X ~ Y - will select the first element that is immediately preceded by the former selector

* X[title] -- attributes selector (this example will select the element that has a title)

* X:checked -- this pseudo class will only target a user interface element that has been checked - like a radio button, or checkbox

* X:after -- the before and after pseduo classes are very helpful.

* X:hover -- will add an hover effect over that element

*


## Properties

* `display` property is used for controlling layout. Every element on the DOM has a +
   has a default display value. `block` and `inline` are typical default display Properties

* `block` -- block-level elements starts on a new line and stretches left and right
* `inline` -- `span` is a common inline element. Specifically inline elements can +
              can wrap around text and not disrupt the flow
* `none` -- commonly used with JavaScript to hide and show elements without deleting or remaking them

### Difference between `display: none` and `visibility: hidden`

* `display: none` will render the element as if it does not exist on the page

* `visibility: hidden` will render the element as if it still does exist on the page. This element will take up room on the webpage


#### notes

+ setting the width of a block element will prevent the element from stretching to the corners of the right and left of the webpage

+ setting the left and right margins to `margin: auto` and this will center the element horizontally

+ `max-width` at 600px makes the site responsive for mobile because of the smaller screens (supported by all browsers)

+ the box model -- is essentially a box that wraps around HTML elements, and it consists of: margins, borders, padding and the actual content

    * the first layer: margin
    * the second layer: border
    * the third layer: padding
    * the last layer: the actual content

+ `box-sizing` --
    * `box-sizing: border-box` on an element, the padding and border of that element no longer increase its width

  use this in workable code --
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;


+ `position: static` -- is a default value and is not positioned in any special way. A static element is said to be not positioned and an element with its position set to anything else is said to be positioned

+ `position: relative` -- behaves the same as `static` unless you add some extra properties

+ `position: fixed` -- will keep the element in that position and it will stay static on the webpage

    * fixed element does not leave a gap in the page where it would normally have been located

+ `position: absolute` -- (trickery) will position the element relative to the nearest positioned ancestor instead of relaive to the viewport.

+ `float` -- is intended for wrapping text around images

   * `clear` property controls the behavior of floats. Under the `clear` property one can use `left` or `right` to clear the element that is being floated or one can use `both`

   * if an image overflows out of a block element like a div tag, then to fix this issue the developer needs to use the `clear` property hack and set `clear` to auto so that the image that exceeded the block element will now be properly placed inside of the block element

  * clear fix may give me some issues with IE6 and other unique browsers

+ if you use a fixed header or footer, make sure at on the body element use a margin-bottom so there is space for it

+ black;`border-bottom: 1px solid black;` looks better than `text-decoration: underline`

+ X:not(selector) - negation pseduo class is particularly helpful

+ X::pseudo Element -- allows the developer to select a very specific element like the first letter or sentence within an element

+ X:nth-child(n) - the nth-child accepts an integer as a parameter. This is not zero-based

+ X:nth-last-child(n) -- allows you to pick the last child

+ X:nth-of-type(n) -- allows you to select according to the type of element and this selector allows you to pass through a number to specifically you want to work with

+ X:first-child - allows you to select according to the the first child of the parent element

+ X:last-child - allows you to select according to the last child of the parent element

+ X:only-child - selects the only child of that element

#### `div` notes

* `div` is a block-level element. This means that `div`s start on a new line and +
  stretch as far to the left and the right

+ pixels, rem, and percentages are units you can use to measure wihtin in CSS

+ pixels will not give you an absolute measure

+ rem will give you an absolute measure relative to the element it is referrencing

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`

### block level elements

* `p`
* `form`
* `header`
* `footer`
* `section`
