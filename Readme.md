# Typescript Problem Solving

## ✔️Objects

Que. Create a product object. Define a product with properties for name, price, and quantity. Create a product object with the data.

```typescript
const productObj: {
  name: string;
  price: number;
  quantity: number;
} = {
  name: "Laptop",
  price: 10000,
  quantity: 5,
};

console.log(productObj);
```

## ✔️Type Aliases

Que. Give the procuct object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price X quantity) of the product.

```typescript
type Product = {
  name: string;
  price: number;
  quantity: number;
};

const productObj: Product = {
  name: "Laptop",
  price: 10000,
  quantity: 5,
};

console.log(productObj);

const calculateTotalPrice = (productObj: Product) => {
  return `${productObj.name} total cost ${
    productObj.price * productObj.quantity
  }`;
};

console.log(calculateTotalPrice(productObj));
```
