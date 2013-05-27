var base = require("../base/base.js");
var loading = require("../loading/loading.js");
var ncd = require("../loading/ncd.js");
var stamp = require("../taxes/stamp.js");
var serviceTax = require("../taxes/service-tax.js");
var ao = require("../addons/addons.js");

exports.Total = function(opts) {
    return {
        getTotal: function(){
            var basePremium = base.Premium(opts.coverageType, opts.location, opts.cc, opts.sum).getPremium();
            var addons = ao.Addons(opts.coverageType, opts).getExtra();
            var multiplierLoading = loading.Loading(opts).getLoading();
            var multiplierNCD = ncd.NCD(opts.ncd).getNCD();
            var stampV = stamp.Stamp().getStamp();
            var totalBasePremium = basePremium * multiplierLoading * multiplierNCD;
            var taxes = serviceTax.ServiceTax(opts.carType, totalBasePremium + addons).getServiceTax();
            return Math.round((totalBasePremium + stampV + addons + taxes)*100)/100;
        }
    }
}