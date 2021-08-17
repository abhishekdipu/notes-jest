const lib = require("../../../lib");

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    //too general
    expect(result).toBeDefined(); // only fails if return statement is not there in functionb
    expect(result).not.toBeNull(); // only fails if function return null

    //Too specific
    expect(result[0]).toBe("INR"); //fails if 1st element is not 'INR'
    expect(result.length).toBe(3); //fails if length is not 3

    //Proper way
    expect(result).toContain("USD"); // fails if 'USD' is not present in

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(["AUD", "INR", "USD"])); // pass only if all these elements in any order gets return from function
  });
});
