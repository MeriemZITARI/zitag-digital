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
    title: "Création de sites web",
    description:
      "Des sites vitrines sur mesure, responsive et optimisés pour le référencement naturel, conçus pour présenter votre activité et renforcer votre présence en ligne.",
    icon: <Globe className="text-primary w-8 h-8" />,
  },

  {
    id: 2,
    title: "Développement de solutions personnalisées",
    description:
      "Des fonctionnalités et des applications web adaptées à vos besoins métier pour simplifier vos processus et répondre à des usages spécifiques.",
    icon: <Laptop className="text-primary w-8 h-8" />,
  },

  {
    id: 3,
    title: "Optimisation & expérience utilisateur",
    description:
      "Amélioration des performances, de l'accessibilité et de l'ergonomie pour rendre votre site plus rapide, plus agréable à utiliser et plus efficace.",
    icon: <Gauge className="text-primary w-8 h-8" />,
  },

  {
    id: 4,
    title: "Maintenance & évolution",
    description:
      "Mises à jour, corrections et améliorations pour maintenir votre site en bon état de fonctionnement et l'adapter aux besoins de votre activité.",
    icon: <Wrench className="text-primary w-8 h-8" />,
  },

  {
    id: 5,
    title: "Accompagnement technique",
    description:
      "Analyse de vos besoins, recommandations techniques et aide à la définition des solutions les plus adaptées à votre projet.",
    icon: <Handshake className="text-primary w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="title-services"
      className="
        py-20
        px-6
        
      "
    >
      <Title id="title-services" title="Services"  level="h2" />

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
          Des solutions web pensées
          <span className="text-primary">
            {" "}pour votre activité
          </span>
        </h3>

        <p
          className="
            text-base
            leading-relaxed
            text-base-content/80
          "
        >
          De la création de votre site web à l'amélioration de vos outils existants, ZITAG DIGITAL vous accompagne avec des solutions adaptées à vos objectifs, à vos utilisateurs et à votre activité.
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
          Un projet en tête ?
        </p>

        <p
          className="
            text-base-content/70
            mb-6
          "
        >
          Parlons ensemble de vos besoins
          et imaginons une solution adaptée.
        </p>

        <a
          href="#contact"
          className="
            btn
            btn-primary
          "
        >
          Parlons de votre projet
        </a>

      </div>

    </section>
  );
};

export default Services;