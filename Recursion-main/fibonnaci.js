function fibobacci (n) {

    if(n === 0 || n === 1){
        return 1;
    }

    else {
        
        return fibobacci(n-1) + fibobacci(n-2);
    }

}


let n = 6;

console.log(`The given Fibonacci Series is ${fibobacci(n)}`);