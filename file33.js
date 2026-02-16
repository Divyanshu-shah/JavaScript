// const student = {
//     name: 'John Doe',
//     age: 20,    
// }


// const { name, age } = student;
// console.log(name);
// console.log(age);


// const {name:userName} = student;
// console.log(userName);


// const student = {
//     name: 'John Doe',
//     age: 20,
//     city: 'jalandhar'
// }
// const {city="Amritsar"} = student;
// console.log(city);


const student = {
    name: 'John Doe',
    age: 20,
    city: 'jalandhar',
    marks: {
        math: 85,
        science: 90,    
    }
}
const {marks} = student;
console.log(marks);
const {marks:math} = student;
console.log(math);