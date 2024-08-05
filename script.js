let speech = new SpeechSynthesisUtterance();

// change voice
let voices = [];

let selectedVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=> {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // display each voices in dropbar
    voices.forEach((voice, i)=> (selectedVoice.options[i] = new Option(voice.name, i)));
};

selectedVoice.addEventListener("change", ()=> {
    speech.voice = voices[selectedVoice.value];
});


// speech functionality
document.querySelector("button").addEventListener("click", ()=> {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});