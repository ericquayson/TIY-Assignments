/**
/ Once the user see's the unhlighted switch button at the top of the page +
/ , the user can decide whether or not to click the button. This unhlighted button +
/ when clicked will render the same content but in a different lay on the page
/ Additionally, the highlighted button will be selected in the cbpViewModeSwitch
/
/ `cbp-vm-selected`
*/
// The button needs to be selected in order to be manipulated
// Once the user clicks on the unhlighted button these tags
// <a href="#" class="cbp-vm-icon cbp-vm-grid cbp-vm-selected" data-view="cbp-vm-view-grid">Grid View</a>
// <a href="#" class="cbp-vm-icon cbp-vm-list" data-view="cbp-vm-view-list">List View</a>
//
//Plain English
/*
//target  the href link, add an event listener, and add a class - for grid
//capture href, add an event listener, and add a class - for list
//when one view is selected the other view cannot be added into the div
// the same will be said for the other view
// when the grid is added, the list view is not
// when the list view is added, the grid view is not
**/

var viewButtons = document.querySelector("div #cbp-vm");
var list = document.querySelector("a.cbp-vm-icon.cbp-vm-list");
var grid = document.querySelector("a.cbp-vm-icon.cbp-vm-list");


//this will render the listView once the user is on the page
listViewButton.addEventListener('click', function (event) {

    viewButtons.className = "cbp-vm-switcher cbp-vm-view-list";
    list.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
    grid.className = "cbp-vm-icon cbp-vm-grid"
});

//this will render the gridView once the user clicks on this button
gridViewButton.addEventListener('click', function (event) {

    viewButtons.className = "cbp-vm-switcher cbp-vm-view-grid";
    grid.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
    list.className = "cbp-vm-icon cbp-vm-list"
});
