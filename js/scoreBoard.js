document.addEventListener("DOMContentLoaded", function (event) {



    var ones = document.getElementById("player1_ones");
    var twos = document.getElementById("player1_twos");
    var threes = document.getElementById("player1_threes");
    var fours = document.getElementById("player1_fours");
    var fives = document.getElementById("player1_fives");
    var sixes = document.getElementById("player1_sixes");
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice3 = document.getElementById("dice3");
    var dice4 = document.getElementById("dice4");
    var dice5 = document.getElementById("dice5");
    var button_throwDice = document.getElementById("throwDices");
    button_throwDice.addEventListener("click", function (event) {
        throwDice();
    });




    var scores = [ones, twos, threes, fours, fives, sixes];

    console.log(typeof sixes.value);

    // var test = document.getElementsByClassName("player2");
    // console.log(test);


    // Ha koll på om någon klickar på beräkna-knappen.

    function calculatePlayer(event) {
        // Do something.
        var total = 0;

        for (var score of scores) {
            if (score.value !== "") {
                total += parseInt(score.value);

                console.log(total);
            }

        }
        var player1_bonus = document.getElementById("player1_bonus");
        var player1_sum = document.getElementById("player1_sum");
        player1_sum.value = total;
        //Bonus
        if (total >= 63) {
            total += 50;

            player1_bonus.value = 50;
        }
        else {
            player1_bonus.value = 0;
        }


    }
    ones.addEventListener("change", calculatePlayer);







});
//Funktion utifrån classnamn
function calculatePlayerUpper() {
    let playerNumber;

    for (var player = 2; player < 5; player++) {
        playerNumber = player;

        let playerClassUpper = document.getElementsByClassName("player" + playerNumber + "_upper");

        for (var i = 0; i < playerClassUpper.length; i++) {
            playerClassUpper[i].addEventListener("change", calculatePlayerUpper);
        }

        let sum = 0;

        for (var item of playerClassUpper) {
            if (item.value !== "") {
                sum += parseInt(item.value)
            }
        }

        var player_bonus = document.getElementById("player" + playerNumber + "_bonus");
        var player_sum = document.getElementById("player" + playerNumber + "_sum");
        player_sum.value = sum;
        //Bonus
        if (sum >= 63) {
            sum += 50;

            player_bonus.value = 50;
        }
        else {
            player_bonus.value = 0;
        }

        console.log("From Upper: " + sum);
    }
}

function throwDice() {
    dice1.value = randomize();
    dice2.value = randomize();
    dice3.value = randomize();
    dice4.value = randomize();
    dice5.value = randomize();

}

function randomize() {
    var min = 1;
    var max = 7;
    var slump = Math.floor(Math.random() * (max - min) + min);
    return slump;
}