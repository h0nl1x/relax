$ (function() {

    $('.slider').slick({
        arrows: false
      })
      
      $('.arrow-left').click(function(){
        $('.slider').slick('slickPrev');
      })
      
      $('.arrow-right').click(function(){
        $('.slider').slick('slickNext');
      })

      $('.arrow-left').click(function(){
        $('.slider').slick('slickPrev');
      })
      
      $('.arrow-right').click(function(){
        $('.slider').slick('slickNext');
      })

});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.nav').toggleClass('active');
  });
});