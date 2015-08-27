// This is the JavaScript file

var load = function() {
    // below is for testing only
    // alert("Page loaded");
}

var hide_first_column = function() {
    $('#column_one_button').click(function() {
        $('div.column_one_list').toggle();
    });
}

/* does not work for resizing
var max_column_height = function() {
    var col1h = $('.column_one').height();
    var col2h = $('.column_two').height();
    var col3h = $('.column_three').height();
    var maxHeight = Math.max(col1h, col2h, col3h);
    var height = "height:" + maxHeight + "px";
    document.getElementById('column_one').setAttribute("style", height);
    document.getElementById('column_two').setAttribute("style", height);
    document.getElementById('column_three').setAttribute("style", height);
}
*/

$(document).ready(load);

$(document).ready(hide_first_column);

// $(document).ready(max_column_height);

