const listener = document.querySelector('#listener')
const startMessage = document.getElementById('startMessage')
const endMessage = document.getElementById('endMessage')


if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // Create a SpeechRecognition object
  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  // Set up event handlers
  listener.addEventListener('click', startListening)

  function startListening(){
    recognition.onstart = () => {
      startMessage.textContent ='Speech recognition started'

      startMessage.style.display = 'block'
      endMessage.style.display = 'none'
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      document.getElementById('output').textContent = `You said: ${transcript}`;
      console.log(event)
    };
  
    recognition.onend = () => {
      endMessage.textContent ='Speech recognition ended'

      startMessage.style.display = 'none'
      endMessage.style.display = 'block'
    };
  
    // Start recognition when the page loads
    recognition.start();
  }

 
} else {
  alert('Speech recognition is not supported in this browser. Please use a modern browser that supports the Web Speech API.');
}