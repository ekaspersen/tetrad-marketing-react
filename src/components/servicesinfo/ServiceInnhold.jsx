import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/innholdimg.jpg";

export default function ServiceInnhold() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Innholdsstrategi for bedrift
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Skap engasjerende og informativt innhold som treffer
                    målgruppen din. Vi utvikler og produserer innhold som
                    blogginnlegg, e-bøker, infografikk og videoer, og skaper en
                    innholdsstrategi som gir resultater ved å drive organisk
                    trafikk og bygge merkevareautoritet. Klar for å bli en
                    ledende stemme i bransjen din?
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
                        Innholdsmarkedsføring
                    </h2>
                    er essensielt i dagens digitale landskap. Det bygger tillit,
                    øker synligheten og skaper varige forbindelser mellom
                    merkevarer og deres publikum. I Tetrad Marketing tror vi på
                    kraften i godt innhold, og vi har dedikert oss til å gi våre
                    kunder godt innhold som engasjerer målgruppen og flere.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsstrategi for bedrift:
                    </h2>
                    Hos Tetrad Marketing begynner vi alltid med mål og KPIer i
                    tankene. Vi kartlegger dine forretningsmål, undersøker din
                    målgruppe og skaper en robust innholdsstrategi som vil
                    engasjere ditt publikum og drive resultater.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Nøkkelord- og Emneforskning:
                    </h2>
                    Når det kommer til å lage innhold som både treffer
                    målgruppen din på en relevant måte, og samtidig rangerer
                    høyt i søkemotorer, er vår søkeord- og emneanalyse
                    uunnværlig. Ved å undersøke og forstå hvilke søkeord og
                    emner som er mest relevante for din virksomhet, sikrer vi at
                    innholdet vi skaper blir lett oppdaget og verdsatt.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsproduksjon:
                    </h2>
                    Vi har et team av dyktige tekstforfattere, designere og
                    videoprodusenter som kan lage innhold av høy kvalitet som
                    fenger publikummet og fremmer dine forretningsmål.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsoptimalisering:
                    </h2>
                    Vi sørger for at hvert stykke innhold vi produserer er
                    optimalisert for søkemotorer, noe som sikrer at ditt budskap
                    når så bredt publikum som mulig.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsfordeling og Markedsføring:
                    </h2>
                    Vi bruker en rekke kanaler for å sikre at ditt innhold når
                    ut til riktig publikum, fra sosiale medier og
                    e-postmarkedsføring til betalt annonsering.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Analyse og Ytelsesmåling:
                    </h2>
                    Vi overvåker responsen til alt innhold som publiseres, og
                    bruker denne innsikten til å forbedre og justere din
                    innholdsstrategi for å sikre kontinuerlig suksess.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Innhold er mer enn bare ord på en side. Det er en måte å
                    engasjere, informere og påvirke ditt publikum på. La oss
                    hjelpe deg med å fortelle din historie. Kontakt Tetrad
                    Marketing i dag for å finne ut mer om hvordan vår
                    innholdsstrategi og produksjonstjenester kan forvandle din
                    online tilstedeværelse.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
