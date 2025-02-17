document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    localStorage.setItem(
      "contactData",
      JSON.stringify({ name, email, message })
    );
    alert("Message saved successfully!");
  });
