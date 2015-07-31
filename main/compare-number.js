'use strict';

function CompareNumber(){

}
CompareNumber.prototype.compare = function(answers,inputs){
  var m = 0, n = 0;
  for(var i = 0; i < answers.length; i++){
    for(var j = 0; j< inputs.length; j++){
      if(answers[i] === inputs[j]){
        if(i === j){
          m++;
        }else{
          n++;
        }
      }
    } 
 }
 var  result = m + 'A' + n +'B';
 return result;
}

module.exports = CompareNumber;
