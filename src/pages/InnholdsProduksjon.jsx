import innhold from "../assets/icons/innholdBig.svg";
import codeSlash from "../assets/icons/CodeSlash.svg";
import paletteFill from "../assets/icons/PaletteFill.svg";
import textIcon from "../assets/icons/text-icon.svg";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceDigsyn from "../components/ServiceDigsyn";
import { Link } from "react-router-dom";
import BloggCta from "../landingpage/BloggCta";

export default function InnholdsProduksjon() {
    return (
        <div className="inner flex flex-col gap-16">
            <div className=" maxScreen:service-cards-wrapper-only-two flex-row maxScreen:flex pt-16">
                <div className="maxScreen:flex hidden">
                    <ServiceMarkeds />
                </div>
                <div className="flex flex-col mt-auto gap-8">
                    <img
                        className="h-48"
                        src={innhold}
                        alt="graphic ilustration"
                    />
                    <h1 className="text-center pt-8 text-3xl sm:text-5xl whitespace-nowrap">
                        Innholdsproduksjon
                    </h1>
                </div>
                <div className="maxScreen:flex hidden">
                    <ServiceDigsyn />
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <p className="font-semibold opacity-50">
                    Innholdsproduksjon er hjertet av effektiv markedsføring. Det
                    er stemmen som lar merket ditt snakke, historien som skaper
                    en forbindelse, og den katalysatoren som driver engasjement
                    og konverteringer. Med en nøyaktig strategi for
                    innholdsproduksjon, kan merket ditt uttrykke sin unike
                    identitet, verdier og løfter på en måte som resonnerer med
                    målgruppen. La oss dykke dypere inn i kraften og betydningen
                    av kvalitetsinnhold.
                </p>
                <div className="gap-4 flex flex-col maxScreen:flex-row mx-auto">
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={codeSlash}
                                alt="graphic ilustration"
                            />
                            Nettside & UX
                        </h3>
                        <p className="font-semibold">
                            Vårt talentfulle team er lidenskapelig opptatt av å
                            designe nettsider som ikke bare ser bra ut, men som
                            også gir enestående brukeropplevelser (UX). Vi
                            forstår at en velfungerende nettside er mer enn bare
                            et estetisk inntrykk; det er en plattform hvor din
                            merkevare kan vokse, engasjere og konvertere. Med
                            fokus på brukervennlighet, funksjonalitet og
                            mobiloptimalisering, skaper vi nettsider som
                            reflekterer ditt merke og oppmuntrer til positiv
                            kundeinteraksjon.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={paletteFill}
                                alt="graphic ilustration"
                            />
                            Grafisk Innhold
                        </h3>
                        <p className="font-semibold">
                            Grafisk innhold er et kraftig kommunikasjonsverktøy.
                            Det fanger oppmerksomheten, formidler komplekse
                            ideer enkelt og inspirerer til handling. Enten det
                            er infografikk, illustrasjoner eller sosiale
                            media-graphics, gir visuelt innhold merkevaren din
                            muligheten til å uttrykke seg på en engasjerende og
                            minneverdig måte. God grafisk design kan forbedre
                            forståelsen av merket ditt, øke
                            merkevaregjenkjennelsen og fremme kundelojaliteten.
                        </p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={textIcon}
                                alt="graphic ilustration"
                            />
                            Tekstforfatting
                        </h3>
                        <p className="font-semibold">
                            Tekstforfatting er en kunst, og vi er stolte av å ha
                            noen av de beste forfatterne i bransjen. Vi forstår
                            at det rette ordvalget kan inspirere, engasjere og
                            overbevise. Vårt team er dedikert til å skrive
                            klare, kraftfulle og overbevisende tekster som er
                            tilpasset ditt merke og din målgruppe. Enten det er
                            salgstekst, blogginnlegg, pressemeldinger eller
                            sosiale media-innhold, leverer vi kvalitetsinnhold
                            som resonerer med kundene dine.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 maxScreen:flex-row">
                    <p className="maxScreen:mb-8 font-semibold opacity-50 max-w-pMax">
                        Med en strategisk tilnærming til innholdsproduksjon, som
                        inkluderer nettsidedesign, grafisk design og
                        tekstforfatting, kan merket ditt skille seg ut i et
                        konkurransefylt marked, skape verdifulle forbindelser
                        med målgruppen og oppnå sine forretningsmål. Riktig
                        innholdsstrategi kan være forskjellen mellom å være bare
                        et annet merke og å være det merke kundene velger,
                        stoler på og anbefaler. Husk, ditt innhold er din stemme
                        - sørg for at det blir hørt.
                    </p>
                    <Link
                        to="/kontakt"
                        className="max-w-[180px] w-full h-[50px] maxScreen:ml-auto grid place-items-center bg-green text-black rounded-full  font-semibold text-xl"
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="service-cards-wrapper-only-two maxScreen:hidden py-16">
                    <div className="maxScreen:hidden">
                        <ServiceMarkeds />
                    </div>
                    <div className="maxScreen:hidden">
                        <ServiceDigsyn />
                    </div>
                </div>
            </div>
            <BloggCta />
            <div className="pt-16"></div>
        </div>
    );
}
