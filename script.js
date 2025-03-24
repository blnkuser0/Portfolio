document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("switch");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark"); 
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light"); 
        }
    });
});
