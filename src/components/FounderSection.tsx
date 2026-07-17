import { founderContent } from "@/content/founder";

export default function FounderSection() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="section-heading">
        <p>{founderContent.label}</p>
        <h2>{founderContent.ghostHeading}</h2>
      </div>
      <div className="process-panel">
        <div className="process-intro">
          <span>OWC / 04</span>
          <h2 id="process-title">{founderContent.sectionTitle}</h2>
          <p>{founderContent.bio}</p>
          <div className="included"><small>{founderContent.includedLabel}</small>{founderContent.included.map((item) => <b key={item}>{item}</b>)}</div>
        </div>
        <ol className="process-list">
          {founderContent.career.map((item) => (
            <li key={item.role}><strong>{item.role}</strong><span>{item.company}</span><em>{item.year}</em></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
