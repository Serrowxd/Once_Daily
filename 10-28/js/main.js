// ***
// Modal
// ***

var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger_login');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

// ***
// API Get
// ***

var httpRequest = new XMLHttpRequest();

httpRequest.addEventListener('load', clipsLoaded);
httpRequest.open(
  'GET',
  "https://us.api.blizzard.com/wow/character/mal'ganis/serrow"
);
httpRequest.setRequestHeader('Client-ID', 'e61b97e125db4c658703144157c9c6aa');
httpRequest.setRequestHeader('token', `process.env.AUTH_TOKEN`);
httpRequest.send();
console.log(httpRequest.responseText);

function clipsLoaded() {
  // let clipsDisplay = document.getElementById('clips-display');
  // clipList = JSON.parse(httpRequest.responseText);
  // clipList.data.map((clip, i) => {
  //   clipItem = document.createElement('div');
  //   clipItem.innerHTML =
  //     '<iframe src="https://clips.twitch.tv/embed?clip=' +
  //     clip.id +
  //     '&autoplay=false" height="480" width="854" frameborder="0" scrolling="false" allowfullscreen="true" class="replay_frame"></iframe>';
  //   clipsDisplay.appendChild(clipItem);
  // });
}
