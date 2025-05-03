document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_nb4ppyj", "template_cit8eik", this).then(
      function (response) {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      }
    );
  });
