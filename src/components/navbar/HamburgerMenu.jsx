import { motion } from "framer-motion";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        openTop: { rotate: 45, width: 24, height: 6, y: 7 },
        closedTop: { rotate: 0, y: 0 },
        openMid: { width: 0, x: -42, y: -5 },
        openMidmeny: { opacity: 0, x: -42, y: -15 },
        closedMid: { opacity: 1 },
        closedMidmeny: { opacity: 1 },
        closedMidText: { opacity: 0 },
        openMidText: { opacity: 1, y: 5, x: 10 },

        openBot: { rotate: -45, width: 24, height: 6, y: 2 },
        closedBot: { rotate: 0, y: 0 },
    };

    const handleClose = () => setIsOpen(false);

    return (
        <div className="z-20 flex flex-col-reverse mt-4">
            <motion.span
                animate={isOpen ? variants.openMidmeny : variants.closedMidmeny}
                className="semibold text-xs maxScreen:text-base cursor-default"
            >
                Meny
            </motion.span>
            <motion.button
                className="flex flex-col justify-between rounded h-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div
                    className="w-8 maxScreen:w-10 h-1 rounded bg-pink"
                    animate={isOpen ? variants.openTop : variants.closedTop}
                />
                <motion.div
                    className="w-8 maxScreen:w-10 h-1 rounded bg-pink"
                    animate={isOpen ? variants.openMid : variants.closedMid}
                >
                    <motion.div
                        className="text-xs w-8 maxScreen:w-10 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={
                            isOpen
                                ? variants.openMidText
                                : variants.closedMidText
                        }
                    >
                        LUKK
                    </motion.div>
                </motion.div>
                <motion.div
                    className="w-6 maxScreen:w-10 h-1 rounded bg-pink"
                    animate={isOpen ? variants.openBot : variants.closedBot}
                />
            </motion.button>
            {isOpen && (
                <DropdownMenu isOpen={isOpen} handleClose={handleClose} />
            )}
        </div>
    );
}
