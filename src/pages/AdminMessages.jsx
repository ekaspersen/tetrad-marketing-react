import { useState, useEffect } from "react";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [openCardId, setOpenCardId] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const messagesQuery = query(collection(db, "messages"));
                const unsubscribeSnapshot = onSnapshot(
                    messagesQuery,
                    (snapshot) => {
                        const messagesData = snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        setMessages(messagesData);
                    }
                );
                return () => unsubscribeSnapshot();
            }
        });
        return () => unsubscribe();
    }, [auth]);

    const toggleCard = (cardId) => {
        setOpenCardId(cardId === openCardId ? null : cardId);
    };

    const renderData = (label, value) => {
        if (!value) {
            return (
                <p>
                    {label}: <span className="text-gray-500">Empty</span>
                </p>
            );
        }

        return (
            <p>
                {label}: <span className="font-bold">{value}</span>
            </p>
        );
    };

    return (
        <div className="inner flex flex-col gap-8">
            <h1 className="text-5xl font-bold w-fit border-b-pink border-b-4 pb-3">
                Messages
            </h1>
            <div className="flex flex-wrap gap-4">
                {messages.map((message) => (
                    <div className="w-80" key={message.id}>
                        <div
                            className="cursor-pointer"
                            onClick={() => toggleCard(message.id)}
                        >
                            {renderData("Name", message.navn)}
                            {renderData("Email", message.epost)}
                            {renderData("Company", message.firma)}
                        </div>
                        {openCardId === message.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-100 p-4 mt-2"
                            >
                                {renderData("Phone", message.telefon)}
                                {renderData("Message", message.melding)}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Messages;
