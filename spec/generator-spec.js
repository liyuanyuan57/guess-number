'use strict';

var AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator',function(){
  describe('#generator()',function(){
    var answerGenerator,answers;
    beforeEach(function(){
      var callcount = 0;
      spyOn(Math, 'random').and.callFake(function(){
        var randomNumbers = [0.1,0.1,0.2,0.3,0.4];
        return randomNumbers[callcount++];
     });
      answerGenerator = new AnswerGenerator(Math);
      answers = answerGenerator.generator();
    });

    it('can return a number',function(){
      var b = false;
       for(var m = 0; m < answers.length; m++){
           b = isNaN(parseInt(answers[m]));
          if(b){
            break;
          }
       }
       expect(b).toBe(false);
    });

  it('can return length should be 4',function(){
      var result = answers.length;
      expect(result).toBe(4);
    });

    it('can return every digir should not repeat',function(){
      var count = 0;
      for(var i = 0; i < answers.lenth; i++){
        for(var j = i+1; j <answers.length; j++)
        if(answers[i] === answers[j]){
           count++;
           break;
        }
      }
     expect(count).toBe(0);
    });

    it('should be a random reasult',function(){

      expect(answers).toBe('1234');
    });

  });
});
