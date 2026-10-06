"use client";

import { Language } from "../types";
import { siteText } from "../constants";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-maps-wrapper">
          <div className="footer-map-container">
            <h4>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginInlineEnd: "8px", color: "var(--brand-red)" }}
              ></i>
              {lang === "en" ? "Ghazieh" : "الغازية"}
            </h4>
            <div className="map-frame">
              <iframe
                title="Al-Rida Kitchen - Ghazieh"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d660.063597350509!2d35.36441671269136!3d33.51407412887934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMwJzUwLjciTiAzNcKwMjEnNTMuMyJF!5e0!3m2!1sen!2slb!4v1791303262795!5m2!1sen!2slb"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <h3 id="footer-title">{siteText[lang].visitUs}</h3>
          <p id="footer-location">{siteText[lang].location}</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/alrida_kitchen?stkn=a3RtdnlsemV6Mm5p"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@alridakitchen?_r=1&_t=ZS-9AKiHYBGrOj"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.facebook.com/share/1KJg68PG4C/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://wa.me/96179114460"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" id="footer-bottom">
        {siteText[lang].footerBottom}
      </div>
    </footer>
  );
}
