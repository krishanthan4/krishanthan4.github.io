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

    const toastContainer = document.getElementById('toast-container');
    
    // Function to create and show a toast
    function showToast() {
      // Create toast elements
      const toast = document.createElement('div');
      toast.className = 'toast';
      
      const toastBorder = document.createElement('div');
      toastBorder.className = 'toast-border';
      
      const toastContent = document.createElement('div');
      toastContent.className = 'toast-content';
      
      const toastHeader = document.createElement('div');
      toastHeader.className = 'toast-header';
      
      const toastTitle = document.createElement('h3');
      toastTitle.className = 'toast-title';
      toastTitle.textContent = 'Why this website Looks So Basic?';
      
      const toastClose = document.createElement('div');
      toastClose.className = 'toast-close';
      toastClose.textContent = '×';
      
      const toastMessage = document.createElement('p');
      toastMessage.className = 'toast-message';
      toastMessage.innerHTML = 'Whenever I learn something new, I feel like rebuilding my portfolio with it. Keeping it simple HTML just doesn\'t feel right <span class="emoji-icon">😄</span>';
      
      const toastProgress = document.createElement('div');
      toastProgress.className = 'toast-progress';
      
      // Assemble the toast
      toastHeader.appendChild(toastTitle);
      toastHeader.appendChild(toastClose);
      
      toastContent.appendChild(toastHeader);
      toastContent.appendChild(toastMessage);
      
      toast.appendChild(toastBorder);
      toast.appendChild(toastContent);
      toast.appendChild(toastProgress);
      
      // Add toast to container
      toastContainer.appendChild(toast);
      
      // Show with animation
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
      
      // Animate progress bar
      toastProgress.animate(
        [
          { transform: 'scaleX(1)' },
          { transform: 'scaleX(0)' }
        ],
        {
          duration: 5000,
          easing: 'linear',
          fill: 'forwards'
        }
      );
      
      // Auto dismiss after 5 seconds
      const dismissTimeout = setTimeout(() => {
        dismissToast(toast);
      }, 5000);
      
      // Close button event
      toastClose.addEventListener('click', () => {
        clearTimeout(dismissTimeout);
        dismissToast(toast);
      });
      
      // Function to dismiss toast
      function dismissToast(toastElement) {
        toastElement.classList.remove('show');
        setTimeout(() => {
          toastContainer.removeChild(toastElement);
        }, 400);
      }
    }
    
    setTimeout(showToast, 1000);

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
