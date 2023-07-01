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
        <div>
            <div className="max-w-pMax inner flex flex-col gap-4 pt-32 pb-8">
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
                <h3 className="mt-16 text-3xl font-bold w-fit border-b-green border-b-4 pb-1">
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
            <div className="flex flex-col gap-4 py-8 mx-auto">
                <div className="bg-offblack py-16 flex flex-col gap-8">
                    <h2 className="text-5xl font-bold w-fit border-b-green border-b-4 pb-1 mx-auto">
                        Teamet vårt
                    </h2>
                    <p className="text-lg font-semibold maxScreen:text-xl inner text-offWhite max-w-pMax">
                        Vårt unike perspektiv og grundige kunnskap om det norske
                        markedet, kombinert med vår teknologiske ekspertise,
                        gjør at vi er i stand til å skape skreddersydde
                        strategier som gir resultater for våre kunder. Med vår
                        lidenskap for digital markedsføring og en solid
                        forståelse av de nyeste bransjetrendene, inkludert
                        AI-innovasjoner, er Tetrad Marketing godt rustet til å
                        hjelpe bedrifter med å oppnå suksess i det digitale
                        landskapet.
                    </p>
                    <div className="flex gap-4 justify-center mx-auto maxScreen:gap-8 flex-wrap max-w-[1190px]">
                        <div className="flex flex-col items-center bg-pink bg-opacity-50  rounded-2xl text-white">
                            <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-pink overflow-hidden mx-1 mt-1">
                                <img
                                    className="object-cover object-top w-full h-full"
                                    src={karin}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col items-center py-4">
                                <span className="font-semibold">
                                    Sosiale Media
                                </span>
                                <span className="text-xl font-bold text-white">
                                    Karin Yedid
                                </span>
                                <span className="text-offwhite">
                                    karin@tetradmarketing.no
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-green bg-opacity-50 rounded-2xl text-white">
                            <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-green overflow-hidden mx-1 mt-1">
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
                                    kristoffer@tetradmarketing.no
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-pink bg-opacity-50 rounded-2xl text-white">
                            <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-pink overflow-hidden mx-1 mt-1">
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
                                    jenny@tetradmarketing.no
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center bg-green bg-opacity-50 rounded-2xl text-white">
                            <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-green overflow-hidden mx-1 mt-1">
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
                                    joakim@tetradmarketing.no
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-green bg-opacity-50 rounded-2xl text-white">
                            <div className="flex items-center w-64 h-64 rounded-2xl border-4 border-green overflow-hidden mx-1 mt-1">
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
                                    eskil@tetradmarketing.no
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner flex flex-col gap-6 py-8">
                    <p className="text-lg font-bold maxScreen:text-xl text-offWhite max-w-pMax">
                        Klar til å utfordre grensene for digital markedsføring
                        med Tetrad? Vi er mer enn bare et team. Vi er
                        innovatører, skapere, og dine partnere i suksess.
                    </p>
                    <p className="text-lg maxScreen:text-xl text-offWhite max-w-pMax">
                        La oss koble sammen, utforske, og skape din digitale
                        suksesshistorie sammen. Start din reise med oss i dag.
                    </p>
                    <div className="max-w-pMax w-full">
                        <ButtonPill
                            linkAction="/kontakt"
                            content="Start Din Reise"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
