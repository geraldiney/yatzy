
//array för att hålla alla spelarobjekt
var players = [];

//hårdkodar ett player-objekt
player = {
    id: 0,
    name: "",
    result: [],
}; 

//skickar in spelarobjekt till playersarrayn
players.push(player);

//annars sett att göra ovan på
players.push(player={id: 0, name : "anders", result: []});

//Funktion för att skapa en spelarobjekt och lägga in objektet i arrayn players
function makePlayer(id, name, result) {
    player = {
    id: id,
    name: name,
    result: result,
    }

    players.push(player);
}

//funktion som lägger in resultatet för ett specifikt objekt
function setPersonalResult(result) {
    player.result.push(result);
}

function printResults() {
   for (var i = 0; i < player.result.length; i++){
    console.log (player.result[i]);
   }
}

function getName() {
    return player.name;
}

var calc_button = document.getElementById("calc");

calc_button.addEventListener("click", function(event) {
    let player1_ones = parseInt(document.getElementById("player1_ones"));
})

function checkHouse(array){
    for (var i = 0; i<<)
}

