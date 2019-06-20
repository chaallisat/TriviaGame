//start JS
//$(document).ready(function() {
//create questions
/*function questions(){
const question1 = "Does Sora have a Nobody?";
const question2 = "Is Xemnas Anesm's Nobody?";
const question3 = "Is Sora a keyblade master?";

//set answers
//question1 = true;
//question2 = false;
//question3 = false;

//Display questions
$(".questions").append("<h2>" + question1 + "<h2>")
//$(".questions").append("<h5>True " + "or " + "False<h5>")
$(".questions").append("<h2>" + question2 + "<h2>")
$(".questions").append("<h2>" + question3 + "<h2>")
}*/

//starts the trivia functions
window.onload = function() {
    // questions()
     timer()
     $(".done").on("click", done);
 }
 
 
 //Set variables
 let intervalId;
 let clockRunning = false;
 let time = 0;
 
 //create timer
 $("#timer").text("00:10");
 
 //start timer on click
 function timer(){
     if (!clockRunning){
         intervalId = setInterval(count, 1000);
         clockRunning = true
     }
 }
 
 function done() {
     clearInterval(intervalId);
     clockRunning = false;
 }
 
 function count() {
 
     // DONE: increment time by 1, remember we cant use "this" here.
     time++;
   
     // DONE: Get the current time, pass that into the timeConverter function,
     //       and save the result in a variable.
     let converted = timeConverter(time);
     console.log(converted);
   
     // DONE: Use the variable we just created to show the converted time in the "display" div.
     $("#display").text(converted);
   }
   function timeConverter(t) {
   
     let minutes = Math.floor(t / 60);
     let seconds = t - (minutes * 60);
   
     if (seconds < 10) {
       seconds = "0" + seconds;
     }
   
     if (minutes === 0) {
       minutes = "00";
     }
     else if (minutes < 10) {
       minutes = "0" + minutes;
     }
   
     return minutes + ":" + seconds;
   }
 //if submit is clicked, then end quiz
 //if time runs out, then end quiz
 //once timer stops, show correct answers
 //display #right and #wrong
  
 
 
 //})