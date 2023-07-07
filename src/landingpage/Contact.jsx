import { useState, useEffect } from "react";
import { signInAnonymously } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Contact() {
    const [navn, setNavn] = useState("");
    const [firma, setFirma] = useState("");
    const [epost, setEpost] = useState("");
    const [telefon, setTelefon] = useState("");
    const [melding, setMelding] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        signInAnonymously(auth)
            .then((userCredential) => {
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error signing in anonymously:", error);
                setError("Error signing in anonymously");
                setLoading(false);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) {
            setError("Please wait...");
            return;
        }

        setError(null);

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // this is a common regex for validating email.
        const phoneRegex = /^[0-9\b]+$/; // this regex will check if the phone number is only digits.

        if (
            navn === "eskil@tetradmarketing.no" ||
            epost === import.meta.env.VITE_REACT_APP_EMAIL_P ||
            !emailRegex.test(epost)
        ) {
            setError("Valid contact person and contact email are necessary :)");
            return;
        }

        if (telefon !== "" && !phoneRegex.test(telefon)) {
            setError(
                "Telephone number is not valid, please input none or a number value"
            );
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "messages"), {
                navn,
                firma,
                epost,
                telefon,
                melding,
                favorite: false,
            });

            setNavn("");
            setFirma("");
            setEpost("");
            setTelefon("");
            setMelding("");
            setSubmitted(true);
        } catch (error) {
            setError(
                "Feil med sending a epost. Du kan også kontakte oss direkte med epost adressen under :)"
            );
            console.error("Error creating blog post:", error);
        }
    };

    if (loading) {
        return (
            <div className="inner grid place-items-center min-h-screen">
                <div className="flex flex-col animate-spin">
                    <div className="text-6xl animate-ping">. . .</div>
                </div>
            </div>
        );
    }
    return (
        <div className="inner pb-32 flex flex-col gap-16 scroll-padding-top pt-16">
            <div className="flex flex-col gap-4">
                <h2 className="service-heading text-5xl font-bold w-fit border-b-green border-b-4 pb-2 ">
                    Kontakt Oss
                </h2>
                <p className="text-offWhite max-w-pMax">
                    Vi vil gjerne høre fra deg! Vennligst send oss en e-post
                    hvis du har spørsmål eller ønsker å samarbeide med oss. Takk
                    for at du besøkte nettsiden vår!
                </p>
            </div>

            <div className=" w-full flex flex-col maxScreen:flex-row gap-8">
                {submitted ? (
                    <div className="text-center maxScreen:min-w-[620px] text-2xl w-fit my-32">
                        Meldingen din er sendt
                        <br /> Vi er i kontakt med deg snart!
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full gap-4 max-w-pMax"
                    >
                        <h3 className="text-trettito font-semibold">
                            Tetrad kontaker deg!
                        </h3>
                        {error && <div className="text-pink">{error}</div>}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <div className="flex flex-1 flex-col">
                                    <label
                                        htmlFor="navn"
                                        className="text-xl text-offWhite"
                                    >
                                        Kontaktperson *
                                    </label>
                                    <input
                                        value={navn}
                                        onChange={(e) =>
                                            setNavn(e.target.value)
                                        }
                                        type="text"
                                        id="navn"
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <label
                                        htmlFor="firma"
                                        className="text-xl text-offWhite"
                                    >
                                        Firma
                                    </label>
                                    <input
                                        value={firma}
                                        onChange={(e) =>
                                            setFirma(e.target.value)
                                        }
                                        type="text"
                                        id="firma"
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col flex-1">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="epost"
                                        className="text-xl text-offWhite"
                                    >
                                        Kontakt e-post *
                                    </label>
                                    <input
                                        value={epost}
                                        onChange={(e) =>
                                            setEpost(e.target.value)
                                        }
                                        type="text"
                                        id="epost"
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="telefon"
                                        className="text-xl text-offWhite"
                                    >
                                        Kontakt Telefon
                                    </label>
                                    <input
                                        value={telefon}
                                        onChange={(e) =>
                                            setTelefon(e.target.value)
                                        }
                                        type="text"
                                        id="telefon"
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="melding"
                                className="text-xl text-offWhite"
                            >
                                Melding til Tetrad
                            </label>
                            <textarea
                                id="melding"
                                value={melding}
                                onChange={(e) => setMelding(e.target.value)}
                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            ></textarea>
                            <span className="font-bold text-offWhite text-xs">
                                Vi kontakter deg om du lar meldingfeltet stå
                                tomt.
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl"
                        >
                            Kontakt meg
                        </button>
                        <span className="font-bold text-offWhite text-xs">
                            * Må fylles ut *
                        </span>
                    </form>
                )}
                <div className="flex flex-col gap-4 ">
                    <h3 className="text-trettito font-semibold">
                        Send e-post:
                    </h3>
                    <div className="flex flex-col">
                        <span className="text-xl text-offWhite">
                            hello@tetradmarketing.no
                        </span>
                        <a
                            href="mailto:hello@tetradmarketing.no"
                            className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl"
                        >
                            Åpne mail
                        </a>
                        <span className="font-bold text-offWhite text-xs">
                            Eller kopier epost
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
