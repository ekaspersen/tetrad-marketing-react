import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function BloggCta() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "posts"), where("category", "!=", ""));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const loadedPosts = [];
            let count = 0;
            for (let doc of querySnapshot.docs) {
                if (count >= 3) break;
                loadedPosts.push({
                    id: doc.id,
                    data: doc.data(),
                });
                count++;
            }
            setPosts(loadedPosts);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <div className="inner grid place-items-center min-h-screen">
                <div className="text-4xl animate-spin">. . .</div>
                <div className="text-4xl animate-spin">. . .</div>
                <div className="text-4xl animate-spin">. . .</div>
                <div></div>
            </div>
        );
    }

    return (
        <div className="inner flex flex-col gap-8">
            <h2 className="text-trettito font-semibold max-w-pMax">
                Ler mer om markedsføring og strategi gjennom blogg arkivet vår.
            </h2>
            <Link
                className="border-b-pink border-b-4 pb-1 text-xl w-fit"
                to="/blog"
            >
                Se alle innlegg
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {posts.map((post) => (
                    <div className="flex flex-col" key={post.id}>
                        <div className="h-40 w-full mb-4 bg-offWhite"></div>
                        <span className="font-semibold text-2xl line-clamp-2">
                            <Link to={`/blog/${post.id}`}>
                                {post.data.title}
                            </Link>
                        </span>
                        <div className="flex mt-auto">
                            <button className="border-b-green w-fit border-b-4 text-xl">
                                Les Mer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BloggCta;
