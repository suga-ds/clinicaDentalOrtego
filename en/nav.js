document.addEventListener('DOMContentLoaded', function () {
    let spanishNav = `
        <img src="../images/logo-white.png" alt="logo" height=50px>
        <nav class="menu">
            <a href="/en/index.html">HOME</a>
            <a href="/en/team.html">TEAM</a>
            <a href="/en/treatments.html">TREATMENTS</a>
            <a href="/en/instalations.html">INSTALATIONS</a>
            <a href="/en/contact.html">CONTACT</a>
        </nav>
    `;

    document.querySelector(".sidebar").innerHTML = spanishNav;
});