import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/adminPanel");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError("Invalid email or password. Please try again.");
            });
    };

    return (
        <>
            <main>
                <section>
                    <div className="h-screen grid place-items-center inner !max-w-pMax">
                        <span className="mx-auto service-heading sm:text-5xl text-2xl font-bold w-fit border-b-pink border-b-4 pb-2 ">
                            Admin Panel Login
                        </span>
                        <form className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col">
                                {error && (
                                    <div className="text-pink">{error}</div>
                                )}
                                <div className="flex flex-col">
                                    <label
                                        className="text-xl text-offWhite"
                                        htmlFor="email-address"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="border-input-radius bg-opacity-0 p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="your@login.adress"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <button
                                    className="ml-auto w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl"
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
