const year = new Date().getFullYear();
const fourthOfJuly = new Date("December 24, 2019 18:00:00").getTime();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>Hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>Minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>Seconds</div> \
</div>";

}, 1000);