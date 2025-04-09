

const reverseStr = (str) => {

    if(str === ""){
        return "";


    }

    else {
        return reverseStr(str.slice(1)) + str [0];
    }
}


console.log(`The reverse of the string Hello is ${reverseStr("Hello")}`)