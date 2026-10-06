"use client";

import { Language } from "../types";
import { siteText } from "../constants";

interface HeaderProps {
  lang: Language;
  changeLanguage: (newLang: Language) => void;
}

export default function Header({ lang, changeLanguage }: HeaderProps) {
  return (
    <header className="brand-hero">
      <div className="language-toggle" aria-label="Language selector">
        <button
          id="lang-en"
          className={`lang-btn ${lang === "en" ? "active" : ""}`}
          type="button"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          id="lang-ar"
          className={`lang-btn ${lang === "ar" ? "active" : ""}`}
          type="button"
          onClick={() => changeLanguage("ar")}
        >
          عربي
        </button>
      </div>

      <div className="brand-content">
        <div className="logo">
          <img
            src="/data/layout_images/logo_pic.avif"
            alt="froooooooooooooooooooooooooooooooooooooooooooooooooogzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
            className="restaurant-logo"
          />
        </div>

        <div className="phone-container">
          <a className="phone-number" href="tel:79114460">
            <span className="phone-loc">
              {lang === "en" ? "Ghazieh - Qanarit Road" : "الغازية - طريق قناريت"}
            </span>
            <span className="phone-val" dir="ltr">
              79 / 11 44 60
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
