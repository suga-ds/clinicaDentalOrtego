document.addEventListener('DOMContentLoaded', function () {
    const spanishMobileNav = `
        <div id="image-button-mobile">
            <button aria-expanded="false" role="button" class="dropdown-button">MENÚ</button>
            <img src="../images/logo-black.png" alt="logo" height="80px">
        </div>
        <nav id="mobile-navigation">
            <ul>
                <li><a href="/en/index.html">HOME</a></li>
                <li><a href="/en/team.html">TEAM</a></li>
                <li><a href="/en/treatments.html">TREATMENTS</a></li>
                <li><a href="/en/instalations.html">INSTALATIONS</a></li>
                <li><a href="/en/contact.html">CONTACT</a></li>
            </ul>
        </nav>
    `;

    document.querySelector('.navigation-mobile').innerHTML = spanishMobileNav;
});