let form = document.querySelector(".auth-form");
let email = form.querySelector("input[type='email']");
let pass = form.querySelector("input[type='password']");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let emailValid = email.value.includes("@");
    let passValid = pass.value.trim().length >= 3;

    if (!emailValid) {
        alert("Enter a valid email");
        return;
    }

    if (!passValid) {
        alert("Password must be at least 3 characters");
        return;
    }

    window.location.href = "chat.html";
});
