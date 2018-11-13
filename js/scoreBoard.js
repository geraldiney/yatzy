document.addEventListener("DOMContentLoaded", function (event) {


    var calc_button = document.getElementById("calc");
    var ones = document.getElementById("player1_ones");
    var twos = document.getElementById("player1_twos");
    var threes = document.getElementById("player1_threes");
    var fours = document.getElementById("player1_fours");
    var fives = document.getElementById("player1_fives");
    var sixes = document.getElementById("player1_sixes");

    var scores = [ones, twos, threes, fours, fives, sixes];

    console.log(typeof sixes.value);

    var test = document.getElementsByTagName('input');
    console.log(test);


    // Ha koll på om någon klickar på beräkna-knappen.
    calc_button.addEventListener("click", function (event) {
        // Do something.
        var total = 0;

        for (var score of scores){
            if (score.value !== ""){
                total += parseInt(score.value);
                console.log(total);
            } else {
                
            }
            
        }

        //Bonus
        if (total >= 63) {
            total += 50;
        }

        alert("Total score: " + total);

    });





});

function randomize() {
    var min = 1;
    var max = 6;
    var slump = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("inputField").value = slump;
}