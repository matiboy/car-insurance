var request = require('superagent');
var expect = require('expect.js');

var serviceTax = require( '../taxes/service-tax.js' );
var stamp = require( '../taxes/stamp.js' );

describe('Stamp', function(){
    it('Should return 10, always', function(){
        expect(stamp.Stamp().getStamp()).to.equal(10);
    });
});

describe('Service Tax', function(){
    it('Should return 0 if not company car', function(){
        expect(serviceTax.ServiceTax('Private Car', 200).getServiceTax()).to.equal(0);
    });
    it('Should return 17.92 if company car and premium is 298.72', function(){
        expect(serviceTax.ServiceTax('Company Car', 298.72).getServiceTax()).to.equal(17.92);
    });
});