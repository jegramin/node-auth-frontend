import './App.css';
import Blogs from './components/blog/Blogs';
import BlogDetail from './components/blog/blogDetail'
import BlogCreate from './components/blog/blogCreate'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blog-detail" component={BlogDetail} />
        <Route path="/" component={Blogs} />
        <Route path="/new-blog" component={BlogCreate} />
      </Switch>
    </Router>
  );
}

export default App;
