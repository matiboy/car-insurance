var PERCENTAGE = 15;

exports.Windscreen = function(price){
    return {
        price: price,
        getExtra: function() {
            return this.price * PERCENTAGE / 100;
        }
    }
}