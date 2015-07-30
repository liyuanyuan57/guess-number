'use strict';

var CompareNumber = require('../compare-number.js');

describe('compareNumber',function(){
    describe('#compare()',function(){
    /*  beforeEach(function(){
      var compareNumber = new CompareNumber();
    });*/

      it('can return 0A0B',function(){
        var compareNumber = new CompareNumber();
        var result = compareNumber.compare('1234','5678');
        expect(result).toBe('0A0B');
      });

      it('can return 4A0B',function(){
        var compareNumber = new CompareNumber();
        var result = compareNumber.compare('1234','1234');
        expect(result).toBe('4A0B');
      });

      it('can return 0A4B',function(){
        var compareNumber = new CompareNumber();
        var result = compareNumber.compare('1234','4321');
        expect(result).toBe('0A4B');
      });

    });
});
