var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    gamePattern.push(buttonColor[randomNumber]);
    var audio = new Audio("./sounds/" + buttonColor[randomNumber] + ".mp3");
    audio.play();
    $("#" + buttonColor[randomNumber]).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonColor[randomNumber] + "").removeClass("pressed");
    }, 200);
    level++;
    document.querySelector("#level-title").innerHTML = "Level " + level;
}



$(".btn").click(function () {
    if (level == 0) {
        var audio2 = new Audio("./sounds/wrong.mp3");
        audio2.play();
        $("#level-title").text("Game Over , press any key to restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();

    }
    var i = 0;
    var ch = this.id;
    var audio = new Audio("./sounds/" + ch + ".mp3");
    audio.play();
    $("#" + ch).addClass("pressed");
    setTimeout(function () {
        $("#" + ch).removeClass("pressed");
    }, 200);
    userClickedPattern.push(ch);

    while (i < userClickedPattern.length) {
        if (gamePattern[i] != userClickedPattern[i]) {
            var audio2 = new Audio("./sounds/wrong.mp3");
            audio2.play();
            $("#level-title").text("Game Over , press any key to restart");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            startOver();
            break;
        }
        console.log(i);
        i++;
        if (i == gamePattern.length) {
            userClickedPattern = [];
            setTimeout(function () {

                nextSequence();

            }, 1000);
            break;
        }
    }
});


$(document).keypress(function (event) {
    if (level == 0) {

        nextSequence();
    }

});

function startOver() {
    level = 0;
    userClickedPattern = [];
    i = 0;
    gamePattern = [];
}



