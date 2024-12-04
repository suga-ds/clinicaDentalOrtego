document.addEventListener('DOMContentLoaded', function () {
    let spanishNav = `
        <img src="../images/logo-white.png" alt="logo" height=50px>
        <nav class="menu">
            <a href="./es/index.html">INICIO</a>
            <a href="./es/equipo.html">EQUIPO</a>
            <a href="./es/tratamientos.html">TRATAMIENTOS</a>
            <a href="./es/instalaciones.html">INSTALACIONES</a>
            <a href="./es/contacto.html">CONTACTO</a>
        </nav>
    `;

    document.querySelector(".sidebar").innerHTML = spanishNav;
});