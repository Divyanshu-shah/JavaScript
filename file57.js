// const employees = ["john", "jane", "doe"];
// for(let e in employees) {
//     console.log(e);
//     // console.log(employees[e]);
// }

const students = {name:"john",age:23};
for(let s of Object.keys(students)) {
    console.log(students[s]);
}