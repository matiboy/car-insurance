var request = require('superagent');
var expect = require('expect.js');

var drivers = require( '../addons/drivers.js' );
var audio = require( '../addons/audio.js' );
var windscreen = require( '../addons/windscreen.js' );
var flood = require( '../addons/flood.js' );
var riot = require( '../addons/riot.js' );
var addons = require( '../addons/addons.js' );

describe('Addons drivers', function(){
    it('Should return 0 when 2 or less drivers are selected', function(){
        expect(drivers.Drivers(1).getExtra()).to.equal(0);
        expect(drivers.Drivers(2).getExtra()).to.equal(0);
    });
    it('Should return 10 when 3 drivers are selected', function(){
        expect(drivers.Drivers(3).getExtra()).to.equal(10);
    });
    it('Should return 20 when 4 drivers are selected', function(){
        expect(drivers.Drivers(4).getExtra()).to.equal(20);
    });
    it('Should return 30 when 3 drivers are selected', function(){
        expect(drivers.Drivers(5).getExtra()).to.equal(30);
    });
    it('Should return 40 when 6 drivers are selected', function(){
        expect(drivers.Drivers(6).getExtra()).to.equal(40);
    });
});

describe('Addons audio system', function(){
    it('Should return 0 when 0 is selected', function(){
        expect(audio.AudioSystem(0).getExtra()).to.equal(0);
    });
    it('Should return 15 when 100 is selected', function(){
        expect(audio.AudioSystem(100).getExtra()).to.equal(15);
    });
    it('Should return 7.5 when 50 is selected', function(){
        expect(audio.AudioSystem(50).getExtra()).to.equal(7.5);
    });
    it('Should return 30 when 200 is selected', function(){
        expect(audio.AudioSystem(200).getExtra()).to.equal(30);
    });
});

describe('Addons windscreen', function(){
    it('Should return 0 when 0 is selected', function(){
        expect(windscreen.Windscreen(0).getExtra()).to.equal(0);
    });
    it('Should return 15 when 100 is selected', function(){
        expect(windscreen.Windscreen(100).getExtra()).to.equal(15);
    });
    it('Should return 7.5 when 50 is selected', function(){
        expect(windscreen.Windscreen(50).getExtra()).to.equal(7.5);
    });
    it('Should return 30 when 200 is selected', function(){
        expect(windscreen.Windscreen(200).getExtra()).to.equal(30);
    });
});

describe('Addons riot', function(){
    it('Should return 0 when No is selected, no matter the main price', function(){
        expect(riot.Riot('No', 0).getExtra()).to.equal(0);
        expect(riot.Riot('No', 10000).getExtra()).to.equal(0);
    });
    it('Should return 15 when Yes and 5000 is selected', function(){
        expect(riot.Riot('Yes', 5000).getExtra()).to.equal(15);
    });
    it('Should return 30 when Yes and 10000 is selected', function(){
        expect(riot.Riot('Yes', 10000).getExtra()).to.equal(30);
    });
});

describe('Addons flood', function(){
    it('Should return 0 when No is selected, no matter the main price', function(){
        expect(flood.Flood('No', 0).getExtra()).to.equal(0);
        expect(flood.Flood('No', 10000).getExtra()).to.equal(0);
    });
    it('Should return 25 when Yes and 5000 is selected', function(){
        expect(flood.Flood('Yes', 5000).getExtra()).to.equal(25);
    });
    it('Should return 50 when Yes and 10000 is selected', function(){
        expect(flood.Flood('Yes', 10000).getExtra()).to.equal(50);
    });
});

describe('Total addons', function(){
    var ao;
    it('Should return 0 when using a third party insurance', function(){
        ao = addons.Addons('Third party', {
            audio:200,
            drivers: 6,
            flood: {
                selected: 'Yes',
                price: 10000
            },
            riot: {
                selected:'No',
                price: 10000
            },
            windscreen: 100
        });
        expect(ao.getExtra()).to.equal(0);
    });
    it('Should return 165 when using below options', function(){
        ao = addons.Addons('Comprehensive', {
            audio:200,
            drivers: 6,
            flood: {
                selected: 'Yes',
                price: 10000
            },
            riot: {
                selected:'Yes',
                price: 10000
            },
            windscreen: 100
        });
        expect(ao.getExtra()).to.equal(165);
    });
    it('Should return 130 when using below options', function(){
        ao = addons.Addons('Comprehensive', {
            audio:500, 
            drivers: 2, 
            flood: {
                selected: 'Yes',
                price: 5000
            },
            riot: {
                selected:'No',
                price: 5000
            },
            windscreen: 200
        });
        expect(ao.getExtra()).to.equal(130);
    });
    
});