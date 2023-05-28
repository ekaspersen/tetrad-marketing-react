import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import defaultImage from "../assets/defaultImage.svg";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPost({
                    id: docSnap.id,
                    data: docSnap.data(),
                });
            } else {
                console.log("No such document!");
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return (
            <div className="inner grid place-items-center min-h-screen ">
                <div className="text-4xl animate-spin">. . .</div>
                <div></div>
            </div>
        );
    }

    return (
        <div className="inner flex flex-col gap-4 py-32">
            <h1 className="font-semibold text-outfit text-5xl pb-8">
                {post.data.title}
            </h1>

            {post.data.content.map((content, index) => (
                <div className="text-lg max-w-pMax" key={`content${index}`}>
                    {content.subtitle && (
                        <h3 className="font-semibold text-outfit mt-8 mb-4 text-4xl">
                            {content.subtitle}
                        </h3>
                    )}
                    {content.type === "paragraph" && (
                        <p
                            className={
                                content.isBold
                                    ? "font-bold text-offWhite text-xl"
                                    : "text-offWhite text-xl"
                            }
                        >
                            {content.text}
                        </p>
                    )}
                    {content.type === "image" && (
                        <img
                            className="mx-8 my-4 border-4 border-offWhite"
                            src={
                                content.imageUrl
                                    ? content.imageUrl
                                    : defaultImage
                            }
                        />
                    )}
                    {content.type === "list" && (
                        <div>
                            <ul className="list list-disc ml-4 pl-2 flex flex-col gap-2">
                                {content.listItems.map((item, itemIndex) => (
                                    <li
                                        key={`listItem${itemIndex}`}
                                        className={
                                            item.isBold
                                                ? "font-bold text-offWhite"
                                                : "text-offWhite"
                                        }
                                    >
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Post;
