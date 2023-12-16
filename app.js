let form = document.querySelector("form");
let email = document.querySelector("#email");
let confirmEmail = document.querySelector("#confirm-email");

form.addEventListener("submit", function (event) {
  if (email.value === confirmEmail.value) {
    event.preventDefault();
    alert("Email addresses match");
  } else {
    alert("Email addresses do not match");
  }
});
