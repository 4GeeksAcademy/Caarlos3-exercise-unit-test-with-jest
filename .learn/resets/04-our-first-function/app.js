const sum = (a, b) => {
    return a + b;
};
console.log(sum(7,3));

module.exports = {sum};

const euro = 1;

const fromEuroToDollar = (num) => {
    return euro * 1.07;
}

console.log(fromEuroToDollar(2))