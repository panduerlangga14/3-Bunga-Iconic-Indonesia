let darkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);

    document.getElementById('dark-icon').className =
        darkMode ? "fas fa-sun" : "fas fa-moon";
}

function init() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-icon').className = "fas fa-sun";
    }

    document.getElementById('dark-mode-btn')
        .addEventListener('click', toggleDarkMode);
}

window.addEventListener('DOMContentLoaded', init);
