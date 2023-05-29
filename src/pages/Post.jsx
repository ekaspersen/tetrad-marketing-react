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
        <div className="inner flex flex-col gap-4 pb-32">
            <div className="relative h-fit">
                <img src={post.data.displayImage} alt="display image" />
                <h1 className="font-semibold text-outfit text-3xl maxScreen:text-5xl bg-black bg-opacity-50 p-4 max-w-3xl absolute bottom-0">
                    {post.data.title}
                </h1>
            </div>

            {post.data.content.map((content, index) => (
                <div
                    className="text-lg max-w-pMax first-paragraph-blog"
                    key={`content${index}`}
                >
                    {content.subtitle && (
                        <h3 className="font-semibold text-outfit mt-8 mb-4 text-2xl maxScreen:text-4xl">
                            {content.subtitle}
                        </h3>
                    )}
                    {content.type === "paragraph" && (
                        <p
                            className={
                                content.isBold
                                    ? "font-bold text-offWhite maxScreen:text-xl"
                                    : "text-offWhite maxScreen:text-xl"
                            }
                        >
                            {content.text}
                        </p>
                    )}
                    {content.type === "image" && (
                        <img
                            className="maxScreen:mx-8 my-4 border-4 border-offWhite"
                            src={
                                content.imageUrl
                                    ? content.imageUrl
                                    : defaultImage
                            }
                        />
                    )}
                    {content.type === "list" && (
                        <div>
                            {content.listTitle && (
                                <h4 className="font-semibold text-outfit mt-8 mb-4 text-3xl">
                                    {content.listTitle}
                                </h4>
                            )}
                            <ul className="list list-disc ml-4 pl-2 flex flex-col gap-2">
                                {content.listItems.map((item, itemIndex) => (
                                    <li
                                        key={`listItem${itemIndex}`}
                                        className="text-offWhite"
                                    >
                                        {item}
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
