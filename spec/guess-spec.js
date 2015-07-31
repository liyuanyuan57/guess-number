'use strict';

var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');
var Guess = require('../main/guess.js');


describe('Guess',function(){
describe('#getResult',function(){
   it('can return to be a correct result',function(){
     var answerGenerator = new AnswerGenerator();
     spyOn(answerGenerator,'generator').and.returnValue('1234');
     var compareNumber = new CompareNumber();
     spyOn(compareNumber,'compare').and.callFake(function(answers,inputs){
       if(answers === '1234' && inputs === '1243'){
         return '2A2B';
       }
     });
   var guess = new Guess(compareNumber,answerGenerator);
   expect(guess.getResult('1243')).toBe('2A2B');
 });
});
});
