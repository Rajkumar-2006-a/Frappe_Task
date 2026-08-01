console.log("Website JS Loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const s = document.getElementById("info");

    if (s) {
        s.style.color = "red";
    }
});