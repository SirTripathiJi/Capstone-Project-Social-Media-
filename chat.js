let toggleBtn = document.querySelector(".theme-toggle");
let body = document.querySelector(".chat-body");

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light mode";
    } else {
        toggleBtn.textContent = "Dark mode";
    }
});
