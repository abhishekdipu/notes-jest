- to test strings

```js
//function
greet = function (name) {
  return "Welcome " + name;
};

//testing the function
describe("greet", () => {
  it("should return greeting message", () => {
    const result = greet("Abhi");

    expect(result).toBe("Welcome Abhi"); //for exact equality
    expect(result).toMatch(/Abhi/); // for maching some part of string, using toMatch //(regex)
    expect(result).not.toMatch(/Minnu/); //for not to match
    expect(result).toContain("Abhi"); // for maching some part of string, using toContain
  });
});
```
