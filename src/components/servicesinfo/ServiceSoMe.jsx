import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/someimg.jpg";

export default function ServiceSoMe() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Sosiale Media markedsføring
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Styrk merkevaren din og engasjer målgruppen din på sosiale
                    medier. Vi administrerer profiler, utvikler innhold og
                    kjører betalte kampanjer for å forbedre din SoMe marketing,
                    og bygger en aktiv og engasjert følgerbase. La oss hjelpe
                    deg med å skape en uforglemmelig sosial medieopplevelse.
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
                        Some Marketing
                    </h2>
                    er ikke bare et alternativ - det er en nødvendighet i den
                    digitale tidsalderen. Tetrad Marketing kan hjelpe deg med å
                    utnytte mulighetene i sosiale medier for å øke din
                    merkevarebevissthet, engasjere din målgruppe og få mer
                    trafikk til nettstedet ditt.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Strategiutvikling:
                    </h2>
                    Vi starter med å utvikle en skreddersydd sosiale
                    medier-strategi basert på din bedrifts unike behov og mål.
                    Dette inkluderer identifisering av de mest relevante sosiale
                    mediaplattformene for din bedrift, utvikling av din
                    merkevarepersonlighet på sosiale medier, og definering av
                    dine målgruppe.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsoppretting og publisering:
                    </h2>
                    Vi skaper engasjerende, merkevarebyggende innhold for dine
                    sosiale medier-plattformer, inkludert bilder, videoer,
                    infographics og mer. Vi planlegger og publiserer innholdet
                    ditt på optimal tid for å maksimere engasjementet.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Annonsering på sosiale medier:
                    </h2>
                    Vi hjelper deg med å utnytte kraften i betalt sosiale
                    medier-annonsering for å nå ut til et bredere publikum og
                    øke din synlighet. Vårt team har ekspertise på tvers av alle
                    store sosiale mediaplattformer, som Facebook, Instagram,
                    LinkedIn, TikTok og mer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Overvåking og engasjement:
                    </h2>
                    Vi overvåker dine sosiale medier-kanaler for
                    kundekommentarer, spørsmål og omtaler, og engasjerer seg med
                    din målgruppe på en autentisk måte. Dette hjelper deg med å
                    bygge sterkere relasjoner med dine kunder og forbedrer din
                    kundelojalitet.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Analyse og Rapportering:
                    </h2>
                    Vi bruker avanserte analyseverktøy for å spore og måle
                    ytelsen til dine sosiale medier-kampanjer. Vi leverer
                    regelmessige rapporter som gir deg innsikt i hva som
                    fungerer og hva som kan forbedres.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Sosiale medier gir en unik mulighet til å koble seg direkte
                    til dine kunder og potensielle kunder. La oss hjelpe deg med
                    å utnytte kraften i sosiale medier for å vokse din bedrift.
                    Kontakt Tetrad Marketing i dag for å diskutere dine sosiale
                    medier-markedsføringsbehov.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
