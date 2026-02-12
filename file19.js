// const products = ["product1", "product2", "product3"];

const product = [
    { id: 1, name: "product1", description: "This is product 1", price: 10 },
    { id: 2, name: "product2", description: "This is product 2", price: 20 },
    { id: 3, name: "product3", description: "This is product 3", price: 30 }
];
const cart = product.map((product) => {
    const obj = {
        ...product,
        quantity: 1,
    };
    return obj;
});
console.log(cart);




