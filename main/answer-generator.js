'use strict';

function AnswerGenerator(math){
  this.math = math;
}
AnswerGenerator.prototype.generator = function(){
   var answers = '';
   var that = this;
   while(answers.length < 4){
    var getRandomNumber = function(){
      return  that.math.random()*10;
    }
    var randomNumber = parseInt(getRandomNumber(),10);
    if(answers.indexOf(randomNumber) === -1){
      answers += randomNumber;
    }
  }
   return answers;
}
/*var a = new AnswerGenerator(Math);
console.log(a.generator());
*/
module.exports = AnswerGenerator;
