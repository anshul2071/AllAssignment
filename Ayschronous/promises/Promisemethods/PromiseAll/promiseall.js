
//before promise.all 2nd api fetching needs to wait for first one to complete for its execution


export async function fetchSequential () {
    try {
      
        //first api call
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postData = await postResponse.json();



        //second api call//

        const userResponse = await fetch ("https://jsonplaceholder.typicode.com/users");
        const userData = await userResponse.json();


    console.log(`Data from First Api is : ${JSON.stringify(postData, null, 2)}`);
    console.log(`Data from Second Api is : ${JSON.stringify(userData, null, 2)}`);
    



    }

    catch(error) {
        console.error(`Error Fetching Data : ${JSON.stringify(error, null, 2)}`);
    }


}

//now from above we can see that the first api is taking lets say 200ms and only afer that the 2nd api is getting fetching which also take lets say 200ms
//So there is extra 200ms delay so to overcome this we use promise.all for parallell fetching



export async function fetchParallel () {
    try {
        const [postData, userData] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
        ]);

        console.log(`Data from First Api is : ${JSON.stringify(postData, null, 2)}`);
        console.log(`Data from Second Api is : ${JSON.stringify(userData, null, 2)}`);



    }

    catch(error) {
        console.error(`Error Fetching Data : ${JSON.stringify(error, null, 2)}`);
    }
}