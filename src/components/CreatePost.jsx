import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase-confing";

function CreatePost() {
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const postsCollectionRef = collection(db, "posts");

    function currentDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const currentDate = month + "/" + date + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

        return currentDate;
    }

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            description,
            imageLink,
            date: currentDate(),
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });

        setTitle("");
        setPostText("");
        setDescription("");
        setImageLink("");
    }

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a post</h1>
                <div className="inputGp">
                    <label>Title</label>
                    <input placeholder="Title..." onChange={(event) => {
                        setTitle(event.target.value);
                    }} />
                </div>
                <div className="inputGp">
                    <label>Description</label>
                    <input placeholder="Description..." onChange={(event) => {
                        setDescription(event.target.value);
                    }} />
                </div>
                <div className="inputGp">
                    <label>Image Link</label>
                    <input placeholder="ImageLink..." onChange={(event) => {
                        setImageLink(event.target.value);
                    }} />
                </div>
                <div className="inputGp">
                    <label>Post</label>
                    <textarea placeholder="Post..." onChange={(event) => {
                        setPostText(event.target.value);
                    }}></textarea>
                </div>
                <button className="submitPostButton" onClick={createPost}>Submit post</button>
            </div>
        </div>
    )
}

export default CreatePost;