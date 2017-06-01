function newQuote () {
  
 document.getElementById("quote").innerHTML =  randomQuotes[Math.floor(Math.random() * 3)];
}

var randomQuotes = [
  ' "Rock bottom became the solid foundation on which I rebuilt my life" <br> <br><small> J.K. Rowling</smalll>',

  '“Happiness can be found even in the darkest of times, if one    only remembers to turn on the light.”<br> <br><small>Dumbledore</small>', 
  
 '“I will not say, do not weep, for not all tears are an evil.” <br><br><small>Gandalf</small>'
];