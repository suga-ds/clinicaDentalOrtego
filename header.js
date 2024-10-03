document.addEventListener('DOMContentLoaded', function() {
    let appHeader = `
    <div class="up">
        <div class="left">
            <p>C/ Madrazo 141. pral 1ª</p>
            <p>08021, Barcelona</p>
            <p>+93 209 71 67 / 34 646 272 974</p>
            <p>Dentalortego@gmail.com</p>
        </div>
        <div class="center">
            <img style="width: 150px; height: 116; margin: 0px 140px;"src="./images/logo2.png" alt="Logo">
            <p style="font-size: 29px;"><span style="font-size: 35px;">C</span>LíNICA <span style="font-size: 35px;">D</span>ENTAL <span style="font-size: 35px;">O</span>RTEGO</p>
        </div>
        <div class="right">
            <a href="link_to_facebook" target="_blank"><img src="images/facebook_icon.png" alt="Facebook" style="width: 55px;"></a>
            <a href="link_to_instagram" target="_blank"><img src="images/instagram_icon.png" alt="Instagram" style="width: 55px;"></a>
            <a href="link_to_whatsapp" target="_blank"><img src="images/whatsapp_icon.png" alt="Facebook" style="width: 55px;"></a>
        </div>
    </div>

    <div class="container purple topBotomBordersIn">
        <a href="index.html">INICIO</a>
        <a href="equipo.html">EQUIPO</a>
        <a href="tratamientos.html">TRATAMIENTOS</a>
        <a href="contacto.html">CONTACTO</a>
    </div>
    `;
    document.getElementById("app-header").innerHTML = appHeader;
});


//         <a href="instalaciones.html">INSTALACIONES</a>