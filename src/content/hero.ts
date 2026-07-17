export const heroContent = {
  trustedLabel: "Deux sites déjà publiés dans le Calvados",
  avatars: [
    { src: "/projects/vire-et-son-grenier-site.png", alt: "Site Vire et son Grenier" },
    { src: "/projects/maroquinerie-terracotta.png", alt: "Site Maroquinerie Terracotta" },
    { src: "/projects/vire-et-son-grenier.jpg", alt: "Univers d’un commerce local" },
  ],
  headingLines: [
    [
      { type: "text" as const, value: "Votre métier", color: "#131313" },
      { type: "image" as const, src: "/projects/vire-et-son-grenier.jpg", alt: "Commerce local normand" },
      { type: "text" as const, value: "mérite", color: "#ff4d00" },
    ],
    [
      { type: "text" as const, value: "un site", color: "#676767" },
      { type: "image" as const, src: "/projects/maroquinerie-terracotta.png", alt: "Site vitrine sur mobile" },
      { type: "text" as const, value: "qui donne envie", color: "#131313" },
    ],
    [
      { type: "text" as const, value: "de vous contacter", color: "#676767" },
      { type: "image" as const, src: "/projects/vire-et-son-grenier-site.png", alt: "Projet web publié" },
      { type: "text" as const, value: "localement.", color: "#131313" },
    ],
  ],
  subtitle:
    "Sites vitrines pour artisans, commerces et indépendants du Calvados. Un tarif clair, une livraison en 7 jours et un accompagnement sans jargon.",
  ctaLabel: "Voir les offres",
  ctaHref: "#tarifs",
};
