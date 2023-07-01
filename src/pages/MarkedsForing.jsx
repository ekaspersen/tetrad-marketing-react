import markeds from "../assets/icons/markedsBig.svg";
import annonser from "../assets/icons/Annonser.svg";
import hubspot from "../assets/icons/hubspot.svg";
import markedsanalyse from "../assets/icons/Search.svg";
import ServiceDigsyn from "../components/ServiceDigsyn";
import ServiceInnhold from "../components/ServiceInnhold";
import { Link } from "react-router-dom";
import BloggCta from "../landingpage/BloggCta";

export default function MarkedsForing() {
    return (
        <div className="inner flex flex-col gap-16">
            <div className=" maxScreen:service-cards-wrapper-only-two justify-between flex-row maxScreen:flex pt-16">
                <div className="maxScreen:flex hidden">
                    <ServiceDigsyn />
                </div>

                <div className="flex flex-col mt-auto gap-8">
                    <img
                        className=" mx-auto  h-48"
                        src={markeds}
                        alt="graphic ilustration"
                    />
                    <h1 className="text-center pt-8 text-3xl sm:text-5xl">
                        Markedsføring
                    </h1>{" "}
                </div>
                <div className="maxScreen:flex hidden">
                    <ServiceInnhold />
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
                                src={markedsanalyse}
                                alt="graphic ilustration"
                            />
                            Markedsanalyse
                        </h3>
                        <p className="font-semibold">
                            Markedsanalyse er en viktig del av
                            markedsføringsstrategien og kan hjelpe bedriften din
                            med å forstå markedet og kundenes behov. Gjennom
                            grundig analyse av markedet og konkurrentene kan du
                            optimalisere markedsføringskampanjene dine og øke
                            sjansene for suksess. Markedsanalyse gir deg også
                            innsikt i trender og endringer i markedet, slik at
                            du kan tilpasse markedsføringen til endringer i
                            etterspørselen. Ved å bruke markedsanalyse på en
                            strategisk måte kan bedriften din øke
                            konkurransekraften og oppnå vekst.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={annonser}
                                alt="graphic ilustration"
                            />
                            Kampanjer/ads
                        </h3>
                        <p className="font-semibold">
                            Annonser og kampanjer er viktige verktøy i
                            markedsføringen og kan bidra til å øke synligheten
                            og bevisstheten om bedriften din. Gjennom annonser
                            og kampanjer kan du nå ut til din målgruppe og
                            tiltrekke nye kunder. Med riktig målretting kan du
                            også oppnå høyere konverteringsrate og økt salg.
                            Annonser og kampanjer gir deg også muligheten til å
                            skape engasjement rundt merkevaren din og bygge
                            lojalitet blant eksisterende kunder. Ved å bruke
                            annonser og kampanjer på en strategisk og målrettet
                            måte, kan bedriften din oppnå økt suksess og vekst.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={hubspot}
                                alt="graphic ilustration"
                            />
                            Hubspot
                        </h3>
                        <p className="font-semibold">
                            CRM står for "Customer Relationship Management" og
                            handler om å bygge og opprettholde gode
                            kunderelasjoner. Ved å implementere en effektiv
                            CRM-strategi kan bedriften din øke
                            kundetilfredsheten og oppnå bedre kundelojalitet.
                            CRM gir deg muligheten til å samle inn og analysere
                            data om kundenes behov og kjøpshistorikk, slik at du
                            kan tilpasse markedsføringen til hver enkelt kunde.
                            På denne måten kan bedriften din forbedre
                            kundeopplevelsen, øke salget og øke sjansene for at
                            kundene velger å handle igjen i fremtiden.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col maxScreen:flex-row">
                    <p className="maxScreen:mb-8 font-semibold opacity-50 max-w-pMax">
                        Vi tilbyr en rekke tjenester som kan hjelpe deg med å nå
                        dine mål. Teamet vårt har den nødvendige kunnskapen for
                        å utvikle en skreddersydd markedsføringsstrategi som
                        passer perfekt til dine behov. Vi står alltid klare til
                        å svare på dine spørsmål og hjelpe deg videre på veien
                        mot suksess.
                    </p>
                    <Link
                        to="/kontakt"
                        className="max-w-[180px] w-full h-[50px] ml-auto grid place-items-center bg-green
                    text-black rounded-full  font-semibold text-xl"
                    >
                        Kontakt Oss
                    </Link>
                </div>
                <div className=" service-cards-wrapper-only-two maxScreen:hidden py-32">
                    <ServiceDigsyn />
                    <ServiceInnhold />
                </div>
            </div>
            <BloggCta />
            <div className="pt-16"></div>
        </div>
    );
}
