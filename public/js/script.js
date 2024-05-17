(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

//TO-DO
/*

send email
move to details
display all my projects in details page
static I provide the data through JSON
 */

const mobile = document.getElementById("mobile-development");
const website = document.getElementById("web-development");

mobile.addEventListener("click", function () {
  localStorage.setItem("category", "Mobile Development");
  window.location.href = "detail.html";
});

website.addEventListener("click", function () {
  localStorage.setItem("category", "Website Development");
  window.location.href = "detail.html";
});
