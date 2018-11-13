document.addEventListener("DOMContentLoaded", function(event) {
    


    var calc_button = document.getElementById("calc");
    var ones = parseInt(document.getElementById("player1_ones"));
    var twos= parseInt(document.getElementById("player1_twos"));
    var threes= parseInt(document.getElementById("player1_threes"));
    var fours= parseInt(document.getElementById("player1_fours"));
    var fives= parseInt(document.getElementById("player1_fives"));
    var sixes= parseInt(document.getElementById("player1_sixes"));
   

   
    // Ha koll på om någon klickar på beräkna-knappen.
    calc_button.addEventListener("click", function(event) {
    // Do something.
    var total = ones+twos+threes+fours+fives+sixes;
   
        if(total>=63){
            total+=50;
        }

        alert("Total score: " + total)

    });
  




    });