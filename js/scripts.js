var vowels = ["a", "e", "i", "o", "u"];
var pigLatinArray = [];
var generator = function(str) {
  var arrayOfWords = str.split(' ');
  for (var i = 0; i < arrayOfWords.length; i++) {
    if(arrayOfWords[i].charAt(0) === arrayOfWords[i].charAt(1)) {
      var sliceDoubleConsonant = arrayOfWords[i].slice(2);
      var addPigLatinEnding = arrayOfWords[i].slice(0, 2);
      pigLatinArray.push(sliceDoubleConsonant.concat(addPigLatinEnding + 'ay'))
    }
   for (var j = 0; j < vowels.length; j++) {
     if(arrayOfWords[i].charAt(0) === vowels[j]) {
       pigLatinArray.push(arrayOfWords[i].concat("way"));
     }
   }
  }
  return pigLatinArray.join(' ');
}
$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val().toLowerCase();
    var outputString = generator(userInput);
    $("#output").text(outputString);
  });
});
