// DOMContentLoaded block - 04.06.2025
document.addEventListener("DOMContentLoaded", () => {

  // Contact Form Logic - 04.06.2025
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();

      if (!name || !email || !msg) {
        message.textContent = "Please fill out all fields to proceed.";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Characters to be checked
      if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email.";
        return; // Exit sub if no valif address
      }

      // Temporary submission message. This I edit later with the page reload
      message.style.color = "green";
      message.textContent = "We appreciate your message! It has been sent.";

      form.reset();
    });
  }

  // Chatbot Logic - 04.06.2025
  const chatToggle = document.getElementById("chatToggle");
  const chatWindow = document.querySelector(".chat-window");

  console.log("Toggle button:", chatToggle);
  console.log("Chat window:", chatWindow);

  if (chatToggle) {
    chatToggle.addEventListener("click", () => {
      const isHidden = chatWindow.hasAttribute("hidden");
      console.log("Toggling chatbot. Was hidden:", isHidden);
      if (isHidden) {
        chatWindow.removeAttribute("hidden");
      } else {
        chatWindow.setAttribute("hidden", true);
      }
    });
  }

});
