









async function fetchData() {
    const URL = 'https://jsonplaceholder.typicode.com/users'; // Example API
    try {
     
      const response = await fetch(URL);
      const data = await response.json();
  
      const filteredData = data.filter((user) => { 
        return user.name.includes('e')
      
      });
  
    
      const userNames = filteredData.map((user) => {

       return user.name
      });
  
      
      const totalLength = userNames.reduce((sum, name) =>{ 
        
        return sum + name.length, 0});
  
      console.log("Filtered Users:", filteredData);
      console.log("User Names:", userNames);
      console.log("Total Length of Names:", totalLength);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();












//   const transactions = [
//     { id: 1, amount: 170, currency: "CAD"},
//     { id: 2, amount: 120, currency: "USD"},
//     { id: 3, amount: 150, currency: "CAD"},
//     { id: 4, amount: 125, currency: "EUR"},
//     { id: 5, amount: 180, currency: "EUR"},
//     { id: 6, amount: 200, currency: "USD"},
// ];


// //for each to log the value of transaction along with its id amount and currency to iterate over and log the value

// transactions.forEach((tx) => {
//     console.log(`Transaction ${tx.id} : ${tx.amount} ${tx.currency}`)

// });



// //.map provides a new array where all of the currency is converted to USD

// let convertedTransaction = transactions.map((tx) => {
//     let conversionRate = tx.currency === "NPR"? 1.42 : tx.currency === "EUR"? 1.1:1 ;
//     return{...tx, amount: tx.amount*conversionRate, currency: "USD"};
    

// });

// console.log(`ConvertedMoney : ${JSON.stringify(convertedTransaction, null, 2)}`);



// //filter method filter out the converted transaction which are greater than 100USD
// const largeTransaction = convertedTransaction.filter((tx) => {
//     return tx.amount>100;
// })

// console.log("Large Transactions:", largeTransaction);

// //reduce to get the sum of all the transaction that are greater than 100 USD
// const totalRevenue = largeTransaction.reduce((sum, tx) => sum + tx.amount, 0);

// console.log(`Total Revenue from Large Transactions: $${totalRevenue.toFixed(2)}`);


  


// const users = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     age: 28,
//     email: "alice@example.com",
//     isActive: true,
//     address: { city: "New York", zip: "10001" },
//     hobbies: ["reading", "traveling", "swimming"]
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     age: 32,
//     email: "bob@example.com",
//     isActive: false,
//     address: { city: "Los Angeles", zip: "90001" },
//     hobbies: ["gaming", "cycling"]
//   },
//   {
//     id: 3,
//     name: "Charlie Brown",
//     age: 24,
//     email: "charlie@example.com",
//     isActive: true,
//     address: { city: "Chicago", zip: "60601" },
//     hobbies: ["hiking", "photography"]
//   }
// ];

// const userNames = users.map(user => user.name);
// console.log("User Names:", userNames);

// console.log("User Emails:");
// users.forEach(user => console.log(user.email));

// const activeUsers = users.filter(user => user.isActive);
// console.log("Active Users:", activeUsers);

// const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// console.log("Total Age:", totalAge);

// /*
// - `.map()` extracts names from all users into a new array.
// - `.forEach()` prints each user's email individually.
// - `.filter()` selects only the active users and returns a new array.
// - `.reduce()` calculates the total sum of all users' ages.
// */





