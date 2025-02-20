const sumAll = function(first, second) {
    let lowerNum = first;
    let higherNum = second;
    let num = 0
    switch(true){
        case (typeof first !== 'number' || typeof second !== 'number'):
            return 'ERROR';
            break;
        case (!Number.isInteger(first) || !Number.isInteger(second)):
            return 'ERROR';
            break;
        case (first < 0 || second < 0):
            return 'ERROR';
            break;
        case (first > second):
            lowerNum = second;
            higherNum = first;
    }

    for(i = lowerNum; i <= higherNum; i++){
        num += i
    }
    return num
};

// Do not edit below this line
module.exports = sumAll;
