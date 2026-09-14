import Title from "./Title";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
    CheckCircle,
    Mail,


} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Turnstile } from "react-turnstile";

const contactInfos = [
    {
        id: 1,
        label: "Email",
        value: "contact@zitag.fr",
        href: "mailto:contact@zitag.fr",
        icon: <Mail className="text-primary w-6 h-6" />,
    },
    {
        id: 2,
        label: "LinkedIn",
        value: "Mon profil",
        href: "https://www.linkedin.com/in/meriemtaguia/",
        icon: <FaLinkedin className="text-primary w-6 h-6" />,
    },
    {
        id: 3,
        label: "GitHub",
        value: "Mes projets",
        href: "https://github.com/MeriemZITARI",
        icon: <FaGithub className="text-primary w-6 h-6" />,
    },
];



export default function ContactSection() {


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState("");
const [captchaToken, setCaptchaToken] =
        useState<string | null>(null);

    const turnstileSiteKey =
        import.meta.env.VITE_TURNSTILE_SITE_KEY;

const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
) => {

    event.preventDefault();
    if (!captchaToken) {
        setError(
            "Veuillez confirmer que vous n'êtes pas un robot."
        );
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
                publicKey:
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        );

        form.reset();

        setIsSuccess(true);

    } catch (error) {

        console.error(error);

        setIsSuccess(false);

        setError(
            "Impossible d'envoyer le message."
        );

    } finally {

        setIsSubmitting(false);

    }
    
};

    return (

        <section
            id="contact"
            aria-labelledby="contact-title"
            className="
            
                py-20
                px-6
                lg:px-12
            "
        >

            <div className="
                max-w-6xl
                mx-auto
            ">

                {/* Header */}
                <header className="
                    text-center
                    mb-14
                ">

                    <Title
                        id="contact-title"
                        title="Contact"
                        level="h2"
                    />

                  

                </header>



                <div className="
                    grid
                    md:grid-cols-2
                    gap-8
                ">

                    {/* Coordonnées */}
                    <aside className="
                        bg-base-100
                        rounded-2xl
                        p-8
                        shadow-xl
                        border
                        border-primary/10
                    ">

                        <h3 className="
                            text-2xl
                            font-bold
                            mb-4
                        ">

Restons en contact

                        </h3>
                        <p
    className="
          text-lg
    font-medium
    leading-relaxed
    text-base-content/90
    mb-6
    "
>
    Vous avez un projet de création de site web,
    une refonte ou une idée à concrétiser ?
</p>
                        <p className=" text-base
    leading-relaxed
    text-base-content/80
    mb-8">
         <span className="font-medium text-primary">
    Chaque projet débute par un échange
  </span>{" "} afin
de comprendre vos besoins, vos objectifs
et les solutions les plus adaptées.</p>


                        <ul className="space-y-8">

    {contactInfos.map((info) => (

        <li
            key={info.id}
            className="flex gap-4"
        >

            {info.icon}

            <div>

                <p className="font-semibold">
                    {info.label}
                </p>

                <a
                    href={info.href}
                    target={
                        info.label !== "Email"
                            ? "_blank"
                            : undefined
                    }
                    rel={
                        info.label !== "Email"
                            ? "noopener noreferrer"
                            : undefined
                    }
                    className="
                        text-base-content/70
                        hover:text-primary
                        transition-colors
                    "
                >
                    {info.value}
                </a>

            </div>

        </li>

    ))}

</ul>

                    </aside>



                    {/* Formulaire */}
                    {isSuccess ? (

<div
    className="
        bg-base-100
        rounded-2xl
        p-8
        shadow-xl
        border
        border-primary/20
        flex
        flex-col
        items-center
        justify-center
        text-center
    "
    role="status"
>

    <CheckCircle
        className="
            w-16
            h-16
            text-secondary
            mb-6
        "
    />

    <h3
        className="
            text-2xl
            font-bold
            mb-4
        "
    >
        Message envoyé
    </h3>

    <p
        className="
            text-base-content/80
            leading-relaxed
            mb-8
            max-w-md
        "
    >
        Merci pour votre prise de contact.

        <br />

        Votre demande a bien été reçue.
        Je vous répondrai dans les meilleurs délais.
    </p>
   

    <button
        type="button"
        onClick={() => {setIsSuccess(false); setError("")}}
        className="
            btn
            btn-outline
            btn-primary
        "
    >
        Envoyer un autre message
    </button>

</div>

)
                   :( <form onSubmit={handleSubmit} className="
                        bg-base-100
                        rounded-2xl
                        p-8
                        shadow-xl
                        border
                        border-primary/10
                        space-y-6
                    ">

                        <h3 className="
                            text-2xl
                            font-bold
                        ">

                            Envoyer un message

                        </h3>
    

{error && (
  <div
    className="
      rounded-xl
      border
      border-error
      bg-error/10
      p-4
      text-error
    "
    role="alert"
  >
    {error}
  </div>
)}


                        <div>

                            <label
                                htmlFor="name"
                                className="
                                    block
                                    mb-2
                                "
                            >

                                Nom *

                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="
                                    input
                                    input-bordered
                                    w-full
                                "
                            />

                        </div>



                        <div>

                            <label
                                htmlFor="email"
                                className="block mb-2"
                            >

                                Email *

                            </label>


                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="
                                    input
                                    input-bordered
                                    w-full
                                "
                            />

                        </div>



                        <div>

                            <label
                                htmlFor="subject"
                                className="block mb-2"
                            >

                                Sujet

                            </label>


                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                className="
                                    input
                                    input-bordered
                                    w-full
                                "
                            />

                        </div>



                        <div>

                            <label
                                htmlFor="message"
                                className="block mb-2"
                            >

                                Message *

                            </label>


                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="
                                    textarea
                                    textarea-bordered
                                    w-full
                                "
                            />

                        </div>
                        {turnstileSiteKey && (
   <Turnstile
   sitekey={turnstileSiteKey}
   onVerify={(token) => {
       setCaptchaToken(token);
   }}
   onExpire={() => {
       setCaptchaToken(null);
   }}
/>
)}

                        <button
    type="submit"
    disabled={isSubmitting}
    className="
        btn
        btn-primary
        w-full
    "
>

    {isSubmitting
        ? "Envoi en cours..."
        : "Envoyer mon message"
    }

</button>

                    </form>
                   )}
                </div>

            </div>

        </section>

    );

}