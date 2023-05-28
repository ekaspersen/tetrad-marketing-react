import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "react-bootstrap-icons";

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

            <span
                className="cursor-pointer flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
            >
                Services
                {servicesOpen ? <ChevronDown /> : <ChevronRight />}
            </span>
            <AnimatePresence>
                {servicesOpen && (
                    <motion.div
                        className="flex flex-col  items-end gap-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link onClick={handleClose} to="/orgsyn">
                            Organisk Synlighet
                        </Link>
                        <Link onClick={handleClose} to="/marfor">
                            Markedsføring
                        </Link>
                        <Link onClick={handleClose} to="/innprod">
                            Innholdsproduksjon
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
