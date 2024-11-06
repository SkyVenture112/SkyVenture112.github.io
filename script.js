"use strict";

let message = "Hello.";

// alert(message);

let admin;
let name = "John";
admin = name;
// alert(admin);

let planetName = "Earth";
const numberOfDays = 7;

// let result = prompt("Please enter an answer.", "");

// let isTrue = confirm("Is this true?");

// alert(isTrue);

let cookie = {
    flavor: "chocolate",
    price: "$30"
}

document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector(".typewriter h1");
    
    // Add event listener for when the typing animation ends
    typewriter.addEventListener("animationend", (event) => {
      if (event.animationName === "typing") {
        // Remove the blinking cursor by removing the border-right
        typewriter.style.borderRight = "none";
      }
    });
  });
  
