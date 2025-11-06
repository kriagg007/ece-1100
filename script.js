// Basic JS: mobile menu + year update
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const header = document.querySelector('.site-header');
let open = false;

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    open = !open;
    header.classList.toggle('open', open);
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.style.display = open ? 'flex' : '';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.6rem';
      nav.style.padding = '0.6rem 0';
    }
  });
}
