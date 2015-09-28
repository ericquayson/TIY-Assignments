## Reading HTML5!!

## `<html>`

the main enchilada, the whole `document`, that which wraps all the others... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### Attributes

* `class` -- a space-separated list of category names
*  `id` -- helps identify a single element
*  the other attributes can be found on under the appropriate tag

## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate... and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`

. . .

###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)

====================================================

+ HTML stands for Hyper Text Markup Language

+ HTML allows for the developer to visually represent the data and styles he or she has been working on

+ `HTML` elements are "block-level" or "inline elements"

+ `block` elements occupy the entire space of its parent element or container. This essentially creates an invisible block on the page

+ `inline` elements occupy space bounded by the tags that define the inline elements. Following tags are examples of inline elements

    * <a>, <area>, <link> and o

+ `HTML` tags are made out of a less than and greater than sign
`< content >` this is the opening tag. `</ content >` this is the closing tag. Moreover, in `HTML` there has to be both an opening and closing tag. Without these, the lovely browser will alert the developer to an syntax error

+ `href` is an attribute that can be written inside of the `<a>` tag   
+ Double quotes are the best practices for writing attributes

### Starting Point

+ `<!DOCTYPE>` -- This tag declares to the text editor that the developer will be using `HTML`

+ `<!-- -->` -- This tag is used to write a comment in the `HTML` file

+ `<html>` -- represents the root of the `HTML` document

    * this tag has an attribute that will allow for me to specify the `lang` aka the language

+ `<head>` -- provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets

+ `<meta>` -- represents any metadata information that cannot be represented by one of the other HTML meta-related elements (`<base>`, `<link>`, `<script>`, `<style>` or `<title>`)

+ `<link>` -- specifies relationships between the current document and an external resource

### Content section of the DOM

+ `<body>` -- represents the content of an HTML doc

+ `<header>` -- represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form

### Text Content

+ `<p>` -- represents the paragraph of an HTML doc

    * this tag has an attribute that can be associated with it.   the attribute is `title`

+ `<span>` -- this tag is a generic inline container for phrasing content, which does not inherently represent anything. As a developer, I can use this to group elements for styling purposes using the class or id attributes.

+ `<div>` -- this tag allows for the developer to create a container for the flow of the content.

### Form elements

+ `<li>` -- list element.

+ `<dt>` -- this tag refers to a term in a definition list

+ `<ul>` -- unordered list element

+ `<menu>` -- represents a group of commands that a user can perform or activate.

+ `<form>` -- represents a document section that contains interactive controls to submit information to a web server

+ `<label>` --  represents caption for an item in a user interface.

+ `<legend>` -- represents a caption for the content of its parent

+ `<menu>` -- represents a group of commands that a user can perform or activate

+ `<dialog>` -- represents a dialogue box or other interactive component, such as an inspector or window

+ `<button>` -- represents a clickable button

+ `<keygen>` -- facilitate generation of key material, and submission of the public keys as part of an `HTML` form

### List elements


### Media

+ `<img>` -- this tag allows for me to embed an image into the HTML doc

### Table elements

+ `<table>` -- represents data in two dimensions or more

+ `<caption>` -- represents the title of a table

+ `<col>` -- defines a column within a table and is used for defining common semantics on all common cells

+ `<colgroup>` -- defines a group of columns within a table

+ `<tbody>` - table body element

+ `<thead>` - defines a  set of rows defining the head of the columns of the table

+ `<tfoot>` - defines a set of rows summarizing the columns of the table

+ `<tr>` -- defines a row of cells in a table. Those can be a mix of `<td>` and `<th>` elements

+ `<td>` -- defines a cell of a table that contains data. It participates the table model

+ `<th>` -- defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute

      * scope attribute
          + row -- which means that the header relates to all cells in the row that this element belongs to
          + col -- which means that the header relates to all cells in the column that this element belongs to
          + rowgroup -- which means that the header relates to all remaining cells in the row group that this element belongs to. The remaining cells are either those to the right of this element, or to his left depending of the value of dir attribute defined on the `<table>` element
          + colgroup, which means that the header relates to all remaining cels in the column group that the element belongs to
          + auto
      * header attribute -- this attributes a list of space-separated strings, each corresponding to the id attribute of the `<th>` elements that applies to this element
