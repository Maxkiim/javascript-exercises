const removeFromArray = function(array, ...args) {
    // create new array to return
    const newArray = []
    array.forEach((element) => {
        if(!args.includes(element)){
            newArray.push(element);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
