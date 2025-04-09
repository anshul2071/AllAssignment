
function sumOfNum (n) {
    if (n === 0) {
        return 0;
    }

    else {
        return n + sumOfNum(n-1);
    }


}

let n = 12;

console.log(`sum of numbers are ${sumOfNum(n)}`);