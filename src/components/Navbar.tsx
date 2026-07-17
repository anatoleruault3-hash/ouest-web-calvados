import { siteConfig } from "@/content/site";
import { ctaButton, navLinks } from "@/content/navbar";

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="availability"><span aria-hidden="true" />{siteConfig.availableText}</div>
      <div className="nav-row">
        <a className="wordmark" href="#top" aria-label="Ouest Web Calvados, accueil">
          {siteConfig.logoText}
        </a>
        <nav className="desktop-links" aria-label="Navigation principale">
          {navLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href={ctaButton.href}>{ctaButton.label}<span aria-hidden="true">↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav>
            {navLinks.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a href={ctaButton.href}>{ctaButton.label}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
