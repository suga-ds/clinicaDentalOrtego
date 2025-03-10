let appFooter = `
    <footer class="footer">
        <div class="footer-container">
            <!-- Company Section -->
            <div class="footer-section company-info">
                <div style="display: flex; justify-content: center;"><img src="../images/logo-black.png" alt="Company Logo" class="company-logo" style="width: 6vw;"></div>
                <h2>Ortego Dental Clinic</h2>
                <p style="color: #696969;">"Caring for smiles generation after generation. Every smile tells a story!"</p>
            </div>

            <!-- Browse Section -->
            <div class="footer-section">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="treatments.html">Treatments</a></li>
                    <li><a href="installations.html">Facilities</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>

            <!-- Services Section -->
            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li>Dental Aesthetics</li>
                    <li>Implantology</li>
                    <li>Pediatric Dentistry</li>
                    <li>Dental Hygiene</li>
                    <li>Endodontics</li>
                    <li>Periodontics</li>
                    <li>Dental Prosthetics</li>
                    <li>Oral Rehabilitation</li>
                    <li>Restorative Dentistry</li>
                </ul>
            </div>

            <!-- Contact Section -->
            <div class="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li>📍 C/ Madrazo 141. pral 1ª</li>
                    <li>✉️ <a href="mailto:clinicadentalortego@gmail.com" target="_blank" rel="noopener">clinicadentalortego@gmail.com</a></li>
                    <li>☎️ <a href="tel:+34932097167">+34 932 097 167</a></li>
                    <li>📞 <a href="tel:+34646272974">+34 646 272 974</a></li>
                    <li>🗺️ Leave a <a href="https://search.google.com/local/writereview?placeid=ChIJZyU64HWYpBIRHNvdHav6EEM" target="_blank" rel="noopener" id='maps-link'>Review</a> for Clínica Dental Ortego</li>
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
