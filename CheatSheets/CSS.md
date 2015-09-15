# Reading CSS

## Selectors

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

+ the box model

+ `box-sizing`

+ `position: static` -- is a default value and is not positioned in any special way. A static element is said to be not positioned and an element with its position set to anything else is said to be positioned

+ `position: relative` -- behaves the same as `static` unless you add some extra properties 

+ `position: fixed` --

+ `position: absolute`

+

#### `div` notes

* `div` is a block-level element. This means that `div`s start on a new line and +
  stretch as far to the left and the right
*

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
