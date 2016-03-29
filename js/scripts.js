$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var word= $("#phrase").val().split("");
    var reverseWord = word.map(function(letter) {
  return letter;
});
  $("#success").show();
  $("#failure").hide();
  reverseWord.reverse();
  for (var i=0; i < reverseWord.length; i +=1) {
   if (word[i] === reverseWord[i]) {}
   else {$("#failure").show();
   $("#success").hide(); }
  }
  });
});
