'use strict';

function AnswerGenerator(){

}
AnswerGenerator.prototype.generator = function(){
   var answers = [];

   while(answers.length < 4){
     var randomNumber = parseInt(Math.random() * (9 - 0) + 0,10);
     if(answers.indexOf(randomNumber) === -1){
       answers.push(randomNumber);
     }
   }
   var result = answers.join('');
   return result;
}

var a = new AnswerGenerator();
console.log(a.generator());

module.exports = AnswerGenerator;
