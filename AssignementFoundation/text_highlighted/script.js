document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('paragraph');
    const words = paragraph.textContent.split(' ');

    const highlightedWords = words.map(word => {
        return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
    });

    paragraph.innerHTML = highlightedWords.join(' ');
});