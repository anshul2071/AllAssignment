function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above!");
    }
    return "Access granted!";
}

try {
    console.log(validateAge(16));  // Will throw an error
} catch (error) {
    console.log("Caught error:", error.message);
}
console.log(validateAge(25));




const num1= prompt("Enter first num");
const num2 = prompt("Enter Second Number");

try {
    if(num2>0 && num2 !=0) {
        console.log(`Divison: ${num1/num2} `);
    }

    else {
        throw "num cannot be divided by 0 it is undefined";
    }
}
    catch(error){
        console.log("Error Caught");

        console.log(`Error : ${error}`)
    }
    finally {
        console.log(`I will run no matter what`);
    }

