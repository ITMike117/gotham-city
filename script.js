document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is faq.html
    if (window.location.pathname.endsWith('faq.html')) {
        const riddlerHack = document.getElementById('riddlerHack');
        riddlerHack.style.display = 'block'; // Show the hack immediately on FAQ page

        // Add floating question marks for Riddler flair
        setInterval(() => {
            const qMark = document.createElement('span');
            qMark.textContent = '?';
            qMark.style.position = 'absolute';
            qMark.style.left = Math.random() * 90 + '%';
            qMark.style.top = Math.random() * 90 + '%';
            qMark.style.color = '#00ff00';
            riddlerHack.appendChild(qMark);
            setTimeout(() => qMark.remove(), 1000);
        }, 500);
    }
});