var audio = require('./audio.js');
var drivers = require('./drivers.js');
var flood = require('./flood.js');
var riot = require('./riot.js');
var windscreen = require('./windscreen.js');

exports.Addons = function(type, opts){
    return {
        audio: opts.audio,
        drivers: opts.drivers,
        flood: opts.flood,
        riot: opts.riot,
        windscreen: opts.windscreen,
        getExtra: function() {
            if(type!='Comprehensive'){
                return 0;
            }
            return audio.AudioSystem(this.audio).getExtra()
                + drivers.Drivers(this.drivers).getExtra()
                + windscreen.Windscreen(this.windscreen).getExtra()
                + flood.Flood(this.flood.selected, this.flood.price).getExtra()
                + riot.Riot(this.riot.selected, this.riot.price).getExtra();
        }
    }
}