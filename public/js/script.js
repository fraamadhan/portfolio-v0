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

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let category = $(this).html();
  $("#title-menu").html(category);

  if (category == "All Menu") {
    showAllMenu();
    return;
  }
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
