const fetchData = () => {
   
    return new Promise((resolve, reject) => {
         const URL = "https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
        .then(response => response.json())
        .then(data=> {
          const filtereData =   data.filter(post => post.id <=10);
          resolve(filtereData);
    })
        .catch(error => reject(error));
    });
}


fetchData()
.then(post => {
    const formattedPosts = post.map(post => ({
        id: post.id,
        title: post.title.toUpperCase()
    }));
    console.log(`FetchedData: ${JSON.stringify(formattedPosts, null, 2)}`)

})
.catch(error => console.error(`Error Fetching data: ${JSON.stringify(error,null,2)}`));

