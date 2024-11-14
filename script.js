"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector(".typewriter h1");
    

    typewriter.addEventListener("animationend", (event) => {
      if (event.animationName === "typing") {
        typewriter.style.borderRight = "none";
      }
    });
  });
  
