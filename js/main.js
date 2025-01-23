// main.js
// Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const moonIcon = themeToggle?.querySelector('i');

// Initialize icon state
if (moonIcon) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    moonIcon.classList.toggle('fa-sun', currentTheme === 'dark');
    moonIcon.classList.toggle('fa-moon', currentTheme !== 'dark');
}

// Theme toggle handler
themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    // Update theme using setTheme function
    setTheme(newTheme);
    
    // Update icon
    if (moonIcon) {
        moonIcon.classList.toggle('fa-moon');
        moonIcon.classList.toggle('fa-sun');
    }
});

// Dynamic Article Loading (for home page)
const articleGrid = document.querySelector('.article-grid');
if (articleGrid) {
    // Sample articles - replace with your actual content
    const articles = [
        {
            title: 'Latest AI Developments',
            excerpt: 'Exploring recent breakthroughs in artificial intelligence...',
            category: 'AI'
        },
        {
            title: 'Web Development Trends 2024',
            excerpt: 'The most important web development trends to watch...',
            category: 'Development'
        }
    ];

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <span class="category">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a href="#" class="read-more">Read More →</a>
        `;
        articleGrid.appendChild(articleCard);
    });
}