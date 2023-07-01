import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/analyseimg.jpg";

export default function ServiceAnalyseRapp() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Analyse og rapportering
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Mål og forstå suksessen til dine digitale
                    markedsføringskampanjer med grundige analyse og rapportering
                    markedsføring. Vi implementerer analyseverktøy og
                    rapporteringsmetoder for å gi deg full innsikt i trafikk,
                    konverteringer og andre viktige KPI-er, slik at du kan
                    optimalisere strategiene dine og oppnå bedre resultater. Ta
                    informerte beslutninger basert på data ved hjelp av gode
                    rapporter og data.
                </p>
            </div>
            <div className="inner">
                <img
                    className="float-right ml-2 mb-2 rounded-3xl border-4 border-green"
                    src={displayImage}
                    alt="seo"
                />
                <p className="mb-4">
                    I den digitale verden er data konge, og hos Tetrad Marketing
                    forstår vi betydningen av nøyaktige analyser og grundig
                    rapportering for å sikre suksessen til dine
                    markedsføringskampanjer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Datainnsamling:
                    </h2>
                    Vi bruker diverse verktøy som Google Analytics, Google Tag
                    Manager og Facebook Pixel for å samle inn detaljerte data om
                    hvordan brukere samhandler med dine digitale eiendeler.
                    Dette inkluderer alt fra hvilke sider de besøker på
                    nettstedet ditt, til hvilke annonser de klikker på, og
                    hvilke handlinger de tar.
                </p>
                <p className="mb-2">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Dyp analyse:
                    </h2>
                    Vi analyserer dataene for å identifisere trender og
                    muligheter. Vårt team bruker teknikker som segmentering,
                    konverteringsstier og atferdsflytanalyser for å forstå dine
                    brukeres oppførsel og motivasjoner.
                </p>
                <p className="mb-4">
                    Ved å bruke dyp analyse, er det lettere å se subtile mønstre
                    og komplekse sammenhenger i dataene som kanskje ikke er
                    umiddelbart åpenbare, som gir muligheten til å lage mer
                    effektive og målrettede markedsføringsstrategier.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Rapportering:
                    </h2>
                    Vi leverer rapporter som gir deg et klart bilde av hvordan
                    dine markedsføringskampanjer presterer. Disse rapportene
                    inkluderer nøkkeldata som trafikk, konverteringer, kostnad
                    per handling (CPA), avkastning på investeringen (ROI), og
                    mer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Optimalisering:
                    </h2>
                    Analyse og rapportering er en kontinuerlig prosess. Vi
                    bruker innsikt fra dataene for å kontinuerlig optimalisere
                    dine markedsføringskampanjer. Dette kan innebære justeringer
                    av annonsebudsjett, endringer i målgruppe segmentering,
                    testing av nytt innhold, og mer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Målsetting:
                    </h2>
                    Vi jobber tett med deg for å definere klare, målbare mål for
                    dine markedsføringskampanjer. Disse målene guider alt vi
                    gjør, fra strategiutvikling til implementering og analyse.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Med Tetrad Marketing ved din side kan du være sikker på at
                    du har en pålitelig partner som hjelper deg med å navigere i
                    dataene og ta informerte beslutninger om dine digitale
                    markedsføringsstrategier. Kontakt oss i dag for å lære mer
                    om våre tjenester innen analyse og rapportering.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
