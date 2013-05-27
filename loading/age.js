var TOO_OLD = 65;
var TOO_YOUNG = 25;
var LOADING = 10;

exports.Age = function(age){
    return {
        age: age,
        getLoading: function() {
            if(this.age<TOO_YOUNG || this.age>TOO_OLD){
                return 10;
            }
            return 0;
        }
    }
}