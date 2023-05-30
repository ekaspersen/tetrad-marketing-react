import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import OrganiskSynlighet from "./pages/OrganiskSynlighet";
import Landing from "./landingpage/Landing";
import InnholdsProduksjon from "./pages/InnholdsProduksjon";
import MarkedsForing from "./pages/MarkedsForing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import Blog from "./pages/Blog";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post"; // Make sure to import your Post component
import AboutUs from "./pages/AboutUs";
import Contact from "./landingpage/Contact";
import AdminMessages from "./pages/AdminMessages";
import FavoriteMessages from "./pages/AdminFavoriteMessages";
import AdminBlog from "./pages/AdminBlog";
import AdminPost from "./pages/AdminPost";

function App() {
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

    const isLoggedIn = user !== null;

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/orgsyn" element={<OrganiskSynlighet />} />
                <Route path="/marfor" element={<MarkedsForing />} />
                <Route path="/innprod" element={<InnholdsProduksjon />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Post />} />
                <Route
                    path="/signup"
                    element={isLoggedIn ? <Signup /> : <Navigate to="/login" />}
                />
                <Route
                    path="/createPost"
                    element={
                        isLoggedIn ? <NewPost /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/adminmessages"
                    element={
                        isLoggedIn ? (
                            <AdminMessages />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/adminfavmessages"
                    element={
                        isLoggedIn ? (
                            <FavoriteMessages />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/adminblogpanel"
                    element={
                        isLoggedIn ? <AdminBlog /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/adminpost/:id"
                    element={
                        isLoggedIn ? <AdminPost /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/adminPanel"
                    element={
                        isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="*"
                    element={
                        <div className="inner min-h-[80vh] grid place-items-center">
                            <span className=" text-5xl">
                                404 Page not found.
                            </span>
                            <Link
                                to="/"
                                className="text-3xl text-green underline underline-offset-8"
                            >
                                Take me home
                            </Link>
                        </div>
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
