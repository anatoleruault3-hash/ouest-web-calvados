import Image from "next/image";
import { worksContent } from "@/content/works";

export function RecentWorksSection() {
  return (
    <section id="realisations" className="section works-section" aria-labelledby="works-title">
      <div className="section-heading">
        <p>{worksContent.label}</p>
        <h2 id="works-title">{worksContent.ghostHeading}</h2>
      </div>
      <div className="works-list">
        {worksContent.items.map((work) => (
          <article className="work-card" style={{ background: work.bg }} key={work.title}>
            <div className="work-copy">
              <span>{work.index}</span>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
            <a className="work-image" href={work.href} target="_blank" rel="noreferrer" aria-label={`Voir le site ${work.title}`}>
              <Image src={work.image} alt={`Aperçu du site ${work.title}`} fill sizes="(max-width: 800px) 88vw, 52vw" />
              <span aria-hidden="true">↗</span>
            </a>
            <dl className="work-meta">
              <div><dt>Année</dt><dd>{work.year}</dd></div>
              <div><dt>Projet</dt><dd>{work.role}</dd></div>
              <div><dt>Services</dt><dd>{work.services.join(" · ")}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
