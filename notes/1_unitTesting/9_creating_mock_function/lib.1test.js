const lib = require("../../../lib");
const db = require("../../../db");

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    //creating a moke (fake) of getCustomerSync (it's a new function which doesn't talk to DB and also it's not actually doing anything)
    db.getCustomerSync = function (customerId) {
      console.log("Fake reading customer...");
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);

    expect(order.totalPrice).toBe(9);
  });
});
