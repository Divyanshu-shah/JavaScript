// function add(a, b) {
//     console.log(a);
//     console.log(b);
// }
// add(5, 10);


// function add(a, b) {
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[0]);
// }
// add(4,8,5,10);


// function add(...arr) {
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// const result = add(4,8,5,10);
// console.log(result);


const add = (...args) => {
  let sum = args.reduce((total, num) => total + num, 0);
  return sum;
};
const result = add(7, 5, 8, 9);
console.log(result);