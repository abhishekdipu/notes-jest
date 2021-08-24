const lib = require("../lib");
const db = require("../db");

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

describe("greet", () => {
  it("should return greeting message", () => {
    const result = lib.greet("Abhi");

    // expect(result).toBe("Welcome Abhi");//for exact equality
    //expect(result).toMatch(/Abhi/); // for maching some part of string, using toMatch (regex)
    expect(result).toContain("Abhi"); // for maching some part of string, using toContain
  });
});

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

//testing objects
describe("getProduct", () => {
  it("should retunrn the product with given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toBe({ id: 1, price: 10 });// it invalid approch to test object, as it'll match reference of objects

    //Too specific
    // it'll match object values not reference
    expect(result).toEqual({ id: 1, price: 10 }); //pass if whole object is matched

    //Proper way
    expect(result).toMatchObject({ id: 1 }); //pass if { id: 1 } is present in result

    expect(result).toHaveProperty("id", 1); //pass if id propert is present with value 1 ; it also see the typeof varibales so if we make 1 as string i.e. ("id", "1") then this TC WILL FAIL
  });
});

//Testing Exceptions
describe("registerUser", () => {
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

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    //creating a moke of getCustomerSync
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer...");
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);

    expect(order.totalPrice).toBe(9);
  });
});
