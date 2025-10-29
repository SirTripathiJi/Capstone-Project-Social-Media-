const loginForm = document.getElementById("loginForm")
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
        localStorage.setItem("linkverseUser", email)
        window.location.href = "chat.html"
    })
}

const chatForm = document.getElementById("chatForm")
const messagesDiv = document.getElementById("messages")

if (chatForm) {
    const user = localStorage.getItem("linkverseUser") || "You"
    let messages = JSON.parse(localStorage.getItem("linkverseMessages") || "[]")

    function renderMessages() {
        messagesDiv.innerHTML = ""
        messages.forEach((msg) => {
            const div = document.createElement("div")
            div.className = `message ${msg.sender === user ? "you" : ""}`
            div.textContent = `${msg.sender}: ${msg.text}`
            messagesDiv.appendChild(div)
        })
    }

    renderMessages()

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const input = document.getElementById("messageInput")
        const text = input.value.trim()
        if (text) {
            messages.push({ sender: user, text })
            localStorage.setItem("linkverseMessages", JSON.stringify(messages))
            input.value = ""
            renderMessages()
        }
    })
}
