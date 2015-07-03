  "use strict";

  $(document).ready(function() {
    $('.c-hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      $('.holder').toggleClass('stacked');
    });

    $('.down').on('click', function(){
      var four = $('.fourth');
      var third = $('.third');
      var second = $('.second');
      var first = $('.first');
      var base = $('.base');
      var pre = $('.base ~ .pre').first();

      four.addClass('bottom').removeClass('fourth');
      third.addClass('fourth').removeClass('third');
      second.addClass('third').removeClass('second');
      first.addClass('second').removeClass('first');
      base.addClass('first').removeClass('base');
      pre.addClass('base').removeClass('pre');
    });


    $('.up').on('click', function(){
      var bottom = $('.bottom').last();
      var four = $('.fourth');
      var third = $('.third');
      var second = $('.second');
      var first = $('.first');
      var base = $('.base');
      var pre = $('.base ~ .pre').first();

      bottom.addClass('fourth').removeClass('bottom');
      four.addClass('third').removeClass('fourth');
      third.addClass('second').removeClass('third');
      second.addClass('first').removeClass('second');
      first.addClass('base').removeClass('first');
      base.addClass('pre').removeClass('base');
    });
  });


