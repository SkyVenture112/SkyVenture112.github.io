"use strict";

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
  
