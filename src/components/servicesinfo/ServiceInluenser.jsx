import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/influencerimg.jpg";

export default function ServiceInluenser() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    Influencer marketing for bedrift
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Øk merkevarebevisstheten og troverdigheten med influencer
                    marketing for bedrift. Vi samarbeider med influencere i din
                    bransje for å utvide eksponeringen og skape positiv
                    merkevareassosiasjon, noe som igjen kan føre til økt salg og
                    kundetilfredshet.
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
                        Influencer marketing for bedrift
                    </h2>
                    har revolusjonert måten merkevarer kommuniserer og
                    engasjerer seg med publikum på. I Tetrad Marketing forstår
                    vi kraften i denne moderne formen for markedsføring og kan
                    hjelpe deg med å utnytte den effektivt.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Influencer utvelgelse:
                    </h2>
                    Vi starter med å identifisere de mest passende influencerne
                    for merkevaren din. Vi analyserer deres følgerskap,
                    engasjementsnivåer, innholdsstrategi og mer for å sikre at
                    de er den perfekte matchen for din bedrift.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Kampanjeutforming:
                    </h2>
                    Vi utformer influencer markedsføringskampanjer som oppfyller
                    dine forretningsmål. Enten du ønsker å øke
                    merkevarebevisstheten, drive trafikk til nettstedet ditt,
                    eller øke salget, vil vi skape en skreddersydd strategi som
                    leverer resultater.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Innholdsutvikling:
                    </h2>
                    Vi arbeider tett med influencerne for å utvikle autentisk og
                    engasjerende innhold som resonnerer med deres publikum og
                    fremhever merkevaren din på en naturlig måte.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Overvåkning og analyse:
                    </h2>
                    Vi overvåker kampanjens ytelse i sanntid og justerer
                    strategien etter behov for å maksimere ROI. Vi leverer også
                    detaljerte rapporter som viser kampanjens innvirkning på
                    dine nøkkeltall.
                </p>
                <p className="mb-2">
                    Influencer markedsføring er en effektiv måte å nå ut til et
                    større publikum, skape tillit og drive engasjement. Dersom
                    du ønsker å forbedre dine eksisterende kampanjer, er vårt
                    team klart til å hjelpe med stor kunnskap innen influencer
                    markedsføring for bedrift.
                </p>
                <p className="mb-2">
                    Tetrad Marketing øsnker å bidra til å starte din influencer
                    markedsføringsreise. Vårt dedikerte team av
                    markedsføringseksperter vil veilede deg gjennom hele
                    prosessen, fra influencerutvelgelse til kampanjeutforming,
                    innholdsutvikling og overvåkning. Vi vil sikre at din
                    merkevare får maksimal synlighet, engasjement og avkastning
                    gjennom vår effektive og målrettede tilnærming.
                </p>
                <p className="mb-4">
                    Ikke gå glipp av muligheten til å dra nytte av den kraftige
                    verktøyet som influencer markedsføring kan være for din
                    bedrift.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    Ta kontakt med Tetrad Marketing i dag og la oss hjelpe deg
                    med å utnytte potensialet til influencer markedsføring for å
                    nå dine markedsføringsmål.
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
