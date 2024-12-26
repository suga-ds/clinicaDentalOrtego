document.addEventListener('DOMContentLoaded', function () {
    let spanishNav = `
        <img src="../images/logo-white.png" alt="logo" height=50px>
        <nav class="menu">
            <a href="/ca/index.html">INICI</a>
            <a href="/ca/equip.html">EQUIP</a>
            <a href="/ca/tractaments.html">TRACTAMENTS</a>
            <a href="/ca/instalacions.html">INSTAL·LACIONS</a>
            <a href="/ca/contacte.html">CONTACTE</a>
        </nav>
    `;

    document.querySelector(".sidebar").innerHTML = spanishNav;
});