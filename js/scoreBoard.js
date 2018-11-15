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
    var button_doneButton = document.getElementById("doneButton");
    var count = 3;

    button_doneButton.addEventListener("click", function(event){


    });

    button_throwDice.addEventListener("click", function (event) {
        
       
        
        if(count>0){
        throwDice();
        count--;
        }
        else{
            //next player
            count = 0;
        }
        //
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
        } else {
            player1_bonus.value = 0;
        }


    }
    ones.addEventListener("change", calculatePlayer);







});
//Funktion utifrån classnamn
function calculatePlayerUpper() {
    let playerNumber;

    //Bör ändra/ta bort gamla funktionen
    for (var player = 1; player < 5; player++) {
        playerNumber = player;

        let playerClassUpper = document.getElementsByClassName("player" + playerNumber + "_upper");

        //Iterera genom alla element och lägger på eventlistener för classen
        for (var i = 0; i < playerClassUpper.length; i++) {
            playerClassUpper[i].addEventListener("change", calculatePlayerUpper);
        }

        let sum = 0;

        //addera summorna
        for (var element of playerClassUpper) {
            if (element.value !== "") {
                sum += parseInt(element.value)
            }
        }

        var player_bonus = document.getElementById("player" + playerNumber + "_bonus");
        var player_sum = document.getElementById("player" + playerNumber + "_sum");
        player_sum.value = sum;
        //Bonus
        if (sum >= 63) {
            sum += 50;

            player_bonus.value = 50;
        } else {
            player_bonus.value = 0;
        }



    }
}

function throwDice() {

    
    if(!document.getElementById("diceCheck1").checked){
    dice1.value = randomize();
    }
    if(!document.getElementById("diceCheck2").checked){
    dice2.value = randomize();
    }
    if(!document.getElementById("diceCheck3").checked){
    dice3.value = randomize();
    }
    if(!document.getElementById("diceCheck4").checked){
    dice4.value = randomize();
    }
    if(!document.getElementById("diceCheck5").checked){
    dice5.value = randomize();
    }
}
function calculatePlayerUnder() {
    for (var player = 1; player < 5; player++) {
        playerNumber = player;

        let playerClassUnder = document.getElementsByClassName("player" + playerNumber);
    

        //Iterera genom alla element och lägger på eventlistener för classen
        for (var i = 0; i < playerClassUnder.length; i++) {
            playerClassUnder[i].addEventListener("change", calculatePlayerUnder);
        }

        let sumUnder = 0;

        //addera summorna
        for (var element of playerClassUnder) {
            if (element.value !== "") {
                sumUnder += parseInt(element.value)
            }
        }

        var player_sumUpper = document.getElementById("player" + playerNumber + "_sum");
        var player_bonusUpper = document.getElementById("player" + playerNumber + "_bonus");

        var player_total = document.getElementById("player" + playerNumber + "_total");
        player_total.value = sumUnder + parseInt(player_sumUpper.value) + parseInt(player_bonusUpper.value) ;
    }
    
    winner();
}

    function randomize() {
        var min = 1;
        var max = 7;
        var slump = Math.floor(Math.random() * (max - min) + min);
        return slump;
    }

    function winner(){
        var player1 = {
            points: parseInt(document.getElementById("player1_total").value),
            name: "player1"
        }
        var player2 = {
            points: parseInt(document.getElementById("player2_total").value),
            name: "player2"
        }
    
        var player3 = document.getElementById("player3_total");
        var player4 = document.getElementById("player4_total");
    
        var players = [player1, player2];
    
    
    
        var sorted = players.sort(function (a, b) {
            return a.points - b.points
        });
    
        console.log(sorted);
    
    }