document.addEventListener('DOMContentLoaded', function() {
  console.log("JavaScript tiedosto ladattu");  // Testinggiä
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  menuToggle.addEventListener('click', function() {
    console.log("Menu nappia klikattu");  // Nappula
    if (menuList.style.display === 'none' || menuList.style.display === '') {
      menuList.style.display = 'flex';
    } else {
      menuList.style.display = 'none';
    }
  });
});