
const sum = require("./App");
const sub = require("./App");
const mul = require("./App");
const div = require('./App');
const floor = require('./App');


// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("sub 4 - 1 to equal 3", () =>{
//     expect(sub(4, 1)).toBe(3);
// });

// test("multiply 2 * 2 to equal to 4", () =>{
//     expect(mul(2, 2)).toBe(4);
// });


// test("div 4 / 2 to equal to 2", () =>{
//     expect(sub(4, 2)).toBe(2);
// });

// test('floor 5/2 to equal to 1', () =>{
//   expect(floor(5, 2)).toBe(1);
// } ) 


// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(sum(a + b)).not.toBe(0);
//       }
//     }
//   });


// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);           //This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });


  