const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    fetchUserData(24); // Change the number to fetch a different user
});

async function fetchUserData(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        // Manually throwing an error for a non-200 status (e.g., 404)
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    } finally {
        console.log("API call finished.");
    }
}
