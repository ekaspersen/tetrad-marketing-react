import { Link } from "react-router-dom";
export default function Tjenester() {
    return (
        <div id="tjenester" className="flex w-full flex-col lg:flex-row">
            <div className="flex-1 bg-offblack">
                <div className="flex flex-col gap-4 h-full justify-center max-w-[492px] px-4 py-32 lg:ml-auto">
                    <div className="flex flex-col">
                        <span>Veien til suksess</span>
                        <h2 className="text-5xl font-bold w-fit border-b-pink border-b-4 pb-2">
                            Våre Tjenester
                        </h2>
                    </div>

                    <p>
                        Tetrad Marketing tilbyr en komplett digital
                        markedsføringstjeneste
                    </p>
                    <p>
                        Vårt digitale markedsføringsteam vil hjelpe deg med å
                        øke synligheten, engasjementet og konverteringene for
                        din bedrift. Les mer under om våre tjenester, og hvordan
                        vi kan hjelpe deg med å lykkes online.
                    </p>
                    <span className="block lg:hidden">
                        Ler om tjenestene våre og hvordan de hjelper deg under
                    </span>
                    <span className="hidden lg:flex items-center gap-1 ">
                        Ler mer om våre tjenester
                        <svg
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.8121 8.20711C20.2026 7.81658 20.2026 7.18342 19.8121 6.79289L13.4481 0.428932C13.0576 0.0384079 12.4244 0.0384079 12.0339 0.428932C11.6434 0.819456 11.6434 1.45262 12.0339 1.84315L17.6908 7.5L12.0339 13.1569C11.6434 13.5474 11.6434 14.1805 12.0339 14.5711C12.4244 14.9616 13.0576 14.9616 13.4481 14.5711L19.8121 8.20711ZM0 8.5H19.105V6.5H0V8.5Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 px-4 py-24 bg-green text-black text-lg sm:text-2xl font-black">
                <Link
                    id="idSeo"
                    to="/service/seo"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    SEO - (SøkemotorOptimalisering)
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idEpostmarketing"
                    to="/service/epostmarketing"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    EPOST MARKEDSFØRING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idAnalyserapport"
                    to="/service/analyserapport"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    ANALYSE OG RAPPORTERING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idAnnonsering"
                    to="/service/annonsering"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    BETALT ANNONSERING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idSome"
                    to="/service/some"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    SOSIALE MEDIER MARKEDSFØRING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idBranding"
                    to="/service/branding"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    OMDØMME OG MERKEVAREBYGGING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idInnholdprod"
                    to="/service/innholdprod"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    INNHOLDSTRATEGI OG PRODUKSJON
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idInfluensermarketing"
                    to="/service/influensermarketing"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    INFLUENSER MARKEDSFØRING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
                <Link
                    id="idWebdev"
                    to="/service/webdev"
                    className="hover:border-b-4 hover:mb-[-4px] border-pink flex gap-1 items-center w-fit"
                >
                    WEBDESIGN & UTVIKLING
                    <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.1656 13.0607C20.7514 12.4749 20.7514 11.5251 20.1656 10.9393L10.6197 1.3934C10.0339 0.807611 9.08416 0.807611 8.49837 1.3934C7.91258 1.97919 7.91258 2.92893 8.49837 3.51472L16.9837 12L8.49837 20.4853C7.91258 21.0711 7.91258 22.0208 8.49837 22.6066C9.08416 23.1924 10.0339 23.1924 10.6197 22.6066L20.1656 13.0607ZM0 13.5H19.105V10.5H0V13.5Z"
                            fill="#121212"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
