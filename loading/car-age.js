var moment = require('moment');

var TOO_OLD = 7;
var WAY_TOO_OLD = 10;
var TOO_OLD_PENALTY = 10;
var WAY_TOO_OLD_PENALTY = 15;

exports.CarAge = function(year){
    return {
        year: year,
        now: moment(),
        getLoading: function() {
            if(this.year+WAY_TOO_OLD<=this.now.year()){
                return WAY_TOO_OLD_PENALTY;
            }
            if(this.year+TOO_OLD<=this.now.year()){
                return TOO_OLD_PENALTY;
            }
            return 0;
        }
    }
}