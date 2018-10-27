// ***
// Section 1 Window Bind Animation
// ***

$(window).bind('scroll', () => {
  const isTop = window.scrollY < 200;
  if (isTop !== true) {
    $('.idone').addClass('animone');
  } else {
    $('.idone').removeClass('animone');
  }
});
