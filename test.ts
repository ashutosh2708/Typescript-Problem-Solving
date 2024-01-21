interface Products {
  name: string;
  price: number;
  quantity: number;
}

const product1: Products = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

const product2: Products = {
  name: "PC",
  price: 20000,
  quantity: 10,
};

// calculate total price

const calculateTotalPrice = (product: Products): number => {
  const { price, quantity } = product;
  return price * quantity;
};

// call

console.log(calculateTotalPrice(product1));
console.log(calculateTotalPrice(product2));
