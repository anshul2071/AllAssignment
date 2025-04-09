const fetchApi = async() => {

    const URL = "https://dummyjson.com/users"

    try {
        const response = await fetch(URL);
        const data  = await response.json();
        console.log(data)
    }

    catch(error) {

        console.error(error);

    }

   

}


fetchApi();

console.log("hello");