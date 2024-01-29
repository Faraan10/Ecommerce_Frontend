let Books = [
  { name: "operating system", qty: 20, price: 200, pic: "../os.jpeg" },
  { name: "java script", qty: 20, price: 200, pic: "../js.jpeg" },
  { name: "react", qty: 70, price: 500, pic: "../react.jpeg" },
  { name: "NODE JS ", qty: 40, price: 700, pic: "../node.jpeg" },
  { name: "MONGO DB ", qty: 20, price: 200, pic: "../mongo.jpeg" },
];

let book = Books.filter((d) => {
  return d.name != "react";
});

let price = book.filter((f) => {
  return f.price;
});

//console.log(book);

const filter = Books.filter((f) => {
  return f.name == "react";
});
//console.log(filter);

const change = (filter.price = 200);

console.log(filter);
