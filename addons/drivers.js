var FREE_DRIVERS = 2;
var PER_DRIVER = 10;

exports.Drivers = function(count){
    return {
        count: count,
        getExtra: function() {
            return PER_DRIVER * Math.max(0,this.count - FREE_DRIVERS);
        }
    }
}