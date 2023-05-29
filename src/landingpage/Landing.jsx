import Contact from "./Contact";
import Services from "./Services";
import HeroBanner from "./HeroBanner";
import Welcome from "./Welcome";
import schibstedLogo from "../assets/icons/schibsted.svg";
import wunderbrandLogo from "../assets/icons/wunderbrand.svg";
import CoolLines from "../components/CoolLines";

export default function Landing() {
    return (
        <div className="relative overflow-clip z-10">
            <CoolLines />

            <HeroBanner />
            <Welcome />
            <Services />
            <div className="bg-green">
                <h3 className="text-3xl sm:text-4xl maxScreen:text-5xl font-bold mx-auto text-offWhite w-fit pt-8">
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
