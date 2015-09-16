# Reading CSS

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

+ setting the width of a `block` element will prevent the element from stretching to the corners of the right and left of the webpage

+ Three Properties that alter layout display, position and float

### Height and width

      * there are several different values that can be passed for a value. percentages, auto and any possible unit of measure

+ `max-width` will set the `max-width` for a given element. Additionally, it will prevent the element from getting any larger than that given size


+ `min-width` will set the min width for a given element. Additionally, it will prevent the element from getting any smaller than the given size

     * at 600px makes the site responsive for mobile because of the smaller screens (supported by all browsers)

+ `min-height` will set the `min-height` for a given element. Additionally, it will prevent the element from getting any larger than the given size


+ the box model -- is essentially a box that wraps around HTML elements, and it consists of: `margin`, `borders`, `padding` and the actual content

+ margins -- the margin has the ability to set on all sides; developers can also use negative values for the margins (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`)

+ setting the left and right margins to `margin: auto` and this will center the element horizontally

+ borders in the box model

    * the first layer: `margin`
    * the second layer: `border`
    * the third layer: `padding`
    * the last layer: the actual content

+ `box-sizing` --
    * `box-sizing: border-box` on an element, the padding and border of that element no longer increase its `width`

  use this in workable code --
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;


+ `position: static` -- is a default value and is not positioned in any special way. A `static` element is said to be not positioned and an element with its position set to anything else is said to be positioned

+ `position: relative` -- behaves the same as `static` unless you add some extra properties

+ `position: fixed` -- will keep the element in that position and it will stay `static` on the webpage

    * `fixed` element does not leave a gap in the page where it would normally have been located

+ `position: absolute` -- (trickery) will position the element relative to the nearest positioned ancestor instead of `relative` to the viewport.

+ `float` -- is intended for wrapping text around images (the width of the element changes and other adjacent elements... move)

   * `clear` property controls the behavior of floats. Under the `clear` property one can use `left` or `right` to clear the element that is being floated or one can use `both`

   * if an image overflows out of a block element like a div tag, then to fix this issue the developer needs to use the `clear` property hack and set `clear` to auto so that the image that exceeded the block element will now be properly placed inside of the block element

  * clear fix may give me some issues with IE6 and other unique browsers

+ if you use a fixed header or footer, make sure at on the body element use a margin-bottom so there is space for it



#### `div` notes

* `div` is a block-level element. This means that `div`s start on a new line and +
  stretch as far to the left and the right


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

## Selectors

+ class selector will select the class by using "."
+ id selectors will select the element by using "#"
+ * -- will select all of your items
+ descendant selector --

+ you can select all of the elements on the page by simply using their HTML element name for example
      * `a` - will select the a tags
      * `ul` - will select the unordered list

+ X:link - targets all anchor tags which have ye to be clicked

+ X:visited - allows us to apply specific styling to only the anchor tags on the page which have been clicked on, or visited

+ X > Y - will select the direct children of that element

+ X ~ Y - will select the first element that is immediately preceded by the former selector

+ X[title] -- attributes selector (this example will select the element that has a title)

+ X:checked -- this pseudo class will only target a user interface element that has been checked - like a radio button, or checkbox

+ X:after -- the before and after pseduo classes are very helpful.

+ X:hover -- will add an hover effect over that element

+ X:checked -- this pseudo class can be applied to any `<input type="radio">`, `<input type="checkbox">`, or `<option>` in a `<select>` element that is checked or toggled to an element

+ X:enabled -- this represents an element enabled if it can be activated (e.g selected, clicked on or accept text input)

+ X:disabled -- this represents an element disabled if it can be deactivated

+ X:empty

### Text Properties

+ `color` -- used to set the color of the text

+ `text-align` - used to set the horizontal alignment of a     text

        * `left`, `right`, `justified` are possible values


+ `text-transformation` -- used to specify            uppercase or lowercase letters or capitalize the first letter of each with pseudo code

+ `text-indentation` -- used to specify the indentation

+ `text-shadow` -- specifies the shadow effect added to text

+ `vertical-align` -- sets the vertical alignment of an element

+ `word-spacing` -- increases or decreased the space between words in a text

+ `text-decoration` property is a shorthand and can use the values of each of the three longhand properties: `text-decoration-line`, `text-decoration-color`,  `text-decoration-style`

### Font Properties

+ `font-family` -- can be assigned by a specific font name or generic `font-family`
      * syntax: font-family: [[<font-family> | <generic-family>],]

+ `font-stlye` -- can display `font` three different ways: normal, italic or oblique (slanted)

+ `font-variant` -- determines if the font is to display in normal or small caps. Default value is normal

+ `font-weight` -- it specifies the weight of the font. Values that are possible values `bolder` and `lighter` and `bolder` and 100, 200, 300, 400, 500, 600, 700, 800, 900

+ `font-size` -- modifies the size of the displayed font. Default value is `medium`. Possible values: `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `XX-large`, percentages, length, relative sizing and etc

+ `font` -- shorthand for the other properties

### Line Properties

+ `line-height`-- specifies the minimum height of line boxes within the element
      * default value: `normal`
      * possible values: any measurement

+
