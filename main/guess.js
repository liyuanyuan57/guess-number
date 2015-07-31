'use strict';

function Guess(compareNumber,answerGenerator){
 this.compareNumber = compareNumber;
 this.answers = answerGenerator.generator();
}

Guess.prototype.getResult = function(inputs){
return   this.compareNumber.compare(this.answers, inputs);
}

module.exports = Guess;
