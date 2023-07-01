import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/brandingimg.jpg";

export default function ServiceBranding() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Merkevarebygging for bedrift
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Vi er eksperter på å skape en sterk og gjenkjennelig
                    merkevarebygging for bedrift med vårt omdømme- og
                    merkevaretjenester. Vi hjelper deg med å definere og
                    kommunisere merkevarens identitet, verdier og mål på en måte
                    som engasjerer målgruppen din og skiller deg fra
                    konkurrentene. Gjennom strategisk planlegging, design og
                    innhold, bygger vi et solid fundament for din merkevare som
                    skaper tillit og lojalitet hos kundene.
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
                    Å bygge et sterkt merke og opprettholde et positivt omdømme
                    er grunnleggende for enhver bedrifts suksess. Hos Tetrad
                    Marketing har vi ekspertisen og verktøyene som trengs for å
                    hjelpe deg med å skape og forvalte din merkevarebygging for
                    bedrift, og vil ta merkevareidentitet din til nye høyder..
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Merkevarebygging:
                    </h2>
                    Vi starter med å forstå din virksomhets unike verdier og
                    hvordan de skiller seg ut i markedet. Deretter utvikler vi
                    en omfattende merkevarestrategi, inkludert logo,
                    fargepalett, typografi, tone og stemme, som gjenspeiler
                    disse verdiene og appellerer til din målgruppe. Vi sikrer at
                    merkevaren din er konsekvent over alle plattformer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Omdømmehåndtering:
                    </h2>
                    I den digitale tidsalderen er omdømmet ditt bare så sterkt
                    som din siste anmeldelse. Vi implementerer proaktive
                    omdømmestrategier, overvåker din merkevares tilstedeværelse
                    på nettet, håndterer negative tilbakemeldinger på en
                    konstruktiv måte, og fremhever positive kundehistorier for å
                    styrke merkevaren din.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsstrategi:
                    </h2>
                    Vi utvikler en strategisk innholdsplan som forteller
                    merkevarens historie på en engasjerende og relaterbar måte.
                    Enten det er blogginnlegg, sosiale medier innlegg, videoer,
                    infografikk eller annet innhold, sørger vi for at det er
                    relevant, og i tråd med merkevaren din.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Kundelojalitet:
                    </h2>
                    Lojale kunder er mer enn bare regelmessige kjøpere; de er
                    ambassadører for merkevaren din og nøkkelen til vedvarende
                    suksess. Hos oss tar vi dette på alvor. Vi utvikler
                    strategier for å styrke kundelojaliteten og skape et dypt
                    engasjement med merkevaren din. Ved å bruke en kombinasjon
                    av tjenester som personlig kommunikasjon, belønningssystemer
                    og kundetilfredshets- undersøkelser, arbeider vi for å bygge
                    en sterk forbindelse mellom kundene dine og merkevaren din
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Med Tetrad Marketing kan du være trygg på at merkevaren din
                    er i de beste hender. La oss hjelpe deg med å bygge et merke
                    som resonnerer med kundene dine og skiller deg ut i
                    markedet. Kontakt oss i dag for å starte din
                    merkevarebyggingsreise med oss på laget som er eksperter på
                    merkevarebygging for bedrift!
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
