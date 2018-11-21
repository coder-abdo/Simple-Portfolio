"use strict";
(function (win, doc, $) {
      var skillsTop = $('#about').offset().top;
      function handlers(){
        $('.nav__btn').on('click', toggleBurgerMenu);
        var typed = new Typed('#creative', {
            strings: ['Abdelmonaem', 'Web Developer', 'Front End Developer', 'Web Designer'],
            typeSpeed: 100,
            backSpeed: 40,
            smartBackspace: true,
            loop: true
          });
          var mixer = mixitup('.grid');
          $('.owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            center: true,
            autoplay: true
        });
        $('.counter').counterUp({
            delay: 20,
            time: 1800
        });
        $('.button-group').each(toggleActiveBtns);
        $(win).on('scroll', function () {
            makeNavFixed();
            makeSkillMove();             
          });
      }
      function toggleBurgerMenu(){
        $(this).toggleClass('show');
        $('.nav__list').toggleClass('hide');
       
      }       
        function toggleActiveBtns(i, buttonGroup){
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
        }
            
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
      $(win).on("load", handlers);
})(window, document, jQuery);