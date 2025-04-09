// for each simply used to iterate over each elemnt in an arrya
let array = [1,2,3,4,5,6,7];


array.forEach((num,i,array)=> {
    return `numbers are ${num[i]}`;
});


console.log(array);


//map to create a new array doesnot change the previous are rather create a new array based on the function implemented

const array1 = [1,2,3,4,5,6,7,8,10,11,13,15,14];

let arr  = array1.map((num, i, array1) => {
    return ` Square of ${array1[i]} : ${num*num}`;
})
console.log(arr);


//filter to create a new array and filtering based on condition

let array2 = array1.filter((num) => {
    return num%2==0;
})

console.log(array2)



//reduce to reduce the array element


let array3 = [1,2,4,5,6,7,8];

let arr4 = array3.reduce((prev,curr) => {
    return prev<curr ? prev : curr;
})


console.log(`The Smallest Element in an array is ${arr4}`);






//example which includes foreach, map, filter, reduce at ince


const transactions = [
    { id: 1, amount: 170, currency: "CAD"},
    { id: 2, amount: 120, currency: "USD"},
    { id: 3, amount: 150, currency: "CAD"},
    { id: 4, amount: 125, currency: "EUR"},
    { id: 5, amount: 180, currency: "EUR"},
    { id: 6, amount: 200, currency: "USD"},
];


transactions.forEach((tx) => {
    console.log(`Transaction ${tx.id} : ${tx.amount} ${tx.currency}`)

});


let convertedTransaction = transactions.map((tx) => {
    let conversionRate = tx.currency === "NPR"? 1.42 : tx.currency === "EUR"? 1.1:1 ;
    return{...tx, amount: tx.amount*conversionRate, currency: "USD"};
    

});

console.log(`ConvertedMoney : ${JSON.stringify(convertedTransaction, null, 2)}`);


const largeTransaction = convertedTransaction.filter((tx) => {
    return tx.amount>100;
})

console.log("Large Transactions:", largeTransaction);


const totalRevenue = largeTransaction.reduce((sum, tx) => sum + tx.amount, 0);

console.log(`Total Revenue from Large Transactions: $${totalRevenue.toFixed(2)}`);

