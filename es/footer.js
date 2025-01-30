let appFooter = `
    <footer class="footer">
        <div class="footer-container">
            <!-- Company Section -->
            <div class="footer-section company-info">
                <div><img src="../images/logo-black.png" alt="Company Logo" width="6vw"></div>
                <h2>Clínica Dental Ortego</h2>
                <p style="color: #696969;">"Cuidando sonrisas generación tras generación. ¡Cada sonrisa cuenta una historia!"</p>
            </div>

            <!-- Browse Section -->
            <div class="footer-section nav-footer">
                <h4>Navegación</h4>
                <nav>
                    <ul>
                        <li><a href="/es/index.html">Inicio</a></li>
                        <li><a href="/es/equipo.html">Equipo</a></li>
                        <li><a href="/es/tratamientos.html">Tratamientos</a></li>
                        <li><a href="/es/instalaciones.html">Instalaciones</a></li>
                        <li><a href="/es/contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>

            <!-- Services Section -->
            <div class="footer-section">
                <h4>Servicios</h4>
                <ul>
                    <li>Estética Dental</li>
                    <li>Implantología</li>
                    <li>Odontopediatría</li>
                    <li>Higiene Dental</li>
                    <li>Endodoncia</li>
                    <li>Periodoncia</li>
                    <li>Prótesis Dental</li>
                    <li>Rehabilitación Oral</li>
                    <li>Restauradora</li>
                </ul>
            </div>

            <!-- Contact Section -->
            <div class="footer-section">
                <h4>Contacto</h4>
                <ul>
                    <li><i class="fa-solid fa-map-pin"></i> C/ Madrazo 141. pral 1ª</li>
                    <li><i class="fa-regular fa-envelope"></i> <a href="mailto:clinicadentalortego@gmail.com" target="_blank" rel="noopener">clinicadentalortego@gmail.com</a></li>
                    <li><i class="fa-solid fa-phone"></i> <a href="tel:+34932097167">+34 932 097 167</a></li>
                    <li><i class="fa-solid fa-mobile-screen"></i> <a href="tel:+34646272974">+34 646 272 974</a></li>
                    <li style="display: flex; justify-content: space-between;"><div style="display: block;"><i class="fa-regular fa-map"></i> ¡Dejanos una<br><span style="color: rgba(255, 255, 255, 0);"><i class="fa-regular fa-map"></i> </span><a href="https://search.google.com/local/writereview?placeid=ChIJZyU64HWYpBIRHNvdHav6EEM" target="_blank" rel="noopener" id='maps-link'>reseña!</a></div><div><img alt="qr code" src="../images/qrcode.png" style="width: 7vw"></div></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Website Designed by <span href="https://dexifra.com">dexifra</span></p>
        </div>
    </footer>
`;
document.getElementById("app-footer").innerHTML = appFooter;