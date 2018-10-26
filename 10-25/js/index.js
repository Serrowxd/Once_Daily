// Navigation

$('.home_click').on('click', function() {
  hideAll();
  $('#one').show('slow');
});

$('.dom_click').on('click', function() {
  hideAll();
  $('#two').show('slow');
});

$('.exo_click').on('click', function() {
  hideAll();
  $('#three').show('slow');
});

$('.ply_click').on('click', function() {
  hideAll();
  $('#four').show('slow');
});

$('.slab_click').on('click', function() {
  hideAll();
  $('#five').show('slow');
});

$('.ts_click').on('click', function() {
  hideAll();
  $('#six').show('slow');
});

$('.flo_click').on('click', function() {
  hideAll();
  $('#seven').show('slow');
});

// Global Functions
function hideAll() {
  $('#one').hide();
  $('#two').hide();
  $('#three').hide();
  $('#four').hide();
  $('#five').hide();
  $('#six').hide();
  $('#seven').hide();
}

$(document).ready(function() {
  hideAll();
  $('#one').show();
});

//
