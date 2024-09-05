
var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red","blue","green","yellow"]; 

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
};

$(".btn").click(function(evt) {
    var userChosenColour = this.id
    animatePress(userChosenColour)

    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
})

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