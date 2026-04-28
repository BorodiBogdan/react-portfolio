import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="notfound">
      <span className="notfound__num">// error 404</span>
      <h1 className="notfound__title">Page not found</h1>
      <p className="notfound__lede">
        The route you tried doesn't exist. The link may be stale or the page
        may have moved.
      </p>
      <Link className="btn" to="/">
        ← Back home
      </Link>
    </section>
  );
}

export default PageNotFound;
