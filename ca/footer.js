let appFooter = `
    <footer class="footer">
        <div class="footer-container">
            <!-- Company Section -->
            <div class="footer-section company-info">
                <div style="display: flex; justify-content: center;"><img src="../images/logo-black.png" alt="Logotip de l'empresa" class="company-logo" style="width: 6vw;"></div>
                <h2>Clínica Dental Ortego</h2>
                <p style="color: #696969;">"Cuidant somriures generació rere generació. Cada somriure explica una història!"</p>
            </div>

            <!-- Browse Section -->
            <div class="footer-section">
                <h4>Navegació</h4>
                <ul>
                    <li><a href="index.html">Inici</a></li>
                    <li><a href="equip.html">Equip</a></li>
                    <li><a href="tractaments.html">Tractaments</a></li>
                    <li><a href="instal·lacions.html">Instal·lacions</a></li>
                    <li><a href="contacte.html">Contacte</a></li>
                </ul>
            </div>

            <!-- Services Section -->
            <div class="footer-section">
                <h4>Serveis</h4>
                <ul>
                    <li>Estètica Dental</li>
                    <li>Implantologia</li>
                    <li>Odontopediatria</li>
                    <li>Higiene Dental</li>
                    <li>Endodòncia</li>
                    <li>Periodòncia</li>
                    <li>Pròtesis Dental</li>
                    <li>Rehabilitació Oral</li>
                    <li>Odontologia Restauradora</li>
                </ul>
            </div>

            <!-- Contact Section -->
            <div class="footer-section">
                <h4>Contacte</h4>
                <ul>
                    <li>📍 C/ Madrazo 141. pral 1ª</li>
                    <li>✉️ <a href="mailto:clinicadentalortego@gmail.com" target="_blank" rel="noopener">clinicadentalortego@gmail.com</a></li>
                    <li>☎️ <a href="tel:+34932097167">+34 932 097 167</a></li>
                    <li>📞 <a href="tel:+34646272974">+34 646 272 974</a></li>
                    <li>🗺️ Deixa'ns una <a href="https://search.google.com/local/writereview?placeid=ChIJZyU64HWYpBIRHNvdHav6EEM" target="_blank" rel="noopener" id='maps-link'>resenya!</a></li>
                    <li><img alt="qr code" src="../images/qrcode.png" style="width: 10vw"></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Website Designed by <span href="https://dexifra.com">dexifra</span></p>
        </div>
    </footer>
`;
document.getElementById("app-footer").innerHTML = appFooter;
