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

// ***
// Section 2 Window Bind
// ***

// $(window).bind('scroll', () => {
//   const isTop = window.scrollY < 1000;
//   if (isTop !== true) {
//     $('.replay_frame').addClass('showme');
//   } else {
//     $('.replay_frame').removeClass('showme');
//   }
// });

// ***
// Twitch API Pull Request
// ***

var httpRequest = new XMLHttpRequest();

httpRequest.addEventListener('load', clipsLoaded);
httpRequest.open(
  'GET',
  'https://api.twitch.tv/helix/clips?broadcaster_id=113380702&first=4'
);
httpRequest.setRequestHeader('Client-ID', 'ncwugcpb5xxjhr8h1tlcfo2bs7fqgi');
httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
httpRequest.send();

function clipsLoaded() {
  let clipsDisplay = document.getElementById('clips-display');

  clipList = JSON.parse(httpRequest.responseText);
  clipList.data.map((clip, i) => {
    clipItem = document.createElement('div');
    clipItem.innerHTML =
      '<iframe src="https://clips.twitch.tv/embed?clip=' +
      clip.id +
      '&autoplay=false" height="480" width="854" frameborder="0" scrolling="false" allowfullscreen="true" class="replay_frame"></iframe>';
    clipsDisplay.appendChild(clipItem);
  });
}
