$(function () {
    $('.questionstoggle').on('click', function() {
        $(this).nextAll('.panel-collapse').slideToggle(50);
        $(this).toggleClass('open',50)
    });
});

$(function () {
    $('.flowtoggle').on('click', function() {
        $(this).nextAll('.collapse').slideToggle(50);
        $(this).toggleClass('open',50)
    });
});