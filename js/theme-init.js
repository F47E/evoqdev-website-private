// Initialize theme immediately
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

function setTheme(theme) {
    // Store theme preference in localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme immediately using data-theme attribute
    document.documentElement.setAttribute('data-theme', theme);
}

function initializeTheme() {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // If there's a saved preference, apply it
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no saved preference, check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

// Call initializeTheme when the page loads
document.addEventListener('DOMContentLoaded', initializeTheme);