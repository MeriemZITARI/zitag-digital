import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content px-6 py-10">
      <aside className="space-y-3">
        

        {/* Nom */}
        <h2 className="text-2xl font-bold">
        <span className="tracking-wide">ZITAG</span><span className="text-primary">Digital</span>
        </h2>

        {/* Slogan */}
        <p className="text-sm text-base-content/70">
          Créons ensemble votre présence digitale
        </p>

        {/* Réseaux */}
        <div className="flex items-center gap-5 pt-2">
          <a
            href="https://github.com/MeriemZITARI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-200 hover:scale-110 hover:text-primary"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/meriemtaguia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-200 hover:scale-110 hover:text-primary"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

          <a
            href="meriem.taguia@gmail.com"
            aria-label="Email"
            className="transition-transform duration-200 hover:scale-110 hover:text-primary"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="pt-3 text-xs text-base-content/60">
          © {new Date().getFullYear()} ZITAG Digital — Tous droits réservés.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;