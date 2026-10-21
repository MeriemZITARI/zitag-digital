/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "dracula",
      {
        "dracula-light": {
          "primary": "#ff79c6",          // Rose Dracula
          "primary-content": "#ffffff",  // Texte blanc sur les boutons roses
          "secondary": "#bd93f9",        // Violet Dracula
          "secondary-content": "#ffffff",
          "accent": "#ff79c6",           // Remplace le bleu par ton rose
          "neutral": "#282a36",          // Couleur sombre pour le texte neutre
          "neutral-content": "#ffffff",
          
          /* Fonds clairs forcés */
          "base-100": "#ffffff",         // Vrai blanc (Navbar, cartes Offres, etc.)
          "base-200": "#f8f9fa",         // Gris très clair (Section Offres)
          "base-300": "#e9ecef",         // Gris pour les petits badges/icônes
          "base-content": "#1e1e2e",     // Couleur du texte principal (sombre pour la lisibilité)

          "info": "#bd93f9",
          "success": "#50fa7b",
          "warning": "#f1fa8c",
          "error": "#ff5555",
        },
      },
    ],
  },
};