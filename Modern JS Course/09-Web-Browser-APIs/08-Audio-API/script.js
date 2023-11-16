const audio = document.getElementById('audio');
const play = document.getElementById('play');
const forward = document.querySelector('#forward')
const replay = document.querySelector('#replay')

const seekBar = document.getElementById('seekBar');
const timePassed = document.querySelector('#timePassed')
const totalDuration = document.querySelector('#totalDuration')

const volume = document.getElementById('volume');


play.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    play.querySelector('img').setAttribute('src', 'images/pause.svg');
  } else {
    audio.pause();
    play.querySelector('img').setAttribute('src', 'images/play_circle.svg');
  }
});


// Volume
volume.addEventListener('input', () => {
  const newVolume = volume.value;
  audio.volume = newVolume;

  if (audio.volume === 0) {
    document.querySelector('.vol img').setAttribute('src', 'images/mute.svg');
  } else {
    document.querySelector('.vol img').setAttribute('src', 'images/volume.svg');
  }
});



// Playback
audio.addEventListener('timeupdate', () => {
  // Update the current time input during audio playback
  seekBar.value = audio.currentTime;
  timePassed.textContent = formatTime(audio.currentTime)
});

// Update on drag and start playing
seekBar.addEventListener('input', () => {
  audio.currentTime= seekBar.value
});

// Get total duration of an audio file and displaying it
audio.addEventListener('loadedmetadata', () => {
  totalDuration.textContent = formatTime(audio.duration);

  // Set Max Attribute of input range for seekBar
  seekBar.setAttribute('max', Math.floor(audio.duration))
});

function formatTime(time) {
  // Format time in HH:MM:SS
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Forward and Replay
forward.addEventListener('click',()=>{
  audio.currentTime= audio.currentTime+=10
})

replay.addEventListener('click', ()=>{
  audio.currentTime= audio.currentTime-=10
})