import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FavoriteMessages() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMessages = async () => {
        setIsLoading(true);
        try {
            const messagesSnapshot = await getDocs(collection(db, "messages"));
            const messagesData = messagesSnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter((message) => message.favorite === true);
            setMessages(messagesData);
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const deleteMessage = async (id) => {
        try {
            const messageDoc = doc(db, "messages", id);
            await deleteDoc(messageDoc);
            // Re-fetch messages after deleting
            fetchMessages();
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };

    const favoriteMessage = async (id) => {
        try {
            const messageDoc = doc(db, "messages", id);
            await updateDoc(messageDoc, {
                favorite: true,
            });
            // Re-fetch messages after favoriting
            fetchMessages();
        } catch (error) {
            console.error("Error favoriting document:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen gap-8 inner py-32">
            <h1 className="text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-2 ">
                Lagrede Meldinger
            </h1>
            <div className="flex gap-4">
                |
                <div className="grid place-items-center font-light">
                    <Link to="/adminmessages">ALL</Link>
                </div>
                |
                <div className="grid place-items-center font-bold">
                    <Link to="/adminfavmessages">STORAGE</Link>
                </div>
                |
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center h-40">
                    Loading...
                </div>
            ) : (
                messages.map((message) => (
                    <motion.div
                        className="flex flex-col max-w-pMax items-start gap-2 even:bg-green odd:bg-pink odd:bg-opacity-50 even:bg-opacity-50 my-4 p-2 sm:p-4 shadow rounded"
                        key={message.id}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <div className="flex justify-between w-full flex-wrap-reverse">
                            <h2 className="text-2xl font-medium flex gap-2">
                                {message.navn}
                            </h2>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => favoriteMessage(message.id)}
                                >
                                    {message.favorite ? "Stored" : "Save"}
                                </button>
                                <button
                                    onClick={() => deleteMessage(message.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <hr className="border-white border-2 w-full" />
                        <p className=" flex gap-2 text-lg text-montserrat">
                            <span className="font-semibold">Firma:</span>
                            {message.firma}
                        </p>
                        <p className=" flex gap-2 text-lg text-montserrat">
                            <span className="font-semibold">Epost:</span>
                            {message.epost}
                        </p>
                        <p className=" flex gap-2 text-lg text-montserrat">
                            <span className="font-semibold">Telefon:</span>
                            {message.telefon}
                        </p>
                        <p className=" flex gap-2 text-lg text-montserrat">
                            <span className="font-semibold">Melding:</span>
                            {message.melding}
                        </p>
                    </motion.div>
                ))
            )}
        </div>
    );
}