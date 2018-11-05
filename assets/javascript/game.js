//  My variables

var wordBank = ["beyonce", "jay", "blue", "rumi", "sir"]
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var choosenWord;

// My functions

function startGame(){
    // picks random word
   choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(choosenWord);

//pushes a '_' for every letter of the choosenWord
    for(var i=0; i < choosenWord.length; i++){
    underScores.push('_');
     }
//prints those "_"s
console.log(underScores);
Document.getElementById('spaceHolders').textContent = underScores;
}


// Main 

startGame();
