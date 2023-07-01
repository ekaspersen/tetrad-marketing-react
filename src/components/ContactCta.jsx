import { Link } from "react-router-dom";

export default function ContactCta() {
    return (
        <div className="grid place-items-center gap-8 bg-offblack py-16">
            <h1 className="text-4xl text-green font-bold">
                Kontakt oss idag for gratis konsultasjon
            </h1>
            <span className="text-xl text-offWhite font-bold italic">
                Din vei til suksess ...
            </span>
            <Link
                to="/kontakt"
                className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl"
            >
                Kontakt oss
            </Link>
        </div>
    );
}
