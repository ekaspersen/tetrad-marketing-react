import Contact from "./Contact";
import Services from "./Services";
import HeroBanner from "./HeroBanner";
import Welcome from "./Welcome";
import schibstedLogo from "../assets/icons/schibsted.svg";
import wunderbrandLogo from "../assets/icons/wunderbrand.svg";

export default function Landing() {
    return (
        <div className="relative overflow-clip z-10">
            <svg
                className="absolute right-[-150px] rotate-2 maxScreen:rotate-0"
                width="371"
                height="1777"
                viewBox="0 0 371 1777"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M80.2302 1775L114.064 1581.3C127.215 1506.02 167.794 1438.27 227.965 1391.15L245.19 1377.66C278.602 1351.5 304.166 1316.64 319.078 1276.9L353.966 1183.95C396.788 1069.85 307.208 949.713 185.639 958.193V958.193C22.5958 969.567 -58.3921 764.471 68.4341 661.381L103.845 632.598L185.343 583.302C231.601 555.322 262.485 507.687 269.153 454.038L270.84 440.461C277.838 384.153 253.244 328.568 206.866 295.877V295.877C98.8495 219.735 130.923 51.8001 259.398 20.8265L320.896 6"
                    stroke="#34D89D"
                    strokeWidth="8"
                />
            </svg>
            <svg
                className="absolute right-[-10px]"
                width="125"
                height="1230"
                viewBox="0 0 125 1230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 -9V-9C70.0307 51.5138 100.512 142.689 83.3518 231.349L69.9385 300.651C61.658 343.434 70.8121 387.751 95.3658 423.752V423.752C105.715 438.925 113.431 455.734 118.19 473.473L136.081 540.163C156.755 617.22 144.424 699.405 102.047 767.003L53.6326 844.233C22.8412 893.35 23.8543 955.992 56.2179 1004.09L86.5851 1049.22C101.362 1071.18 101.444 1099.88 86.7931 1121.92L80.485 1131.41C51.1484 1175.55 88.7519 1233.4 141 1224.5V1224.5"
                    stroke="#E22CA4"
                    strokeWidth="4"
                />
            </svg>

            <HeroBanner />
            <Welcome />
            <Services />
            <div className="bg-pink">
                <h3 className="text-5xl font-bold mx-auto text-white w-fit pt-8">
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
