// Get all navbar links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Add event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default behavior
    e.preventDefault();
    // Get the target section from the href attribute
    const targetSection = document.querySelector(link.getAttribute('href'));
    // Get the offset of the target section
    const offsetTop = targetSection.offsetTop;
    // Animate scrolling to the target section
    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
