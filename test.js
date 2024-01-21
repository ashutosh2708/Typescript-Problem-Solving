var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
var product2 = {
    name: "PC",
    price: 20000,
    quantity: 10,
};
// calculate total price
var calculateTotalPrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
// call
console.log(calculateTotalPrice(product1));
console.log(calculateTotalPrice(product2));
