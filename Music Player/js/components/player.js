/*
audio.addEventListener('timeupdate', () => {
  console.log(audio.currentTime);
});
*/

const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const volumeBar = document.getElementById('volume-bar');
const muteBtn = document.getElementById('mute-btn');

//  Format time
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

if (audio.readyState >= 1) {
    // Metadata is already available
    seekBar.max = audio.duration;
    durationEl.textContent = formatTime(audio.duration);
} else {
    // Wait for metadata to load
    audio.addEventListener('loadedmetadata', () => {
        seekBar.max = audio.duration;
        durationEl.textContent = formatTime(audio.duration);
    });
}


// Play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});


// Update current time and seek bar:
audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Allow user to drag:
seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

// Volume slider

audio.volume = 1; // Initialize volume

volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
    if (audio.volume === 0) {
        muteBtn.textContent = 'Unmute';
    } else {
        muteBtn.textContent = 'Mute';
    }
});

// Mute Toggle
muteBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.dataset.prevVolume = audio.volume; // save previous volume
        audio.volume = 0;
        volumeBar.value = 0;
        muteBtn.textContent = 'Unmute';
    } else {
        audio.volume = audio.dataset.prevVolume || 1;
        volumeBar.value = audio.volume;
        muteBtn.textContent = 'Mute';
    }
});
