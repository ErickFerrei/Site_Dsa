export function initMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navItems = document.querySelector('.nav-item');

  hamburgerBtn.addEventListener('click', () => {
    navItems.classList.toggle('show');
    hamburgerBtn.classList.toggle('active'); 
  });
}