//Psuedocode 
//=====================
//at game start 
//random numnber is displayed between 19 -120
//crystals are assigned a random hidden value between 1-12 

//Listens for a crystal click 
//add the points to the total score 
//keeps listening to clicks 
//add points until they match the total score or go over(random # generated above)

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
var randomNum = Math.floor(Math.random() * 101 + 19);
console.log(randomNum);
var wins = 0;
var losses = 0;
var red = [];
var green = [];
var blue = [];
var purple = [];
var yourScore = [];
//============================

//Main Game
//============================
$(document).ready(function () {

$("#randomizedNum").html("Random Number <br>" + randomNum);
$("#yourScore").html("Your Current Score <br>" + yourScore);
//Dont forget to add the annoucement of when you win and lose in here later. 
$(".tracker").html("Wins= " + wins + "<br><br><br>" + "Losses= " + losses + "<br>");

});