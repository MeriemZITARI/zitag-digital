const SeoSchema = () => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ZITAG Digital",
      "url": "https://zitag.fr/",
      "logo": "https://zitag.fr/web-app-manifest-512x512.png",
      "founder": {
        "@type": "Person",
        "name": "Meriem ZITARI",
        "jobTitle": "Développeuse Fullstack"
      },
      "description": "ZITAG Digital accompagne les entreprises dans la conception, le développement et l'optimisation de sites web et d'applications modernes.",
      "sameAs": [
        "https://github.com/MeriemZITARI",
        "https://www.linkedin.com/in/meriemtaguia/"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  };
  
  export default SeoSchema;