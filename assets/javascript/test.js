//display a start button

//question variables

const question = ["Does Sora have a Nobody?", "Is Xemnas Anesm's Nobody?", "Is Sora a keyblade master?"];
let intervalId;
let clockRunning = false;
let time = 10;

var totalQuestions = $('.questions');

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
//$($questions.get(currentQuestion)).fadeIn();

//on click of start button, display questions and start timer
$("#start-alert").on("click", function() {
$("#start-alert").empty();

$($questions.get(currentQuestion)).fadeIn();

$("#timer").append("00:10");
  
/* for (i = 0; i < questions.length; i++) {
  $("#questions").append("<h2>" + questions[i] + "<h2>") 
  $("#questions").append("<input id='q11' class='yes' type='radio' value='true'> True  " + "<input id='q12' class='no' type='radio' value='false'> False") 
} 

$("#questions").append("<h2>" + question[0] + "<h2>" + "<input id='q11' class='yes' type='radio' value='true'> True <input id='q12' class='no' type='radio' value='false'> False")
$("#questions").append("<h2>" + question[1] + "<h2>")
$("#questions").append("<h2>" + question[2] + "<h2>") */

});

function endGame() {
  const subBtn = $("<button>Submit</button>");
  subBtn.addClass("end").attr("type='submit");
  $(".idk").append(subBtn);
  
  $(subBtn).on("click", function(event) {
    event.preventDefault();
    
  });
  
}

/*function done() {
  if () 
}*/

//end game when timer runs out or when done button is clicked
//display correct answers, wrong answers, and unanswerd 





//count amount right
//count amount wrong
//questions disappear
