"use strict";
(function (win, doc, $) {
    class Counter {
        constructor (start, end, elm, time) {
          this.start = start;
          this.end = end;
          this.elm = document.querySelector(elm);
          this.time = time;
        }
        run () {
          let t0 = new Date(),
              self = this;
          this.update(0);
          requestAnimationFrame(function update(){
            let t = new Date(),
                dt = t - t0;
            self.update(Math.min(dt / self.time, 1));
            if (dt < self.time) {
              requestAnimationFrame(update);
            }
          });
        }
        update (t) {
          t = Math.round(this.start + (this.end - this.start) * t);
          this.elm.textContent = t;
        }
      }
      var skillsTop = $('#about').offset().top;
      var countingTop = $('.counting').offset().top;
      var sibls = n => [...n.parentElement.children].filter(c=>c!=n)
      $(function () {         
          $('.nav__btn').on('click', function(e){
              $(this).toggleClass('show');
              $('.nav__list').toggleClass('hide');
          });
          var typed = new Typed('#creative', {
              strings: ['Abdelmonaem', 'Web Developer', 'Front End Developer', 'Web Designer'],
              typeSpeed: 100,
              backSpeed: 40,
              smartBackspace: true,
              loop: true
            });
           
            $(win).on('scroll', function () {
              makeNavFixed();
              makeSkillMove();
              makeCounting();
              
            });
            $('.owl-carousel').owlCarousel({
                loop:true,
                nav:false,
                items: 1,
                center: true,
                autoplay: true
            });
            $('.filters-button-group').on( 'click', 'button', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
               doc.querySelectorAll('.grid__item').forEach(function(item){
                    if(item.classList.contains(filterValue)){
                        item.style.transform = 'scale(1)';
                    }else {
                        item.style.transform = 'scale(0)';
                    }
                    if(filterValue === 'all'){
                        item.style.transform = 'scale(1)';
                    }
               });
              });
              $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
                });
              });
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
      function makeCounting() {
        if($(win).scrollTop() >= countingTop){
            var counter1 = new Counter(0, 895, '#count-1', 1500);
            var counter2 = new Counter(0, 1200, '#count-2', 1500);
            var counter3 = new Counter(0, 968, '#count-3', 1500);
            var counter4 = new Counter(0, 1082, '#count-4', 1500);
            counter1.run();
            counter2.run();
            counter3.run();
            counter4.run();
        }
      }
})(window, document, jQuery);