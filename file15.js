let cart = []
// clicking on add to cart button on iphone
cart = [...cart,{name: "iphone", price: 45000, quantity: 1}];
// console.log(cart);
// clicking on add to cart button on speaker
cart = [...cart, {name: "speaker", price: 6000, quantity: 1}];
console.log(cart);


const order = {
    email: "john@example.com",
    items: cart,
    orderValue: 46000,
    status: "pending"
}

db.orders.insertOne(order);


// create flipkart database
// create orders collection > email, items, orderValue, status, orderDate
// create user collection > name, email, password, role
// Insert seed data
// write aggregation query to display all the orders placed by a particular user



// use flipkart

// create orders collection

db.orders.insertMany([
  {
    email: "Sam@gmail.com",
    items: ["Keyboard"],
    orderValue: 2000,
    status: "Delivered",
    orderDate: new Date("2025-02-05")
  },
  {
    email: "john@gmail.com",
    items: ["Mobile"],
    orderValue: 30000,
    status: "Pending",
    orderDate: new Date("2025-02-03")
  }
])

// create user collection

db.users.insertMany([
  {
    name: "Sam",
    email: "Sam@gmail.com",
    password: "12345",
    role: "customer"
  },
  {
    name: "John",
    email: "john@gmail.com",
    password: "12345",
    role: "customer"
  }
])

// write aggregation query to display all the orders placed by a particular user

db.orders.aggregate([
  {
    $match: { email: "Sam@gmail.com" }
  }
])

db.orders.aggregate([
  {
    $match: { email: "john@gmail.com" }
  }
]) 
