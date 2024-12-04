
const btn = document.querySelector('button');

btn.onclick = () => {
    const mobileNav = document.querySelector('.mobile-navigation');
    const isHidden = mobileNav.style.display === 'none' || mobileNav.style.display === '';
    mobileNav.style.display = isHidden ? 'block' : 'none';
    btn.setAttribute('aria-expanded', isHidden.toString());
};