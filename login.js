let loginForm = document.querySelector(".auth-form");
let emailInput = document.getElementById("login-email");
let passInput = document.getElementById("login-pass");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = emailInput.value.trim();
    let pass = passInput.value.trim();

    let error = document.getElementById("login-error");

    if (!email.includes("@") || pass.length === 0) {
        if (!error) {
            error = document.createElement("p");
            error.id = "login-error";
            error.style.color = "red";
            error.style.fontSize = "14px";
            loginForm.appendChild(error);
        }
        error.textContent = "Enter a valid email and password.";
        return;
    }

    if (error) error.remove();
    window.location.href = "chat.html";
});
