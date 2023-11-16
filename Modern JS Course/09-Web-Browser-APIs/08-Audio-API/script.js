const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');








play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});



volume.addEventListener('change', () => (audio.volume = volume.value));

  // Event listener for the input event on the currentTime range input
  currentTime.addEventListener('input', () => {
    // Set the currentTime of the audio to the value of the range input
    audio.currentTime = currentTime.value;
  });

  // Update the currentTime range when the time of the audio changes
  audio.addEventListener('timeupdate', () => {
    currentTime.value = audio.currentTime;
  });