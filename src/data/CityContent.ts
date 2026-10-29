export interface Benefit {
    title: string;
    description: string;
    statOrKey: string;
  }
  
  export interface CityData {
    slug: string;
    cityName: string;
    department: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    catchphrase: string;
    economicContext: string;
    benefitsTitle: string;
    benefits: Benefit[];
    localSeoStrategy: string;
    ctaTitle: string;
    ctaDescription: string;
  }
  
  export const citiesContent: Record<string, CityData> = {
    epernon: {
        slug: "agence-web-epernon",
        cityName: "Épernon",
        department: "28",
        badge: "Agence Locale • Épernon & Proximité",
        heroTitle: "Votre agence web de proximité à Épernon",
        heroSubtitle: "Basés à Épernon, nous créons des sites web performants pour les artisans, commerçants et PME d'Épernon et de son bassin local (Hanches, Maintenon).",
        catchphrase: "Un interlocuteur local et réactif, accessible immédiatement pour vos projets web.",
        economicContext: "Entre la Beauce et la vallée de la Drouette, Épernon est le cœur économique naturel pour les entreprises du secteur. Un site web moderne et bien référencé vous permet de capter l'ensemble des clients du bassin d'Épernon.",
        benefitsTitle: "Pourquoi choisir une agence implantée à Épernon ?",
        benefits: [
          { statOrKey: "Proximité", title: "Rendez-vous sur place", description: "Échanges en face-à-face rapides à Épernon et dans les communes limitrophes." },
          { statOrKey: "Performance", title: "Développement moderne", description: "Sites sur-mesure, ultra-rapides et parfaitement adaptés aux mobiles." },
          { statOrKey: "SEO Local", title: "Incontournable sur Google", description: "Positionnez votre entreprise au premier rang des recherches sur le secteur d'Épernon." }
        ],
        localSeoStrategy: "Stratégie de référencement ciblée pour faire rayonner votre activité sur Épernon et ses environs.",
        ctaTitle: "Un projet web à Épernon ?",
        ctaDescription: "Échangeons sur vos besoins et créons le site qui développera votre clientèle."
      },
  
    chartres: {
      slug: "agence-web-chartres",
      cityName: "Chartres",
      department: "28",
      badge: "Accélération Digitale • Chartres & Agglomération",
      heroTitle: "Transformez vos visiteurs chartrains en clients fidèles",
      heroSubtitle: "Un site web haute performance et un SEO local taillés pour dominer votre marché dans toute l'agglomération chartraine, depuis notre ancrage dans la Vallée de la Voise.",
      catchphrase: "À Chartres et ses alentours, près de 9 clients sur 10 vérifient la présence web d'une entreprise avant de la contacter.",
      economicContext: "Capitale départementale et pôle d'attraction incontournable pour les communes de l'axe (Épernon, Saint-Piat, Maintenon), Chartres offre un bassin de clients exigeants pour votre activité.",
      benefitsTitle: "Pourquoi confier votre projet web à ZITAG DIGITAL dans la région chartraine ?",
      benefits: [
        { statOrKey: "SEO Chartrain", title: "Captation des recherches locales", description: "Positionnement prioritaire sur les requêtes à forte intention d'achat dans l'agglomération de Chartres." },
        { statOrKey: "Mobile First", title: "Expérience fluide sur smartphone", description: "Chargement en moins de 2 secondes pour capter la clientèle mobile de toute la région." },
        { statOrKey: "Conversion", title: "Design qui inspire confiance", description: "Valorisez votre expertise et incitez immédiatement à la prise de contact." }
      ],
      localSeoStrategy: "Stratégie de mots-clés géolocalisés reliant l'agglomération chartraine et les communes de la vallée pour devancer vos concurrents.",
      ctaTitle: "Prêt à dominer le marché sur Chartres et ses environs ?",
      ctaDescription: "Échangeons sur votre projet et définissons la stratégie web la plus rentable."
    },
  
    dreux: {
      slug: "agence-web-dreux",
      cityName: "Dreux",
      department: "28",
      badge: "Développement Business • Dreux",
      heroTitle: "Artisans & PME à Dreux : Digitalisez votre savoir-faire",
      heroSubtitle: "Développez votre clientèle dans le bassin drouais grâce à un site internet sur-mesure orienté résultats.",
      catchphrase: "Ne laissez plus vos concurrents capter les demandes de devis en ligne à Dreux.",
      economicContext: "Pôle industriel et artisanal majeur, le bassin de Dreux regorge d'entreprises aux savoir-faire remarquables.",
      benefitsTitle: "Ce qu'un site web performant apporte à votre entreprise à Dreux :",
      benefits: [
        { statOrKey: "+ Devis", title: "Génération de demandes qualifiées", description: "Formulaires stratégiques pour transformer un curieux en prospect chaud." },
        { statOrKey: "Notoriété", title: "Ancrage local & Crédibilité", description: "Rassurez vos futurs clients avec un portfolio et des avis mis en valeur." },
        { statOrKey: "Autonomie", title: "Un outil de travail moderne", description: "Adapté aux besoins réels du BTP, de l'artisanat et des services." }
      ],
      localSeoStrategy: "Ciblage du maillage territorial (Dreux, Vernouillet, axe RN12).",
      ctaTitle: "Un projet à Dreux ?",
      ctaDescription: "Obtenez une analyse personnalisée et un devis adapté."
    },
  
    rambouillet: {
      slug: "agence-web-rambouillet",
      cityName: "Rambouillet",
      department: "78",
      badge: "Expansion • Rambouillet",
      heroTitle: "Développez votre visibilité digitale à Rambouillet",
      heroSubtitle: "Des solutions web modernes pour capter une clientèle qualitative dans les Yvelines.",
      catchphrase: "Un positionnement web haut de gamme pour les entreprises rambolitaines.",
      economicContext: "Située aux portes des Yvelines, Rambouillet présente un bassin économique actif et exigeant. Un site web rapide et élégant est indispensable.",
      benefitsTitle: "Les avantages pour votre activité à Rambouillet :",
      benefits: [
        { statOrKey: "Image", title: "Prestige & Modernité", description: "Un design soigné qui reflète la qualité de vos prestations." },
        { statOrKey: "Acquisition", title: "Trafic qualifié", description: "Attirez une clientèle locale ciblée via Google." },
        { statOrKey: "Performance", title: "Technologie React", description: "Zéro lenteur, navigation instantanée." }
      ],
      localSeoStrategy: "Optimisation ciblée sur Rambouillet et sa grande couronne.",
      ctaTitle: "Un projet à Rambouillet ?",
      ctaDescription: "Contactez-nous pour en discuter."
    },
  
    france: {
      slug: "agence-web-france",
      cityName: "France entière",
      department: "National",
      badge: "Sur-Mesure National",
      heroTitle: "Accompagnement digital sur toute la France",
      heroSubtitle: "Des applications web et des sites performants, peu importe où se situe votre structure.",
      catchphrase: "Le digital n'a pas de frontières : propulsez votre activité à l'échelle nationale.",
      economicContext: "Pour les e-commerçants, les SaaS ou les entreprises à distance, nous concevons des architectures robustes et évolutives.",
      benefitsTitle: "Pourquoi travailler avec ZITAG DIGITAL à distance ?",
      benefits: [
        { statOrKey: "Agilité", title: "Collaboration fluide", description: "Outils de suivi de projet modernes et communication réactive." },
        { statOrKey: "Expertise", title: "Standards élevés", description: "Sécurité, SEO national et performances techniques de pointe." },
        { statOrKey: "Évolution", title: "Scalabilité", description: "Des plateformes prêtes à grandir avec votre trafic." }
      ],
      localSeoStrategy: "SEO national et ciblage de mots-clés larges / sectoriels.",
      ctaTitle: "Un projet national ?",
      ctaDescription: "Donnons vie à votre vision digitale dès aujourd'hui."
    }
  };