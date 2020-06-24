let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element.
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

$("#nav").on('show.bs.collapse', function() {
  $('a.nav-link').click(function() {
      $("#nav").collapse('hide');
  });
});


$(document).ready(function () {
  var sticky_navigation_offset_top = $('navbar').offset().top;
  var sticky_navigation = function () {
      var scroll_top = $(window).scrollTop();
      if (scroll_top > sticky_navigation_offset_top) {
          $('navbar').css({
              'position': 'sticky',
              'top': 0,
              'left': 0,
              'right': 0,
              'margin-left': 'auto',
              'margin-right': 'auto',
              'z-index': 999
          });
      } else {
          $('navbar').css({
              'position': 'relative'
          });
      }
  };
  sticky_navigation();
  $(window).scroll(function () {
      sticky_navigation();
  });
});