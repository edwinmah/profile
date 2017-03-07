$(document).ready(function() {

  // debounce: https://davidwalsh.name/javascript-debounce-function
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // function to set background image
  function setBgImage() {
    var largeImg = 'images/girl.jpg';
    var smallImg = 'images/girl-small.jpg';
    var hero     = '<div class="hero"><img src="' + smallImg + '" alt="my profile image"></div>';
    var isHero   = $('.hero')[0] === undefined;

    if (window.innerWidth >= 900) {

      // remove hero image
      $('.hero').remove();

      // apply backstretch image
      $('body').backstretch(largeImg);

    } else if (isHero) {

      // remove backstretch element
      $('.backstretch').remove();

      // inject small profile hero image after .site-header
      $('.site-header').after(hero);

    }
  }

  // set background image when the page is loaded
  setBgImage();

  // reset background image when browser is resized
  $(window).on('resize', debounce(setBgImage, 50));

});
