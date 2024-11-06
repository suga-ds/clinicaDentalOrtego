document.addEventListener('DOMContentLoaded', function () {
    let appHeader = `
    <div class="up">
        <div class="left">
            <ul>
                <li>C/ Madrazo 141. pral 1ª</li>
                <li>08021, Barcelona</li>
                <li>+93 209 71 67 / +34 646 272 974</li>
                <li>dentalortego@gmail.com</li>
            </ul>
        </div>
        <div class="center">
            <img style="width: 200px; margin: 0 140px;" src="../images/logo2.png" alt="Logo">
            <h1 style="font-size: 35px;">
                <span style="font-size: 45px;">C</span>L<span style="font-size: 29px;">Í</span>NICA 
                <span style="font-size: 45px;">D</span>ENTAL <span style="font-size: 45px;">O</span>RTEGO
            </h1>
        </div>
        <div class="right">
            <a href="../es/index.html">ESP</a>
            <a href="../ca/index.html">CAT</a>
            <a href="../en/index.html">ENG</a>
        </div>
    </div>

    <!-- Floating Buttons -->
    <div class="floating-icons">
            <a href="tel:+34932097167" class="floating-button phone">
            ✉
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
