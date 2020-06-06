var playing = false;
var score;
var action;
var timeRemaining;

//start the game
document.getElementById("start-game").onclick = function() {
    if(playing == true){
    location.reload();
        }else{
        playing = true;
        score = 0;
    document.getElementById("score-value").innerHTML = score;
    show("time-remaining");
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    document.getElementById("start-game").innerHTML = "Reset Game";
    startCountdown();
    //generate QA
    generateQA();
}
}
//start counter
function startCountdown(){
    action = setInterval(function(){
    timeRemaining -= 1;
     document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
     if(timeRemaining == 0){
     stopCountdown();
     show("game-over");
     document.getElementById("game-over").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
     hide("time-remaining");
     hide("correct");
     hide("wrong");
     playing = false;
     }
    }, 1000);
}
//stop counter
function stopCountdown(){
    clearInterval(action);
}
//hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
    }
//show an element
    function show(Id){
    document.getElementById(Id).style.display = "block";
    }

    //generate multiple Q&A
    function generateQA(){

    }

