
function callBoth(){
    textSwitch();
    togglePlay();
};


function textSwitch() {

    var btn = document.getElementById("myButton");
    if (btn.value == "Play") {
        btn.value = "Pause";
        btn.innerHTML = "Play";
    } else {
        btn.value = "Play";
        btn.innerHTML = "Pause";
        }
    };
    

// AUDIO VOLUME *********************

var audio = document.getElementById("myAudio")
audio.volume = 0.2;
    
// AUDIO TOGGLE PLAY/PAUSE ***********************

var myAudio = document.getElementById("myAudio");
var isPlaying = false;


function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
    isPlaying = true;
};

myAudio.onpause = function() {
    isPlaying = false;
};


// SPACE BAR *********************************

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        callBoth();
        console.log('Space pressed');
    }

});





