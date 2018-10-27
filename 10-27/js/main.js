$(window).bind('scroll', () => {
  const isTop = window.scrollY < 250;
  if (isTop !== true) {
    $('.idone').addClass('animone');
  } else {
    $('.idone').removeClass('animone');
  }
});
