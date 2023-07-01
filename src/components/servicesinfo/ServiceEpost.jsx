import ContactCta from "../ContactCta";
import displayImage from "../../assets/services/emailimg.jpg";

export default function ServiceEpost() {
    return (
        <div className="flex flex-col gap-16 mt-32">
            <div className="flex flex-col inner gap-8">
                <h1 className="text-5xl font-bold w-fit border-b-green midScreen:border-b-4 pb-2">
                    E-mail marketing
                </h1>
                <p className="text-xl text-offWhite font-bold">
                    Bygg lojale kunderelasjoner med effektive e-mail marketing
                    kampanjer. Vi designer engasjerende e-poster, og hjelper deg
                    med å holde kontakten med kundene dine gjennom personlig og
                    relevant kommunikasjon. Om du ønsker bedre kundelojalitet og
                    salg er epostmarkedsføring et godt valg.
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
                        E-postmarkedsføring
                    </h2>
                    er en av de mest effektive digitale markedsføringskanalene
                    for å bygge og pleie kunderelasjoner. Tetrad Marketing
                    forstår kraften i personlig, relevant kommunikasjon og
                    hvordan det kan drive engasjement og konverteringer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Strategisk Planlegging:
                    </h2>
                    Vi begynner med å utvikle en strategisk
                    e-postmarkedsføringsplan som samsvarer med dine
                    forretningsmål. Vi definerer tydelige KPIer og utvikler en
                    strategi for å segmentere din e-postliste, planlegge innhold
                    og tidspunkt for utsendelser.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        E-post Design og Innhold:
                    </h2>
                    Vårt team designer e-poster som er visuelt engasjerende og
                    inneholder innhold som er relevant og verdifullt for
                    mottakeren. Vi sørger for at hver e-post er mobilvennlig,
                    merkevarekonsistent, og innholdet er optimalisert for
                    høyeste mulige engasjement.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Automatisering og Triggere:
                    </h2>
                    Ved å bruke automatisering, kan vi sette opp e-postserier
                    basert på brukeradferd og kundereise. Dette sikrer at hver
                    e-post er så relevant som mulig for mottakeren, og øker
                    sjansen for engasjement og konvertering.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Testing og Optimalisering:
                    </h2>
                    Vi tester kontinuerlig forskjellige aspekter av e-postene vi
                    sender, fra emnelinjer til sendetider, for å finne ut hva
                    som fungerer best for din målgruppe. Vi bruker denne
                    innsikten til å optimalisere fremtidige kampanjer.
                </p>
                <p className="mb-4">
                    <h2 className="font-bold mr-2 italic inline-block">
                        Analyse og Rapportering:
                    </h2>
                    Analyse og rapportering er en avgjørende del av vår tjeneste
                    for influencer markedsføring. Vi er opptatt av å levere
                    grundige og detaljerte rapporter som gir deg innsikt i
                    ytelsen til dine kampanjer. Våre rapporter inkluderer
                    viktige målekriterier som åpningsfrekvenser,
                    klikkfrekvenser, konverteringer og ROI. Ved å analysere
                    disse dataene nøye, kan vi identifisere trender,
                    suksessfaktorer og områder som kan forbedres. Denne
                    informasjonen er uvurderlig for å kunne ta informerte
                    beslutninger og optimalisere dine fremtidige influencer
                    markedsføringskampanjer.
                </p>
                <p className="text-xl text-offWhite font-bold">
                    E-postmarkedsføring er en kraftig kanal for å bygge
                    kundelojalitet, øke merkevarebevissthet og drive
                    konverteringer. La oss hjelpe deg med å utnytte denne
                    kanalen til det fulle. Kontakt Tetrad Marketing i dag for å
                    diskutere dine behov innen e-postmarkedsføring
                </p>
            </div>
            <ContactCta />
        </div>
    );
}
