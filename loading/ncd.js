exports.NCD = function(v){
    return {
        getNCD: function() {
            return 1-v/100;
        }
    }
}