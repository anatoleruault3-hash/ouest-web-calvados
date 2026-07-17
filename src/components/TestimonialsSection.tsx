import { testimonialsContent } from "@/content/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section proof-section" aria-labelledby="proof-title">
      <div className="section-heading">
        <p>{testimonialsContent.label}</p>
        <h2 id="proof-title">{testimonialsContent.ghostHeading}</h2>
      </div>
      <div className="proof-grid">
        <div className="stats-panel">
          {testimonialsContent.stats.map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
        <div className="quotes-grid">
          {testimonialsContent.items.map((item) => (
            <figure key={item.author}>
              <blockquote>« {item.quote} »</blockquote>
              <figcaption><strong>{item.author}</strong><span>{item.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
