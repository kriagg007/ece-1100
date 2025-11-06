
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    if (getComputedStyle(nav).display === 'none') {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.6rem';
      nav.style.padding = '0.6rem 0';
    } else {
      nav.style.display = '';
    }
  });
}
