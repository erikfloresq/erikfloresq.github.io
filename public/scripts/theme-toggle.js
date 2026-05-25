const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleState(newTheme);
};

const updateToggleState = (theme) => {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    }
};

// Apply saved theme on page load
(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    // When DOM is loaded, update toggle button accessibility state
    document.addEventListener('DOMContentLoaded', () => {
        updateToggleState(savedTheme);
    });
})();