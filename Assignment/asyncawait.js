const btn = document.querySelector("#button");
const messageDiv = document.querySelector("#message");




btn.addEventListener("click", async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/users'; // Example API
  try {
    // Fetch the data from the API
    const response = await fetch(url);
    const data = await response.json();

    // Filter the data
    const filteredData = data.filter((user) => { 
        return user.name.includes('e')
      
      });
  
    // Map the filtered data to get user names
    const userNames = filteredData.map((user) => {

        return user.name
       });
   

    // Reduce the user names to get the total length
    const totalLength = userNames.reduce((sum, name) => sum + name.length, 0);

    // Log the results
    console.log("Filtered Users:", filteredData);
    console.log("User Names:", userNames);
    console.log("Total Length of Names:", totalLength);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
