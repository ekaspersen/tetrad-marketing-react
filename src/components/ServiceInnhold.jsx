import innhold from "../assets/icons/innholdBig.svg";
import codeSlash from "../assets/icons/CodeSlash.svg";
import paletteFill from "../assets/icons/PaletteFill.svg";
import textIcon from "../assets/icons/text-icon.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceInnhold() {
    return (
        <div className="service-card">
            <div className="service-card_description">
                <img
                    className="service-card_description_img"
                    src={innhold}
                    alt="graphic illustration"
                />
                <h3 className="service-card_description_heading">
                    Innholdsproduksjon
                </h3>
                <p className="service-card_description_text">
                    Ønsker du innhold skreddersydd til din strategi og
                    merkevare?
                </p>
            </div>
            <div className="service-card_content">
                <div className="service-card_content_bullet">
                    <img src={codeSlash} alt="facebook logo" />
                    <span>Nettside & UX</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={paletteFill} alt="instagram logo" />
                    <span>Grafisk innhold</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={textIcon} alt="linkedin logo" />
                    <span>Tekstforfatting</span>
                </div>
            </div>
            <ButtonPill linkAction="/innprod" content="Mer info" />
        </div>
    );
}
