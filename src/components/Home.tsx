import { Mail } from "lucide-react"
import img from "../assets/Hero_img_ZITAG.webp"

const Home = () => {
  return (
    <div id= "home" className="
    flex flex-col-reverse lg:flex-row
    items-center
    justify-between
    gap-10 lg:gap-20
    my-10 lg:my-32
  ">
  
    {/* Texte */}
    <div className="flex-1 max-w-xl">
  
      <p className="
        text-sm uppercase text-primary font-semibold
        text-center lg:text-left
      ">
        Agence digitale
      </p>
  
      <h1 className="
        text-4xl sm:text-5xl lg:text-6xl
        font-bold
        text-center lg:text-left
        mt-4
        leading-tight
      ">
        Des solutions digitales <br />
        <span className="text-primary">
          sur mesure
        </span>{" "}
        pour votre activité
      </h1>
  
      <p className="
        my-6
        text-base
        text-center lg:text-left
        leading-relaxed
      ">
        ZITAG Digital accompagne les entreprises
        dans la conception, le développement
        et l’optimisation de sites web et
        d’applications modernes.
  
        <br /><br />
  
        Fondée par Meriem, développeuse fullstack,
        l’agence allie expertise technique et
        approche centrée utilisateur.
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
        Parlons de votre projet
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
        alt="ZITAG Digital"
        className="
          w-full
          max-w-sm
          md:max-w-lg
          xl:max-w-2xl
          rounded-3xl
          border border-primary/40
          shadow-[0_0_40px_rgba(255,79,163,0.25)]
        "
      />
    </div>
  
  </div>
  )
}

export default Home