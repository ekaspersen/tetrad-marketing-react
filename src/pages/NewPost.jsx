import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import CloudinaryUploadWidget from "../components/UploadWidget";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function NewPost() {
    const [title, setTitle] = useState("");
    const [displayImage, setDisplayImage] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState([
        { type: "paragraph", subtitle: "", text: "", isBold: false },
    ]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);

        if (title === "" || category === "") {
            setError("Title and category are required.");
            return;
        }

        setIsLoading(true);

        try {
            await addDoc(collection(db, "posts"), {
                title,
                displayImage,
                category,
                content,
            });

            setTitle("");
            setDisplayImage("");
            setCategory("");
            setContent([
                { type: "paragraph", subtitle: "", text: "", isBold: false },
            ]);
        } catch (error) {
            setError("Error creating blog post. Please try again later.");
            console.error("Error creating blog post:", error);
        }

        setIsLoading(false);
    };

    const addNewContent = () => {
        setContent((prevContent) => [
            ...prevContent,
            { type: "paragraph", subtitle: "", text: "", isBold: false },
        ]);
    };

    const updateContent = (index, field, value) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[index][field] = value;
            return newContent;
        });
    };

    const handleContentTypeChange = (index, newType) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[index].type = newType;
            if (newType === "list") {
                newContent[index].listTitle = "";
                newContent[index].listItems = [""];
            }
            return newContent;
        });
    };
    const moveContentItem = (currentIndex, newIndex) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            const [removedItem] = newContent.splice(currentIndex, 1);
            newContent.splice(newIndex, 0, removedItem);
            return newContent;
        });
    };
    const removeContentItem = (index) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent.splice(index, 1);
            return newContent;
        });
    };
    const toggleBold = (index) => {
        setContent((prevContent) => {
            const newContent = [...prevContent];
            newContent[index].isBold = !newContent[index].isBold;
            return newContent;
        });
    };

    return (
        <div className="min-h-screen grid place-items-center inner !max-w-pMax py-16">
            <div>
                <Link to="/adminPanel" className="text-xl">
                    Back to Admin
                </Link>
            </div>
            <span className="mx-auto my-16 text-5xl font-bold w-fit border-b-green border-b-4 pb-2">
                Upload image
            </span>
            <div className="flex inner justify-center py-8">
                <CloudinaryUploadWidget />
                <hr />
            </div>
            <span className="mx-auto service-heading text-5xl font-bold w-fit border-b-pink border-b-4 pb-2">
                Create new post
            </span>
            {error && (
                <div className="text-2xl font-bold my-4 text-green">
                    {error}
                </div>
            )}
            <form
                className="flex flex-col gap-8 w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl text-offWhite">
                        Title: <span className="text-sm">Required</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="displayImage"
                        className="text-xl text-offWhite"
                    >
                        Display Image URL:{" "}
                        <span className="text-sm">Required</span>
                    </label>
                    <input
                        type="text"
                        id="displayImage"
                        value={displayImage}
                        onChange={(e) => setDisplayImage(e.target.value)}
                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="text-xl text-offWhite">
                        Category: <span className="text-sm">Required</span>
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                    >
                        <option value="">Select a category</option>
                        <option value="OrgSyn">Organisk Synlighet</option>
                        <option value="InnProd">Innholds produksjon</option>
                        <option value="MarkedF">MarkedsFøring</option>
                    </select>
                </div>
                {content.map((contentItem, index) => (
                    <div key={`content${index}`}>
                        <div className="flex flex-col">
                            <label
                                htmlFor={`contentType${index}`}
                                className="text-xl text-offWhite"
                            >
                                Content Type:
                            </label>
                            <select
                                id={`contentType${index}`}
                                value={contentItem.type}
                                onChange={(e) =>
                                    handleContentTypeChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            >
                                <option value="paragraph">Paragraph</option>
                                <option value="list">List</option>
                                <option value="image">Image</option>
                            </select>
                        </div>
                        <div className="flex my-4 items-center">
                            <button
                                type="button"
                                onClick={() =>
                                    moveContentItem(index, index - 1)
                                }
                                disabled={index === 0}
                            >
                                <div className="text-green">
                                    <ArrowUp size={32} />
                                </div>
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    moveContentItem(index, index + 1)
                                }
                                disabled={index === content.length - 1}
                            >
                                <div className="text-pink">
                                    <ArrowDown size={32} />
                                </div>
                            </button>
                            <div className="flex flex-col">
                                <span className=" text-offWhite">
                                    CHANGE ORDER
                                </span>
                                <span className="font-bold text-xs text-offWhite">
                                    CURRENT INDEX: {index + 1}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor={`subtitle${index}`}
                                className="text-xl text-offWhite"
                            >
                                Subtitle:
                            </label>
                            <input
                                type="text"
                                id={`subtitle${index}`}
                                value={contentItem.subtitle}
                                onChange={(e) =>
                                    updateContent(
                                        index,
                                        "subtitle",
                                        e.target.value
                                    )
                                }
                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            />
                        </div>
                        {contentItem.type === "paragraph" && (
                            <div className="flex flex-col">
                                <label
                                    htmlFor={`paragraph${index}`}
                                    className="text-xl text-offWhite"
                                >
                                    Paragraph:
                                </label>
                                <textarea
                                    id={`paragraph${index}`}
                                    value={contentItem.text}
                                    onChange={(e) =>
                                        updateContent(
                                            index,
                                            "text",
                                            e.target.value
                                        )
                                    }
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                                <button
                                    className="mr-auto my-2 font-bold text-xl"
                                    type="button"
                                    onClick={() => toggleBold(index)}
                                >
                                    {contentItem.isBold
                                        ? "Unbold"
                                        : "Make text bold"}
                                </button>
                            </div>
                        )}
                        {contentItem.type === "list" && (
                            <>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor={`listTitle${index}`}
                                        className="text-xl text-offWhite"
                                    >
                                        List Title:
                                    </label>
                                    <input
                                        type="text"
                                        id={`listTitle${index}`}
                                        value={contentItem.listTitle}
                                        onChange={(e) =>
                                            updateContent(
                                                index,
                                                "listTitle",
                                                e.target.value
                                            )
                                        }
                                        className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                    />
                                </div>
                                {contentItem.listItems.map(
                                    (listItem, listItemIndex) => (
                                        <div
                                            className="flex flex-col"
                                            key={`listItem${listItemIndex}`}
                                        >
                                            <label
                                                htmlFor={`listItem${listItemIndex}`}
                                                className="text-xl text-offWhite"
                                            >
                                                List Item {listItemIndex + 1}:
                                            </label>
                                            <input
                                                type="text"
                                                id={`listItem${listItemIndex}`}
                                                value={listItem}
                                                onChange={(e) => {
                                                    const newListItems = [
                                                        ...contentItem.listItems,
                                                    ];
                                                    newListItems[
                                                        listItemIndex
                                                    ] = e.target.value;
                                                    updateContent(
                                                        index,
                                                        "listItems",
                                                        newListItems
                                                    );
                                                }}
                                                className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                            />
                                            <button
                                                className="mr-auto my-2 font-bold text-xl"
                                                type="button"
                                                onClick={() =>
                                                    toggleBold(index)
                                                }
                                            >
                                                {contentItem.isBold
                                                    ? "Unbold"
                                                    : "Make text bold"}
                                            </button>
                                        </div>
                                    )
                                )}
                                <button
                                    className="py-2 px-6 flex items-center float-left gap-4 border-green text-green border-2 rounded-full"
                                    type="button"
                                    onClick={() => {
                                        const newListItems = [
                                            ...contentItem.listItems,
                                            "",
                                        ];
                                        updateContent(
                                            index,
                                            "listItems",
                                            newListItems
                                        );
                                    }}
                                >
                                    <span className="text-xl">
                                        Add List Item
                                    </span>
                                    <span className="text-3xl">+</span>
                                </button>
                            </>
                        )}
                        {contentItem.type === "image" && (
                            <div className="flex flex-col">
                                <label
                                    htmlFor={`imageUrl${index}`}
                                    className="text-xl text-offWhite"
                                >
                                    Image URL:
                                </label>
                                <input
                                    type="text"
                                    id={`imageUrl${index}`}
                                    value={contentItem.imageUrl}
                                    onChange={(e) =>
                                        updateContent(
                                            index,
                                            "imageUrl",
                                            e.target.value
                                        )
                                    }
                                    className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                                />
                            </div>
                        )}
                        <button
                            className="py-2 px-6 flex float-right items-center gap-4 border-pink text-pink border-2 rounded-full"
                            type="button"
                            onClick={() => removeContentItem(index)}
                        >
                            <span className="text-xl">Remove</span>
                            <span className="text-3xl">-</span>
                        </button>
                    </div>
                ))}
                <button
                    className="py-2 px-6 flex w-fit mx-auto items-center gap-4 border-white text-white border-2 rounded-full"
                    type="button"
                    onClick={addNewContent}
                >
                    <span className="text-xl">Add More Content</span>
                </button>
                <hr className="border" />
                <button
                    type="submit"
                    className="py-2 px-6 flex w-fit ml-auto items-center gap-4 border-white text-white border-4 font-bold rounded-full"
                    disabled={isLoading}
                >
                    <span className="text-xl">
                        {isLoading ? "Loading..." : "Submit Post"}
                    </span>
                </button>
            </form>
        </div>
    );
}

export default NewPost;
