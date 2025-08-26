
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-confing";

function Blog() {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));//grab the post information
        }

        getPost();
    }, [postsCollectionRef])


    return (
        <div className="postPage">
            {postLists.toReversed().map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <div className="blog-title-div"><h1 className="blog-title">{post.title}</h1></div>
                        <div className="text-description"><p className="postText">{post.description}</p></div>
                        <div className="author-div">
                            <div className="author-name-div">
                                <p className="author-name">Author: {post.author.name}</p>
                            </div>
                            <a className="go_to_arrow" href={"/" + post.title}>
                                <div>
                                    <svg className="arrow-link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </div>
                            </a>
                            <div className="post-date-div">
                                <p className="post-date">{post.date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Blog;