
//backend logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
  }

//Front End Logic
$(document).ready(function() {
  $("form#yearInput").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    console.log(year);
    var result = leapYear(year);
    $("#result").text(result);
  });
});
