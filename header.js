let appHeader = `
<div class="logo-name">
    <div class="logo">
        <img src="./images/logo.jpg" alt="Logo">
    </div>
    <div class="name">
        <p>CLINICA DENTAL ORTEGO<br>C/ Madrazo 141. pral 1ª - Sarrià Sant-Gervasi<br>+34 646 272 974 | 93 209 71 67 | Dentalortego@gmail.com</p>
    </div>
</div>

<nav>
    <ul class="navigation">
        <li><a href="index.html">INICIO</a></li>
        <li><a href="equipo.html">EQUIPO</a></li>
        <li><a href="instalaciones.html">INSTALACIONES</a></li>
        <li><a href="tratamientos.html">TRATAMIENTOS</a></li>
        <li><a href="contacto.html">CONTACTO</a></li>
    </ul>
</nav>

<div class="social-links">
    <a href="link_to_facebook" target="_blank"><img src="images/facebook_icon.png" alt="Facebook" width="50px"></a>
    <a href="link_to_instagram" target="_blank"><img src="images/instagram_icon.png" alt="Instagram"></a>
    <a href="link_to_facebook" target="_blank"><img src="images/whatsapp_icon.png" alt="Facebook"></a>
</div>
`;
document.getElementById("app-header").innerHTML = appHeader;