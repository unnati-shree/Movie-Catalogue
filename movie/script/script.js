const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) &&!dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});