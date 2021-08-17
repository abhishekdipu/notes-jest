const lib = require("../../../lib");

//testing objects
describe("getProduct", () => {
  it("should retunrn the product with given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toBe({ id: 1, price: 10 });// it'll fail as it invalid approch to test object, as it'll match reference of objects

    //Too specific
    // it'll match object values not reference
    expect(result).toEqual({ id: 1, price: 10 }); //pass if whole object is matched

    //Proper way
    expect(result).toMatchObject({ id: 1 }); //pass if { id: 1 } is present in result

    expect(result).toHaveProperty("id", 1); //pass if id propert is present with value 1 ; it also see the typeof varibales so if we make 1 as string i.e. ("id", "1") then this TC WILL FAIL
  });
});
