import { Link } from "react-router-dom";
import LogoSmall from "../../assets/logo-small.svg";
import HamburgerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeIn", delay: 0.5 }}
            className="w-full bg-black bg-opacity-80 sticky top-0 z-[1000] "
        >
            <nav
                className="flex relative selection:bg-none justify-between items-center h-16
            inner text-lg"
            >
                <Link to="/">
                    <img src={LogoSmall} alt="tetrad logo" />
                </Link>
                <HamburgerMenu />
            </nav>
        </motion.div>
    );
}
