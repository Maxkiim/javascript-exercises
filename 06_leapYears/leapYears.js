const leapYears = function(year) {
    if (((year % 100 == 0) && //check if year is divisible by 100  
        (year % 400 !== 0)) || // check if year is divisible by 400
        // if year is divisible by 100 but not 400 return false
        (year % 4 !== 0) // Check if year is divisible by 4
        // if year is not divisible by 4 return false
        ){
            return false
    } else {
        return true
    }

};

// Do not edit below this line
module.exports = leapYears;
