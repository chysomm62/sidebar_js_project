const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

close.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});