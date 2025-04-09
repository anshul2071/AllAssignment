
export async function fetchAll() {

 

    const results = await Promise.allSettled([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
      fetch("invalid-url").then(res => res.json()),  // this will fail
      fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
    ]);
    console.log("This is AllSettled")
    results.forEach((result, index) => {
      
      if (result.status === "fulfilled") {
        
        console.log(` API ${index + 1} Success:`, result.value);
      } else {
        console.error(` API ${index + 1} Failed:`, result.reason);
      }
    });
  }
  
  
  

  // Instead of failing immediately, it waits for all promises to complete.
// It returns the status (fulfilled or rejected) for each promise individually.
