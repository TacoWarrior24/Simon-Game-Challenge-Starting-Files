
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var buttonColours = ["red","blue","green","yellow"]; 

function nextSequence(){
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
    $("#" + currentColour).addClass( "pressed" );
    setTimeout(function() {
        $("#" + currentColour).removeClass( "pressed" );
      }, 100);
}

$(".btn").click(function(evt) {
    var userChosenColour = this.id;
    animatePress(userChosenColour);

    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
})

addEventListener("keydown", function(){
    $("#level-title").html("Level " + level)
    started = true;
    nextSequence();
})