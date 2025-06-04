// DOMContentLoaded block - 04.06.2025
document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  const API_KEY = "API_KEY"; // check this later

  // Safe chack: if any of the following are missing then exit the method, to avoid errors
  if (!chatForm || !chatInput || !chatMessages) return;

  
  // Helper funcitions - 04.06.2025
  function appendMessage(sender, text) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function replaceLastMessage(sender, text) {
    const last = chatMessages.lastElementChild;
    if (last) {
      last.innerHTML = `<strong>${sender}:</strong> ${text}`;
    }
  }


});
