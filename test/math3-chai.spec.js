// exemplo lib 'chai'

const assert = require('assert');
const Math3 = require('../js/math3.js');
const expect = require('chai').expect;

describe('Math3 class', function(){

    beforeEach(function(){
        value = 0;
    });

    it('Sum async two numbers', function(done){
        const math3 = new Math3();
        this.timeout(3000); 

        math3.sum3(5,5, value =>{
            expect(value).to.equal(10);
            done();
        });        
    });

    it('Verify object properties'), function(){
        const math3 = new math3();
        const obj = {
            name: 'Rogerio Serapa'
        };

        expect(obj).to.have.property('name').equal('Rogerio Serapa');
        // expect(obj).to.deep.equal(ob2); // -> comparacao de igualdade de valores
        done();
    }
});