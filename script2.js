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