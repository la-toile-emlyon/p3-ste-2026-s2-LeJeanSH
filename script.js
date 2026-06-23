/* Une fonction qui récupère la première lettre du prenom de l'utilisateur qui a laissé un avis et la transforme en PP. */

function premiereLettre(nom) {
    return nom[0].toUpperCase();
}


var swiper = new Swiper(".mySwiper", {
      rewind: true,
      
      navigation: {
        nextEl: ".fleche-avant",
        prevEl: ".fleche-arriere",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });


let lastScrollY = window.scrollY;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

  if (currentY > 40 && currentY > lastScrollY) {
    // on descend → on cache le header
    header.classList.add('hidden');
  } else {
    // on remonte → on le réaffiche
    header.classList.remove('hidden');
  }

  lastScrollY = currentY;
}, { passive: true });


















