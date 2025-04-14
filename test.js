
test("One euro should be 1.07 dollars", () => {
    const{fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 511.92 yens", () => {
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(511.92);
});

test("One yen should be 0.019 pounds", () => {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(0.019);
});