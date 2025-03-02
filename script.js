document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader after the page has fully loaded
    const loader = document.querySelector('.loader');
    if (loader) {
        window.addEventListener('load', function() {
            loader.style.display = 'none';
        });
    }

    // Dark theme toggle logic
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Scroll down logic
    const scrollDownButton = document.querySelector('.scroll-down');
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Burger menu toggle logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('toggle');
    });
});


    // Create floating particles
    function createParticles() {
        const container = document.getElementById('particles');
        const colors = ['#6366f1', '#a855f7', '#ec4899', '#f0abfc', '#c4b5fd'];
        
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          
          const size = Math.random() * 40 + 10;
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.background = color;
          particle.style.opacity = Math.random() * 0.1 + 0.05;
          
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          particle.style.animationDelay = `${Math.random() * 5}s`;
          particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
          
          container.appendChild(particle);
        }
      }
      