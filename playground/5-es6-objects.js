// Object property shorthand

const name = "Meelis";
const userAge = 28;

const user = {
  name,
  userAge,
  location: "Tallinn",
};

console.log(user);

// Object destructing

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;

console.log(productLabel, stock, rating);

const transaction = (type, { label, stock, price }) => {
  console.log(type, label, stock, price);
};

transaction("order", product);
