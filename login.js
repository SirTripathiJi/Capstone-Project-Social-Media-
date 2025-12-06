let form = document.querySelector(".auth-form");
let emailInput = document.getElementById("login-email");
let passInput = document.getElementById("login-pass");
let errorMsg = document.getElementById("login-error");

form.addEventListener("submit", function(event) {
    let email = emailInput.value;
    let pass = passInput.value;

    if (email === "") {
        event.preventDefault();
        errorMsg.style.display = "block";
        errorMsg.textContent = "Email cannot be empty.";
    } 
    else if (!email.includes("@")) {
        event.preventDefault();
        errorMsg.style.display = "block";
        errorMsg.textContent = "Email must contain '@'.";
    } 
    else if (pass === "") {
        event.preventDefault();
        errorMsg.style.display = "block";
        errorMsg.textContent = "Password cannot be empty.";
    } 
    else {
        errorMsg.style.display = "none";
        window.location.href = "chat.html";
    }
});
