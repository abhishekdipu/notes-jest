const lib = require("../../../lib");

//Testing Exceptions
describe("registerUser", () => {
  //testing -ve flow
  it("should throw if username is falsy", () => {
    // fasly in JS: 0, null, false, '', NaN, undefined

    //to test any one value
    expect(() => {
      lib.registerUser(0);
    }).toThrow();

    //to test for all falsy values
    const falsyValues = [0, null, false, "", NaN, undefined];
    falsyValues.forEach((a) => {
      expect(() => lib.registerUser(a)).toThrow();
    });
  });

  //2nd test to test happy flow
  it("should return user object if valid username is passed", () => {
    const result = lib.registerUser("abhi");
    expect(result).toMatchObject({ username: "abhi" }); //to validate if username is present
    expect(result.id).toBeGreaterThan(0); // as we can't validate time , so we are validating if id property contains a positive number
  });
});
