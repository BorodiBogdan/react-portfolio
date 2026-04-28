import { Link } from "react-router-dom";
import useReveal from "./useReveal";

function initials(name) {
  if (!name) return "B";
  return name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function BlogPost({ title, postText, author, date, imageLink }) {
  const ref = useReveal();
  const paragraphs = (postText || "").split("`").filter((p) => p.trim());
  const wordCount = (postText || "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 220));

  return (
    <article className="article reveal" ref={ref}>
      <Link to="/blog" className="article__back">
        ← back to writing
      </Link>

      <div className="article__meta">
        <span>{date}</span>
        <span>·</span>
        <span>{minutes} min read</span>
      </div>

      <h1 className="article__title">{title}</h1>

      {imageLink && (
        <div className="article__hero">
          <img src={imageLink} alt={title} />
        </div>
      )}

      <div className="article__body">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <footer className="article__footer">
        <div className="article__author">
          <span className="article__author-avatar">{initials(author)}</span>
          <span>{author}</span>
        </div>
        <span>{date}</span>
      </footer>
    </article>
  );
}

export default BlogPost;
