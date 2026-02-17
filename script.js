document.addEventListener("DOMContentLoaded", () => {

  // Fade-in sections on scroll
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));


  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
