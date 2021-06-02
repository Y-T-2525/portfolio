//スマホのトグル
$(function() {
    $('.navbar-open, .navbar-close').on('click', function() {
        $('.spnav, .navbar-open, .navbar-close').toggleClass('show');
    });
});

//ページ内リンクのスクロールゆっくり、リンクの位置調整
$(function() {
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-60;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});

//aboutのセクションのみ、ヘッダー透過
$(function() {
    var headrOpacity = $('.h-inner');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            headrOpacity.css('opacity','1');
        } else {
            headrOpacity.css('opacity','0.7');
        }

        if ($(this).scrollTop() > 1100){
            headrOpacity.css('opacity','0.7');
        } 
    });
});
