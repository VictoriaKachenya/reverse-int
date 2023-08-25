module.exports = function reverse (n) {
    let nModule =  Math.abs(n);
    let nString = nModule.toString();
    let result = '';
    for (i =(nString.length-1); i >= 0; i = i - 1) {
    result = `${result}${nString[i]}`;
    }
    return result;
    }
