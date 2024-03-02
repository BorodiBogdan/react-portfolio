function BlogPost({ title, postText, author, date, imageLink }) {
    return (
        <div className="main-article">
            <div className="blog-page-article">
                <img className="main-article__figure" src={imageLink} alt="imageAlt" />
                <div className="blog-content">
                    <div className="main-article-title">
                        <h1 className="article-title">
                            {title}
                        </h1>
                    </div>
                    <div className="blog-text">
                        {
                            postText.split('`').map((text) => {
                                return (
                                    <p className="blog-text-content" key={text} >{text}</p>
                                )
                            })

                        }
                        <div className="author-div">
                            <div className="author-blog-div">
                                <p>Author: {author}</p>
                            </div>
                            <div className="date-div">
                                <p>Date: {date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BlogPost;