"use client";

import Image from "next/image";
import { useState } from "react";
import { contactContent } from "@/content/contact";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Demande de site — ${name}`;
    const body = `Nom : ${name}\nEmail : ${email}\n\nProjet :\n${description}`;
    window.location.href = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <p className="contact-ghost" aria-hidden="true">{contactContent.ghostHeading}</p>
      <div className="contact-panel">
        <div className="contact-copy">
          <Image src={contactContent.backgroundImage} alt="" fill sizes="(max-width: 800px) 100vw, 44vw" />
          <div>
            <h2 id="contact-title">{contactContent.heading}</h2>
            <p>{contactContent.subtitle}</p>
            <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            <a href={contactContent.phoneHref}>{contactContent.phoneLabel}</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>{contactContent.form.nameLabel}<input required autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder={contactContent.form.namePlaceholder} /></label>
          <label>{contactContent.form.emailLabel}<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={contactContent.form.emailPlaceholder} /></label>
          <label>{contactContent.form.descriptionLabel}<textarea required rows={5} value={description} onChange={(event) => setDescription(event.target.value)} placeholder={contactContent.form.descriptionPlaceholder} /></label>
          <button type="submit">{contactContent.form.submitLabel}<span aria-hidden="true">→</span></button>
          <small>L’envoi ouvre votre messagerie avec la demande préremplie.</small>
        </form>
      </div>
      <div className="email-marquee" aria-hidden="true"><span>{`${contactContent.marqueeEmail} × `.repeat(8)}</span></div>
    </section>
  );
}
