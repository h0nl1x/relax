$ (function() {

    $('.slider').slick({
        arrows: false
      })
      
      $('.banner-arrow-left').click(function(){
        $('.banner-slider-for-js').slick('slickPrev');
      })
      
      $('.banner-arrow-right').click(function(){
        $('.banner-slider-for-js').slick('slickNext');
      })

      $('.about-hotel-arrow-left-one').click(function(){
        $('.about-hotel-slider-one').slick('slickPrev');
      })
      
      $('.about-hotel-arrow-right-one').click(function(){
        $('.about-hotel-slider-one').slick('slickNext');
      })

      $('.about-hotel-arrow-left-two').click(function(){
        $('.about-hotel-slider-two').slick('slickPrev');
      })
      
      $('.about-hotel-arrow-right-two').click(function(){
        $('.about-hotel-slider-two').slick('slickNext');
      })

      $('.about-hotel-arrow-left-three').click(function(){
        $('.about-hotel-slider-three').slick('slickPrev');
      })
      
      $('.about-hotel-arrow-right-three').click(function(){
        $('.about-hotel-slider-three').slick('slickNext');
      })



      // к каждому слайдеру добавляем отдельное имя к .slider + каждой каждой кнопке отдельное имя

});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.nav').toggleClass('active');
  });

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка отправлена!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});