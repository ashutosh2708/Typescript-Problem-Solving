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
