var request = require('superagent');
var expect = require('expect.js');

var base = require( '../premium/premium.js' );

describe('Total premium', function(){
    it('Should return 408.24 when using following values', function(){
        var price = 1000;
        expect(base.Total({
            coverageType: 'Comprehensive',
            carType: 'Company Car',
            location: 'Peninsular Malaysia',
            cc: 4250,
            sum: price,
            audio: 200,
            windscreen: 200,
            drivers: 2,
            flood: {
                selected: 'Yes',
                price: price
            },
            riot: {
                selected: 'No',
                price: price
            },
            age: 75,
            manufacturedYear: 2011,
            claims: 0,
            ncd: 25
        }).getTotal()).to.equal(408.24);
    });
    it('Should return 482.88 when using following values', function(){
        var price = 5000;
        expect(base.Total({
            coverageType: 'Comprehensive',
            carType: 'Private Car',
            location: 'Peninsular Malaysia',
            cc: 1650,
            sum: price,
            audio: 500,
            windscreen: 100,
            drivers: 4,
            flood: {
                selected: 'Yes',
                price: price
            },
            riot: {
                selected: 'Yes',
                price: price
            },
            age: 45,
            manufacturedYear: 2004,
            claims: 2,
            ncd: 30
        }).getTotal()).to.equal(482.88);
    });
    
});