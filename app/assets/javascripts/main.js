  "use strict";


  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  $(document).ready(function() {
    $('.c-hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      $('.holder').toggleClass('stacked');
    });

    $('.down').on('click', function(){
      down();
    });


    $('.up').on('click', function(){
      up();
    });

    function down() {
      var four = $('.fourth');
      var third = $('.third');
      var second = $('.second');
      var first = $('.first');
      var base = $('.base');
      var pre = $('.pre').first();
      var bottom = $('.bottom');

      bottom.addClass('post').removeClass('bottom');
      four.addClass('bottom').removeClass('fourth');
      third.addClass('fourth').removeClass('third');
      second.addClass('third').removeClass('second');
      first.addClass('second').removeClass('first');
      base.addClass('first').removeClass('base');
      pre.addClass('base').removeClass('pre');
    }

    function up(){
     var bottom = $('.bottom').last();
     var four = $('.fourth');
     var third = $('.third');
     var second = $('.second');
     var first = $('.first');
     var base = $('.base');
     var pre = $('.pre').first();
     var post = $('.post').last();

     post.addClass('bottom').removeClass('post');
     bottom.addClass('fourth').removeClass('bottom');
     four.addClass('third').removeClass('fourth');
     third.addClass('second').removeClass('third');
     second.addClass('first').removeClass('second');
     first.addClass('base').removeClass('first');
     base.addClass('pre').removeClass('base');
   }

   var vh = $(window).innerHeight();
   var card = 0;
   var scrollDirection = 0;
   var lastScroll = 0;
   $(document).scroll(function() {
    window.requestAnimationFrame(function(){
      scrollDirection = $(this).scrollTop();

      if(lastScroll < scrollDirection)
      {
          //Down
          if($(this).scrollTop() > 250*card){
            card++;
            down();
          }
        } else {
          // up
          if($(this).scrollTop() < 250*card-1){
            card--;
            up();
          }
        }
        lastScroll = scrollDirection;
      });

  });
 });


