import { Mail } from "lucide-react";
import img from "../assets/Hero_img_ZITAG_comp.webp";

const Home = () => {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="
        flex flex-col-reverse lg:flex-row
        items-center
        justify-between
        gap-10 lg:gap-20
        my-10 lg:my-32
      "
    >
      {/* Texte */}
      <div className="flex-1 max-w-xl">
        {/* Surtitre : Expertise + Ancrage */}
        <p className="
          text-sm uppercase text-primary font-semibold
          text-center lg:text-left
        ">
          Agence Web & Développement Sur-Mesure
        </p>

        {/* Titre H1 : Axé sur la prestation globale */}
        <h1
          id="home-title"
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold
            text-center lg:text-left
            mt-4
            leading-tight
          "
        >
          Création de sites web & <br />
          <span className="text-primary">
            solutions digitales
          </span>{" "}
          sur mesure
        </h1>

        {/* Paragraphe : Ouverture France entière + Ancrage local */}
        <p className="
          my-6
          text-base
          text-center lg:text-left
          leading-relaxed
        ">
          <strong>ZITAG DIGITAL</strong> vous accompagne dans la <strong>création de sites vitrines, e-commerce, applications web et logiciels sur mesure</strong>. 
          <br /><br />
          Basés à <strong>Épernon (Eure-et-Loir)</strong>, nous collaborons avec des entreprises et indépendants <strong>partout en France</strong> grâce à un suivi 100 % à distance ou en présentiel.
        </p>

        <a
          href="#contact"
          className="
            btn btn-primary
            mx-auto lg:mx-0
            w-fit
          "
        >
          <Mail className="w-5 h-5" />
          Discuter de votre projet web
        </a>
      </div>

      {/* Image */}
      <div className="
        flex-1
        flex
        justify-center
      ">
        <img
          src={img}
          alt="ZITAG DIGITAL - Agence de création de sites web et applications sur mesure"
          width={1402}
          height={1122}
          fetchPriority="high"
          className="
            w-full
            h-auto
            max-w-sm
            md:max-w-lg
            xl:max-w-2xl
            rounded-3xl
            border border-primary/40
            shadow-[0_0_40px_rgba(255,79,163,0.25)]
          "
        />
      </div>
    </section>
  );
};

export default Home;