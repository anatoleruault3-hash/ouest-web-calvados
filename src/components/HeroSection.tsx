import Image from "next/image";
import { heroContent } from "@/content/hero";

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="proof-row">
        <div className="proof-avatars" aria-hidden="true">
          {heroContent.avatars.map((avatar) => (
            <span key={avatar.src + avatar.alt}>
              <Image src={avatar.src} alt="" fill sizes="32px" />
            </span>
          ))}
        </div>
        <p>{heroContent.trustedLabel}</p>
      </div>

      <h1 id="hero-title" className="hero-title" aria-label="Votre métier mérite un site qui donne envie de vous contacter localement.">
        {heroContent.headingLines.map((line, lineIndex) => (
          <span className="hero-line" key={lineIndex}>
            {line.map((segment, segmentIndex) => segment.type === "text" ? (
              <span key={segmentIndex} style={{ color: segment.color }}>{segment.value}</span>
            ) : (
              <span className="hero-inline-image" key={segmentIndex}>
                <Image src={segment.src} alt={segment.alt} fill sizes="72px" />
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className="hero-subtitle">{heroContent.subtitle}</p>
      <a className="primary-cta" href={heroContent.ctaHref}>{heroContent.ctaLabel}<span aria-hidden="true">→</span></a>

      <a className="hero-showcase" href="https://vireetsongrenier.org/" target="_blank" rel="noreferrer" aria-label="Voir le site Vire et son Grenier">
        <Image src="/projects/vire-et-son-grenier-site.png" alt="Aperçu du site Vire et son Grenier" fill priority loading="eager" fetchPriority="high" sizes="(max-width: 800px) 92vw, 1200px" />
        <span className="showcase-caption"><b>Projet publié</b><span>Vire et son Grenier · Vire Normandie</span><i>↗</i></span>
      </a>
    </section>
  );
}
