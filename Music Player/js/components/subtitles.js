//  Fetch and parse .srt
let subtitles = [];  // parsed subtitles

function loadSRT(path) {
    fetch(path)
        .then(res => res.text())
        .then(data => {
            subtitles = parseSRT(data);
        });
}

// Parse SRT into an array
function parseSRT(data) {
    const blocks = data.trim().split(/\r?\n\r?\n/);
    const result = [];

    for (const block of blocks) {
        const lines = block.split(/\r?\n/);
        if (lines.length >= 3) {
            const times = lines[1].split(' --> ');
            const start = timeStringToSeconds(times[0]);
            const end = timeStringToSeconds(times[1]);
            const text = lines.slice(2).join('\n').trim();
            result.push({ start, end, text });
        }
    }

    return result;
}

function timeStringToSeconds(timeStr) {
    const [h, m, s] = timeStr.replace(',', '.').split(':');
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseFloat(s);
}

// Sync with audio
const subtitleDisplay = document.getElementById('subtitle-display');

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;

    const currentSub = subtitles.find(
        sub => currentTime >= sub.start && currentTime <= sub.end
    );

    subtitleDisplay.textContent = currentSub ? currentSub.text : '';
});


// On audio load, call:
loadSRT('assets/subtitles/Harris J - O Allah (Official Music Video) [_PK0sBNiueE].en.srt');
