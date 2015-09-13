/**
 * ## What does it do?
 *
 * The JavaScript is making the NestedAccordin hide and show elements
 * The DOM elements that will be needed are UL, LI and P tags
 * The `<li>` that contains the heading I click turns into `<li class='cbp-ntopen">`
 *   - When I click the heading with text visible (open accordion);
 *   - the `<li class="cbp-ntopen">` that contains the headig I click turns into `<li>`
*/
//need to add click events (addEventListener)

var heading = document.querySelector('.cbp-nttrigger');


  $('.cbp-nttrigger').click(function () {
    $('.cbp-ntcontent').show();
  });
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
