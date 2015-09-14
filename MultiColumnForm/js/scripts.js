
// selecting the corresponding element to that ID!

var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var country = document.getElementById("country");
var bio = document.getElementById("bio");
var text = document.getElementById("phone");
var affiliations = document.getElementById("affiliations");
var occupation = document.getElementById("occupation");
var catName = document.getElementById("cat_name");
var gadget = document.getElementById("gadget");
var talent = document.getElementById("talent");
var drink = document.getElementById("drink");
var power = document.getElementById("power");
var weapon = document.getElementById("weapon");
var comments = document.getElementById("comments")

//button that will submit the events

var sumbitButton = document.querySelector("input.cbp-mc-submit");

var clickEvent = function (Event) {
  var storeData = [
    firstName.value,
    lastName.value,
    email.value,
    country.value,
    text.value,
    affiliations.value,
    occupation.value,
    catName.value,
    gadget.value,
    talent.value,
    drink.value,
    power.value,
    weapons.value,
    comments.value
  ];
  console.log(storeDate);
};

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
