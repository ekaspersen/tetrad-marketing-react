import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ServiceInnhold from "../components/ServiceInnhold";
import ServiceMarkeds from "../components/ServiceMarkeds";
import { Link } from "react-router-dom";
import BloggCta from "../landingpage/BloggCta";

export default function OrganiskSynlighet() {
    return (
        <div className="inner flex flex-col gap-16">
            <div className=" maxScreen:service-cards-wrapper-only-two flex-row maxScreen:flex pt-16">
                <div className="maxScreen:flex hidden">
                    <ServiceInnhold />
                </div>

                <div className="flex flex-col mt-auto gap-8">
                    <img
                        className=" h-48"
                        src={digsyn}
                        alt="graphic ilustration"
                    />
                    <h1 className="text-center pt-8 text-3xl sm:text-5xl whitespace-nowrap">
                        Organisk Synlighet
                    </h1>
                </div>
                <div className="maxScreen:flex hidden">
                    <ServiceMarkeds />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <p className="font-semibold opacity-50">
                    Selv om det finnes mange måter å tiltrekke trafikk til et
                    nettsted eller sosiale medier, er organisk synlighet en av
                    de mest effektive. Organisk synlighet refererer til evnen
                    til å rangere høyt på søkemotorer og tiltrekke seg besøkende
                    uten å betale for annonser. Dette kan være en viktig faktor
                    for å øke merkevarebevissthet, engasjement og konverteringer
                    på nettstedet ditt.
                </p>
                <div className="gap-4 flex flex-col maxScreen:flex-row mx-auto">
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={branding}
                                alt="graphic ilustration"
                            />
                            Branding
                        </h3>
                        <p className="font-semibold">
                            En annen viktig faktor for å øke organisk trafikk og
                            synlighet er å ha et sterkt brand. Branding handler
                            om å bygge opp en tydelig og unik identitet som
                            skiller seg ut fra konkurrentene. Dette inkluderer å
                            ha et godt design, en klar merkevaremelding og å
                            skape en positiv oppfatning av merkevaren blant
                            publikum.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={somedia}
                                alt="graphic ilustration"
                            />
                            Sosiale Media
                        </h3>
                        <p className="font-semibold">
                            Sosiale medier kan også være en viktig faktor for å
                            øke organisk trafikk til nettstedet ditt. Ved å dele
                            innhold som engasjerer og interesserer publikum, kan
                            du tiltrekke seg mer trafikk og øke synligheten på
                            søkemotorer.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={seo}
                                alt="graphic ilustration"
                            />
                            SEO
                        </h3>
                        <p className="font-semibold">
                            Søkemotoroptimalisering (SEO) er en av de mest
                            effektive måtene å øke organisk synlighet og trafikk
                            på. SEO handler om å optimalisere nettstedet ditt
                            slik at det rangerer høyere på søkemotorer. Dette
                            kan inkludere å bruke relevante nøkkelord, skape
                            kvalitetsinnhold og sikre at nettstedet ditt er
                            teknisk lyd.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 maxScreen:flex-row">
                    <p className="maxScreen:mb-8 font-semibold opacity-50 max-w-pMax">
                        Med god organisk synlighet kan du tiltrekke deg mer
                        trafikk, øke merkevarebevissthet og forbedre
                        konverteringsrater. I DigSyn fokuserer vi på å øke
                        organisk synlighet for våre kunder gjennom effektiv
                        søkemotoroptimalisering, sosiale medier og branding.
                    </p>
                    <Link
                        to="/kontakt"
                        className="max-w-[180px] w-full h-[50px] maxScreen:ml-auto grid place-items-center bg-green text-black rounded-full  font-semibold text-xl"
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="service-cards-wrapper-only-two justify-center items-center maxScreen:hidden py-32">
                    <ServiceInnhold />
                    <ServiceMarkeds />
                </div>
            </div>
            <BloggCta />
            <div className="pt-16"></div>
        </div>
    );
}
