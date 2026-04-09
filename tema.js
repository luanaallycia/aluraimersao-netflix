const themeToggle = document.getElementById('theme-toggle');
const root = document.body;

function setTheme(mode) {
    if (mode === 'light') {
        root.classList.add('light-mode');
        root.classList.remove('dark-mode');
        themeToggle.innerHTML = '<img src="assets/sun.png" alt="Light mode" width="24" height="24"/>';
    } else {
        root.classList.add('dark-mode');
        root.classList.remove('light-mode');
        themeToggle.innerHTML = '<img src="assets/moon.png" alt="Dark mode" width="24" height="24"/>';
    }
    localStorage.setItem('theme', mode);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');
    }
}

themeToggle.addEventListener('click', () => {
    const current = root.classList.contains('dark-mode') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
});

initTheme();