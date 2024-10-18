document.addEventListener('DOMContentLoaded', function () {
    let appHeader = `
    <div class="up">
        <div class="left">
            <p>C/ Madrazo 141. pral 1ª</p>
            <p>08021, Barcelona</p>
            <p>+93 209 71 67 / +34 646 272 974</p>
            <p>dentalortego@gmail.com</p>
        </div>
        <div class="center">
            <img style="width: 200px; margin: 0 140px;" src="../images/logo2.png" alt="Logo">
            <p style="font-size: 35px;">
                <span style="font-size: 45px;">C</span>L<span style="font-size: 29px;">Í</span>NICA 
                <span style="font-size: 45px;">D</span>ENTAL <span style="font-size: 45px;">O</span>RTEGO
            </p>
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
            📞
        </a>
        <a href="https://wa.me/34646272974" target="_blank" class="floating-button whatsapp">
            <img src="../images/whatsapp-logo.png" style="height: 35px;"></img>
        </a>
        <a href="mailto:dentalortego@gmail.com" class="floating-button email">
            ✉
        </a>

    </div>
    `;

    document.getElementById("app-header").innerHTML = appHeader;
});
