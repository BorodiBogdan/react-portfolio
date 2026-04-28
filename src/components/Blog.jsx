import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-confing";
import useReveal from "./useReveal";

const monthShort = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parseDate(raw) {
  if (!raw) return null;
  // expected formats: "M/D/YYYY HH:mm:ss" — try Date parser, fallback manual
  const direct = new Date(raw);
  if (!isNaN(direct.getTime())) return direct;
  const m = raw.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) {
    return new Date(parseInt(m[3], 10), parseInt(m[1], 10) - 1, parseInt(m[2], 10));
  }
  return null;
}

function formatShort(d) {
  if (!d) return "";
  return `${monthShort[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")}`;
}

function Blog() {
  const [postLists, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useReveal();

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    const getPost = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (e) {
        // swallow
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  // sort newest first, group by year
  const sorted = [...postLists]
    .map((p) => ({ ...p, _d: parseDate(p.date) }))
    .sort((a, b) => (b._d?.getTime() || 0) - (a._d?.getTime() || 0));

  const grouped = sorted.reduce((acc, p) => {
    const y = p._d ? p._d.getFullYear() : "—";
    (acc[y] = acc[y] || []).push(p);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="writing-page reveal" ref={ref}>
      <header className="writing-page__head">
        <span className="writing-page__eyebrow">// writing</span>
        <h1 className="writing-page__title">Notes &amp; essays.</h1>
        <p className="writing-page__lede">
          Occasional posts on engineering, school, contests, and whatever
          rabbit hole I'm currently in. No schedule, no fluff.
        </p>
      </header>

      {loading && (
        <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
          loading posts…
        </p>
      )}

      {!loading && sorted.length === 0 && (
        <p style={{ color: "var(--text-tertiary)" }}>
          No posts yet. Check back soon.
        </p>
      )}

      {years.map((y) => (
        <section key={y}>
          <h2 className="writing-page__year-section" style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--text-tertiary)",
            letterSpacing: "0.04em",
            margin: "32px 0 8px",
          }}>{y}</h2>
          <div className="writing__list">
            {grouped[y].map((post) => (
              <Link
                key={post.id}
                to={"/blog/" + post.title}
                className="writing-row"
              >
                <span className="writing-row__date">
                  {formatShort(post._d)}
                </span>
                <div>
                  <span className="writing-row__title">{post.title}</span>
                  {post.description && (
                    <span className="writing-row__excerpt">
                      {post.description}
                    </span>
                  )}
                </div>
                <span className="writing-row__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Blog;
