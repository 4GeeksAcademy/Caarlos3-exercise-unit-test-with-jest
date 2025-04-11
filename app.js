
const fromEuroToDollar = function (eurosValue) {
    let dollarValue = eurosValue * 1.07;
    return dollarValue;
};

const fromDollarToYen = function (dollarsValue) {
    let yenValue = dollarsValue * 1.07 * 156.5;
    return yenValue;
};

const fromYenToPound = function (yenValue) {
    let poundValue = yenValue * 156.5 * 0.87;
    return poundValue;
}

module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound};