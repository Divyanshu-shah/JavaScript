function user(){
    let password = "1234";
    function checkPassword(inputPassword){
        
        return inputPassword === password;
    }
    return checkPassword;
}

const checkPassword = user();
console.log(checkPassword("123"));