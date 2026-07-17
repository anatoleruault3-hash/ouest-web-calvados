import { footerContent } from "@/content/footer";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>Navigation</p>
        {footerContent.navigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </div>
      <div>
        <p>Contact</p>
        {footerContent.contact.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </div>
      <div>
        <p>Zone d’intervention</p>
        <strong>{siteConfig.city}</strong>
        <span>Normandie · France</span>
      </div>
      <div className="footer-bottom">
        <span>{footerContent.copyright}</span>
        <span>{siteConfig.tagline}</span>
        <a href="#top">{footerContent.backToTopLabel}</a>
      </div>
    </footer>
  );
}
