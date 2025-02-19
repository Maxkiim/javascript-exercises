const reverseString = function(str) {
    let word = ''
    for(i = str.length; i > 0; i--){
        word = word + str.at(i-1)
    }
    return word
};

// Do not edit below this line
module.exports = reverseString;
