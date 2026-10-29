import { useEffect } from "react";
import Title from "./Title";
import {
  Globe,
  Laptop,
  Gauge,
  Wrench,
  Handshake,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Création de sites vitrines & e-commerce",
    description:
      "Conception de sites internet sur mesure, responsive et optimisés pour le référencement naturel (SEO), conçus pour valoriser votre activité et générer des contacts qualifiés.",
    icon: <Globe className="text-primary w-8 h-8" />,
  },

  {
    id: 2,
    title: "Développement d'applications web & sur-mesure",
    description:
      "Conception de fonctionnalités avancées, SaaS et plateformes web adaptées à vos processus métier pour simplifier votre quotidien et répondre à des besoins complexes.",
    icon: <Laptop className="text-primary w-8 h-8" />,
  },

  {
    id: 3,
    title: "Audit SEO & Performances web",
    description:
      "Amélioration de votre positionnement sur Google, de la vitesse de chargement et de l'accessibilité pour rendre votre site plus visible, plus rapide et plus rentable.",
    icon: <Gauge className="text-primary w-8 h-8" />,
  },

  {
    id: 4,
    title: "Maintenance, sécurité & évolution",
    description:
      "Mises à jour régulières, corrections et optimisations continues pour garantir la sécurité de votre site et le faire évoluer au rythme de votre entreprise.",
    icon: <Wrench className="text-primary w-8 h-8" />,
  },

  {
    id: 5,
    title: "Conseil & Accompagnement technique",
    description:
      "Analyse de vos besoins, choix des meilleures technologies et accompagnement pas à pas pour structurer sereinement votre projet digital.",
    icon: <Handshake className="text-primary w-8 h-8" />,
  },
];

const Services = () => {
  // Gestion du scroll automatique si l'URL contient #services
  useEffect(() => {
    if (window.location.hash === "#services") {
        setTimeout(() => {
            const servicesElement = document.getElementById("services");
            if (servicesElement) {
                servicesElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }
}, []);
  return (
    <section
      id="services"
      aria-labelledby="title-services"
      className="
        py-20
        px-6
      "
    >
      <Title id="title-services" title="Services" level="h2" />

      {/* Intro */}
      <div
        className="
          text-center
          max-w-3xl
          mx-auto
          mb-16
        "
      >
        <p
          className="
            uppercase
            text-primary
            font-semibold
            text-sm
            mb-4
          "
        >
          Ce que nous proposons
        </p>

        <h3
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
          "
        >
          Des services web complets pour
          <span className="text-primary">
            {" "}développer votre activité
          </span>
        </h3>

        <p
          className="
            text-base
            leading-relaxed
            text-base-content/80
          "
        >
          De la création de votre site vitrine ou boutique en ligne à l'optimisation d'outils sur-mesure, <strong>ZITAG DIGITAL</strong> vous apporte des solutions performantes et pérennes.
        </p>
      </div>

      {/* Cartes */}
      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
        "
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="
              group
              bg-base-200
              rounded-2xl
              p-8
              shadow-lg
              border
              border-primary/10

              transition-all
              duration-300

              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-primary/40
            "
          >
            <div
              className="
                mb-6
                transition-transform
                duration-300

                group-hover:scale-110
                group-hover:rotate-3
              "
            >
              {service.icon}
            </div>

            <h3
              className="
                text-xl
                font-bold
                mb-4
              "
            >
              {service.title}
            </h3>

            <p
              className="
                text-base-content/70
                leading-relaxed
              "
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="
          text-center
          mt-20
        "
      >
        <p
          className="
            text-2xl
            font-bold
            mb-4
          "
        >
          Un projet de site ou d'application web ?
        </p>

        <p
          className="
            text-base-content/70
            mb-6
          "
        >
          Que vous soyez à Épernon, en Eure-et-Loir ou ailleurs en France, échangeons sur vos besoins.
        </p>

        <a
          href="#contact"
          className="
            btn
            btn-primary
          "
        >
          Discuter de mon projet
        </a>
      </div>
    </section>
  );
};

export default Services;