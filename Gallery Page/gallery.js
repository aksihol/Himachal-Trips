document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const header = document.querySelector('[data-header]');
  
  // Add active class to navbar links
  navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
          navbarLinks.forEach(navLink => navLink.classList.remove('active'));
          this.classList.add('active');
      });
  });
  
  // Add sticky header functionality
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });
});


