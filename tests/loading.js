var request = require('superagent');
var expect = require('expect.js');
var moment = require('moment');

var ageFactory = require( '../loading/age.js' );
var carAgeFactory = require( '../loading/car-age.js' );
var claimsFactory = require( '../loading/claims.js' );
var loadingFactory = require( '../loading/loading.js' );
var ncd = require('../loading/ncd.js');

describe('Loading age', function(){
    var age;
    
    it('Should return 10% when driver is over 65', function(){
        age = ageFactory.Age(66);
        expect(age.getLoading()).to.equal(10);
    });
    it('Should return 10% when driver is below 25', function(){
        age = ageFactory.Age(66);
        expect(age.getLoading()).to.equal(10);
    });
    it('Should return 0% when driver is between 25 and 65', function(){
        age = ageFactory.Age(25);
        expect(age.getLoading()).to.equal(0);
        age = ageFactory.Age(65);
        expect(age.getLoading()).to.equal(0);
        age = ageFactory.Age(43);
        expect(age.getLoading()).to.equal(0);
    });
});
describe('Loading claims', function(){
   var claims; 
   it('Should return 25% if more than 2 claims in past 2 years', function(){
        claims = claimsFactory.Claims(3);
        expect(claims.getLoading()).to.equal(25);
    });
    it('Should return 15% if  2 claims in past 2 years', function(){
        claims = claimsFactory.Claims(2);
        expect(claims.getLoading()).to.equal(15);
    });
    it('Should return 0% if 1 claim in past 2 years', function(){
        claims = claimsFactory.Claims(1);
        expect(claims.getLoading()).to.equal(0);
    });
    it('Should return 0% if 0 claims in past 2 years', function(){
        claims = claimsFactory.Claims(0);
        expect(claims.getLoading()).to.equal(0);
    });
    
});
describe('Loading car age penalty', function(){
    var carAge;
    var now;
    beforeEach(function(){
        now = moment();
    });
    it('Should return 15% if car age is more than 10 years', function(){
        now.subtract('years',12);
        carAge = carAgeFactory.CarAge(now.year());
        expect(carAge.getLoading()).to.equal(15);
    });
    it('Should return 15% if car age is equal to 10 years', function(){
        now.subtract('years',10);
        carAge = carAgeFactory.CarAge(now.year());
        expect(carAge.getLoading()).to.equal(15);
    });
    it('Should return 10% if car age is more than 7 years, less than 10', function(){
        now.subtract('years',8);
        carAge = carAgeFactory.CarAge(now.year());
        expect(carAge.getLoading()).to.equal(10);
    });
    it('Should return 10% if car age is equal to 7 years', function(){
        now.subtract('years',7);
        carAge = carAgeFactory.CarAge(now.year());
        expect(carAge.getLoading()).to.equal(10);
    });
    it('Should return 0% if car age is less than 7 years', function(){
        now.subtract('years',6);
        carAge = carAgeFactory.CarAge(now.year());
        expect(carAge.getLoading()).to.equal(0);
    });
});
describe('Total loading', function(){
    var loading;
    it('Should return 1.10 when using age 30, car built 8 years ago and one claim last year', function(){
        loading = loadingFactory.Loading({age:30, manufacturedYear: 2005, claims: 1});
        expect(loading.getLoading()).to.equal(1.10);
    });
    it('Should return 1.20 when using age 17, car built 8 years ago and one claim last year', function(){
        loading = loadingFactory.Loading({age:18, manufacturedYear: 2005, claims: 1});
        expect(loading.getLoading()).to.equal(1.20);
    });
    it('Should return 1.20 when using age 70, car built 8 years ago and one claim last year', function(){
        loading = loadingFactory.Loading({age:70, manufacturedYear: 2005, claims: 1});
        expect(loading.getLoading()).to.equal(1.20);
    });
    it('Should return 1.45 when using age 70, car built 8 years ago and 4 claims last year', function(){
        loading = loadingFactory.Loading({age:70, manufacturedYear: 2005, claims: 4});
        expect(loading.getLoading()).to.equal(1.45);
    });
});

describe('NCD multiplier', function(){
    it('Should return 0.75 when using NCD 25', function(){
        expect(ncd.NCD(25).getNCD()).to.equal(0.75);
    });
});