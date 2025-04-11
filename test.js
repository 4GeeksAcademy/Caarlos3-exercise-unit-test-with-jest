
test("One euro should be 1.07 dollars", () => {
    const{fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 586.0925 yens", () => {
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(3.5);
    const expected = 3.5 * 1.07 * 156.5;
    expect(fromDollarToYen(3.5)).toBe(586.0925);
});

test("One yen should be 476.5425", () => {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 156.5 * 0.87;
    expect(fromYenToPound(3.5)).toBe(476.5425);
});