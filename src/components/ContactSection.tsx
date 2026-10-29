import Title from "./Title";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Turnstile } from "react-turnstile";

const contactInfos = [
    {
        id: 1,
        label: "Email",
        value: "contact@zitag.fr",
        href: "mailto:contact@zitag.fr",
        icon: <Mail className="text-primary w-6 h-6 shrink-0" />,
        isMultiLink: false,
    },
    {
        id: 2,
        label: "Téléphone",
        value: "06 45 38 23 48",
        href: "tel:+33645382348",
        icon: <Phone className="text-primary w-6 h-6 shrink-0" />,
        isMultiLink: false,
    },
    {
        id: 3,
        label: "Zones d'intervention",
        isMultiLink: true,
        locations: [
            { name: "Épernon", href: "/agence-web-epernon" },
            { name: "Chartres", href: "/agence-web-chartres" },
            { name: "Dreux", href: "/agence-web-dreux" },
            { name: "Rambouillet", href: "/agence-web-rambouillet" },
            { name: "France entière", href: "/agence-web-france" },
        ],
        icon: <MapPin className="text-primary w-6 h-6 shrink-0" />,
    },
];

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    
    // ✅ Initialisation directe de l'état depuis l'URL (Zéro erreur ESLint)
    const [subjectValue, setSubjectValue] = useState(() => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get("subject") || "";
    });

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

    // ✅ useEffect dédié uniquement au défilement et aux événements (plus de setState synchrone direct)
    useEffect(() => {
        // 1. Défilement automatique vers le formulaire si l'URL contient #contact
        if (window.location.hash === "#contact") {
            setTimeout(() => {
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }

        // 2. Écouteur pour les clics internes (événements "preselectSubject")
        const handlePreselectSubject = (event: Event) => {
            const customEvent = event as CustomEvent<string>;
            if (customEvent.detail) {
                setSubjectValue(customEvent.detail);
            }
        };

        window.addEventListener("preselectSubject", handlePreselectSubject as EventListener);
        return () => {
            window.removeEventListener("preselectSubject", handlePreselectSubject as EventListener);
        };
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!captchaToken) {
            setError("Veuillez confirmer que vous n'êtes pas un robot.");
            return;
        }

        setIsSubmitting(true);
        setIsSuccess(false);
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    subject: formData.get("subject"),
                    message: formData.get("message"),
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            form.reset();
            setSubjectValue("");
            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setIsSuccess(false);
            setError("Impossible d'envoyer le message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="bg-base-200 py-20 px-6 lg:px-12"
        >
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-14">
                    <Title id="contact-title" title="Contact" level="h2" />
                </header>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Coordonnées (Plus de gap forcé grâce à space-y-6 naturel) */}
                    <aside className="bg-base-100 rounded-2xl p-8 shadow-xl border border-primary/10 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Restons en contact</h3>
                            <p className="text-lg font-medium leading-relaxed text-base-content/90 mb-4">
                                Vous souhaitez créer un site web, améliorer une solution existante ou développer un outil adapté à votre activité ?
                            </p>
                            <p className="text-base leading-relaxed text-base-content/80">
                                <span className="font-medium text-primary">
                                    Chaque projet commence par une écoute attentive.
                                </span>{" "}
                                Nous prenons le temps de comprendre vos besoins et vos objectifs.
                            </p>
                        </div>

                        <ul className="space-y-6 pt-2 border-t border-base-content/10">
                            {contactInfos.map((info) => (
                                <li key={info.id} className="flex gap-4 items-start">
                                    {info.icon}
                                    <div>
                                        <p className="font-semibold">{info.label}</p>
                                        
                                        {info.isMultiLink ? (
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                {info.locations?.map((loc, idx) => (
                                                    <span key={loc.name} className="text-sm">
                                                        <Link
                                                            to={loc.href}
                                                            className="text-primary hover:underline font-medium"
                                                        >
                                                            {loc.name}
                                                        </Link>
                                                        {idx < (info.locations?.length ?? 0) - 1 && (
                                                            <span className="text-base-content/50 ml-1.5">•</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <a
                                                href={info.href}
                                                className="text-base-content/70 hover:text-primary transition-colors text-sm"
                                            >
                                                {info.value}
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Formulaire */}
                    {isSuccess ? (
                        <div
                            className="bg-base-100 rounded-2xl p-8 shadow-xl border border-primary/25 flex flex-col items-center justify-center text-center min-h-[450px]"
                            role="status"
                        >
                            <CheckCircle className="w-16 h-16 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Message envoyé</h3>
                            <p className="text-base-content/80 leading-relaxed mb-8 max-w-md">
                                Merci pour votre prise de contact. Votre demande a bien été reçue. Je vous répondrai rapidement.
                            </p>
                            <button
                                type="button"
                                onClick={() => { setIsSuccess(false); setError(""); }}
                                className="btn btn-outline btn-primary"
                            >
                                Envoyer un autre message
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-base-100 rounded-2xl p-8 shadow-xl border border-primary/10 space-y-6"
                        >
                            <h3 className="text-2xl font-bold">Envoyer un message</h3>

                            {error && (
                                <div className="rounded-xl border border-error bg-error/10 p-4 text-error" role="alert">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="votre@email.fr"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium">Motif / Sujet</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={subjectValue}
                                    onChange={(e) => setSubjectValue(e.target.value)}
                                    placeholder="Ex: Vitrine & Visibilité SEO"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="textarea textarea-bordered w-full"
                                    placeholder="Parlez-nous de votre projet..."
                                />
                            </div>

                            {turnstileSiteKey && (
                                <Turnstile
                                    sitekey={turnstileSiteKey}
                                    onVerify={(token) => setCaptchaToken(token)}
                                    onExpire={() => setCaptchaToken(null)}
                                />
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full"
                            >
                                {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}