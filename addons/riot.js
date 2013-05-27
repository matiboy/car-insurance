var PERCENTAGE = 0.3;

exports.Riot = function(choice, price){
    return {
        price: price,
        choice: choice,
        getExtra: function() {
            if(choice == 'No'){
                return 0;
            }
            return this.price * PERCENTAGE / 100;
        }
    }
}