// const products = ["product1", "product2", "product3"];

const products = [
    {id: 1, name: "product1", description: "This is product 1", price: 10},
    {id: 2, name: "product2", description: "This is product 2", price: 20},
    {id: 3, name: "product3", description: "This is product 3", price: 30}
];

const cart = [];

products.forEach((product) => {
    // cart.push({...product, quantity: 1, total: product.price*1});
    // product.quantity = 1;
    // product.total = product.price * product.quantity;
    // cart.push(product);
    
    const obj={
        ...product,
        quantity: 1,
        total: product.price * product.quantity
    };
    cart.push(obj); 
});
console.log(cart);

// products.forEach((product) => {
//   console.log(product);
// });


