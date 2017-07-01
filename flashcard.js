var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var georgeW  = BasicCard("Who was the first president of the United States?","George Washington");

console.log(georgeW.front);
console.log(georgeW.back);

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 
// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fulltext);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");