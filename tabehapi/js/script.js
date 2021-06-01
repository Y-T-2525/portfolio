//ハンバーガーメニュー toggle
$(function(){
  $('.menu-btn,.close-btn').on('click', function(){
    $('.navigater-sp,.close-btn,.menu-btn').toggleClass('is-active');
  });
});

//レシピの文字をアクセントのある表示
$(function(){
  $(document).ready( function(){
    $('.answer-wrap, #answer, .answer').toggleClass('show');
  });
});

