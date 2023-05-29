import React from "react";
import { Link } from "react-router-dom";
import ButtonPill from "../components/ButtonPillPink";
import kristoffer from "../assets/teamet/image0.jpeg";
import joakim from "../assets/teamet/image1.jpeg";
import karin from "../assets/teamet/image2.jpeg";
import jenny from "../assets/teamet/image3.jpeg";
import eskil from "../assets/teamet/image4.jpg";

export default function AboutUs() {
    return (
        <div className="inner">
            <div className="max-w-pMax flex flex-col gap-4 pt-32 pb-8">
                <h2 className="text-5xl font-bold w-fit border-b-pink border-b-4 pb-2 mb-4 ">
                    Om Oss
                </h2>
                <p className="text-lg maxScreen:text-xl">
                    Tetrad Marketing er et kreativt digitalt mediebyrå i Oslo,
                    etablert av 4 markedsførere og 1 Frontend developer med stor
                    interesse og nysgjerrighet for digital synlighet. Vårt team
                    av kreative og dyktige fagpersoner har som mål å levere
                    innovative og effektive markedsføringsløsninger for våre
                    kunder.
                </p>

                <p className="text-lg maxScreen:text-xl text-offWhite">
                    Vi tilbyr et bredt spekter av tjenester, inkludert
                    søkemotoroptimalisering (SEO), markedsføring med sosiale
                    media, web-tjenester, kampanjer, grafisk innhold og mer:
                </p>
                <Link
                    className="underline underline-offset-8 pb-2 mt-[-16px] text-lg"
                    to="/marfor"
                >
                    Les om våre tjenester
                </Link>
                <h3 className="text-3xl font-bold w-fit border-b-green border-b-4 pb-1">
                    Nyskapende perspektiver
                </h3>
                <p className="text-lg maxScreen:text-xl">
                    For Tetrad Marketing representerer mer enn bare tradisjonell
                    markedsføring. Vår lidenskap ligger i å pushe grensene,
                    utforske nye territorier, og blande gammel kunnskap med nye
                    teknologier.
                </p>
                <p className="text-lg maxScreen:text-xl text-offWhite">
                    Vi mener at fremtiden for markedsføring ligger i å forstå og
                    bruke den nyeste teknologien, og det er nettopp her vi trer
                    inn. Vår innsats er ikke bare å gi våre kunder en
                    konkurransefordel, men også å sørge for at de er i forkant
                    av den digitale utviklingen.
                </p>
                <p className="text-lg maxScreen:text-xl text-offWhite">
                    Men den handler ikke bare om tall og algoritmer – det
                    handler om menneskene bak dem, og de historiene vi kan
                    fortelle gjennom dem.
                </p>
            </div>
            <div className=" flex flex-col gap-4 py-8 items-center mx-auto max-w-pMax">
                <h3 className="text-5xl font-bold w-fit border-b-green border-b-4 pb-1 mx-auto">
                    Teamet vårt
                </h3>
                <p className="text-lg maxScreen:text-xl text-offWhite max-w-pMax">
                    Vårt unike perspektiv og grundige kunnskap om det norske
                    markedet, kombinert med vår teknologiske ekspertise, gjør at
                    vi er i stand til å skape skreddersydde strategier som gir
                    resultater for våre kunder. Med vår lidenskap for digital
                    markedsføring og en solid forståelse av de nyeste
                    bransjetrendene, inkludert AI-innovasjoner, er Tetrad
                    Marketing godt rustet til å hjelpe bedrifter med å oppnå
                    suksess i det digitale landskapet.
                </p>
                <div className="flex gap-4 justify-center max-w-pMax maxScreen:gap-8 flex-wrap">
                    <div className="flex flex-col items-center bg-pink rounded-2xl text-black">
                        <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-offWhite overflow-hidden mx-1 mt-1">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={karin}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <span className="font-semibold">Sosiale Media</span>
                            <span className="text-xl font-bold text-white">
                                Karin Yedid
                            </span>
                            <span className="text-offwhite">
                                karin@Tetradmarketing.no
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-green rounded-2xl text-black">
                        <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-offWhite overflow-hidden mx-1 mt-1">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={kristoffer}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <span className="text-white font-semibold">
                                Daglig leder
                            </span>
                            <span className="text-xl font-bold ">
                                Kristoffer M. Parnian
                            </span>
                            <span className="text-offwhite">
                                kristoffer@Tetradmarketing.no
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-pink rounded-2xl text-black">
                        <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-offWhite overflow-hidden mx-1 mt-1">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={jenny}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <span className="font-semibold">
                                Digital Synlighet
                            </span>
                            <span className="text-xl font-bold text-white">
                                Jenny G. Kristenstuen
                            </span>
                            <span className="text-offwhite">
                                jenny@Tetradmarketing.no
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center bg-green rounded-2xl text-black">
                        <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-offWhite overflow-hidden mx-1 mt-1">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={joakim}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <span className="text-white font-semibold">
                                Strategi
                            </span>
                            <span className="text-xl font-bold ">
                                Joakim Spakmo
                            </span>
                            <span className="text-offwhite">
                                joakim@Tetradmarketing.no
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-green rounded-2xl text-black">
                        <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-offWhite overflow-hidden mx-1 mt-1">
                            <img
                                className="object-cover object-top w-full h-full"
                                src={eskil}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <span className="text-white font-semibold">
                                Web Utvikling
                            </span>
                            <span className="text-xl font-bold ">
                                Eskil K. Hagen
                            </span>
                            <span className="text-offwhite">
                                eskil@Tetradmarketing.no
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-wrap"></div>
                <div className="flex justify-around flex-wrap"></div>
                <p className="text-lg maxScreen:text-xl text-offWhite max-w-pMax">
                    La Tetrad Marketing være din partner i suksess og opplev et
                    engasjert, dedikert og teknologisk avansert team som gjør en
                    forskjell for din bedrifts vekst og utvikling.
                </p>
                <p className="text-lg maxScreen:text-xl text-offWhite max-w-pMax">
                    Ta kontakt med oss i dag for en uforpliktende samtale og se
                    om vi kan hjelpe deg med å nå dine mål!
                </p>
                <div className="max-w-pMax w-full">
                    <ButtonPill linkAction="/kontakt" content="Ta kontakt" />
                </div>
            </div>
        </div>
    );
}
