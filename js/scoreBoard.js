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
    // Ha koll på om någon klickar på beräkna-knappen.

    function calculatePlayer(event) {
        // Do something.
        var total = 0;

        for (var score of scores){
            if (score.value !== ""){
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
            
            player1_bonus.value=50;
        }
        else {
            player1_bonus.value=0;  
        }
      

    }



    ones.addEventListener("change",calculatePlayer );





});