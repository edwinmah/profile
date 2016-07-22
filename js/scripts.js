$(document).ready(function() {
  // set media query condition
  var mediaQuery = '(min-width: 56.25em)';

  if (matchMedia(mediaQuery).matches) {

    // instantiate backstretch.js if media query condition matches
    $("body").backstretch("images/girl.jpg");

  } else {

    // set path to small profile image
    var imgUrl = 'images/girl-small.jpg';

    // create markup for small profile image
    var hero = '<div class="hero"><img src="' + imgUrl + '" alt="my profile image"></div>';

    // inject small profile image immediately after .skip-content nav in markup
    $(".skip-content").after(hero);
  }
});
