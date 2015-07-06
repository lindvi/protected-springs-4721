"use strict";



window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

$(document).ready(function() {
  $(document).scrollTop();
  $('.c-hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.holder').toggleClass('stacked');
  });

  $('.card').on('click', function(){
    if($(this).hasClass('pre')){
      $('.base').click();
    }else {
      if($(this).hasClass('selected')){
        $('.card').removeClass('hide');
        $(this).removeClass('selected');
      }else {
        $('.card').addClass('hide');
        $(this).addClass('selected').removeClass('hide');
      }
    }
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

  var currentCard = 0;
  var debounced = 0;
  var queue = [];

  (function popQueue(){
    setInterval(function(){
      var pointer = queue.shift();

      if(pointer === undefined){
        return;
      }

      if(pointer < 0){
        up();
      } else {
        down();
      }
    }, 100);
  })();

  function throttleCard(number) {
    queue.push(number);
  };

  $(document).scroll(function() {
    window.requestAnimationFrame(function(){
      scrollDirection = $(this).scrollTop();

      if(lastScroll < scrollDirection)
      {

        if($(this).scrollTop() > 250*card){
          card++;
          throttleCard(1);
        }
      } else {

        if($(this).scrollTop() < 250*card-1){
          card--;
          throttleCard(-1);
        }
      }
      lastScroll = scrollDirection;
    });

  });
});


