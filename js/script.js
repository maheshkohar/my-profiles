function sendMail() {
  var params = {
    name: document.getElementById("name").ariaValueMax,
    email: document.getElementById("email").ariaValueMax,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_ph8w1sh";
  const templateID = "template_klt0e96";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message  sent  successfully ");
    })
    .catch((err) => console.log(err));
}
