function getStudentInfo() {
    return {
        name: "John Doe",
        email: "john@example.com",
        age: 20
    };
}

async function main() {
    const result = await getStudentInfo();
    console.log(result);
    console.log("Program completed");
}

main();
// getStudentInfo() should return name, email and age.