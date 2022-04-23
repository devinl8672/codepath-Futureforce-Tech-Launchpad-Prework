//Global Constants
const clueHoldTime = 1000; //how long it remains on each clue's light/sound
const nextClueWaitTime = 1000; //delay between playing of clue sequence

//Global Variables
var pattern = [5, 5, 6, 5, 7, 8, 2, 2, 4, 3, 2, 1, 7, 5]; //Only use numbers 1-8
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;        //Volume can only be between 0.0 and 1.0
var guessCounter = 0;
var cluePauseTime = 200; //delay between clues

function startGame() {
  progress = 0;
  gamePlaying = true;
  genPattern();
  
  // When the game starts we will swap from showing start button to showing the stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
  
}

function stopGame() {
  gamePlaying = false;
   
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden"); 
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 587.3,
  6: 659.3,
  7: 784,
  8: 740
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lighting and clearing buttons ___________________
function lightButton(btn) {    //btn is the name of the particular button, in our case it is a number
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  cluePauseTime = cluePauseTime - 20;
  //context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost!");
}

function winGame() {
  stopGame();
  alert("Game Over. Hurray. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    //Guess is correct
    if (guessCounter < progress) {
      //Turn is not over
      guessCounter ++;
    }
    else {
      //Turn is over
      if (progress < (pattern.length - 1)) {
        //This is not the last turn
        progress ++;
        playClueSequence();
      }
      else {
        //This is the last turn
        winGame();
      }
    }
  }
  else {
    //Guess is incorrect
    loseGame();
  }
}

function genPattern() {
  var pat = [];
  for (var i = 0; i < 10; i++) {
    pat[i] = Math.floor(Math.random()*8+1);
  }
  pattern = pat;
}