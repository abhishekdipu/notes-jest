const ex = require("../exerice1");

describe("fizzBuzz", () => {
  it("should throw exception if input is not number", () => {
    expect(() => ex.fizzBuzz("a")).toThrow();
    expect(() => ex.fizzBuzz("1")).toThrow();
    expect(() => ex.fizzBuzz(null)).toThrow();
    expect(() => ex.fizzBuzz({})).toThrow();
  });

  it("should return fizz if number is div by 3", () => {
    const result = ex.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if number is div by 5", () => {
    const result = ex.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return FizzBuzz if number is div by 3 and 5", () => {
    const result = ex.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
});
