
export const add = (num1, num2) => {

    return num1+num2;
}

export const sub = (num1, num2) => {

    return num1-num2;
}

export const mul = (num1, num2) => {

    return num1*num2;
}

export const div = (num1, num2) => {
 
    if(num2!==0){
        return num1/num2;
    }
    else {
        throw new TypeError("Cannot divide by zero")

    }

}