//display a start button
//const startDiv = $("<div class='start'>");
//startDiv.text("Start");

//question variables

const questions = ["Does Sora have a Nobody?", "Is Xemnas Anesm's Nobody?", "Is Sora a keyblade master?"]

/* const question1 = "Does Sora have a Nobody?";
const question2 = "Is Xemnas Anesm's Nobody?";
const question3 = "Is Sora a keyblade master?"; */

//on click of start button, display questions and start timer
$("#start-alert").on("click", function(event) {
$("#start-alert").empty();
  
for (i = 0; i < questions.length; i++) {
  $("#questions").append("<h2>" + questions[i] + "<h2>") 
  $("#questions").append("<input id='q11' class='yes' type='radio' value='true'> True"); 
}

/* $(".questions").append("<h2>" + question1 + "<h2>")
$(".questions").append("<h2>" + question2 + "<h2>")
$(".questions").append("<h2>" + question3 + "<h2>") */

})
//end game when timer runs out or when done button is clicked
//display correct answers, wrong answers, and unanswerd 