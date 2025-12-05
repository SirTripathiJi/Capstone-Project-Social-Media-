let heroForm = document.querySelector(".hero-form");
let heroEmail = heroForm.querySelector("input[type='email']");

heroForm.addEventListener("submit", function(event) {
    let errorElement = document.getElementById("hero-email-error");

    if (heroEmail.value.indexOf("@") === -1) {
        event.preventDefault();

        if (!errorElement) {
            errorElement = document.createElement("p");
            errorElement.id = "hero-email-error";
            errorElement.style.color = "red";
            errorElement.style.fontSize = "18px";
            errorElement.style.fontWeight = "600";
            errorElement.style.marginTop = "6px";
            heroEmail.insertAdjacentElement("afterend", errorElement);
        }

        errorElement.textContent = "Email must contain '@'";
    } else {
        if (errorElement) {
            errorElement.remove();
        }
        window.location.href = "login.html";
    }
});
