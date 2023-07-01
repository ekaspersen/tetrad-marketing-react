import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/uximg.jpg";

export default function ServiceWebDev() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Nettsider som konverterer
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Vi lager moderne og attraktive nettsteder som er enkle å
                    navigere for brukerne, samtidig som vi sikrer at de er
                    optimalisert for søkemotorer og ytelse. Gi din bedrift et
                    profesjonelt og imponerende nettsted.
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
                        UX - Brukerfokusert design:
                    </h2>
                    Vi designer og utvikler nettsteder med brukeren i sentrum.
                    Våre webdesignere fokuserer på brukeropplevelse/UX og lager
                    nettsteder som er intuitive, engasjerende og enkle å
                    navigere. Vi sørger for at ditt nettsted er mobilvennlig og
                    tilgjengelig for alle brukere, uansett enhet eller nettleser
                    de bruker.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Søkemotoroptimalisering:
                    </h2>
                    Tetrad Marketing bygger din nettside optimalisert for SEO.
                    Vi sikrer at ditt nettsted er synlig for søkemotorer, og
                    rangerer høyt for relevante søkeord og uttrykk. Vi
                    implementerer SEO-strategier, som schema markup og
                    hastighetoptimalisering, for å gi deg en konkurransefordel.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        CMS - Content management system:
                    </h2>
                    Vi har erfaring med en rekke innholdsstyringssystemer (CMS),
                    inkludert WordPress, Shopify og andre CMS løsninger. Vi kan
                    hjelpe deg med å velge riktig CMS for dine behov, og
                    tilpasse det for å passe til dine ønsker.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        E-handel løsninger:
                    </h2>
                    Hvis du selger produkter online, kan vi hjelpe deg med å
                    designe og utvikle e-handelen din. Vi kan integrere med en
                    rekke betalingsportaler og fraktleverandører, og
                    implementere avanserte funksjoner som produktanmeldelser og
                    kupongkoder.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Vedlikehold og støtte:
                    </h2>
                    Etter at nettstedet ditt er live, tilbyr vi pågående
                    vedlikehold og støtte for å sikre at det fortsetter å
                    fungere på sitt beste. Vi kan hjelpe deg med alt fra
                    oppdatering av innhold til feilsøking og
                    sikkerhetsoppdateringer.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Uansett om du trenger et helt nytt nettsted eller en
                    oppdatering av ditt eksisterende nettsted, er Tetrad
                    Marketing her for å hjelpe. Kontakt oss i dag for å
                    diskutere dine webdesign og utviklingsbehov.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
