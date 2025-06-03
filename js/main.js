document.addEventListener("DOMContentLoaded", () => {
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
});
