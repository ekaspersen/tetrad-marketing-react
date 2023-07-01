import React from "react";
import ServiceDigsyn from "../components/ServiceDigsyn";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceInnhold from "../components/ServiceInnhold";
import BloggCta from "./BloggCta";

function KomplettMarkedsforing() {
    return (
        <div
            id="tjenester"
            className="bg-offblack py-32 z-50 flex flex-col relative gap-32 "
        >
            <div className="flex flex-col gap-16  inner">
                <h1 className=" midScreen:mx-auto service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-2 ">
                    Komplett Digital{" "}
                    <span className="border-b-pink border-b-4 pb-2 midScreen:border-0 midScreen:p-0">
                        Markedsføring
                    </span>
                </h1>
                <div className="service-cards-wrapper items-center">
                    <ServiceDigsyn />
                    <ServiceInnhold />
                    <ServiceMarkeds />
                </div>
            </div>

            <BloggCta />
        </div>
    );
}

export default KomplettMarkedsforing;
