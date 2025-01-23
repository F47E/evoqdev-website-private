import glossaryTerms from './glossary-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const letterGrid = document.getElementById('letter-grid');
    const glossaryContent = document.getElementById('glossary-content');
    const searchInput = document.getElementById('glossary-search');

    // Create alphabet navigation
    Object.keys(glossaryTerms).forEach(letter => {
        const letterLink = document.createElement('a');
        letterLink.href = `#${letter}`;
        letterLink.textContent = letter;
        letterGrid.appendChild(letterLink);
    });

    // Populate glossary content
    function populateGlossary(terms = glossaryTerms) {
        glossaryContent.innerHTML = '';
        
        Object.entries(terms).forEach(([letter, termsList]) => {
            if (termsList.length === 0) return;

            const section = document.createElement('div');
            section.className = 'glossary-section';
            section.id = letter;

            section.innerHTML = `
                <h2>${letter}</h2>
                ${termsList.map(item => `
                    <div class="term">
                        <h3>${item.term}</h3>
                        <p>${item.definition}</p>
                    </div>
                `).join('')}
            `;

            glossaryContent.appendChild(section);
        });
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (!searchTerm) {
            populateGlossary();
            return;
        }

        const filteredTerms = {};
        Object.entries(glossaryTerms).forEach(([letter, terms]) => {
            const filtered = terms.filter(term => 
                term.term.toLowerCase().includes(searchTerm) || 
                term.definition.toLowerCase().includes(searchTerm)
            );
            if (filtered.length > 0) {
                filteredTerms[letter] = filtered;
            }
        });

        populateGlossary(filteredTerms);
    });

    // Initial population
    populateGlossary();
}); 