
let gameheader = document.querySelector(".gameheader");
let gamebody = document.querySelector(".gamebody");
let gstart = document.querySelector(".gstart");
let gstartagain = document.querySelector(".gstartagain");
let img = document.querySelector(".img");
let gamebox = document.querySelector(".gamebox");
let mode = document.querySelector(".mode");
let singleplayer = document.querySelector(".singleplayer");
let multiplayer = document.querySelector(".multiplayer");
let singleplayermode = document.querySelector(".singleplayermode");
let check = document.querySelector(".check");
let guessinput = document.querySelector(".guessinput");
let error = document.querySelector(".error");
let errorbox = document.querySelector(".errorbox");
let icon = document.querySelector(".icon");
let iconbox = document.querySelector(".iconbox");
let singheader = document.querySelector(".singheader");
let count = 3;
let attempt = document.querySelector(".attempt");
let playagain = document.querySelector(".playagain");
let multiplayermode = document.querySelector(".multiplayermode");
let p1btn = document.querySelector(".p1btn");
let p1input = document.querySelector(".p1input");
let error2 = document.querySelector(".error2");
let errorbox2 = document.querySelector(".errorbox2");
let iconbox2 = document.querySelector(".iconbox2");
let icon2 = document.querySelector(".icon3")
let error3 = document.querySelector(".error3");
let errorbox3 = document.querySelector(".errorbox3");
let iconbox3 = document.querySelector(".iconbox3");
let icon3 = document.querySelector(".icon3");
let multiheader = document.querySelector(".multiheader");
let p2btn = document.querySelector(".p2btn");
let p2input = document.querySelector(".p2input");
let attempt2 = document.querySelector(".attempt2");
let done = document.querySelector(".done");
let playagainbtn = document.querySelector(".playagainbtn");
let playagainbtn2 = document.querySelector(".playagainbtn2");
let gamebox2 = document.querySelector(".gamebox2");


// This function is used to start the game

gstart.addEventListener("click", function () {
    gameheader.style.display = "none";
    gamebody.style.display = "none";
    img.style.display = "none";
    gstart.style.display = "none";
    gamebox.style.display = "none";
    mode.style.display = "block";

})
gstartagain.addEventListener("click", function () {
    gameheader.style.display = "none";
    gamebody.style.display = "none";
    img.style.display = "none";
    gstart.style.display = "none";
    gamebox2.style.display = "none";
    mode.style.display = "block";

})

// This function is used to start the single player games
singleplayer.addEventListener("click", function () {
    mode.style.display = "none";
    singleplayermode.style.display = "block";

})



multiplayer.addEventListener("click", function () {
    mode.style.display = "none";
    multiplayermode.style.display = "block";

})


let secretNumber = Math.floor(Math.random() * 10) + 1;

check.addEventListener("click", function () {
    console.log(secretNumber);
    if (guessinput.value) {
        errorbox.style.display = "none";
        iconbox.style.display = "none";
    }

    if (!guessinput.value) {
        errorbox.style.display = "block";
        iconbox.style.display = "block";
        error.innerHTML = "Please enter a number";

    } else if (isNaN(guessinput.value)) {
        errorbox.style.display = "block";
        iconbox.style.display = "block";
        error.innerHTML = "Please enter a valid number (not letters)";

    } else if (guessinput.value < 1 || guessinput.value > 10) {
        errorbox.style.display = "block";
        iconbox.style.display = "block";
        error.innerHTML = "Please enter a number between 1 and 10";


    } else {

        if (count > 0) {
            count--
            attempt.innerHTML = `you have ${count} attempts left`;
            if (guessinput.value != secretNumber) {
                singheader.innerHTML = "Wrong guess! Try again!";
                singheader.style.color = "black";
            } else if (guessinput.value == secretNumber) {
                singheader.innerHTML = "Congratulations! You guessed the number! 🎉";
                singheader.style.color = "red";
                check.style.display = "none";
                guessinput.disabled = true;
                secretNumber = Math.floor(Math.random() * 10) + 1; // Reset the secret number
                playagain.innerHTML = " Please press Ctrl R to Play Again ☺️";
            }
            if (count == 0 && guessinput.value != secretNumber) {
                singheader.innerHTML = "Game Over! You Lose. 😔";
                singheader.style.color = "red";
                check.style.display = "none";
                guessinput.disabled = true;
                attempt.innerHTML = `The secret number was ${secretNumber}`;
                attempt.style.color = "red";
                secretNumber = Math.floor(Math.random() * 10) + 1;
                playagain.innerHTML = " Please press Ctrl R to Play Again ☺️";
            }
        }
    }

})




let secretNumber2 = p1input.value;

// This function is used to start the multiplayer game

p1btn.addEventListener("click", function () {
    if (p1input.value) {
        errorbox2.style.display = "none";
        iconbox2.style.display = "none";
    }

    if (!p1input.value) {
        errorbox2.style.display = "block";
        error2.innerHTML = "Please enter a number";
        iconbox2.style.display = "block";
    } else if (isNaN(p1input.value)) {
        errorbox2.style.display = "block";
        error2.innerHTML = "Please enter a valid number (not letters)";
        iconbox2.style.display = "block";
    } else if (p1input.value < 1 || p1input.value > 10) {
        errorbox2.style.display = "block";
        error2.innerHTML = "Please enter a number between 1 and 10";
        iconbox2.style.display = "block";
    } else {
   p1input.style.display = "none";
   p1input.disabled = true;
        multiheader.innerHTML = "Player 1 has set the secret number ! Now Player 2 can guess the number.";
        multiheader.style.color = "black";
        p1btn.style.display = "none";
      done.innerHTML = "Player 1 has set the secret number!";
        p1input.style.backgroundColor = "white";
 p2input.disabled = false;
done.style.display = "block";
    }

})
p2input.disabled = true; // Disable Player 2 input until Player 1 sets the number

p2btn.addEventListener("click", function () {

    
    if (p2input.value) {
        errorbox3.style.display = "none";
        iconbox3.style.display = "none";
        attempt2.style.display = "block";
    }

    if (!p2input.value || !p1input.value) {
        errorbox3.style.display = "block";
        errorbox3.style.border = "2px solid black";
        error3.innerHTML = "Please enter a number or Player 1 has not set a number";
        iconbox3.style.display = "block";
    } else if (isNaN(p2input.value)) {
        errorbox3.style.display = "block";
        error3.innerHTML = "Please enter a valid number (not letters)";
        iconbox3.style.display = "block";
    } else if (p2input.value < 1 || p2input.value > 10) {
        errorbox3.style.display = "block";
        error3.innerHTML = "Please enter a number between 1 and 10";
        iconbox3.style.display = "block";
    } else if (p2input.value == p1input.value) {
        multiheader.innerHTML = "Player 2 guessed the number correctly! 🎉 Player 2 winner";
        p2input.disabled = true;
        p2input.value = "";
        p1input.disabled = true;
        p2btn.style.display = "none";
        multiheader.style.color = "red";

    } else if (p1input.value != p2input.value) {
        multiheader.innerHTML = "Wrong guess! Try again!";
        multiheader.style.color = "red";
        if (count > 0) {
            count--
            attempt2.innerHTML = `you have ${count} attempts left`;
            p2input.disabled = false;
                      if (count == 0 && p2input.value != p1input.value) {
        multiheader.innerHTML = "Game Over! Player 2 Lose 😔. Player 1 Winner 🎉 ";
        multiheader.style.color = "blue";
        p2btn.style.display = "none";
        p2input.disabled = true;
        attempt2.innerHTML = `The secret number was ${p1input.value}`;
        attempt2.style.color = "white";
    }
        }
    } 
    
})


playagainbtn.addEventListener("click", function (){
multiplayermode.style.display = "none";
gamebox2.style.display = "block";
p1input.value = "";
p2input.value = "";
p1input.disabled = false;
p2input.disabled = true;
p1btn.style.display = "block";
done.style.display = "none";
p1input.style.display = "block";
multiheader.innerHTML = "Player 1, please set the secret number.";
        count = 3;        
        attempt2.innerHTML = `you have ${count} attempts left`;
        p2btn.style.display = "inline-block";
        p1btn.style.display = "inline-block";
      

})
playagainbtn2.addEventListener("click", function (){
singleplayermode.style.display = "none";
gamebox2.style.display = "block";
guessinput.value = "";
singheader.innerHTML = "Welcome to the SinglePlayer Game! ";
        count = 3;        
        attempt.innerHTML = `you have ${count} attempts left`;
        check.style.display = "inline-block";
        guessinput.disabled = false;
    secretNumber = Math.floor(Math.random() * 10) + 1; // Reset the secret number

})
