(function () {
  emailjs.init({
    publicKey: "8Jbep9TKhLqvizhPB",
  });
})();

function sendEmail() {
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();
  console.log("NAME", name);

  const data = {
    from_name: name,
    email_sender: email,
    message: message,
  };

  emailjs.send("service_l12oorv", "template_8buijhj", data).then(
    (response) => {
      console.log("SUCCESS", response.status, response.text);
      alert("Email sent successfully!");
    },
    (error) => {
      console.log("FAILED", error);
    }
  );
}
