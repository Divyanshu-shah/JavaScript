function greet() {
    console.log("Hello, welcome to JavaScript!");
}
greet();
greet();


function greet(name) {
    console.log("Hello " + name);
}
greet("Alice");
greet("Bob");


function greet(name,place) {
    // console.log("Hello " + name + " from " + place);
    console.log(`Hello ${name} from ${place}`);
}
greet("Alice","New York");
greet("Bob","London");

