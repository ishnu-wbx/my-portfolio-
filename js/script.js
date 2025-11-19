const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  sidebar.classList.toggle('active');
});

// Close sidebar when clicking a link
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});
