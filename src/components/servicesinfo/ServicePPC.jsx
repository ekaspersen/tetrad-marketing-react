import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/ppcimg.jpg";

export default function ServicePPC() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    PPC spesialister
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Nå målgruppen din raskt og generer leads med skreddersydde
                    PPC-annonseringer. Vi håndterer og optimaliserer kampanjer
                    på Google Ads, Meta Ads og andre plattformer, og sikrer best
                    mulig ROI for investeringen din ved å målrette mot de mest
                    relevante søkeordene og målgruppene.
                </p>
            </div>
            <div className="inner">
                <img
                    className="float-right ml-2 mb-2 rounded-3xl border-4 border-green"
                    src={displayImage}
                    alt="seo"
                />
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Betalt annonsering
                    </h2>
                    også kjent som Pay-Per-Click (PPC) markedsføring, er et
                    kraftig verktøy for å øke synligheten til merkevaren din,
                    tiltrekke seg kvalifisert trafikk til nettstedet ditt og øke
                    konverteringer. I Tetrad Marketing, leverer vi skreddersydde
                    PPC-løsninger som hjelper din bedrift å oppnå sine
                    forretningsmål.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Strategiutvikling:
                    </h2>
                    Vårt første skritt er å utvikle en dyptgående forståelse av
                    din virksomhet, dine mål og din målgruppe. Med denne
                    innsikten utformer vi en skreddersydd PPC-strategi som vil
                    gi deg mest mulig avkastning på investeringen.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Annonseutforming og implementering:
                    </h2>
                    Vi utformer effektive annonser som fanger oppmerksomheten og
                    skaper engasjement. Vi velger relevante søkeord,
                    optimaliserer bud og sikrer at annonsene dine vises på de
                    rette stedene på det rette tidspunktet. Med vår grundige
                    analyse og rapportering får du innsikt i hvordan kampanjene
                    dine presterer. Vi overvåker nøye viktige KPI-er (Key
                    Performance Indicators) som klikkfrekvens, konverteringsrate
                    og kostnad per konvertering. Dette gir deg verdifull
                    informasjon som kan hjelpe deg med å ta informerte
                    beslutninger og optimalisere kampanjene dine over tid.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Løpende optimalisering:
                    </h2>
                    PPC er ikke en engangsoppgave. Vi overvåker resultatene til
                    kampanjene dine daglig, justerer bud, tester forskjellige
                    annonseformater og optimaliserer landingssider for å sikre
                    at du får mest mulig ut av budsjettet ditt.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Analyse og rapportering:
                    </h2>
                    Vi leverer detaljerte rapporter som viser hvordan
                    PPC-kampanjene presterer i forhold til forretningsmål. Dette
                    gjør det enkelt for deg å forstå ROI og ta informerte
                    beslutninger om fremtidige investeringer.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Uansett om du er ny til PPC eller ønsker å forbedre dine
                    eksisterende kampanjer, er Tetrad Marketing her for å
                    hjelpe. Vårt team vil sørge for at du får mest mulig ut av
                    dine betalte annonser. Ta kontakt med oss i dag for å få din
                    egen PPC-spesialist!
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
