"use strict";

//Hämta element frå DOM//
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

//Eventlyssnare för att visa meny//
menuBtn.addEventListener("click", function () {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});


