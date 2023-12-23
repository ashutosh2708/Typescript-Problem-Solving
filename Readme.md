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

## ✔️Generic

Que. Convert below code into generic type
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any{
// return a + b;
// }

```typescript
function add<T, U>(a: T, b: U, c: boolean) {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

const result1 = add<number, string>(5, "Ashutosh", true);
const result2 = add<string, number>("Hello", 5, false);

const addTwo = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(addTwo(5, 10));
```
