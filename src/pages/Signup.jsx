import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError("Invalid email or password. Please try again.");
            });
    };

    return (
        <main>
            <div className="inner">
                <Link to="/adminPanel" className="text-xl">
                    Back to Admin
                </Link>
            </div>
            <section>
                <div className="h-screen grid place-items-center inner !max-w-pMax">
                    <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-2">
                        Add new user
                    </span>
                    <form className="flex flex-col gap-8 w-full">
                        <div className="flex flex-col">
                            {error && <div className="text-pink">{error}</div>}
                            <div className="flex flex-col">
                                <label
                                    className="text-xl text-offWhite"
                                    htmlFor="email-address"
                                >
                                    Email
                                </label>
                                <input
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="your@login.adress"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label
                                className="text-xl text-offWhite"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="border-input-radius p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="ml-auto w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl"
                                onClick={onSubmit}
                            >
                                Create User
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Signup;
