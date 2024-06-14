document.addEventListener('DOMContentLoaded', function() {
    let appHeader = `
    <div class="up">
        <div class="left">
            <p><b><span style="font-size: 36px;">C</span>LINICA <span style="font-size: 36px;">D</span>ENTAL <span style="font-size: 36px;">O</span>RTEGO</b><br>C/ Madrazo 141. pral 1ª - Sarrià Sant-Gervasi<br>+34 646 272 974 | 93 209 71 67<br>Dentalortego@gmail.com</p>
        </div>
        <div class="center">
            <img src="./images/logo.png" alt="Logo">
            <span style="font-size: 36px;">C</span>LINICA <span style="font-size: 36px;">D</span>ENTAL <span style="font-size: 36px;">O</span>RTEGO</p>
        </div>
        <div class="right">
            <div class="languages">
                <div id="google_translate_element"></div>
            </div>
            <div class="social-links">
                <a href="link_to_facebook" target="_blank"><img src="images/facebook_icon.png" alt="Facebook" style="width: 55px; height: 55px;"></a>
                <a href="link_to_instagram" target="_blank"><img src="images/instagram_icon.png" alt="Instagram"></a>
                <a href="link_to_facebook" target="_blank"><img src="images/whatsapp_icon.png" alt="Facebook";></a>
            </div>
        </div>
    </div>

    <div class="container purple topBotomBordersIn">
        <a href="index.html">INICIO</a>
        <a href="equipo.html">EQUIPO</a>
        <a href="instalaciones.html">INSTALACIONES</a>
        <a href="tratamientos.html">TRATAMIENTOS</a>
        <a href="contacto.html">CONTACTO</a>
    </div>
    `;
    document.getElementById("app-header").innerHTML = appHeader;
});
