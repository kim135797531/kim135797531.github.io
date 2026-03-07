<script>
// Highlight active navigation item based on scroll position
// Switches to next section when the section divider reaches viewport center
(function() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  
  function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset || window.scrollY;
    const viewportCenter = scrollY + (window.innerHeight / 2);
    
    // Check each section to determine which should be active
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const nextSection = sections[index + 1];
      const nextSectionTop = nextSection ? (nextSection.offsetTop - 100) : Infinity;
      
      // If viewport center has passed the next section's start, switch to next section
      // Otherwise, if viewport center is within this section, use current section
      if (viewportCenter >= sectionTop) {
        if (nextSection && viewportCenter >= nextSectionTop) {
          // Viewport center has passed next section's start
          current = nextSection.getAttribute('id');
        } else if (viewportCenter < nextSectionTop) {
          // Viewport center is still in current section
          current = sectionId;
        }
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);
  window.addEventListener('resize', updateActiveNav);
})();
</script>

