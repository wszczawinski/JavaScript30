//adding eventListener with attribute "keydown" to window element
window.addEventListener('keydown', playKey);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//function which removing class anter transition end
function removeTransition(e) {
    //condition to end function if its not transition
    if(e.propertyName !== 'transform') return; 
    //console.log(this); checking whats this is ? lol
    //removing playing class from just clicked key after transition ends
    this.classList.remove('playing');
}
function playKey(e){
    //query selectors for audio and class.key which are assigment to keyValue
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(audio);   //console.log(e.keyCode);
    //condition to stop function if there is no audio for clicked key
    if(!audio) return;
    //making possible to play another key befor last one finished playing sound
    audio.currentTime = 0;
    //playing key audio
    audio.play();
    key.classList.add('playing');
}