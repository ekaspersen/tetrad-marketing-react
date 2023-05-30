import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import defaultImage from "../assets/defaultImage.svg";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "posts"), where("category", "!=", ""));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const loadedPosts = [];
            querySnapshot.forEach((doc) => {
                loadedPosts.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setPosts(loadedPosts);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <div className="inner grid place-items-center min-h-screen">
                <div className="flex flex-col  animate-spin">
                    <div className="text-6xl  animate-ping">. . .</div>
                </div>
            </div>
        );
    }

    return (
        <div className="inner py-32 flex flex-col">
            <h1 className="service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-3">
                Blogg
            </h1>
            <h2 className="mt-8 text-2xl mb-16">
                Les mer om markedsføring og strategier gjennom våre blogger!
                <br />
                Please don't look at the posts with a our logo for display
                image, those are from testing and will be replaced very soon!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {posts.map((post) => (
                    <div className="flex flex-col" key={post.id}>
                        <div id="imageHere" className="h-40 w-full mb-4">
                            <img
                                className="min-h-full max-h-full min-w-full object-cover object-center border-4 border-green border-radius-blogCards"
                                src={
                                    post.data.displayImage
                                        ? post.data.displayImage
                                        : defaultImage
                                }
                                alt="display image"
                            />
                        </div>
                        <Link to={`/blog/${post.id}`}>
                            <span className="font-semibold text-2xl line-clamp-2">
                                {post.data.title}
                            </span>
                            <div className="flex mt-auto">
                                <button className="border-b-green w-fit border-b-4 text-xl">
                                    Les Mer
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
