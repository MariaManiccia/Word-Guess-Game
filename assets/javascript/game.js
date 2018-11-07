// My Array
const words = ['red', 'yellow', 'blue','purple'];

// Chooses random word
let randNumb = Math.floor(Math.random() * words.length);
let choosenWord = words[randNumb];
let underScore = [];
let rightWord = [];
let wrongWord = [];

console.log(choosenWord);

// Creating the underscores
let underScores = () => {
    for(let i = 0; i < choosenWord.length; i++){
underScore.push('_');
    }
    return underScore;
}

console.log(underScores());

// Get user's guess
document.addEventListener('keypress', (event) => {
let keycode = event.keyCode;
let keyWord = String.fromCharCode(keycode);

// if the letter is right
if(choosenWord.indexOf(keyWord) > -1){
    
    // add it to the right words array
    rightWord.push(keyWord);
    // replace the underscore
    underScore[choosenWord.indexOf(keyWord)] = keyWord;
    // see if word matches correct word
    if(underScore.join('') == choosenWord) {
        alert('You Won!!');
    }
}

});



