var time
$(document).ready(function() {

  $(".timer_button").on('click', function(event) {
    event.preventDefault();
    time = $(".timer_input").val()

    var timeFunc = function(){
    var min = Math.floor(time/60);
    var secs = Math.floor((time-(60*min))/10);
    var sec = time%10;
    $(".minute").text(min);
    $(".seconds").text(secs);
    $(".second").val("").text(sec);
      timerBody(time)
    }
    var timer = setInterval( timeFunc, 1000)
    function timerBody(seconds) {
      console.log(seconds)
      if (seconds === 0) {
        clearInterval(timer)
      }
      time--
    }git
  });
});
