const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
console.log(recognition)

const listener = document.getElementById('listener')
listener.addEventListener('click', ()=>{

recognition.onresult = function (e) {
  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ];

  console.log(e)
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Please say a color');
    }
  }
};

recognition.start();
})
