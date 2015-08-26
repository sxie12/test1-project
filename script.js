// This is the JavaScript file

var load = function() {
    alert("Page loaded");
}

$(document).ready(load);

$(document).ready(toggle_col_one);

var toggle_col_one = function() {
    $('.column-one-button').click(function() {
        alert("Clicked");
        $('.column-one-list').toggle();
    });
}
