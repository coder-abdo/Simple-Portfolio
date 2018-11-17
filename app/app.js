"use strict";
(function (win, doc, $) {
    $('.nav__btn').on('click', function(e){
        $(this).toggleClass('show');
        $('.nav__list').toggleClass('hide');
    });
    var typed = new Typed('#creative', {
        strings: ['Abdelmonaem', 'Web Developer', 'Front End Developer', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 40,
        smartBackspace: true, // this is a default
        loop: true
      });
      $(win).on('scroll', makeNavFixed);
      function makeNavFixed(){
          if($(win).scrollTop() >= 100){
              $('.header__nav').addClass('fixed')
          }else{
            $('.header__nav').removeClass('fixed')
          }
      }
})(window, document, jQuery);