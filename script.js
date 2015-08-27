// This is the JavaScript file

var load = function() {
    alert("Page loaded");
}

$(document).ready(load);

$(document).ready(hide_first_column);

var hide_first_column = function() {
    $("#column-one-button").click(function() {
        alert("Clicked");
        $('div.column-one-list').toggle();
    });
}

/*
$(document).on("click", ".column-one-button", function() {
    alert("Clicked");
    $('div.column-one-list').toggle();
});
*/

/*
function hide-column-one() {
    $('div.column-one-list').toggle();
} 
*/
