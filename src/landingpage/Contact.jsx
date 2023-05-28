import React from "react";

export default function Contact() {
    return (
        <div className="inner pb-32 flex flex-col gap-16 scroll-padding-top pt-16">
            <div className="flex flex-col gap-4">
                <h2 className="service-heading text-5xl font-bold w-fit border-b-green border-b-4 pb-2 ">
                    Kontakt Oss
                </h2>
                <p className="text-offWhite max-w-pMax">
                    Vi vil gjerne høre fra deg! Vennligst send oss en e-post
                    hvis du har spørsmål eller ønsker å samarbeide med oss. Takk
                    for at du besøkte nettsiden vår!
                </p>
            </div>
            <div className=" w-full flex flex-col maxScreen:flex-row gap-8">
                <div className="flex flex-col w-full gap-4 max-w-pMax">
                    <h3 className="text-trettito font-semibold">
                        Tetrad kontaker deg!
                    </h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="flex flex-1 flex-col">
                                <label
                                    htmlFor="firma"
                                    className="text-xl text-offWhite"
                                >
                                    Kontaktperson *
                                </label>
                                <input
                                    type="text"
                                    id="firma"
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <label
                                    htmlFor="firma"
                                    className="text-xl text-offWhite"
                                >
                                    Firma
                                </label>
                                <input
                                    type="text"
                                    id="firma"
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 flex-col flex-1">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firma"
                                    className="text-xl text-offWhite"
                                >
                                    Kontakt e-post *
                                </label>
                                <input
                                    type="text"
                                    id="firma"
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="firma"
                                    className="text-xl text-offWhite"
                                >
                                    Kontakt Telefon
                                </label>
                                <input
                                    type="text"
                                    id="firma"
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="firma"
                            className="text-xl text-offWhite"
                        >
                            Melding til Tetrad
                        </label>
                        <textarea
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            name=""
                            id=""
                        ></textarea>
                        <span className="font-bold text-offWhite text-xs">
                            (Vi kontakter deg om du lar feltet stå tomt)
                        </span>
                    </div>
                    <button className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl">
                        Kontakt meg
                    </button>
                    <span className="font-bold text-offWhite text-xs">
                        * Må fylles ut *
                    </span>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h3 className="text-trettito font-semibold">
                        Send e-post:
                    </h3>
                    <div className="flex flex-col">
                        <span className="text-xl text-offWhite">
                            hello@tetradmarketing.no
                        </span>
                        <button className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl">
                            Åpne mail
                        </button>
                        <span className="font-bold text-offWhite text-xs">
                            Eller kopier epost
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
