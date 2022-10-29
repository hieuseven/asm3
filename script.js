"use strict";
const info = document.querySelector(".info");
const forms = document.querySelector(".form");

const btnSubmit = document.getElementById("submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnSubmit.addEventListener("click", function () {
  const emails = document.getElementById("email").value;
  if (emails.match(regex)) {
    info.classList.remove("hidden");
    forms.classList.add("hidden");
    return true;
  } else {
    info.classList.add("hidden");
    alert("You have entered an invalid email address!");
    return false;
  }
});
// chỉnh sửa phần Viewmore , Viewless
const viewmore = document.querySelectorAll(".viewmore");
const viewless = document.querySelectorAll(".viewless");
const more = document.querySelectorAll(".more");
for (let i = 0; i < viewmore.length; i++) {
  viewmore[i].addEventListener("click", function () {
    more[i].classList.remove("hidden");
    viewmore[i].classList.add("hidden");
  });
  viewless[i].addEventListener("click", function () {
    more[i].classList.add("hidden");
  });
}
