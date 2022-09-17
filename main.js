// PRECONFIGURATION
function PRECONFIG(){
    document.body.style.backgroundColor = "#404040"; 
    document.body.style.color = "#eeeeee";
    document.body.style.fontFamily = "consolas";
    addEventListener('load', initialize);
    addEventListener('load', gameSystem);
}
PRECONFIG();
//DECLATRING DOM VARIABLES
let span1 = document.getElementById("span-1");
const span2 = document.getElementById("span-2");
let paragraph1 = document.getElementById("paragraph-1");
let currentWord = document.getElementById("current-word");
let inputWord = document.getElementById("input-word");
let message = document.getElementById("message");
let time = document.getElementById("time");
let score = document.getElementById("score");
let paragraph2 = document.getElementById("paragraph-2");
let paragraph3 = document.getElementById("paragraph-3");
let lastButton = document.getElementById("special-thanks");
let lastMessage = document.getElementById("last");
let hide = document.getElementById("hide");

lastButton.style.marginLeft = "43%";
lastButton.onclick = function () {
    lastMessage.style.opacity = "1";
    hide.style.opacity = "1";
    lastButton.style.opacity = "0"
}
hide.onclick = function () {
    lastMessage.style.opacity = "0";
    hide.style.opacity = "0";
    lastButton.style.opacity = "1"
}



//STYLING
span1.style.textAlign = "center";
span2.style.color = "aqua";
time.style.color = "aqua";
score.style.color = "aqua";
paragraph1.style.textAlign = "center";
paragraph1.style.fontSize = "19px";
currentWord.style.cssText = "text-align: center;";
currentWord.style.fontFamily = "Verdana";
currentWord.style.fontSize = "50px";
inputWord.style.height = "50px";
inputWord.style.width = "185px";
inputWord.style.marginLeft = "42%";
paragraph2.style.fontSize = "20px";
paragraph3.style.fontSize = "20px";
lastButton.style.marginLeft = "45.5%";
lastButton.style.color = "gray";
lastButton.style.backgroundColor = "#eeeeee";
lastButton.style.height = "30px";
hide.style.color = "gray";
hide.style.backgroundColor = "#eeeeee";
hide.style.height = "30px";
lastButton.style.marginTop = "40px";
//BEGIN 
let TIME = 5;
span2.innerHTML = TIME;
let SCORE = 0;
let IS_PLAYING;
const WORDS = [
'matter',
'dark',
'never',
'sky',
'apple',
'banana',
'pineapple',
'javascript',
'java',
'python',
'nothing',
'something',
'word',
'hot',
'cold',
'new',
'old',
'carrot',
'what',
'vegetable',
'like',
'gun',
'police',
'who',
'how',
'abduction',
'arrested',
'computer',
'science',
'chemistry',
'biology',
'physics',
'eggplant',
'eggs',
'pretty',
'wonderful',
'love',
'child',
'parent',
'someone',
'sketch',
'doodle',
'animal',
'bird',
'lion',
'queen',
'prince',
'king',
'heart'
];
// GAME SYSTEM

function initialize() {
    console.log("Game initialized successfully");
}

function gameSystem() {
showWords(WORDS);
inputWord.addEventListener("input", startMatch);
setInterval(countdown, 1000);
setInterval(checkStatus, 50);
}

function startMatch() {
    time.style.color = "aqua";
    if (wordsMatched()) {
    IS_PLAYING = true;
    TIME = 6;
    showWords(WORDS);
    inputWord.value = '';
    SCORE++;
    console.log("MATCHED!");
    }
    if(SCORE === -1) {
    score.innerHTML = 0;
    }
    else {
    score.innerHTML = SCORE;
}
}

function wordsMatched() {
if(inputWord.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT!";
    return true;
}
else {
    message.innerHTML = '';
    return false;
}
}

function showWords(WORDS) {
const randomIndex = Math.floor(Math.random() * WORDS.length);
currentWord.innerHTML = WORDS[randomIndex];
}
function countdown() {
    if (TIME > 0) {
    TIME--;
    }
    else if (TIME === 0) {
    IS_PLAYING = false;
    }
    else {
    console.log(`ERROR! time = ${TIME} CANNOT BE LESS THAN ZERO`);
    IS_PLAYING = false;
    }
    time.innerHTML = TIME;
}
function checkStatus() {
    if (!IS_PLAYING && TIME === 0) {
        message.innerHTML = "GAME OVER!"; 
        SCORE = -1;
        time.style.color = "red";
    }
}
