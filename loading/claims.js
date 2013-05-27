var TOO_MANY_CLAIMS = 15;
var WAY_TOO_MANY_CLAIMS = 25;

exports.Claims = function(count){
    return {
        count: count,
        getLoading: function() {
            if(count === 0){
                return 0;
            }
            if(count == 1){
                return 0;
            }
            if(count == 2){
                return TOO_MANY_CLAIMS;
            }
            return WAY_TOO_MANY_CLAIMS;
        }
    }
}