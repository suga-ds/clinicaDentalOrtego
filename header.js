document.addEventListener('DOMContentLoaded', function () {
    let appHeader = `
    <div id="useful">
        <div id="contact-info">
            <ul>
                <li>C/ Madrazo 141. pral 1ª, 08021, Barcelona</li>
                <li>+34 932 097 167 / +34 646 272 974</li>
                <li>dentalortego@gmail.com</li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="dropdown-button">ESP<br>CAT<br>ENG</button>
            <div class="dropdown-content">
                <a href="../es/index.html">Español</a>
                <a href="../ca/index.html">Català</a>
                <a href="../en/index.html">English</a>                
            </div>
        </div>
    </div>

    <div id="logo-title">
        <img style="width: 200px; margin: 0 140px;" src="../images/logo-black.png" alt="Logo">
        <h1>
            <span class="font-size">C</span>LÍNICA <span class="font-size">D</span>ENTAL <span class="font-size">O</span>RTEGO
        </h1>
    </div>


    <!-- Floating Buttons -->
    <div class="floating-icons">
        <a href="tel:+34932097167" class="floating-button phone">
            <img src="../images/phone-logo.png"></img>
        </a>
        <a href="https://wa.me/34646272974" target="_blank" class="floating-button whatsapp">
            <img src="../images/whatsapp-logo.png"></img>
        </a>
        <a href="mailto:clinicadentalortego@gmail.com" class="floating-button email">
            ✉
        </a>

    </div>
    `;

    document.getElementById("app-header").innerHTML = appHeader;
});
