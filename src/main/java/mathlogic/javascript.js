var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

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
        hide("game-over");
    document.getElementById("start-game").innerHTML = "Reset Game";
    startCountdown();
    //generate QA
    generateQA();
}
}
// clicking on answer box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                score++;
                document.getElementById("score-value").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                //Generate new Q&A
                generateQA();
            }else{
                            hide("correct");
                            show("wrong");
                            setTimeout(function(){
                            hide("wrong");
                            }, 1000);
            }
        }
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
     document.getElementById("start-game").innerHTML = "Start Game";
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
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());
        correctAnswer = x * y;
        document.getElementById("question").innerHTML = x + "x" + y;
        var correctPosition = 1 + Math.round(3*Math.random());
        document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
        var answers = [correctAnswer];
        for(i=1; i<5; i++){
            if(i != correctPosition){
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(3*Math.random())) * (1 + Math.round(3*Math.random()));
            }
            while(answers.indexOf(wrongAnswer) > -1);
            document.getElementById("box"+i).innerHTML = wrongAnswer;
                answers.push(wrongAnswer);
            }
        }
    }

