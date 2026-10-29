import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { citiesContent } from "../data/CityContent";
// Importer la Navbar et le Footer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { ArrowRight, CheckCircle, MapPin, Sparkles, Zap } from "lucide-react";

export default function CityLandingPage() {
  const location = useLocation();

  // On extrait la clé (ex: "/agence-web-chartres" -> "chartres")
  const cityKey = location.pathname
    .replace("/agence-web-", "")
    .replace("/", "")
    .toLowerCase();

  const data = citiesContent[cityKey];

  // Remonter en haut de page au changement de ville
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Si la ville n'est pas dans cityContent.ts
  if (!data) {
    return (
      <main className="pt-32 pb-20 px-6 text-center bg-base-100 min-h-screen">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
          <p className="text-base-content/70 mb-8">
            La zone d'intervention demandée n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navbar avec le même alignement que la page d'accueil */}
      <div className="p-5 md:px-[15%]">
        <Navbar />
      </div>
      
      {/* Contenu principal avec le même padding horizontal pour garder l'alignement */}
      <main className="flex-grow p-5 md:px-[15%] pb-20">
        
        {/* Fil d'Ariane SEO */}
        <nav aria-label="Breadcrumb" className="text-sm text-base-content/60 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <span>Zones d'intervention</span>
          <span>/</span>
          <span className="text-primary font-medium">{data.cityName}</span>
        </nav>

        {/* Hero Section Localisé */}
        <header className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 badge badge-primary p-3 mb-6 font-semibold">
            <Sparkles className="w-4 h-4" />
            {data.badge}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-base-content">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-base-content/80 max-w-3xl leading-relaxed mb-8">
            {data.heroSubtitle}
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-2xl mb-8 text-left max-w-3xl">
            <p className="font-semibold text-primary text-base md:text-lg">
               {data.catchphrase}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Bouton 1 : Redirige vers la section contact de la page principale */}
            <Link
              to={`/?subject=${encodeURIComponent(`Projet web - ${data.cityName}`)}#contact`}
              className="btn btn-primary btn-lg shadow-lg"
            >
              Lancer mon projet à {data.cityName}
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>

            {/* Bouton 2 : Redirige vers les services sur la page principale */}
            <Link to="/#services" className="btn btn-outline btn-lg">
              Voir nos prestations
            </Link>
          </div>
        </header>

        {/* Section Contexte Économique Local */}
        <section className="bg-base-200 p-8 md:p-10 rounded-3xl border border-primary/10 shadow-xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-base-content">
            Les enjeux du web dans le bassin d'activité de {data.cityName}
          </h2>
          <p className="text-base md:text-lg text-base-content/80 leading-relaxed mb-6">
            {data.economicContext}
          </p>
          <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
            {data.localSeoStrategy}
          </p>
        </section>

        {/* Section Grille des Bénéfices */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Title title={data.benefitsTitle} level="h2" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {data.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-base-100 p-8 rounded-2xl border border-primary/10 shadow-lg flex flex-col justify-between hover:border-primary/40 transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge-primary font-bold">
                      {benefit.statOrKey}
                    </span>
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-base-content">
                    {benefit.title}
                  </h3>
                  <p className="text-base-content/75 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi choisir ZITAG DIGITAL */}
        <section className="bg-base-200 p-8 md:p-12 rounded-3xl border border-primary/10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Pourquoi choisir une agence basée près de chez vous ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Proximité & Échanges directs</h3>
                <p className="text-sm text-base-content/70">
                  Implantés à Épernon, nous intervenons rapidement à {data.cityName} pour vos réunions de projet ou le suivi de vos campagnes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Développement Full-Stack Sur-Mesure</h3>
                <p className="text-sm text-base-content/70">
                  Pas de templates lourds. Nous développons en React et technologies modernes pour une rapidité d'affichage optimale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bas de page */}
        <section className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-base-content">
            {data.ctaTitle}
          </h2>
          <p className="text-base-content/80 mb-8 max-w-xl mx-auto text-base md:text-lg">
            {data.ctaDescription}
          </p>
          <a
            href={`/?subject=${encodeURIComponent(`Projet web - ${data.cityName}`)}#contact`}
            className="btn btn-primary btn-lg shadow-lg"
          >
            Obtenir une étude gratuite pour {data.cityName}
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}