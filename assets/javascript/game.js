//Psuedocode 
//=====================

//if they match their score with the random display number
//they win (alerts the win in the box)
//game resets 
//tracks the wins 
//New random number 
//new hidden values for the crystals 
//if they go over their score with the random display number 
//they lose (alerts the lost in the box)
//game resets 
//tracks the losses 
//new random number 
//new hidden values for the crystals
//======================

//Variables 
//=============================
var wins = 0;
var losses = 0;
var yourScore = [];
//============================

//Main Game
//============================
$(document).ready(function () {

    //function startGame() {
        //at game start 
        //random numnber is displayed between 19 -120
        var randomNum = Math.floor(Math.random() * 101 + 19);
        $("#randomizedNum").html("Random Number <br>" + randomNum);
        console.log(randomNum);

        //generates a random # and puts them into an array
        var crystalarr = []
        //like a 4 loop??
        while (crystalarr.length < 4) {
            var i = Math.floor(Math.random() * 11) + 1;
            if (crystalarr.indexOf(i) === -1) crystalarr.push(i);
        }
        console.log(crystalarr)
        //on a click it grabs the number generated above and associates it with the crystal
        $("#red").on("click", function() {
            console.log(crystalarr[0]);
        });
        $("#green").on("click", function() {
            console.log(crystalarr[1]);
        });
        $("#blue").on("click", function() {
            console.log(crystalarr[2]);
        });
        $("#purple").on("click", function() {
            console.log(crystalarr[3]);
        });

        

        //Display wins and losses 
        $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br>");

    //}

    //===========================================================
    //Listens for a crystal click 
    //add the points to the total score 
    //keeps listening to clicks 
    //add points until they match the total score or go over(random # generated above)



    // if (yourScore === randomNum) {
    //     wins++;
    // } else {
    //     //continue listening for clicks 
    //     if ()
    // }


    //Win or lose 
    //if (goal === yourScore) {
    //wins++;
    //$(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br>" + "You have won!");
    //} else {}
});