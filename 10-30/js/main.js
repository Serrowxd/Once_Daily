// ***
// Global
// ***

// Dev Function

devMode = () => {
  $('#landing')
    .removeClass('transition')
    .addClass('hidetransition');
};

// Hide Everything but Landing
allHide = () => {
  $('#nav')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#team')
    .removeClass('transition')
    .addClass('hidetransition');
};

// Page Load
$(document).ready(() => {
  // allHide();
  devMode();
  hideRaiders();
  $('#nav').addClass('transition');
  $('#team').addClass('transition');
});

// Remove Class Active
activePurge = () => {
  $('.smol1').removeClass('active');
  $('.smol2').removeClass('active');
  $('.smol3').removeClass('active');
  $('.smol4').removeClass('active');
};

// ***
// Routes
// ***

// Team
$('.team').on('click', () => {
  activePurge();
  allHide();
  $('#landing')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#nav')
    .removeClass('hidetransition')
    .addClass('transition');
  $('.smol1').addClass('active');
  $('#team')
    .removeClass('hidetransition')
    .addClass('transition');
});

// Team
$('.about').on('click', () => {
  activePurge();
  allHide();
  $('#landing')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#nav')
    .removeClass('hidetransition')
    .addClass('transition');
  $('.smol2').addClass('active');
});

// Home Button
$('.sin_home').on('click', () => {
  activePurge();
  allHide();
  $('#nav')
    .removeClass('transition')
    .addClass('hidetransition');
  $('#landing')
    .removeClass('hidetransition')
    .addClass('transition');
});

// ***
// Team Clicks
// ***

// Hide ALl Raiders
hideRaiders = () => {
  $('.r_prof').hide();
};

$('.raider_1').on('click', () => {
  hideRaiders();
  $('.r1').show();
});

$('.raider_2').on('click', () => {
  hideRaiders();
  $('.r2').show();
});

$('.raider_3').on('click', () => {
  hideRaiders();
  $('.r3').show();
});

$('.raider_4').on('click', () => {
  hideRaiders();
  $('.r4').show();
});

$('.raider_5').on('click', () => {
  hideRaiders();
  $('.r5').show();
});

$('.raider_6').on('click', () => {
  hideRaiders();
  $('.r6').show();
});
$('.raider_7').on('click', () => {
  hideRaiders();
  $('.r7').show();
});
$('.raider_8').on('click', () => {
  hideRaiders();
  $('.r8').show();
});
$('.raider_9').on('click', () => {
  hideRaiders();
  $('.r9').show();
});
$('.raider_10').on('click', () => {
  hideRaiders();
  $('.r10').show();
});
$('.raider_11').on('click', () => {
  hideRaiders();
  $('.r11').show();
});
$('.raider_12').on('click', () => {
  hideRaiders();
  $('.r12').show();
});
$('.raider_13').on('click', () => {
  hideRaiders();
  $('.r13').show();
});
$('.raider_14').on('click', () => {
  hideRaiders();
  $('.r14').show();
});
$('.raider_15').on('click', () => {
  hideRaiders();
  $('.r15').show();
});
$('.raider_16').on('click', () => {
  hideRaiders();
  $('.r16').show();
});
$('.raider_17').on('click', () => {
  hideRaiders();
  $('.r17').show();
});
$('.raider_18').on('click', () => {
  hideRaiders();
  $('.r18').show();
});
$('.raider_19').on('click', () => {
  hideRaiders();
  $('.r19').show();
});
$('.raider_20').on('click', () => {
  hideRaiders();
  $('.r20').show();
});
$('.raider_21').on('click', () => {
  hideRaiders();
  $('.r21').show();
});
$('.raider_22').on('click', () => {
  hideRaiders();
  $('.r22').show();
});
$('.raider_23').on('click', () => {
  hideRaiders();
  $('.r23').show();
});
$('.raider_24').on('click', () => {
  hideRaiders();
  $('.r24').show();
});
