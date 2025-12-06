document.querySelector(".hero-form").addEventListener("submit", function(e) {
    let email = document.querySelector("input[type='email']").value;

    if (!email.includes("@")) {
        e.preventDefault();
        alert("Email must contain '@'");
    }
});
