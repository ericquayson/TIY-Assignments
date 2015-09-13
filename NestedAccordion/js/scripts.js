/**
 * ## What does it do?
 *
 * The JavaScript is making the NestedAccordin hide and show elements
 * The DOM elements that will be needed are UL, LI and P tags
 * The `<li>` that contains the heading I click turns into `<li class='cbp-ntopen">`
 *   - When I click the heading with text visible (open accordion);
 *   - the `<li class="cbp-ntopen">` that contains the heading I click turns into `<li>`
*/
//need to add click events (addEventListener)

// // *** this part will accrodion the first section ***
//   var header3 = document.querySelector(".cbp-nttrigger");  //grabs first header with '.cbp-nttrigger' class
//   var elem = document.getElementsByTagName("li"); //grabs all <li> elements
//
//   //adding an event lister to the first <h3> element and opening/closing it
//   header3.addEventListener('click', function(){
//     //console.log("clicking"); // tracer bullet...pew pew
//     //elem[0].classList.add("cbp-ntopen"); //opens the first <li> element
//     //elem[0].classList.remove("cbp-ntopen"); //closes the first <li> element
//     elem[0].classList.toggle("cbp-ntopen"); //toggles the class of the first <li> element to
//       //open it if it's closed, and close it if it's open
//   });

// this piece of code grabs all of the h3 nodes on the DOM
var headingAll = document.querySelector('cbp-nttrigger');
// this peice of code grabs all of the li nodes on the DOM
var listItem = document.getElementsByTagName('li');

function open () {

  headingALL.addEventListener('click', function () {
    console.log('clicking');
      listItem[0].classList.add('cbp-ntopen');
      listItem[0].classList.remove('cbp-ntopen');
  });

}

// Me attempting to use jquery
 //$(function () {
 //   $('h3.cbp-nttrigger').click(function () {
 //     $('ul.cbp-ntaccordion > li').toggle();
 //   });
 // });


    //alert($(this).text());




 // function open () {
  //  if (true) {

  //  }
  //  console.log('');
 // }

 //heading.addEventListener('click', tracer);
 // two differnt options of defining and using the function once the user has
 // clicked on the header


 //heading.addEventListener('click', function () {
   // The text below hides and shows.
   //  Add the class "ntopen" (something or other) to some element ...?

 // })
