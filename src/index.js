module.exports = function reverse (n) {
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
}
