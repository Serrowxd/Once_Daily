// ***
// Transition
// ***

$('.1025_click').on('click', () => {
  hideAll();
  $('#ten25').show();
});

$('.1026_click').on('click', () => {
  hideAll();
  $('#ten26').show();
});

$('.1027_click').on('click', () => {
  hideAll();
  $('#ten27').show();
});

$('.1028_click').on('click', () => {
  hideAll();
  $('#ten28').show();
});

$('.1029_click').on('click', () => {
  hideAll();
  $('#ten29').show();
});

$('button').on('click', () => {
  hideAll();
  $('#one').show();
});

// Hide All Sections
hideAll = () => {
  $('#one').hide();
  $('#ten25').hide();
  $('#ten26').hide();
  $('#ten27').hide();
  $('#ten28').hide();
  $('#ten29').hide();
};

// Page Load
$(document).ready(() => {
  hideAll();
  $('#one').show();
});
