var TAX = 0.06;
exports.ServiceTax = function(type, premium){
    return {
        getServiceTax: function() {
            if(type == 'Company Car'){
                return Math.round(premium * TAX * 100)/100;
            }
            return 0;
        }
    }
}