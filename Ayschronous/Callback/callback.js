
import { data } from "./data.js";

function fetchDatas(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log(`Data: ${JSON.stringify(data, null, 2)}`)
        console.log("Data fetched successfully!");
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Processing Data: ${JSON.stringify(data, null, 2)}`);
}

fetchDatas(processData);







function fetchData (callback) {

    const URL = 'https://dummyjson.com/users';

    fetch(URL)
    .then(respone=> respone.json())
    .then(data=> callback(null, data))
    .catch(error => callback(error, null))

}


function displayData(error, data) {
    if(error) {
        console.log(`Error Fetching data : ${JSON.stringify(error,null,2)}`);
        return;
    }
    else {
    console.log(`Fetched Data is: ${JSON.stringify(data, null, 2)}`)
    }
}

fetchData(displayData);