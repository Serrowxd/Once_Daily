// ***
// Transition
// ***

//
$('.1025_click').on('click', () => {
  hideAll();
  $('#ten25').show();
});

// Hide All Sections
hideAll = () => {
  $('#one').hide();
  $('#ten25').hide();
};

// Page Load
$(document).ready(() => {
  hideAll();
  $('#ten25').show();
});
