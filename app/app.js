"use strict";
(function (win, doc, $) {
      var skillsTop = $('#about').offset().top;
      var headerHeight = $('header').outerHeight();
      var links = $('.nav__link');
      function handlers(){
        $('.nav__btn').on('click', toggleBurgerMenu);
        links
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', clickHandler);
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
        $('.btn--scroll').on('click', clickHandler);
        $(win).on('scroll', function () {
            makeNavFixed();
            makeSkillMove();
            addScrollTopBtn();
            addActiveToLinks();           
          });
          $('.buttonToTop').on('click', goUp);
      }
      function addActiveToLinks(){
        var scrollPos = $(doc).scrollTop();
        $('.nav__link').each(function() {
            var scrollPos = $(doc).scrollTop();
            var self = $(this);
            var links = self.attr('href');
            var sections = $(links);
            if(sections.offset().top <= scrollPos){
                self
                .parent()
                .siblings()
                .children()
                .removeClass("active");
                self.addClass("active");
            }else {
                self.removeClass("active");
            }
        });
      }
      function toggleBurgerMenu(){
        $(this).toggleClass('show');
        $('.nav__list').toggleClass('hide');
       
      }
      function addScrollTopBtn(){
          if($(win).scrollTop() >= 200){
              $('.buttonToTop').addClass('show')
          }else {
            $('.buttonToTop').removeClass('show')
          }
      }
      function goUp(){
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
      }
        function toggleActiveBtns(i, buttonGroup){
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
        }
        function clickHandler(e){
            e.preventDefault();
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname){
            var _target = $(this.hash);
            _target = _target.length
                ? _target : $("[name=" + this.hash.slice(1) + "]");
            if (_target.length) {
                e.preventDefault();
                $("html, body").animate(
                {
                    scrollTop: _target.offset().top - headerHeight
                },
                1000,
                function() {
                    _target.focus();
                    if (_target.is(":focus")) return;
                    else {
                    _target.attr("tabindex", "-1");
                    _target.focus();
                    }
                }
                );
            }
        }
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
                var percent = $(this).data('skill')
                    $(this).css({
                        "width": percent
                    })
              });
          }
      }
      function loading(){
          $('body').removeClass('hide');
          $('#loading').hide();
      }

      $(win).on("load", function(){
          loading();
          handlers();
        });
      $(doc).on("ready", handlers);
})(window, document, jQuery);