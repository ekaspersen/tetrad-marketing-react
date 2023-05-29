import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const variants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
    rest: {
        scale: 1,
    },
};

export const AnimatedLink = ({ to, children }) => (
    <motion.div variants={variants} whileHover="hover" initial="rest">
        <Link to={to}>{children}</Link>
    </motion.div>
);

export const AnimatedA = ({ href, children, logo }) => (
    <motion.div
        variants={variants}
        whileHover="hover"
        initial="rest"
        className="flex items-center hover:text-white gap-2"
    >
        <img src={logo} alt={`${children} logo`} className="max-w-[20px]" />
        <a href={href}>{children}</a>
    </motion.div>
);
