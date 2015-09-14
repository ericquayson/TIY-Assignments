/**
 * ## What does it do?
 *
 * The JavaScript is making the NestedAccordin hide and show elements
 * The DOM elements that will be needed are UL, LI and P tags
 * The `<li>` that contains the heading I click turns into `<li class='cbp-ntopen">`
 *   - When I click the heading with text visible (open accordion);
 *   - the `<li class="cbp-ntopen">` that contains the heading I click turns into `<li>`
 * I've been trying several ways to get my code to work but it would not work for me
*/
// var clickEvent = function(click) {
//
//   var liItem = eventObject.currentTarget.parentElement;
//   if (liItem.className === "cbp-ntopen") {
//     liItem === null;
//   } else {
//     liItem.className = "cbp-ntopen";
//   }
//   return true;
// }
 //
 // this first ieration is supposed to select the intial header, +
 //  give it an addEventListener and assign a className to it

// I tried a lot of different solutions and was still having trouble with getting +
// it to work
// function
function clickAction(eventObject) {


}
// selects oat cake
var headings = document.querySelector(".cbp-nttrigger");

for (var i = 0; i < headings.length; i++) {
    if (headings.className !== "cbp-ntopen") {
      mainElement.className = "cbp-ntopen";
    } else {
      mainElement.className = "";
    }
  };

// // selects cream gummi bears
// headings[1].addEventListener('click', clickEvent);
//     var mainElement = this.mainElement;
//     if (mainElement.className !== "cbp-ntopen") {
//       mainElement.className = "cbp-ntopen";
//     } else {
//       mainElement.className = "";
//     }
// // selects Jelly marzipan sugar
// headings[2].addEventListener('click', clickEvent);
//     var mainElement = this.mainElement;
//     if (mainElement.className !== "cbp-ntopen") {
//       mainElement.className = "cbp-ntopen";
//     } else {
//       mainElement.className = "";
//     }
// // selects danish souffle
// headings[3].addEventListener('click', clickEvent);
//     var mainElement = this.mainElement;
//     if (mainElement.className !== "cbp-ntopen") {
//       mainElement.className = "cbp-ntopen";
//     } else {
//       mainElement.className = "";
//     }

// // this piece of code grabs all of the h3 nodes on the DOM
// var headingAll = document.querySelector('h3.cbp-nttrigger');
// // this peice of code grabs all of the li nodes on the DOM
// var listItem = document.querySelector('li.cbp-ntopen');
// console.log("working " + listItem[0]);
//
  // headingAll[0].addEventListener('click', function () {
  //   if (document.querySelector("li").className == "cbp-ntopen") {
  //     document.querySelector("li").className = "";
  //   } else {
  //     document.querySelector("li").className = "cbp-ntopen";
  //   }}
  // );




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
