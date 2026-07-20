import Title from "./Title";
import { FolderGit2, ExternalLink } from "lucide-react";
import KineImage from "../assets/kineImage.png";
import cineDelicesImages from "../assets/cineDelicesImage.png"

const projects = [
    {
      id: 1,

      title: "Site vitrine cabinet paramédical",
      description:
        "Création d’un site vitrine one-page moderne et responsive avec un travail particulier sur le référencement naturel, les performances et l’accessibilité.",
      highlights: [
        "Responsive design",
        "Optimisation SEO",
        "Accessibilité",
        
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      demoLink: "https://centre-sante-epernon.netlify.app/",
      repoLink: "https://github.com/MeriemZITARI/healthCenter",
      image: KineImage,
    },
    {
      id: 2,

      title: "Application full-stack",
      description:
        "Application full-stack permettant de découvrir et partager des recettes inspirées du cinéma avec authentification, espace d’administration et API REST.",
      highlights: [
        "Authentification sécurisée",
        "Dashboard administrateur",
        "API REST",
        "API externe",
        "Déploiement Docker",
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
      ],
      demoLink: "https://frontend-o5gt.onrender.com",
      repoLink: "https://github.com/MeriemZITARI/Cine-Delices-MeriemZITARI",
      image: cineDelicesImages,
    },
  ];

const Projects = () => {
  return (
    <section
      id="projects"
      className="  bg-base-200
        py-20
        px-6
        lg:px-12"
    >
      <Title title="Mes projets" />

      <div className="grid gap-8 lg:grid-cols-2 mt-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="
              bg-base-100
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              flex 
              flex-col
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-96
                object-cover
              "
            />

            <div className="p-6 flex flex-col flex-1">
            

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-3
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-base-content/80
                  mb-5
                "
              >
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-center gap-2"
                  >
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-outline"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.demoLink}
                  className="btn btn-primary flex-1"
                >
                  Voir le projet
                  <ExternalLink size={18} />
                </a>

                <a
                  href={project.repoLink}
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