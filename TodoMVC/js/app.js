/*
===========================Pseudo Code============================

Create a function that is going to add and append the to do
	to do element under the parent element after the user has clicked on the button
	to add the to do list item

	I have to make sure that I take screenshots of this happening
	in the console on the browser. Upload the image into my file,

	Using jQuery will make things easier
			* add jQuery CDN to the HTML page

	Task
			* capture the `<input>` from the browser
			* print it to the console
			* take a screenshot and include it in the issue
			* I need an `addEventListener`

*/

(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!


var newTask = document.querySelector(".new-todo");

			function addTask () {
			var listOfTask = [newTask.value];
			console.log(listOfTask);
}

newTask.addEventListener('click', addTask);

})(window);

// Me attempting to use jquery
 //$(function () {
 //   $('h3.cbp-nttrigger').click(function () {
 //     $('ul.cbp-ntaccordion > li').toggle();
 //   });
 // });
