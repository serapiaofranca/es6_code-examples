// exemplo lib 'chai'

const assert = require('assert');
const Math3 = require('../js/math3.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math3 class', function(){

    beforeEach(function(){
        value = 0;
    });

    it.only('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: function loat(){
                console.log('Caled!')
            }
        };
        sinon.stub(res, 'load').returns('xpto');

        const math3 = new Math3();

        math3.printSum(req, res, 7, 7);

        //res.restore();

        expect(res.load.args[0][1]).to.equal(14);
    });
});