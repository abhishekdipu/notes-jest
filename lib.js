const db = require("./db");

/*
- For Testing numbers
- general rule is no_of_unitTests >= no_of_execution_paths
*/
//we have 3 execution paths so we should have atleast 3 unit tests
module.exports.absolute = function (number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
};

//For Testing String
module.exports.greet = function (name) {
  return "Welcome " + name;
};

//For Testing Arrays
module.exports.getCurrencies = function () {
  return ["INR", "USD", "AUD"];
};

//For Testing Objects
module.exports.getProduct = function (productId) {
  return { id: productId, price: 10 };
};

//For testing Exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error("User is required");

  return { id: new Date().getTime(), username: username };
};

//for testing function dependent on other function
module.exports.applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) order.totalPrice *= 0.9;
};
