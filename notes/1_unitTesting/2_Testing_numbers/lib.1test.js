const lib = require("../../../lib");

//checking absolute function for +ve number
test("absolute - should return a positive number if the input is postive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

//checking absolute function for -ve number
test("absolute - should return a positive number if the input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

//checking absolute function for 0
test("absolute - should return  0 if the input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
