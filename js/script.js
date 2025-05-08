function submitMail() {
  let parms = {
    name: document.getElementById("name ").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message ").value,
  };
  emailjs
    .Send("service_nb4ppyj", "template_6qess8t", parms)
    .then(alert("Email Sent!!"));
}
