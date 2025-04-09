
//Promise.any() waits for the first successful (fulfilled) promise and ignores rejections unless all fail.


export async function fetchFirstSuccessful() {
    try {
      const response = await Promise.any([
        fetch("https://invalid-url").then(res => res.json()), 
        fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json()) 
      ]);
  
      console.log("First Successful Response:", response);
    } catch (error) {
      console.error("All requests failed:", error);
    }
  }
  

  



 export async function fetchFirstSuccess() {
    try {
      const response = await Promise.any([
        fetch("https://invalid-url")
          .then(res => res.ok ? res.json() : Promise.reject("Invalid Response")), // Handle failures
        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then(res => res.json()) // This will succeed
      ]);
  
      console.log("First Successful Response:", response);
    } catch (error) {
      console.error("All requests failed:", error);
    }
  }
  
 
  