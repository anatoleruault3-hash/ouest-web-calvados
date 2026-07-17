import { pricingContent } from "@/content/pricing";

export default function PricingSection() {
  return (
    <section id="tarifs" className="section pricing-section" aria-labelledby="pricing-title">
      <div className="section-heading">
        <p>{pricingContent.label}</p>
        <h2 id="pricing-title">{pricingContent.heading}</h2>
      </div>
      <div className="pricing-grid">
        {pricingContent.plans.map((plan) => (
          <article className={`pricing-card${plan.dark ? " pricing-card-dark" : ""}`} key={plan.name}>
            <div className="plan-index">{plan.index}</div>
            <div className="plan-intro">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <small>Livraison <b>{plan.deliveryTime}</b></small>
            </div>
            <div className="plan-details">
              <strong className="plan-price">{plan.price}</strong>
              <span className="plan-payment">{plan.payment}</span>
              <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
              <a href="#contact">{plan.ctaLabel}<span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </div>
      <p className="pricing-note">Le périmètre exact et les conditions sont confirmés dans un devis avant le démarrage.</p>
    </section>
  );
}
