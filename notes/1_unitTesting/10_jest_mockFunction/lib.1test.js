const lib = require("../lib");
const db = require("../db");

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    //creating a moke of getCustomerSync using jest
    db.getCustomerSync = jest
      .fn()
      .mockReturnValue({ id: customerId, points: 20 });

    // db.getCustomerSync = function (customerId) {
    //   console.log("Fake reading customer...");
    //   return { id: customerId, points: 20 };
    // };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);

    expect(order.totalPrice).toBe(9);
  });
});
