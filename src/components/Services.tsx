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
      "Des sites modernes, performants et adaptés aux objectifs de votre activité.",
    icon: <Globe className="text-primary w-8 h-8" />,
  },

  {
    id: 2,
    title: "Solutions digitales sur mesure",
    description:
      "Des outils numériques personnalisés pour répondre à vos besoins spécifiques.",
    icon: <Laptop className="text-primary w-8 h-8" />,
  },

  {
    id: 3,
    title: "Optimisation & expérience utilisateur",
    description:
      "Des interfaces rapides, accessibles et pensées pour améliorer l’expérience de vos utilisateurs.",
    icon: <Gauge className="text-primary w-8 h-8" />,
  },

  {
    id: 4,
    title: "Maintenance & évolution",
    description:
      "Un accompagnement après lancement pour faire évoluer durablement vos solutions.",
    icon: <Wrench className="text-primary w-8 h-8" />,
  },

  {
    id: 5,
    title: "Accompagnement technique",
    description:
      "Analyse, optimisation et amélioration de solutions existantes pour répondre à de nouveaux besoins.",
    icon: <Handshake className="text-primary w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
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

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
          "
        >
          Des solutions adaptées
          <span className="text-primary">
            {" "}à vos besoins
          </span>
        </h2>

        <p
          className="
            text-base
            leading-relaxed
            text-base-content/80
          "
        >
          Chaque projet est unique.
          ZITAG Digital accompagne
          les entreprises dans la création,
          l’optimisation et l’évolution
          de solutions numériques pensées
          pour répondre à leurs objectifs.
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

        <h3
          className="
            text-2xl
            font-bold
            mb-4
          "
        >
          Un projet en tête ?
        </h3>

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