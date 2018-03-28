var vowels = ["a", "e", "i", "o", "u"];
var pigLatinArray = [];
var generator = function(str) {
  var arrayOfWords = str.split(' ');
  for (var i = 0; i < arrayOfWords.length; i++) {
   for (var j = 0; j < vowels.length; j++) {
     if(arrayOfWords[i].charAt(0) === vowels[j]) {
       pigLatinArray.push(arrayOfWords[i].concat("way"));
     }
   }
  }
  return pigLatinArray;
}
$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val().toLowerCase();
  });
});
