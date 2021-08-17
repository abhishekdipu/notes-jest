module.exports.getCustomerSync = function (id) {
  console.log("Reading a customer from mongodb....");
  return { id: id, point: 11 };
};
