import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Si l'élément n'est pas encore rendu dans le DOM, on réessaie après un court délai
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(elementId);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    } else {
      // Si aucune ancre n'est présente, on remonte en haut de page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}