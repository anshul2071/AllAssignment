//sorting example
let numbers = [15,3,1,4,8,7,9,10]

numbers.sort((a,b) => {
    return a-b;
});  


//here a-b means comparing two values.
//if a-b return negative a is sorted before b
//if a-b return positive b is sorted before a
// if a-b returns 0 value remains unchanged



let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
  ];
  
  users.sort((a, b) => a.age - b.age); // Sorting by age (ascending)
  console.log(users);




//A Symbol is a unique and immutable primitive value. Even if two symbols have the same description, they are still different.
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); 


const user = {
    name: "Alice",
    [sym1]: 101 // Using Symbol as a key
  };
  
  console.log(user.name); // "Alice"
  console.log(user[sym1]); // 101
  console.log(user.sym1); // undefined (because it's not a string key)

  

  //symbols cannot be accessed using .notation we always use bracket notation

  const symx = Symbol("id");
const sym = Symbol("role");

const userx = {
  name: "Alice",
  age: 25,
  [sym1]: 101,
  [sym2]: "admin"
};

// Using for...in loop
for (let key in user) {
  console.log(key, ":", user[key]);
}

console.log(Object.getOwnPropertySymbols(user));
//we cannot get the symbol key using for in loop
// The for...in loop only iterates over string-based properties (name and age).
// The Symbol properties (sym1 and sym2) are not included in for...in.
// To access symbol properties, we use Object.getOwnPropertySymbols(user).