
var gamePattern = []

var buttonColours = ["red","blue","green","yellow"]; 
var randomChosenColour = nextSequence()

gamePattern.push(buttonColours[randomChosenColour])

function nextSequence(){
    return Math.floor(Math.random() * 4)
};