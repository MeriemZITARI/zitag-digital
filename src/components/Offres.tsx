import { useState } from "react";
import Title from "./Title";
import {
  Globe,
  Rocket,
  Code2,
  Wrench,
  ChevronDown,
  Check,
} from "lucide-react";

const offres = [
  {
    id: 1,
    title: "Vitrine Essentiel",
    description:
      "Inaugurez votre présence en ligne avec un site propre, rapide et moderne.",
    price: "790 €",
    icon: <Globe className="text-primary w-8 h-8" />,
    ctaText: "Choisir cette offre",
    featured: false,
    highlights: [
      "Design sur-mesure & adapté tous écrans",
      "Site sécurisé (HTTPS / SSL)",
      "Nom de domaine & hébergement offerts",
      "Adresse e-mail professionnelle dédiée",
      "Référencement (SEO) de base inclus",
    ],
    details: [
      "Structure de 1 à 5 pages (ou format One-Page)",
      "Formulaire de contact + carte interactive de localisation",
      "Intégration de vos réseaux sociaux & identité visuelle",
      "Site ultra-rapide & fluide (optimisation performances)",
      "Indexation sur les moteurs de recherche & sitemap",
    ],
  },
  {
    id: 2,
    title: "Vitrine & Visibilité",
    description:
      "Attirez de nouveaux clients grâce à un référencement ciblé et une visibilité locale renforcée.",
    price: "1 290 €",
    icon: <Rocket className="text-primary w-8 h-8" />,
    ctaText: "Booster ma visibilité",
    featured: true,
    badge: "Recommandé",
    highlights: [
      "Tout le pack Essentiel inclus (jusqu'à 7 pages)",
      "Référencement naturel (SEO) avancé",
      "Création & optimisation Fiche Google",
      "Intégration dynamique des avis clients",
      "Stratégie d'acquisition locale",
    ],
    details: [
      "Positionnement ciblé sur vos mots-clés stratégiques",
      "Configuration complète & optimisation de votre Fiche Google",
      "Balisage SEO sur-mesure & rédaction optimisée des pages",
      "Système de récolte & mise en avant de vos avis clients",
      "Bilan de lancement & conseils de visibilité locale",
    ],
  },
  {
    id: 3,
    title: "Sur-Mesure & Web Apps",
    description:
      "Développez des solutions complexes, des plateformes métier ou un e-commerce performant.",
    price: "Sur devis",
    icon: <Code2 className="text-primary w-8 h-8" />,
    ctaText: "Demander un devis",
    featured: false,
    highlights: [
      "E-commerce sur-mesure ou plateforme SaaS",
      "Espaces membres & comptes utilisateurs",
      "Fonctionnalités métier & automatisations",
      "Sécurité renforcée, base de données & API",
      "Architecture évolutive & haute performance",
    ],
    details: [
      "Développement full-stack sur-mesure sans contraintes",
      "Connexion aux outils externes (CRM, ERP, systèmes de paiement)",
      "Panneau d'administration (Back-Office) dédié et intuitif",
      "Phase de tests approfondis, recette & accompagnement au lancement",
      "Documentation technique & formation à la prise en main",
    ],
  },
  {
    id: 4,
    title: "Maintenance & Support",
    description:
      "Gardez votre site sécurisé, performant et à jour sans vous soucier de la technique.",
    price: "Selon l'offre",
    icon: <Wrench className="text-primary w-8 h-8" />,
    ctaText: "S'abonner",
    featured: false,
    highlights: [
      "Mises à jour & sauvegardes automatiques",
      "Sécurité renforcée & protection anti-piratage",
      "Surveillance de la disponibilité en continu",
      "Support technique réactif & accompagnement",
      "Modifications de contenu mensuelles incluses",
    ],
    details: [
      "Restauration rapide et garantie en cas d'incident ou panne",
      "Correctifs de sécurité, nettoyage préventif & mises à niveau",
      "Petites mises à jour & ajustements de contenu à la demande",
      "Suivi des performances, vitesse & bilan mensuel d'activité",
      "Conseils d'évolution continue pour faire évoluer votre site",
    ],
  },
];

const Offres = () => {
  // Gestion de l'état d'ouverture pour chaque carte
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id : number) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="offres"
      aria-labelledby="title-offres"
      className="py-20 px-6 bg-base-200"
    >
      <Title id="title-offres" title="Nos Offres" level="h2" />

      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
       

        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Une offre pour <span className="text-primary">chaque besoin</span>
        </h3>

        <p className="text-base leading-relaxed text-base-content/80">
          Que vous lanciez votre activité ou souhaitiez développer des
          fonctionnalités sur-mesure, découvrez des formules claires, évolutives
          et adaptées à vos objectifs.
        </p>
      </div>

      {/* Grille des Cartes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-sretch">
        {offres.map((offre) => {
          const isOpen = !!openCards[offre.id];

          return (
            <div
              key={offre.id}
              className={`
                relative
                h-full
                bg-base-100
                rounded-2xl
                p-6
                shadow-lg
                border
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                ${
                  offre.featured
                    ? "border-primary shadow-primary/10"
                    : "border-primary/10 hover:border-primary/40"
                }
              `}
            >
              {/* Badge si offre mise en avant */}
              {offre.badge && (
                <div className="absolute -top-3 right-6 bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {offre.badge}
                </div>
              )}

              {/* En-tête : Icône + Titre alignés */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-base-300/50 border border-primary/20 shrink-0">
                  {offre.icon}
                </div>
                <h4 className="text-xl font-bold leading-tight">
                  {offre.title}
                </h4>
              </div>

              {/* Phrase d'accroche */}
              <p className="text-sm text-base-content/70 min-h-[40px] mb-4">
                {offre.description}
              </p>

              {/* Prix Centré */}
              <div className="text-center my-4 py-3 rounded-xl bg-base-300/40 border border-base-content/5">
                <div className="text-2xl font-black text-secondary">
                  {offre.price}
                </div>
               
              </div>

              {/* Accroches visibles (Highlights) */}
              <ul className="space-y-2 mb-6 text-xs text-base-content/90 flex-1">
                {offre.highlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bouton CTA */}
              <a href="#contact" className="btn btn-primary w-full mb-3">
                {offre.ctaText}
              </a>

              {/* Bouton Dépliable (En savoir plus) */}
              <button
                onClick={() => toggleCard(offre.id)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  py-2
                  text-xs
                  font-semibold
                  text-primary
                  hover:text-primary-focus
                  transition-colors
                  cursor-pointer
                
                "
              >
                <span>{isOpen ? "Masquer le détail" : "En savoir plus"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Zone dépliable (Accordéon) */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  overflow-hidden
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-base-content/10"
                      : "grid-rows-[0fr] opacity-0 mt-0 pt-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 text-xs text-base-content/70">
                    {offre.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Bas de Section */}
      <div className="text-center mt-16">
        <p className="text-base-content/70 text-sm">
          Vous avez des besoins spécifiques non listés dans ces formules ?
        </p>
        <a
          href="#contact"
          className="inline-block mt-2 text-primary font-bold hover:underline"
        >
          Contactez-nous pour une étude personnalisée →
        </a>
      </div>
    </section>
  );
};

export default Offres;