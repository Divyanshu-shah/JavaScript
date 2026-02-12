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
        cart.push(products.find(product => product.id === id));
}
addToCart(1);
addToCart(2);
addToCart(3);
console.log(cart);