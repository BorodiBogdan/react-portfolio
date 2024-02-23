import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import Blog from "./components/Blog";

function App() {
  return (


    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={Blog} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>


  );
}

export default App;
