var request = require('superagent');
var expect = require('expect.js');

var base = require( '../base/base.js' );

describe('Base premium calculation', function(){
    it('Should return 291 when using following values', function(){
        expect(base.Premium('Comprehensive', 'Peninsular Malaysia', 1500, 2000).getPremium()).to.equal(291);
    });
    it('Should return 425.30 when using following values', function(){
        expect(base.Premium('Comprehensive', 'Peninsular Malaysia', 3000, 5000).getPremium()).to.equal(425.30);
    });
    it('Should return 116.10 when using following values', function(){
        expect(base.Premium('Third Party', 'Peninsular Malaysia', 3000, 5000).getPremium()).to.equal(116.1);
    });
    it('Should return 54.9 when using following values', function(){
        expect(base.Premium('Third Party', 'Sabah / Sarawak / WP Labuan', 1500, 2000).getPremium()).to.equal(54.9);
    });
    it('Should return 283.3 when using following values', function(){
        expect(base.Premium('Comprehensive', 'Sabah / Sarawak / WP Labuan', 4250, 500).getPremium()).to.equal(283.3);
    });
});