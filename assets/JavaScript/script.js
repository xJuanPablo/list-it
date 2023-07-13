




$(document).ready(function () {
  var timeDisplayEl = $('#currentDay');
  var currentHour = dayjs().format('HH');
  
  
  // Add a listener for click events on the save button and store it to local storage.
  $('.saveBtn').click(function(event){
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
    
  });
  //Retrieve user input from local storage, even when refreshed
  $('#hour-09 .description').val(localStorage.getItem('hour-09'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // apply past, present, or future class depending on time
  $('.time-block').each( function(){
    var hourDiv = parseInt($(this).attr('id').split('-')[1]);
    console.log(hourDiv);
    console.log(currentHour);
    if (currentHour == hourDiv) {
      $(this).addClass('present');
    }else if (currentHour < hourDiv) {
      $(this).addClass("future");
    } else if (currentHour > hourDiv){
      $(this).addClass('past');
    }
    
  })
  
  // Make time appear in header
  function displayClock() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  displayClock();
  setInterval(displayClock, 1000);
});