import { fetchApi } from "./fetchApi.js";


export function eventHandler() {
    btn.addEventListener("click", fetchApi);
    console.log("Event Listener Added...");
}
