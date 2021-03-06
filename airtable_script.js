
/*
Airtable_script.js
Edited 11-4-20 
Ethan Danahy and Teddy Robbins
*/

//Wrapper functions for updating airtable based on button, slider, and text input
function button_function(elem) {
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.innerHTML + '"');
}
function range_function(elem) {
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.value + '"');
}
function text_function(elem){
    alert('Set airtable attribute "' + elem.getAttribute('airtable_value') + '" to be "' + elem.value + '"');
}

//Setup for assigning elements to wrapper functions
function setup() {
    d = document.querySelectorAll("button");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { button_function(this); }
    }
    d = document.querySelectorAll("input[type=range]");
    for (i=0; i<d.length; i++) {
        d[i].onclick = function () { range_function(this); }
    }
    d = document.querySelectorAll("form");
    for (i=0; i<d.length; i++) {
        
        var current_form = d[i];
        var text_entry = d[i].elements[0];
        var submit_button = d[i].elements[1];

        submit_button.onclick = function () { text_function(text_entry); }

    }
}

window.addEventListener('load', function () {
        setup();
});