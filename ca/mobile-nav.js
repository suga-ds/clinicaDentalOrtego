document.addEventListener('DOMContentLoaded', function () {
    const spanishMobileNav = `
        <div id="image-button-mobile">
            <button aria-expanded="false" role="button" class="dropdown-button">MENÚ</button>
            <img src="../images/logo-black.png" alt="logo" height="80px">
        </div>
        <nav id="mobile-navigation">
            <ul>
                <li><a href="/ca/index.html">INICI</a></li>
                <li><a href="/ca/equip.html">EQUIP</a></li>
                <li><a href="/ca/tractaments.html">TRACTAMENTS</a></li>
                <li><a href="/ca/instal·lacions.html">INSTALACIONS</a></li>
                <li><a href="/ca/contacte.html">CONTACTE</a></li>
            </ul>
        </nav>
    `;

    document.querySelector('.navigation-mobile').innerHTML = spanishMobileNav;
});