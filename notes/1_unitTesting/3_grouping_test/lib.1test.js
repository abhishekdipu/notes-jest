const lib = require("../../../lib");

/*
- to group bunch of related test we user 'describe()' function;
- with describe keyword we create a test suite , testSuite is container for multiple related test cases
*/

describe("absolute", () => {
  it("should return a positive number if the input is postive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  //checking absolute function for -ve number
  it("should return a positive number if the input is negative", () => {
    //checking absolute function for +ve number
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  //checking absolute function for 0
  it("should return  0 if the input is 0", () => {
    //checking absolute function for +ve number
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
