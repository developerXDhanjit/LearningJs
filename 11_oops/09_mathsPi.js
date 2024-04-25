let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
//Not writable

let chai = {
  name: "Red Chai",
  price: 10,
  isGood: true,
};

Object.defineProperty(chai, "price", {
 
  writable: false,
//   enumerable: false,
});

chai.name = "green Tea";
chai.price = "139";

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// console.log(chai);

for (const [key, val] of Object.entries(chai)) {
  if (typeof val !== "function") {
    console.log(key, val);
  }
}
