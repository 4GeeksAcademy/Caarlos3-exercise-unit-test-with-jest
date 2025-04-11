
module.exports = {fromEuroToDollar};

const fromEuroToDollar = function (eurosValue) {
    let dollarValue = eurosValue * 1.07;
    return dollarValue;
};

