const lib = require("../../../lib");

describe("greet", () => {
  it("should return greeting message", () => {
    const result = lib.greet("Abhi");

    //for exact equality
    expect(result).toBe("Welcome Abhi");

    // for maching some part of string, using toMatch (regex)
    expect(result).toMatch(/Abhi/);

    // for maching some part of string, using toContain
    expect(result).toContain("Abhi");
  });
});
