const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateButtonText(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

const updateButtonText = (theme) => {
    const button = document.querySelector('.theme-toggle-button'); // Ajusta el selector si es necesario
    if (button) {
        button.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
};

// Aplica el tema guardado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
});