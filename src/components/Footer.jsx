import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import pinterest from "../assets/icons/Pinterest-logo.png";
import postbox from "../assets/icons/Mailbox2.png";
import Logo from "../assets/Logo";
import { AnimatedA, AnimatedLink } from "./AnimatedFooterLinks";
function Footer() {
    return (
        <div className="border-t">
            <footer className="text-offWhitefont-semibold inner ">
                <div className="flex  flex-row flex-wrap justify-around maxScreen:justify-between items-start text-center maxScreen:items-start maxScreen:text-left maxScreen:flex-row gap-8 my-16">
                    <div className="flex flex-col mb-auto  maxScreen:gap-2 gap-4 w-[168px]">
                        <h3 className="maxScreen:text-2xl text-3xl text-white">
                            Navigasjon
                        </h3>
                        <div className="flex flex-col text-montserrat gap-2 text-xl">
                            <AnimatedLink to="/">Hjem</AnimatedLink>
                            <AnimatedLink to="/about">Om Oss</AnimatedLink>
                            <AnimatedLink to="/kontakt">Kontakt</AnimatedLink>
                            <AnimatedLink to="/blog">Blogg</AnimatedLink>

                            <details className="cursor-pointer whitespace-nowrap flex flex-col gap-8">
                                <summary className="pb-2">Tjenester</summary>
                                <div className="flex flex-col gap-1">
                                    <AnimatedLink to="/orgsyn">
                                        Organisk Synlighet
                                    </AnimatedLink>
                                    <AnimatedLink to="/marfor">
                                        Markedsføring
                                    </AnimatedLink>
                                    <AnimatedLink to="/innprod">
                                        Innholdsproduksjon
                                    </AnimatedLink>
                                </div>
                            </details>

                            <AnimatedLink to="/Login">Admin</AnimatedLink>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col  gap-4">
                            <div className="flex flex-col gap-2 text-xl">
                                <h3 className="maxScreen:text-2xl text-3xl text-white">
                                    e-post
                                </h3>
                                <p className="flex gap-1">
                                    <img src={postbox} alt="mailbox" />
                                    Hello@tetradmarketing.no
                                </p>
                            </div>

                            <div className="text-montserrat flex text-xl flex-col items-center maxScreen:items-start gap-2">
                                <h3 className="maxScreen:text-2xl text-3xl text-outfit text-white">
                                    Sosiale Media
                                </h3>
                                <AnimatedA
                                    href="https://www.instagram.com/tetrad_marketing/"
                                    logo={instagram}
                                >
                                    Instagram
                                </AnimatedA>
                                <AnimatedA
                                    href="https://www.facebook.com/tetradmarketingoslo"
                                    logo={facebook}
                                >
                                    Facebook
                                </AnimatedA>
                                <AnimatedA
                                    href="https://no.pinterest.com/TetradMarketingOslo/"
                                    logo={pinterest}
                                >
                                    Pinterest
                                </AnimatedA>
                                <AnimatedA
                                    href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A90636687&keywords=tetrad%20marketing&origin=RICH_QUERY_SUGGESTION&position=0&searchId=938343a9-efd2-4d7e-958f-1ddbee33059d&sid=)V3"
                                    logo={linkedin}
                                >
                                    LinkedIn
                                </AnimatedA>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Logo />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
