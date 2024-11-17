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
        <h1 style="font-size: 35px;">
            <span style="font-size: 45px;">C</span>L<span style="font-size: 35px;">Í</span>NICA 
            <span style="font-size: 45px;">D</span>ENTAL <span style="font-size: 45px;">O</span>RTEGO
        </h1>
    </div>


    <!-- Floating Buttons -->
    <div class="floating-icons">
            <a href="tel:+34932097167" class="floating-button phone">
            📞
        </a>
        <a href="https://wa.me/34646272974" target="_blank" class="floating-button whatsapp">
            <img src="../images/whatsapp-logo.png" style="height: 22px;"></img>
        </a>
        <a href="mailto:clinicadentalortego@gmail.com" class="floating-button email">
            ✉
        </a>

    </div>
    `;

    document.getElementById("app-header").innerHTML = appHeader;
});
