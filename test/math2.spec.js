const assert = require('assert');
const Math2 = require('../js/math2.js');

describe('Math2 class', function(){
    it('Sum async two numbers', function(done){
        const math2 = new Math2();
        this.timeout(3000); 

        math2.sum2(5,5, value =>{
            assert.equal(value, 10);
            done();
        });        
    });
});