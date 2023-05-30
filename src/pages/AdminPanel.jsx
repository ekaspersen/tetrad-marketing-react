import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    PlusCircleFill,
    GearFill,
    EnvelopeFill,
    BoxArrowInRight,
    PersonPlusFill,
} from "react-bootstrap-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminPanel() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                localStorage.removeItem("user");
            })
            .catch((error) => {
                // Handle any errors
            });
    };

    return (
        <div>
            <nav className="flex flex-col py-8 justify-around h-screen items-center gap-8 text-2xl inner">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-lg p-4 transition duration-500 ease-in-out"
                >
                    <Link to="/createPost" className="flex items-center gap-4">
                        <PlusCircleFill size={42} />
                        <span className="text-4xl">Create post</span>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-lg p-4 transition duration-500 ease-in-out"
                >
                    <Link
                        to="/adminblogpanel"
                        className="flex items-center gap-4"
                    >
                        <GearFill size={42} />
                        <span className="text-4xl">Manage/Update posts</span>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-lg p-4 transition duration-500 ease-in-out"
                >
                    <Link
                        to="/adminmessages"
                        className="flex items-center gap-4"
                    >
                        <EnvelopeFill size={42} />
                        <span className="text-4xl">View Messages</span>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-lg p-4 transition duration-500 ease-in-out"
                >
                    <Link to="/signup" className="flex items-center gap-4">
                        <PersonPlusFill size={42} />
                        <span className="text-4xl">Add new Admin</span>
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-lg p-4 transition duration-500 ease-in-out"
                >
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-4"
                    >
                        <BoxArrowInRight size={42} />
                        <span className="text-4xl">LogOut</span>
                    </button>
                </motion.div>
            </nav>
        </div>
    );
}
