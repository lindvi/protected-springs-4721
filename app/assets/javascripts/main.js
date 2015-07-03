  "use strict";

  $(document).ready(function() {
    $('.c-hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      $('.holder').toggleClass('stacked');
    });
  });


