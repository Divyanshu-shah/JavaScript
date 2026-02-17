async function getStudentInfo() {
    try {
        const student = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: "Divyanshu Shah",
                    email: "divyanshu@gmail.com",
                    age: 21
                });
            }, 1000);
        });

        return student;

    } catch (error) {
        throw new Error("Failed to fetch student info");
    }
}

async function main() {
    try {
        const result = await getStudentInfo();
        console.log(result);
    } catch (error) {
        console.log("Error:", error.message);
    }

    console.log("Program completed");
}

main();
