
// My Var
var kingdoms = ["Cap", "Cascade", "Sand", "Lake", "Wooded", "Cloud", "Lost", "Metro", "Snow", "Seaside", "Luncheon", "Ruined", "Bowsers","Moon","DarkSide", "DarkerSide", "Mushroom"];
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
   choosenWord = kingdoms[Math.floor(Math.random() * kingdoms.length)];
    console.log(choosenWord);

// pushes a '_' for every letter of the choosenWord
    for(var i=0; i < choosenWord.length; i++){
    underScores.push('_');
     }
// doesn't work ...prints those "_"s !!!
console.log(underScores);
document.getElementById('spaceHolders').textContent = underScores;

// start new
wrongLetter = [];
guessesLeft = 10;

// doesnt work AGAIN!!! print on browser
console.log(guessesLeft);
document.getElementById(guessLeft).textContent = guessesLeft;
   
}

// keyboard
document.onkeyup = function(event){
// registers the key pressed
    userGuesses = event.key;
    console.log(userGuesses);

    if(userGuesses === choosenWord){
        console.log('yes');
    }
}







// Main 

startGame();

