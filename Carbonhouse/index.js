"use strict";

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".nav__link--button");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  document.body.classList.toggle("nav--visible");
});

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";

  if (modal.classList.contains("")) body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
