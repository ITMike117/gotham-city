document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('main');

    toggleButton.addEventListener('click', () => {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.width = '250px';
            mainContent.style.marginLeft = '250px';
        }
    });

    // Riddler hack on FAQ page after 5 seconds
    if (window.location.pathname.endsWith('faq.html')) {
        setTimeout(() => {
            const riddlerHack = document.getElementById('riddlerHack');
            riddlerHack.style.display = 'block';

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
        }, 5000); // 5 seconds
    }
});