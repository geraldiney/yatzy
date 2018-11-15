
    var player1 = {
        points: parseInt(document.getElementById("player1_total").value),
        name: player1
    }
    var player2 = {
        points: parseInt(document.getElementById("player2_total").value),
        name: player2
    }

    var player3 = document.getElementById("player3_total");
    var player4 = document.getElementById("player4_total");

    var players = [player1, player2];



    var sorted = players.sort(function (a, b) {
        return a.points - b.points
    });

    console.log(players);
    console.log(sorted);


    //Måste loopa genom resultat för att ta reda på vilket som är störst