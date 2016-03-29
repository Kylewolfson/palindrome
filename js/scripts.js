$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var word = $("#phrase").val().split("");

    for (var i=0; i < word.length; i +=1) {
       if (word[i] != " ") {
         $("#storage").append(word[i]);
       }
    }
    var word = $("#storage").val().split("");
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
