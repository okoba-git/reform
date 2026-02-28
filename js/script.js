// ハンバーガーメニュー

const hum = document.getElementById('hamburger');
const openNav = document.getElementById('open');

hum.addEventListener('click', () => {
    openNav.classList.toggle('active');
})
