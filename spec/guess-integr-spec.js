'use strict';
var Guess = require('../main/guess.js');
var AnswerGenerator = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');



describe('Guess',function(){
  describe('#getResult',function(){
    var answerGenerator, compareNumber,answers,guess;
    beforeEach(function(){
      var callcount = 0;
      spyOn(Math, 'random').and.callFake(function(){
      var randomNumbers = [0.1,0.1,0.2,0.3,0.4];
      return randomNumbers[callcount++];
    });
    answerGenerator = new AnswerGenerator(Math);
    compareNumber = new CompareNumber();
    guess = new Guess(compareNumber,answerGenerator);
  });

   it('can return 0A0B',function(){
   expect(guess.getResult('5678')).toBe('0A0B');
   });

   it('can return 0A4B',function(){
   expect(guess.getResult('4321')).toBe('0A4B');
   });

   it('can return 4A0B',function(){
   expect(guess.getResult('1234')).toBe('4A0B');
   });

});
});
