var age = require('./age.js');
var carage = require('./car-age.js');
var claims = require('./claims.js');

exports.Loading = function(opts){
    return {
        age: opts.age,
        manufacturedYear: opts.manufacturedYear,
        claims: opts.claims,
        getLoading: function() {
            return 1+(age.Age(this.age).getLoading()+carage.CarAge(this.manufacturedYear).getLoading()+claims.Claims(this.claims).getLoading())/100;
        }
    }
}