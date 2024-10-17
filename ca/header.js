document.addEventListener('DOMContentLoaded', function() {
    let appHeader = `
    <div class="up">
        <div class="left">
            <p>C/ Madrazo 141. pral 1ª</p>
            <p>08021, Barcelona</p>
            <p>+93 209 71 67 / 34 646 272 974</p>
            <p>dentalortego@gmail.com</p>
        </div>
        <div class="center">
            <img style="width: 150px; height: 116; margin: 0px 140px;"src="../images/logo2.png" alt="Logo">
            <p style="font-size: 29px;"><span style="font-size: 35px;">C</span>L<span style="font-size: 29px;">Í</span>NICA <span style="font-size: 35px;">D</span>ENTAL <span style="font-size: 35px;">O</span>RTEGO</p>
        </div>
        <div class="right">
            <a href="../es/index.html">ES</a>
            <a href="../en/index.html">EN</a>
            <a href="../ca/index.html">CA</a>
        </div>
    </div>

    <div class="container purple topBotomBordersIn">
        <a href="index.html">INICIO</a>
        <a href="equip.html">EQUIPO</a>
        <a href="tractaments.html">TRATAMIENTOS</a>
        <a href="contacte.html">CONTACTO</a>
    </div>
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/34646272974" target="_blank" class="whatsapp-button">
      <img src="../images/whatsapp_icon.png" style="height: 4vw;"alt="WhatsApp Chat" />
    </a>
    `;
    document.getElementById("app-header").innerHTML = appHeader;
});


// <a href="instalaciones.html">INSTALACIONES</a> // whatsapp plugin ( whatsapp API ) // traduccion esp ca eng 