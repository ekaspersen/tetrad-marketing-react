import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/seoimg.jpg";

export default function ServiceSeo() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    SEO for bedrift
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Øk trafikken til din bedrift og tiltrekk organisk trafikk
                    med vår ekspertise innen SEO. Ved å forbedre rangeringen og
                    synligheten din i søkemotorene, tiltrekker du flere
                    potensielle kunder og øker salget. Vi fokuserer på teknisk
                    SEO, innholdsoptimalisering, linkbygging og analyser for å
                    sikre at nettstedet ditt er både brukervennlig og
                    søkemotorvennlig.
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
                        Søkemotoroptimalisering (SEO)
                    </h2>
                    er fundamentalt i enhver digital markedsføringsstrategi. Hos
                    Tetrad Marketing vet vi hvordan man navigerer i det
                    komplekse landskapet av søkemotoralgoritmer for å forbedre
                    din nettsides rangering og tiltrekke seg mer organisk
                    trafikk. Vi samler inn og analyserer store mengder data og
                    identifiserer mønstre og trender som kan hjelpe oss med å
                    forbedre SEO for bedrift.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Nøkkelord og Konkurrentanalyse:
                    </h2>
                    Vi begynner med en detaljert analyse av ditt nettsted,
                    nøkkelordene du ønsker å rangere for, og hva konkurrentene
                    dine gjør. Dette gir oss en grundig forståelse av ditt unike
                    SEO-landskap og hjelper oss å utvikle en skreddersydd
                    strategi.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        On-Page SEO:
                    </h2>
                    Vårt team jobber for å optimalisere alle aspekter av ditt
                    nettsted som påvirker SEO, fra metatagger og
                    nettstedsarkitektur til intern linking og
                    innholdsoptimalisering. Vi sørger for at hver side på
                    nettstedet ditt er optimalisert for relevante nøkkelord.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Off-Page SEO:
                    </h2>
                    Vi utvikler en omfattende off-page SEO-strategi som
                    inkluderer linkbygging, sosiale medier, influencer outreach
                    og mer. Vi bygger høykvalitets backlinks til nettstedet ditt
                    for å øke din autoritet i søkemotorenes øyne.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Lokal SEO:
                    </h2>
                    Hvis din bedrift opererer i et bestemt geografisk område,
                    tilbyr vi lokal SEO-tjenester for å hjelpe deg med å rangere
                    høyt for lokalrelaterte søk. Dette inkluderer Google My
                    Business-optimalisering, lokale nøkkelordoptimalisering, og
                    mer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Analyse og Rapportering:
                    </h2>
                    Vi bruker SEO-verktøy og analyser for å overvåke nettstedets
                    rangering, trafikk og andre viktige SEO-metrikk. Vi leverer
                    regelmessige rapporter slik at du alltid vet hvordan din
                    SEO-strategi presterer
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Å være synlig på nettet er mer viktig enn noensinne. La oss
                    hjelpe deg med å nå toppen av søkemotorresultatene og
                    tiltrekke mer organisk trafikk til nettstedet ditt. Kontakt
                    Tetrad Marketing i dag for å diskutere dine SEO-behov.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
