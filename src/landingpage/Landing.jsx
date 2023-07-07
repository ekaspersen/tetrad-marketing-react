import Contact from "./Contact";
import KomplettMarkedsforing from "./KomplettMarkedsforing";
import HeroBanner from "./HeroBanner";
import Welcome from "./Welcome";
import schibstedLogo from "../assets/icons/schibsted.svg";
import wunderbrandLogo from "../assets/icons/wunderbrand.svg";
import CoolLines from "../components/CoolLines";
import Tjenester from "./Tjenester";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Landing() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === "#tjenester") {
            const element = document.getElementById(hash.substring(1));

            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);
    return (
        <div className="relative overflow-clip z-10">
            <CoolLines />
            <HeroBanner />
            <Welcome />
            <Tjenester />
            <KomplettMarkedsforing />

            <div className="bg-green bg-opacity-50">
                <h3 className="text-3xl sm:text-4xl maxScreen:text-5xl font-bold mx-auto text-white w-fit pt-8">
                    PARTNERSAMARBEID
                </h3>
                <div className="inner gap-8 justify-center flex py-8 items-center h-32">
                    <div className="w-48 object-cover">
                        <img src={schibstedLogo} alt="schibsted logo" />
                    </div>

                    <img
                        src={wunderbrandLogo}
                        className="w-40 object-cover"
                        alt="schibsted logo"
                    />
                </div>
            </div>

            <div id="kontakt" className="bg-black pt-16"></div>
            <Contact />
        </div>
    );
}
