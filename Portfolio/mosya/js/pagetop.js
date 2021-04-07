$(function() {
    var pagetop = $('#back_to_top');

    pagetop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150){
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0}, 800);
        return false;
    });
});