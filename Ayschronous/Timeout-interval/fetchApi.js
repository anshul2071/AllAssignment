const resultmsg = document.querySelector("#result");
const btn = document.querySelector("#btn");
const URL = "https://jsonplaceholder.typicode.com/posts";


resultmsg.textContent = ""; 
let dots = 0
export async function fetchApi() {
    try {

        const loadingInterval = setInterval(()=> {
            btn.textContent = "Loading" + ".".repeat(dots%4);
            dots ++;
            btn.disabled = true;  
            resultmsg.textContent = ""; 
        }, 500)
        

        
        const response = await fetch(URL);
        const data = await response.json();

        
const mapped = data.filter((par) => par.title);

const formattedData = mapped.slice(0, 25).map((item, index) => 
    `<p><strong>${index + 1}.</strong> ${item.title}</p>`
).join("");


setTimeout(() => {
    clearInterval(loadingInterval);
    btn.textContent = "ClickMe";
    btn.disabled = false; 
    resultmsg.innerHTML = formattedData; 
}, 4000); 

    } catch (error) {
        console.error("Error fetching data:", error);
        btn.textContent = "Error! Try Again"; 
        btn.disabled = false; 
        resultmsg.textContent = "Failed to fetch data. Please try again!";
    }
}
