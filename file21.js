// const products = ["product1", "product2", "product3"];

// const product = [
//     { id: 1, name: "product1", description: "This is product 1", price: 10 },
//     { id: 2, name: "product2", description: "This is product 2", price: 20 },
//     { id: 3, name: "product3", description: "This is product 3", price: 30 }
// ];

// const cart = product.map((product) => {
//     const obj = {
//         ...product,
//         quantity: 1,
//     };
//     return obj;
// });

// console.log(cart);

const products = [
    {id: 1, name: "product1", description: "This is product 1", price: 10,category:"laptop"},
    {id: 2, name: "product2", description: "This is product 2", price: 20,category:"phone"},
    {id: 3, name: "product3", description: "This is product 3", price: 30,category:"tablet"},
    {id: 4, name: "product4", description: "This is product 4", price: 40,category:"laptop"},
    {id: 5, name: "product5", description: "This is product 5", price: 50,category:"phone"},
    {id: 6, name: "product6", description: "This is product 6", price: 60,category:"tablet"}
];
let search = "laptop";
let text = 1;

// const resultArray = products.map((product) => product);
// const resultArray = products.filter((product) => product.category === text);   
// do not use this use find instead of filter when you want to find a single element in an array

const resultArray = products.find((product) => product.id === text);
console.log(resultArray);



