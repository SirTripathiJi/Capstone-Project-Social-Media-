let heroForm = document.querySelector(".hero-form");
let heroEmail = heroForm.querySelector("input[type='email']");

heroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let error = document.getElementById("hero-email-error");

    if (!heroEmail.value.includes("@")) {
        if (!error) {
            error = document.createElement("p");
            error.id = "hero-email-error";
            error.style.color = "red";
            error.style.fontSize = "14px";
            heroEmail.insertAdjacentElement("afterend", error);
        }
        error.textContent = "Email must contain '@'";
    } else {
        if (error) error.remove();
        window.location.href = "login.html";
    }
});
