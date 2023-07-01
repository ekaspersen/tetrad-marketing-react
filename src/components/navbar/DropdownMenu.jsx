import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DropdownMenu({ isOpen, handleClose }) {
    const variants = {
        open: { opacity: 1, y: 0, x: 0 },
        closed: { opacity: 0, y: 2, x: 100 },
    };

    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <motion.div
            className="absolute text-xl top-16 mt[-1px] right-0 bg-black hover-navigation-link bg-opacity-80 min-w-serviceCard flex flex-col items-end p-4 gap-y-4 z-10"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ type: "spring", stiffness: 100 }}
            initial="closed"
        >
            <Link id="navLink1" onClick={handleClose} to="/">
                Hjem
            </Link>
            <Link id="navLink2" onClick={handleClose} to="/about">
                Om Oss
            </Link>
            <Link id="navLink3" onClick={handleClose} to="/kontakt">
                Kontakt
            </Link>
            <Link id="navLink4" onClick={handleClose} to="/blog">
                Blogg
            </Link>
        </motion.div>
    );
}
