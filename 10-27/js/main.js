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
// Section 2 Carousel
// ***

var httpRequest = new XMLHttpRequest();

httpRequest.addEventListener('load', clipsLoaded);
httpRequest.open(
  'GET',
  'https://api.twitch.tv/helix/clips?broadcaster_id=113380702&first=2'
);
httpRequest.setRequestHeader('Client-ID', 'ncwugcpb5xxjhr8h1tlcfo2bs7fqgi');
httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
httpRequest.send();

// function clipsLoaded() {
//   var clipsDisplay = document.getElementById('clips-display'),
//     clipList = JSON.parse(httpRequest.responseText);

//   clipList.data.forEach((clip, i) => {
//     clipItem = document.createElement('div');
//     clipItem.innerHTML = clip.embeded_url;
//     clipsDisplay.appendChild(clipItem);
//   });
// }

function clipsLoaded() {
  let clipsDisplay = document.getElementById('clips-display');

  clipList = JSON.parse(httpRequest.responseText);
  clipList.data.map((clip, i) => {
    clipItem = document.createElement('div');
    clipItem.innerHTML =
      '<iframe src="https://clips.twitch.tv/embed?clip=' +
      clip.id +
      '" height="480" width="854" frameborder="0" scrolling="false" allowfullscreen="true"></iframe>';
    clipsDisplay.appendChild(clipItem);
  });
}

// function clipsLoaded() {
//   clipList = JSON.parse(httpRequest.responseText);
//   clipList.data.map((clip, i) => {
//     new Twitch.Embed('clips-display', {
//       width: 854,
//       height: 480,
//       // video: clip.video_id,
//     });
//   });
// }
