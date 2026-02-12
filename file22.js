const products = [
    {id: 1, name: "product1", description: "This is product 1", price: 10,category:"laptop"},
    {id: 2, name: "product2", description: "This is product 2", price: 20,category:"phone"},
    {id: 3, name: "product3", description: "This is product 3", price: 30,category:"tablet"},
    {id: 4, name: "product4", description: "This is product 4", price: 40,category:"laptop"},
    {id: 5, name: "product5", description: "This is product 5", price: 50,category:"phone"},
    {id: 6, name: "product6", description: "This is product 6", price: 60,category:"tablet"}
];

const cart = [];

function addToCart(id){
    const product = products.find(product => product.id === id);
    cart.push({...product, quantity: 1});
    // cart.push(products.find(product => product.id === id));
}


function increment(id){
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
    }
}


addToCart(1);
addToCart(3);
addToCart(5);
console.log(cart);
increment(1);
increment(5);
console.log(cart);















// const cart = [];
// function addToCart(id, qty = 1) {
//     const product = products.find(product => product.id === id);
//     const Item = cart.find(item => item.id === id);
//     if (Item) {
//         Item.quantity += qty;
//     } else {
//         cart.push({ ...product, quantity: qty });
//     }
// }

