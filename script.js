 // Creates a new SpeechSynthesisUtterance object to hold the speech parameters.
let speech = new SpeechSynthesisUtterance();

// Array to store the available voices.

let voices = [];

// Select element to display the available voices.
let selectedVoice = document.querySelector("select");

// Event listener for when the list of voices changes.
// Updates the voices array and sets the default voice.
window.speechSynthesis.onvoiceschanged = ()=> {
    // Get the list of available voices.
    voices = window.speechSynthesis.getVoices();
    
    // Set the default voice to the first voice in the list.
    speech.voice = voices[0];

    // Populate the select element with the available voices.
    voices.forEach((voice, i)=> (selectedVoice.options[i] = new Option(voice.name, i)));
};

// Event listener for when the selected voice changes.
// Updates the speech voice to the selected voice.
selectedVoice.addEventListener("change", ()=> {
    // Get the index of the selected voice.
    speech.voice = voices[selectedVoice.value];
});

// Event listener for when the speak button is clicked.
// Speaks the text in the textarea using the selected voice.
document.querySelector("button").addEventListener("click", ()=> {
    // Get the text to be spoken from the textarea.
    speech.text = document.querySelector("textarea").value;
    
    // Speak the text using the speech synthesis API.
    window.speechSynthesis.speak(speech);
});