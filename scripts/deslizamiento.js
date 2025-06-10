    $(function(){
      $.scrollify({
        section : "section",
        easing: "easeOutExpo",
        scrollSpeed: 2500,
        offset : 0,
        scrollbars: true,
        updateHash: true,
        touchScroll: true
      });
    });
    

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
          link.classList.toggle('active', entry.isIntersecting);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
  });


  // Agregar el manejador de click para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card-inner');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});