const theme = document.getElementById('theme');
const themeIcon = document.getElementById('theme-icon');

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList = 'fa-light fa-circle-half-stroke fa-2x';
    } else {
        themeIcon.classList = 'fa-solid fa-circle-half-stroke fa-2x';
    }
});
