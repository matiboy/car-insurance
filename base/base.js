var lodash = require('lodash');
var BASICS = {
    Comprehensive: {
        'Peninsular Malaysia': {
            1400: 0,
            1650 :	27.65,
            2200 :	55.85,
            3050 :	83.95,
            4100 :	111.6,
            4250 :	139.25,
            4400 :	167.45,
            1000000: 195.1
        },
        'Sabah / Sarawak / WP Labuan': {
            1400: 0,
            1650 : 21.1,
            2200 :	42.3,
            3050 :	63.1,
            4100 :	84.3,
            4250 :	105.1,
            4400 :	126.3,
            1000000: 147.1
        }
    },
    'Third Party': {
        'Peninsular Malaysia': {
            1400: 84.15,
            1650 :  94.50,
            2200 :	105.30,
            3050 :	116.10,
            4100 :	126.45,
            4250 :	136.80,
            4400 :	147.60,
            1000000: 157.95
        },
        'Sabah / Sarawak / WP Labuan': {
            1400: 49.5,
            1650 : 54.90,
            2200 : 61.80,
            3050 : 68.40,
            4100 : 73.80,
            4250 : 80.40,
            4400 : 85.80,
            1000000: 92.40
        }
    }
};
var BASE_VALUE = {
    'Peninsular Malaysia': 237.35,
    'Sabah / Sarawak / WP Labuan': 178.20
}
var SUM_INSURED = {
    'Peninsular Malaysia': 0.026,
    'Sabah / Sarawak / WP Labuan': 0.0203
}
var MINIMUM = {
    'Peninsular Malaysia': 1000,
    'Sabah / Sarawak / WP Labuan': 1000
}

exports.Premium = function(type, location, cc, sum) {
    function getTypePremium(type){
        return BASICS[type];
    }
    function getLocationPremium(cur, location){
        return cur[location];
    }
    
    function getCCPremium(cur, cc){
        var p = lodash.find(cur, function(v, k){
            var asInt = parseInt(k);
            return cc <= asInt;
        });
        return p;
    }
    
    function getBasePremium(type, location, cc, sum) {
        var cur = getTypePremium(type);
        cur = getLocationPremium(cur, location);
        cur = getCCPremium(cur, cc);
        if(type == 'Third Party') {
            return cur;
        } else {
            var baseValue = BASE_VALUE[location];
            var max = Math.max(0, sum - MINIMUM[location])*SUM_INSURED[location];
            return baseValue + max + cur;
        }
    }
    return {
        getPremium: function(){
            var basePremium = getBasePremium(type, location, cc, sum);
            return Math.round(basePremium*100)/100;
        }
    }
}