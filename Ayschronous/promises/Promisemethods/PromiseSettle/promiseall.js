


export async function fetchPromiseAll() {
    try {

        console.log("This is PromiseAll");
        const [postData, userData] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
                .then(res => res.ok ? res.json() : Promise.reject(`HTTP Error: ${res.status}`)), // Manually reject if not OK
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then(res => res.ok ? res.json() : Promise.reject(`HTTP Error: ${res.status}`)),
            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then(res => res.ok ? res.json() : Promise.reject(`HTTP Error: ${res.status}`))
        ]);

        console.log(`Data from First API: ${JSON.stringify(postData, null, 2)}`);
        console.log(`Data from Second API: ${JSON.stringify(userData, null, 2)}`);
    } catch (error) {
        console.error("Error Fetching Data:", error);
    }
}



// //as we know in promise.all if one promise fails and isnot fullfilled all of promise will fail so it will show error as a result if one promise fails