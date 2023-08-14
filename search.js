const searchInput = document.getElementById('searchInput');
const searchIcon = document.querySelector('.icon');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    searchInput.focus();
});
