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

function App() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));//grab the post information
    }

    getPost();
  }, [])

  const userName = localStorage.getItem("name");
  //userName
  console.log(userName);
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/admin" exact component={Admin} />
        {userName === "Borodi Bogdan (XBogdan24)" ? <Route path="/post" exact component={CreatePost} /> : ""}
        {postLists.map((post) => {
          return (
            <Route key={post.id} path={'/' + post.title} render={() => <BlogPost title={post.title} postText={post.postText} imageLink={post.imageLink} author={post.author.name} date={post.date} />} />
          )
        })}
        <Route path="*" exact component={PageNotFound} />
      </Switch>
      <Footer />
    </Router >


  );
}

export default App;
