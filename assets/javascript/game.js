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
var yourScore = 0;
//============================

//Main Game
//============================
$(document).ready(function () {

    function startGame() {
        yourScore = 0;

        //at game start 
        //random numnber is displayed between 19 -120
        var randomNum = Math.floor(Math.random() * 101 + 19);
        $("#randomizedNum").html("Random Number <br>" + randomNum);
        console.log(randomNum);
        $("#yourScore").html("Your Score <br>" + yourScore);
        $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br>");

        //generates a random # and puts them into an array
        var crystalarr = []
        //like a 4 loop??
        while (crystalarr.length < 4) {
            var i = Math.floor(Math.random() * 11) + 1;
            if (crystalarr.indexOf(i) === -1) crystalarr.push(i);
        }
        console.log(crystalarr)

        //when scores are added and resets they are adding the old values. It has something to do with the stuff from above. Changing the crystalarr stuff. 

        //on a click it grabs the number generated above and associates it with the crystal
        $("#red").on("click", function () {
            console.log("BAM")
            var num = parseInt(crystalarr[0]);
            yourScore += num;
            $("#yourScore").html("Your Score <br>" + yourScore);
            if (yourScore > randomNum) {
                losses++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You lose!");
            } else if (yourScore === randomNum) {
                wins++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You win!");

            }
            console.log(yourScore);
        });
        $("#green").on("click", function () {
            var num = parseInt(crystalarr[1]);
            yourScore += num;
            $("#yourScore").html("Your Score <br>" + yourScore);
            if (yourScore > randomNum) {
                losses++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You lose!");                
            } else if (yourScore === randomNum) {
                wins++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You win!");
            }
            console.log(yourScore);
        });
        $("#blue").on("click", function () {
            var num = parseInt(crystalarr[2]);
            yourScore += num;
            $("#yourScore").html("Your Score <br>" + yourScore);
            if (yourScore > randomNum) {
                losses++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You lose!");
            } else if (yourScore === randomNum) {
                wins++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You win!");               
            }
            console.log(yourScore);
        });
        $("#purple").on("click", function () {
            var num = parseInt(crystalarr[3]);
            yourScore += num;
            $("#yourScore").html("Your Score <br>" + yourScore);
            if (yourScore > randomNum) {
                losses++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You lose!");
            } else if (yourScore === randomNum) {
                wins++;
                startGame();
                $(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br><br><br> You win!");
            }
            console.log(yourScore);
        });
    }
    startGame();


    //Display wins and losses 



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

    // for (var i = 0; i < 4; i++) {
    //     var crystalArr = Math.floor(Math.random() * 11) + 1;
    //     console.log (crystalArr);
    //     $(".crystal").append(crystalArr);
    // }
});