
// My Var
var kingdoms = ["cap", "cascade", "sand", "lake", "wooded", "cloud", "lost", "metro", "snow", "seaside", "luncheon", "ruined", "bowsers","moon","darkside", "darkerside", "mushroom"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = [];
var underScores = [];
var userGuesses = [];
var choosenWord;
var winCount = 0;


// My functions

function startGame(){
   
    // picks random word
   choosenWord = kingdoms[Math.floor(Math.random() * kingdoms.length)];
    console.log(choosenWord);
// pushes a '_' for every letter of the choosenWord
    for(var i=0; i < choosenWord.length; i++){
    underScores.push('_');
     }
//prints those "_"s !!!
document.getElementById('spaceHolders').textContent = underScores.join(" ");
// start new
wrongLetter = [];
guessesLeft = 10;
// print on browser
console.log(guessesLeft);
document.getElementById('guessLeft').textContent = guessesLeft;
  
}


function winLose(){

if(winCount === choosenWord.length){
wins++;
    alert("You guessed the kingdom!");
document.getElementById('wins').textContent = wins;



}
else if (guessesLeft === 0){
    loss++;
    alert("Loser!");
    document.getElementById('loses').textContent = loss;
    
}
}



// User Guesses
document.onkeyup = function(event){

    // registers the key pressed
    userGuesses = event.key;
    

    // does it exsist in the choosen word
    if(choosenWord.indexOf(userGuesses) > -1){

        for(var i = 0; i < choosenWord.length; i++){

            if(choosenWord[i] === userGuesses){

                underScores[i] = userGuesses;
        
                document.getElementById('spaceHolders').textContent = underScores.join(" ");
                winCount++;
                winLose();
            }
        }

    }

    else{
wrongLetter.push(userGuesses);
guessesLeft--;
console.log(guessesLeft);
document.getElementById('guessLeft').textContent = guessesLeft;
console.log(wrongLetter);
document.getElementById('wrongGuess').textContent = wrongLetter;
winLose();

    }

}

startGame();
