//array is an object to store multiple value be it empty, of same data types and of different data types


//a simple array example


const animal = ["Dog", "Lion", "Tiger", "Buffalo", "Cow"];

//each array elements are assign with a specifice sets of key that is being called indexes and
//index = len -1




//array methods to add elements push() and unshift()
// push() : add at the end of the Array
// unshift(): add at the begining



animal.push("cat");

animal.unshift("snake");



//we can add and delete array element using indexes

animal[2] = "Cheetah"

animal.splice(2,1,"Hyena");


const food = ["meat", "rice", "daal"];

let mixedarr = animal.concat(food);


console.log(`array of element is : ${mixedarr}`);


