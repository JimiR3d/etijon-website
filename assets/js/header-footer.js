/* Etijon Foundation Header & Footer Reusable Injection Script */

const HEADER_HTML = `
  <div class="header-container">
    <nav class="main-nav">
      <a href="index.html" class="nav-brand">
        <img src="assets/images/logo_icon.png" alt="Etijon Logo" class="brand-logo-img" />
        <div class="brand-text">
          <span class="brand-name-gold">ETIJON</span>
          <span class="brand-name-sub">FOUNDATION INC.</span>
        </div>
      </a>
      
      <div class="nav-menu" id="nav-menu">
        <a href="index.html" class="nav-link" id="nav-home">Home</a>
        <a href="about-us.html" class="nav-link" id="nav-about">About Us</a>
        <a href="our-programs.html" class="nav-link" id="nav-programs">Our Programs</a>
        <a href="gallery.html" class="nav-link" id="nav-gallery">Gallery</a>
        <a href="our-partners.html" class="nav-link" id="nav-partners">Our Partners</a>
        <a href="contact-us.html" class="nav-link" id="nav-contact">Contact Us</a>
      </div>

      <div class="nav-actions">
        <a href="#donate" class="btn-donate-nav">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          DONATE NOW
        </a>
        <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle navigation menu">
          &#9776;
        </button>
      </div>
    </nav>
  </div>
`;

const FOOTER_HTML = `
  <div class="footer-glass-card">
    <div class="footer-brand-col">
      <a href="index.html" class="footer-logo">
        <img src="assets/images/logo_icon.png" alt="Etijon Logo" class="brand-logo-img" />
        <div class="brand-text">
          <span class="brand-name-gold">ETIJON</span>
          <span class="brand-name-sub">FOUNDATION INC.</span>
        </div>
      </a>
      <p class="footer-tagline">
        Empowering communities through education, health awareness and humanitarian service.
      </p>
      <div class="footer-contact-link">
        Contact: <span>info@etijon.org</span>
      </div>
    </div>
    
    <div class="footer-links-col">
      <h4 class="footer-heading">Quick Links</h4>
      <div class="footer-links-list">
        <a href="index.html" class="footer-link" id="footer-home">Home</a>
        <a href="our-programs.html" class="footer-link" id="footer-programs">Our Programs</a>
        <a href="about-us.html" class="footer-link" id="footer-about">About Us</a>
        <a href="gallery.html" class="footer-link" id="footer-gallery">Gallery</a>
        <a href="our-partners.html" class="footer-link" id="footer-partners">Our Partners</a>
        <a href="contact-us.html" class="footer-link" id="footer-contact">Contact Us</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div>&copy; ${new Date().getFullYear()} Etijon Foundation, Inc. All Rights Reserved.</div>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
    </div>
  </div>
`;

function renderHeader() {
  const headerElem = document.querySelector('header.site-header') || document.getElementById('header-placeholder');
  if (headerElem) {
    headerElem.classList.add('site-header');
    headerElem.innerHTML = HEADER_HTML;
    
    // Set active link based on current page filename
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    
    const pageToNavId = {
      "index.html": "nav-home",
      "": "nav-home",
      "about-us.html": "nav-about",
      "our-programs.html": "nav-programs",
      "gallery.html": "nav-gallery",
      "our-partners.html": "nav-partners",
      "contact-us.html": "nav-contact"
    };

    const activeId = pageToNavId[page];
    if (activeId) {
      const activeLink = document.getElementById(activeId);
      if (activeLink) activeLink.classList.add('active');
    }

    // Mobile menu toggle logic
    const toggleBtn = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
    }
  }
}

function renderFooter() {
  const footerElem = document.querySelector('footer.site-footer') || document.getElementById('footer-placeholder');
  if (footerElem) {
    footerElem.classList.add('site-footer');
    footerElem.innerHTML = FOOTER_HTML;

    // Set active footer link
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    const pageToFooterId = {
      "index.html": "footer-home",
      "": "footer-home",
      "about-us.html": "footer-about",
      "our-programs.html": "footer-programs",
      "gallery.html": "footer-gallery",
      "our-partners.html": "footer-partners",
      "contact-us.html": "footer-contact"
    };

    const activeId = pageToFooterId[page];
    if (activeId) {
      const activeLink = document.getElementById(activeId);
      if (activeLink) activeLink.classList.add('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
