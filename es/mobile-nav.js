document.addEventListener('DOMContentLoaded', function () {
    const spanishMobileNav = `
        <div id="image-button-mobile">
            <img src="../images/logo-black.png" alt="logo" height="80px">
            <button aria-expanded="false" role="button">MENÚ</button>
        </div>
        <nav id="mobile-navigation">
            <ul>
                <li><a href="/es/index.html">INICIO</a></li>
                <li><a href="/es/equipo.html">EQUIPO</a></li>
                <li><a href="/es/tratamientos.html">TRATAMIENTOS</a></li>
                <li><a href="/es/instalaciones.html">INSTALACIONES</a></li>
                <li><a href="/es/contacto.html">CONTACTO</a></li>
            </ul>
        </nav>
    `;

    document.querySelector('.navigation-mobile').innerHTML = spanishMobileNav;
});
