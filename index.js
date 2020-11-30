const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navlinksBtn = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click', () => {
    navlinksBtn.classList.toggle('active');
});