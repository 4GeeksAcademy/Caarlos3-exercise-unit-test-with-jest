let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = function (eurosValue) {
    return eurosValue * oneEuroIs["USD"];
};

const fromDollarToYen = function (dollarsValue) {
    const result = (dollarsValue / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return Number(result.toFixed(2));
};

const fromYenToPound = function (yenValue) {
    const result = (yenValue / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return Number(result.toFixed(3));
};

module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound};