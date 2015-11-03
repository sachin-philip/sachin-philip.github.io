$(document).ready(function() {
    $("#hero").height($(window).height());
    $(window).resize(function() {
        $("#hero").height($(window).height());
        $("#hero").css("min-height", "600px")
    });

});
