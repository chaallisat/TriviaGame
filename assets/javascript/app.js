//display a start button
//const startDiv = $("<div class='start'>");
//startDiv.text("Start");

//question variables

const question = ["Does Sora have a Nobody?", "Is Xemnas Anesm's Nobody?", "Is Sora a keyblade master?"];
let intervalId;
let clockRunning = false;
let time = 10;

/* const question1 = "Does Sora have a Nobody?";
const question2 = "Is Xemnas Anesm's Nobody?";
const question3 = "Is Sora a keyblade master?"; */

//on click of start button, display questions and start timer
$("#start-alert").on("click", function() {
$("#start-alert").empty();

$("#timer").append("00:10");
  
/* for (i = 0; i < questions.length; i++) {
  $("#questions").append("<h2>" + questions[i] + "<h2>") 
  $("#questions").append("<input id='q11' class='yes' type='radio' value='true'> True  " + "<input id='q12' class='no' type='radio' value='false'> False") 
} */

$(".questions").append("<h2>" + question[1] + "<h2>")
$(".questions").append("<h2>" + question[2] + "<h2>")
$(".questions").append("<h2>" + question[3] + "<h2>") 

});

/*function done() {
  if 
}*/

const subBtn = $("<button>");
subBtn.addClass("end").attr("type='submit");
$(".idk").append(subBtn);

$(subBtn).on("click", function(event) {
  event.preventDefault();

});

//end game when timer runs out or when done button is clicked
//display correct answers, wrong answers, and unanswerd 