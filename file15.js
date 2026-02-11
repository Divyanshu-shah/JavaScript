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