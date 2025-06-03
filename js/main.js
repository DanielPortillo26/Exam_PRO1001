document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      

      form.reset();
    });
  }
});
