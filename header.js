let appHeader = `
<div class="logo-name">
    <div class="logo">
        <img src="./images/logo.jpg" alt="Logo">
    </div>
    <div class="name">CLINICA DENTAL ORTEGO</div>
</div>

<nav>
    <ul class="navigation">
        <li><a href="index.html">Clínica</a></li>
        <li><a href="equipo.html">Equipo</a></li>
        <li><a href="instalaciones.html">Instalaciones</a></li>
        <li><a href="tratamientos.html">Tratamientos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>

<div class="social-links">
    <a href="link_to_facebook" target="_blank"><img src="images/facebook_icon.png" alt="Facebook"></a>
    <a href="link_to_instagram" target="_blank"><img src="images/instagram_icon.png" alt="Instagram"></a>
</div>
`;
document.getElementById("app-header").innerHTML = appHeader;