"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector(".typewriter h1");
    
    typewriter.addEventListener("animationend", (event) => {
        if (event.animationName === "typing") {
            typewriter.style.borderRight = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            projects.forEach(project => {
                if (filter === 'all' || project.dataset.category === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

