import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import pinterest from "../assets/icons/Pinterest-logo.png";
import postbox from "../assets/icons/Mailbox2.png";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="inner text-offWhitefont-semibold">
            <div className="flex flex-col-reverse maxScreen:flex-row gap-8 my-16 justify-between">
                <Logo />

                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-white">Sosiale Media</h3>
                        <div className="text-montserrat flex flex-col gap-2">
                            <div className="flex gap-[6px] items-center ">
                                <img src={facebook} alt="facebook logo" />
                                <a
                                    className="hover:text-white "
                                    href="https://www.facebook.com/tetradmarketingoslo"
                                >
                                    Facebook
                                </a>
                            </div>
                            <div className="flex gap-[6px] items-center ">
                                {" "}
                                <img src={instagram} alt="instagram logo" />
                                <a
                                    className="hover:text-white "
                                    href="https://www.instagram.com/tetrad_marketing/"
                                >
                                    Instagram
                                </a>
                            </div>
                            <div className="flex gap-[6px] items-center ">
                                <img src={linkedin} alt="linkedin logo" />
                                <a
                                    className="hover:text-white "
                                    href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A90636687&keywords=tetrad%20marketing&origin=RICH_QUERY_SUGGESTION&position=0&searchId=938343a9-efd2-4d7e-958f-1ddbee33059d&sid=)V3"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex gap-[6px] items-center ">
                                <img
                                    src={pinterest}
                                    className="max-w-[20px]"
                                    alt="linkedin logo"
                                />
                                <a
                                    className="hover:text-white "
                                    href="https://no.pinterest.com/TetradMarketingOslo/"
                                >
                                    Pinterest
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl text-white">e-post</h3>
                            <p className="flex gap-1">
                                <img src={postbox} alt="mailbox" />
                                Hello@tetradmarketing.no
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col maxScreen:justify-end mb-auto maxScreen:text-right gap-4 w-[168px]">
                    <h3 className="text-2xl text-white">Navigasjon</h3>
                    <div className="flex flex-col gap-2 text-montserrat">
                        <a className="hover:text-white" href="/">
                            Hjem
                        </a>
                        <Link className="hover:text-white" to="/about">
                            Om Oss
                        </Link>
                        <Link className="hover:text-white" to="/kontakt">
                            Kontakt
                        </Link>

                        <Link className="hover:text-white" to="/blog">
                            Blogg
                        </Link>
                        <details className="cursor-pointer flex flex-col gap-8">
                            <summary className="hover:text-white pb-2">
                                Tjenester
                            </summary>
                            <div className=" flex flex-col gap-1">
                                <Link className="hover:text-white" to="/orgsyn">
                                    Organisk Synlighet
                                </Link>
                                <Link className="hover:text-white" to="/marfor">
                                    Markedsføring
                                </Link>
                                <Link
                                    className="hover:text-white"
                                    to="/innprod"
                                >
                                    Innholdsproduksjon
                                </Link>
                            </div>
                        </details>
                        <Link className="hover:text-white" to="/Login">
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
