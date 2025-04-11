
const fromEuroToDollar = function (eurosValue) {
    let dollarValue = eurosValue * 1.07;
    return dollarValue;
};

const fromDollarToYen = function (dollarsValue) {
    let yenValue = dollarsValue * 156.5;
    return yenValue;
};

module.exports = {fromEuroToDollar, fromDollarToYen};