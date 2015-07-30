'use strict';

var AnswerGenerator = require('../answer-generator.js');

describe('AnswerGenerator',function(){
  describe('#generator()',function(){
    var answerGenerator,answers;
    beforeEach(function(){
      answerGenerator = new AnswerGenerator();
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

    it('can return a number and the length of it is 4',function(){
      var result = answers.length;
      expect(result).toBe(4);
    });

    it('can return a no-repeat number',function(){
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

    it('can return a random number',function(){
    
    });

  });
});
