document.addEventListener('DOMContentLoaded', function () {
    let spanishNav = `
        <img src="../images/logo-white.png" alt="logo" height=50px>
        <nav class="menu">
            <a href="index.html">INICIO</a>
            <a href="equipo.html">EQUIPO</a>
            <a href="tratamientos.html">TRATAMIENTOS</a>
            <a href="instalaciones.html">INSTALACIONES</a>
            <a href="contacto.html">CONTACTO</a>
        </nav>
    `;

    document.querySelector(".sidebar").innerHTML = spanishNav;
});