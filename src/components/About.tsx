import Title from "./Title";
import {
  Compass,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Notre vision",
    description:
      "Créer des solutions digitales modernes, accessibles et pensées pour accompagner durablement les projets de nos clients.",
    icon: <Compass className="text-primary w-8 h-8" />,
  },

  {
    id: 2,
    title: "Notre approche",
    description:
      "Chaque projet est développé avec une compréhension des besoins métier, des utilisateurs et des objectifs à atteindre.",
    icon: <Lightbulb className="text-primary w-8 h-8" />,
  },

  {
    id: 3,
    title: "Nos engagements",
    description:
      "Concevoir des expériences fiables, évolutives et centrées sur la qualité du développement.",
    icon: <HeartHandshake className="text-primary w-8 h-8" />,
  },
];

const About = () => {
  return (
    <section
        id="about"
  aria-labelledby="about-title"
      className="
        bg-base-200
        py-20
        px-6
        lg:px-12
      "
    >
      <Title title="À propos" id= "about-title" level="h2" />

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          gap-14
        "
      >

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="
            uppercase
            text-primary
            font-semibold
            text-sm
            mb-4
          ">
            L’esprit ZITAG Digital
          </p>

          <h3 className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
          ">
            Une approche humaine
            <span className="text-primary">
              {" "}et technique
            </span>
          </h3>

          <p className="
            text-base
            leading-relaxed
            text-base-content/80
          ">
            ZITAG Digital est née de la volonté de
            concevoir des solutions numériques qui
            allient expertise technique, accessibilité
            et compréhension des besoins réels des
            entreprises.

            <br />
            <br />

            Fondée par une développeuse full-stack,
            l’agence construit chaque projet avec
            une attention particulière portée à
            l’expérience utilisateur, à la performance
            et à la qualité du développement.
          </p>

        </div>


        {/* Cartes */}
        <div className="
          grid
          md:grid-cols-3
          gap-6
        ">

          {aboutSections.map((section) => (

            <div
              key={section.id}
              className="
                bg-base-100
                rounded-2xl
                p-8
                shadow-xl
                border
                border-primary/10
               transition-all
                duration-300
  ease-in-out

  hover:-translate-y-2
  hover:scale-[1.02]
  hover:border-primary/40
  hover:shadow-2xl
 
              "
            >

              <div className="mb-6">
                {section.icon}
              </div>

              <h3 className="
                text-xl
                font-bold
                mb-4
              ">
                {section.title}
              </h3>

              <p className="
                text-sm
                leading-relaxed
                text-base-content/70
              ">
                {section.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;