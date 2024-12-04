document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#image-button-mobile button');
    const mobileNav = document.querySelector('#mobile-navigation');

    btn.onclick = () => {
        const isHidden = mobileNav.style.display === 'none' || mobileNav.style.display === '';
        mobileNav.style.display = isHidden ? 'block' : 'none';
        btn.setAttribute('aria-expanded', isHidden);
    };
});
