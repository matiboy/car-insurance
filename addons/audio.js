var PERCENTAGE = 15;

exports.AudioSystem = function(price){
    return {
        price: price,
        getExtra: function() {
            return this.price * PERCENTAGE / 100;
        }
    }
}