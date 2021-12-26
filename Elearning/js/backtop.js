$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
var btn = jQuery('#backtop');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});