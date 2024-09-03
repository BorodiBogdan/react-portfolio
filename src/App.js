import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Blog from "./components/Blog";
import Admin from './components/Admin';
import CreatePost from './components/CreatePost';
import { db } from "./firebase-confing";
import BlogPost from './components/blog-page';
import { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import Footer from './components/Footer';
import ReactLoading from 'react-loading';

function App() {
  const [postLists, setPostList] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // Grab the post information
      setLoading(false); // Set loading to false once data is fetched
    };

    getPost();
  }, [postsCollectionRef]); // Add postsCollectionRef as a dependency

  const userName = localStorage.getItem("name");

  return (
    <Router>
      <NavBar />
      {!loading ? (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/admin" exact component={Admin} />
          {userName === "Bogdan Borodi" ? <Route path="/post" exact component={CreatePost} /> : ""}
          {postLists.map((post) => {
            return (
              <Route
                key={post.id}
                path={'/' + post.title}
                render={() => (
                  <BlogPost
                    title={post.title}
                    postText={post.postText}
                    imageLink={post.imageLink}
                    author={post.author.name}
                    date={post.date}
                  />
                )}
              />
            );
          })}
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      ) : (
        <div className="loading">
          <ReactLoading type="spin" color={"#ffffff"} height={'5%'} width={'5%'} />
        </div>
      )}
      <Footer />
    </Router>
  );
}

export default App;
