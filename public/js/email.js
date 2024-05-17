(function () {
  emailjs.init({
    publicKey: "8Jbep9TKhLqvizhPB",
  });
})();

async function sendEmail() {
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();

  if (name && email && message) {
    const data = {
      from_name: name,
      email_sender: email,
      message: message,
    };

    try {
      const response = await emailjs.send("service_l12oorv", "template_8buijhj", data);
      console.log("SUCCESS", response.status, response.text);
      alert("Email sent successfully!");
    } catch (error) {
      console.log("ERROR", error);
      alert("Failed to send the email");
    }
  } else {
    alert("Please input correctly");
  }
}
