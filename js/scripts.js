var vowels = ["a", "e", "i", "o", "u"];
var pigLatinArray = [];

var generator = function(str) {
  var arrayOfWords = str.split(' ');
  for (var i = 0; i < arrayOfWords.length; i++) {
    var addPigLatinEndingOneChar = arrayOfWords[i].slice(0, 1) + "ay";
    var addPigLatinEndingTwoChar = arrayOfWords[i].slice(0, 2) + "ay";
    if (arrayOfWords[i].charAt(0) === arrayOfWords[i].charAt(1)) {
      var sliceDoubleConsonant = arrayOfWords[i].slice(2);
      pigLatinArray.push(sliceDoubleConsonant.concat(addPigLatinEndingTwoChar))
    } else if(arrayOfWords[i].slice(0, 2) === "qu") {
      var sliceQu = arrayOfWords[i].slice(2);
      pigLatinArray.push(sliceQu.concat(addPigLatinEndingTwoChar));
    } else if (arrayOfWords[i].slice(0, 1) === "y") {
      var sliceY = arrayOfWords[i].slice(1);
      pigLatinArray.push(sliceY.concat(addPigLatinEndingOneChar));
    } else {
      var sliceLetter = arrayOfWords[i].slice(1);
      pigLatinArray.push(sliceLetter.concat(addPigLatinEndingOneChar));
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
