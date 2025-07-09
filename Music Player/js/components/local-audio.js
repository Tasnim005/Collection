//  Wrapped in an IIFE ((function() { … })()) to avoid polluting global scope.
(function() {
    const audio = document.getElementById('audio-player');
    const button = document.getElementById('choose-local-file');
    const display = document.getElementById('now-playing');

    function loadLocalAudio(audioElement, triggerButton, displayElement) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'audio/*';
        fileInput.style.display = 'none';
        document.body.appendChild(fileInput);

        triggerButton.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (file) {
                const fileURL = URL.createObjectURL(file);
                audioElement.src = fileURL;
                audioElement.play();

                if (displayElement) {
                    displayElement.textContent = `Now Playing: ${file.name}`;
                }
            }
        });
    }

    // initialize immediately
    loadLocalAudio(audio, button, display);
})();

