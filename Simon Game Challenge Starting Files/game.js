
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var buttonColours = ["red","blue","green","yellow"]; 

function nextSequence(){
    userClickedPattern = [];
    level = level + 1;
    $("#level-title").html("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
};

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("Success!" , gamePattern[currentLevel] , userClickedPattern[currentLevel]);
        if (gamePattern.length == userClickedPattern.length){
            setTimeout(function() {
                nextSequence();
              }, 1000);
        }
    }
    else{
        console.log("Wrong!" , gamePattern[currentLevel] , userClickedPattern[currentLevel]);
        
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

//Resets values so game can be replayed without refreshing.
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

$(".btn").click(function(evt) {
    var userChosenColour = this.id;
    animatePress(userChosenColour);

    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)
})

//Key-board press listener. Starts game on key press if not already started.
addEventListener("keydown", function(){
    if (!started){
        $("#level-title").html("Level " + level)
        started = true;
        nextSequence();
    }
})