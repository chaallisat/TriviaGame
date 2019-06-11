//start JS
$(document).ready(function() {
//create questions
function questions(){
const question1 = "Does Sora have a Nobody?";
const question2 = "Is Xemnas Anesm's Nobody?";
const question3 = "Is Sora a keyblade master?";

//set answers
//question1 = true;
//question2 = false;
//question3 = false;

//Display questions
$(".questions").append("<h2>" + question1 + "<h2>")
$(".questions").append("<h5>True " + "or " + "False<h5>")
$(".questions").append("<h2>" + question2 + "<h2>")
$(".questions").append("<h2>" + question3 + "<h2>")
}
questions();
//create timer
//start timer on click
//if submit is clicked, then end quiz
//if time runs out, then end quiz
//once timer stops, show correct answers
//display #right and #wrong



})