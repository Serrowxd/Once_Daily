// $('.team').on('click', () => {
//   hideAll();
//   $('#nav2').show();
//   $('#team').show();
// });

$('.team').on('click', () => {
  $('#landing')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#nav2')
    .removeClass('hidetransition')
    .addClass('transition');
});

// Home Button
$('.sin_home').on('click', () => {
  $('#nav2')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#landing')
    .removeClass('hidetransition')
    .addClass('transition');
});

// Hide All Sections
hideAll = () => {};

// Page Load
$(document).ready(() => {
  $('#landing').addClass('hidetransition');
});
