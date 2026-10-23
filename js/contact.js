"use strict";

//Hämta element frå DOM//
const form = document.querySelector(".contact-form");
const submitBtn = document.querySelector("#submit");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textInput = document.querySelector("#message");

const errorList = document.querySelector("#errorlist");

//Eventlyssnare för formulär//
form.addEventListener("submit", onSubmit);

//Array för felmeddelanden
let errors = [];

function onSubmit(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = textInput.value.trim();

  if (!validateForm(name, email, message)) {
    displayErrors();
  }
}

//Validerar formuläret
function validateForm(name, email, message) {
  errors = [];
  errorList.innerHTML = "";
  let validate = true;

  if (name === "") {
    errors.push("Vänligen ange ditt namn");
    validate = false;
  }
  if (email === "") {
    errors.push("Vänligen ange din e-postadress");
    validate = false;
  }
  if (message === "") {
    errors.push("Vänligen ange din fråga");
    validate = false;
  }
  return validate;
}

//Skriver ut felmeddelande
function displayErrors() {
  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      const LiEl = document.createElement("li"); //Skapar li element
      LiEl.innerHTML = errors[i];
      errorList.appendChild(LiEl); // Lägger ihop element
    }
  }
}
