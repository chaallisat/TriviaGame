


$("#start-alert").on("click", start);

$("#timer").text("00:15");

$("#sub-btn").on("click", done);


let time = 15;
let intervalId;
let clockRunning = false;
let right = 0;
let wrong = 0;
/*const interval = setInterval(function(){
  // document.getElementById('count').innerHTML=count;
  $("#timer").innerHTML=count
  count--;
  if (count === 0){
    clearInterval(interval);
    // document.getElementById('count').innerHTML='Done';
    $("#timer").innerHTML='Done'
    // or...
    alert("You're out of time!");
  }
}, 1000);*/

console.log(time);

function done() {



}











//Timer Functions

function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }

}
function stop() {

  clearInterval(intervalId);
  clockRunning = false;
}




function count() {

  time--;

  let converted = timeConverter(time);
  console.log(converted);

  $("#timer").text(converted);
if (time === 0) {
  stop();
}
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

