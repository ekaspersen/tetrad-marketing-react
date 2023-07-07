import markeds from "../assets/icons/markedsBig.svg";
import annonser from "../assets/icons/Annonser.svg";
import hubspot from "../assets/icons/hubspot.svg";
import markedsanalyse from "../assets/icons/Search.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceMarkeds() {
    return (
        <div className="service-card">
            <div className="service-card_description">
                <img
                    className="service-card_description_img"
                    src={markeds}
                    alt="graphic illustration"
                />
                <h3 className="service-card_description_heading">
                    Markedsføring
                </h3>
                <p className="service-card_description_text">
                    Ønsker du trafikk idag? Rask og effektivt betalt
                    markedsføring.
                </p>
            </div>
            <div className="service-card_content">
                <div className="service-card_content_bullet">
                    <img src={markedsanalyse} alt="facebook logo" />
                    <span>Markedsanalyse</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={annonser} alt="instagram logo" />
                    <span>Kampanjer/ads</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={hubspot} alt="linkedin logo" />
                    <span>CRM</span>
                </div>
            </div>
            <ButtonPill linkAction="/marfor" content="Mer info" />
        </div>
    );
}
