import { motion } from "framer-motion";
import zebraSquare from "../assets/zebra-square.png";

export default function Welcome() {
    return (
        <div className="inner flex gap-4 pb-32 relative z-50">
            <div className="flex-1 relative overflow-clip">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeIn", delay: 1 }}
                    className="absolute min-h-full mt-[-2px] object-left object-cover "
                    src={zebraSquare}
                    alt="pink zebra stripes with green square overlay"
                />
            </div>
            <div className="flex-1 flex flex-col gap-4 bg-black">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeIn", delay: 1 }}
                    className="text-[56px] font-semibold"
                >
                    Velkommen. trenger du hjelp?
                </motion.span>
                <div className="flex flex-col gap-2 py-4 border-white border-y-4">
                    <p>
                        Å skape en sterk tilstedeværelse på nettet kan være en
                        utfordring for mange bedrifter. Det krever tålmodighet,
                        strategisk tenkning og en dyp forståelse av digitale
                        trender. Det er her Tetrad Marketing kommer inn i
                        bildet. Vi er et digitalt markedsføringsselskap som
                        spesialiserer seg på å hjelpe bedrifter med å bygge en
                        effektiv online tilstedeværelse.
                    </p>
                    <p>
                        Teamet vårt jobber tett med kundene våre for å forstå
                        deres unike behov og målsetninger. Vi lager
                        skreddersydde strategier for å øke synligheten og
                        trafikken til nettsiden deres. Du kan lese mer spesifikt
                        om tjenestene våre lengre ned på siden.
                    </p>
                    <p>
                        La Tetrad hjelpe deg med å ta bedriften din til neste
                        nivå. Vi er lidenskapelige med å skape resultater for
                        kundene våre, og vi er sikre på at vi kan gjøre det
                        samme for deg. Kontakt oss i dag for å lære mer om
                        hvordan vi kan hjelpe deg med å lykkes.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a
                        href="#tjenester"
                        className=" border-b-pink border-b-4 pb-1 text-xl"
                    >
                        Hva tilbyr vi?
                    </a>
                    <a
                        href="#kontakt"
                        className=" border-b-green border-b-4 pb-1 text-xl"
                    >
                        Kontakt
                    </a>
                </div>
            </div>
        </div>
    );
}
