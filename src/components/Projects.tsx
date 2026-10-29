import Title from "./Title";
import { FolderGit2, ExternalLink, Check } from "lucide-react";
import KineImage from "../assets/kineImage.webp";
import cineDelicesImages from "../assets/cineDelicesImage.webp";

const projects = [
  {
    id: 1,
    title: "Site vitrine — Cabinet paramédical à Épernon",
    description:
      "Conception et développement d’un site vitrine sur-mesure ultra-rapide, responsive et optimisé pour le référencement naturel (SEO) et l’accessibilité.",
    highlights: [
      "Design responsive & ergonomie moderne",
      "Optimisation SEO & performances web",
      "Conformité accessibilité numérique",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://centre-sante-epernon.netlify.app/",
    repoLink: "https://github.com/MeriemZITARI/healthCenter",
    image: KineImage,
  },
  {
    id: 2,
    title: "Application Web Full-Stack — Ciné Délices",
    description:
      "Plateforme web interactive permettant de découvrir et partager des recettes de cuisine. Gestion complète avec authentification, dashboard d'administration et API REST.",
    highlights: [
      "Authentification sécurisée & espace membre",
      "Dashboard d'administration dynamique",
      "Architecture API REST & déploiement Docker",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    demoLink: "https://frontend-o5gt.onrender.com",
    repoLink: "https://github.com/MeriemZITARI/Cine-Delices-MeriemZITARI",
    image: cineDelicesImages,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-20 px-6 lg:px-12 bg-base-100"
    >
      <Title title="Projets & Réalisations" id="projects-title" level="h2" />

      {/* Intro SEO */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="uppercase text-primary font-semibold text-sm mb-3">
          Savoir-faire & Réalisations
        </p>
        <p className="text-base-content/80 text-base leading-relaxed">
          Découvrez quelques projets récents de <strong>création de sites web et applications sur-mesure</strong> développés par <strong>ZITAG DIGITAL</strong>.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 max-w-7xl mx-auto">
        {projects.map((project) => (
          <article
            key={project.id}
            className="
              bg-base-200
              rounded-3xl
              overflow-hidden
              border border-primary/15
              shadow-xl
              hover:shadow-2xl
              hover:border-primary/40
              transition-all
              duration-300
              flex
              flex-col
            "
          >
            {/* Mockup Style Navigateur Web */}
            <div className="bg-base-300 px-4 py-3 border-b border-base-content/10 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-warning/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-success/80 inline-block"></span>
              <span className="text-xs text-base-content/50 ml-2 font-mono truncate">
                {project.demoLink.replace("https://", "")}
              </span>
            </div>

            {/* Zone de l'image aérée */}
            <div className="p-4 sm:p-6 bg-base-300/30 flex justify-center items-center">
              <div className="overflow-hidden rounded-xl border border-base-content/10 shadow-md w-full">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-52 sm:h-64 md:h-72
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 bg-base-200">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-base-content/80 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Points clés */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((item) => (
                  <li key={item} className="text-xs sm:text-sm flex items-start gap-2 text-base-content/90">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-primary badge-outline text-xs font-semibold py-3 px-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 shadow-md"
                >
                  Voir le projet
                  <ExternalLink size={18} />
                </a>

                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code source GitHub"
                  className="btn btn-outline"
                >
                  <FolderGit2 size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;