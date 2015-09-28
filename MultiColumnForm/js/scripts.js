
// selecting the corresponding element to that ID!

var firstName = document.getElementById("label#firstName");
var lastName = document.getElementById("label#last_name");
var email = document.getElementById("label#email");
var country = document.getElementById("label#country");
var bio = document.getElementById("label#bio");
var text = document.getElementById("label#phone");
var affiliations = document.getElementById("label#affiliations");
var occupation = document.getElementById("label#occupation");


//button that will submit the events

var submitButton = document.querySelector("input.cbp-mc-submit");

  console.log(submitButton);

var clickEvent = function (Event) {
  var storeData = [
    firstName.value,
    lastName.value,
    email.value,
    country.value,
    text.value,
    affiliations.value,
    occupation.value,

  ];
  // In the function you create to that will capture that css selector, you have to make sure that you +
  // you have to add an EventListener that hears the click event and calls back a function +
  // that will use the event as a parameter however you want to stop the default behavior from happeningin +
  // i.e event.preventDefault
  // sample code document.querySelector('a[href]').addEventListener('click', function(event) {
  //  event.preventDefault();
  //  console.log(event);
  // });
  // document.
  // addEventListener('click', function (event) {
  //   event.preventDefault();
  // })
  // console.log(storeDate);
};

/* jQuery  */

$(function () {
  // firstName capture
  $('label#firstName').on('input', function () {

  })

  $('label#lastName').on('input', function () {


  })

  $('label#email').on('input', function () {


  })

  $('label#country').on('input', function () {


  })

  $('label#male').on('input', function () {


  })

  $('label#female').on('input', function () {


  })

  $('label#profession').on('input', function () {


  })


})


firstName.addEventListener('input', clickEvent);
lastName.addEventListener('input', clickEvent);
email.addEventListener('input', clickEvent);
country.addEventListener('input', clickEvent);
text.addEventListener('input', clickEvent);
affiliations.addEventListener('input', clickEvent);
occupation.addEventListener('input', clickEvent);
catName.addEventListener('input', clickEvent);
gadget.addEventListener('input', clickEvent);
talent.addEventListener('input', clickEvent);
drink.addEventListener('input', clickEvent);
power.addEventListener('input', clickEvent);
weapons.addEventListener('input', clickEvent);
comments.addEventListener('input', clickEvent);

sumbitButton.addEventListener('input', clickEvent);
