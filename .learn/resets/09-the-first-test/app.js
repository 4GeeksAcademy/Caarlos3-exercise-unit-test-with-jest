let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = function (eurosValue) {
    return eurosValue * oneEuroIs["USD"];
};

const fromDollarToYen = function (dollarsValue) {
    return (dollarsValue / oneEuroIs["USD"]) * oneEuroIs["JPY"];
};

const fromYenToPound = function (yenValue) {
    return (yenValue / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
}

module.exports = {fromEuroToDollar, fromDollarToYen,fromYenToPound};