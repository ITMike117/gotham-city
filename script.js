document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('riddlerHack').style.display = 'block';
        setInterval(() => {
            const hackDiv = document.getElementById('riddlerHack');
            const qMark = document.createElement('span');
            qMark.textContent = '?';
            qMark.style.position = 'absolute';
            qMark.style.left = Math.random() * 90 + '%';
            qMark.style.top = Math.random() * 90 + '%';
            hackDiv.appendChild(qMark);
            setTimeout(() => qMark.remove(), 1000);
        }, 500);
    }, 30000); // 30 seconds
});