





async function fetchApi() {
    
    const URL = "https://dummyjson.com/users";

    try {

    const response = await fetch(URL);
    if(!response.ok) {
        throw new Error("failed to fetch");

    }

    const data = await response.json()

    const filteredData = data.users.map(user => ({
        id: user.id,
        firstName : user.firstName,
        email: user.email

    }));


    console.log(`Filtered Data is : ${JSON.stringify(filteredData, null, 2)}`);

}
catch(error){
    console.error(`Error Fetching User Data : ${JSON.stringify(error)}`)
}

}


fetchApi();