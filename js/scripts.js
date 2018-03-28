$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    console.log(userInput);
  });
});
