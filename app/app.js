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
      var skillsTop = $('#about').offset().top;
      $(win).on('scroll', function () {
        makeNavFixed();
        makeSkillMove();
      });
      function makeNavFixed(){
          if($(win).scrollTop() >= 100){
              $('.header__nav').addClass('fixed')
          }else{
            $('.header__nav').removeClass('fixed')
          }     
      }
      function makeSkillMove() {
          if($(win).scrollTop() >= skillsTop){
              $('.skill__body .inner').each(function(){                  
                var percent = $(this).data('skill');
                setTimeout(() => {
                    $(this).css({
                        "width": percent
                    })
                    
                }, 300);
              });
          }
      }
})(window, document, jQuery);