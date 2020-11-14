import './App.css';
import Blogs from './components/blog/Blogs';
import BlogDetail from './components/blog/blogDetail'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blog-detail" component={BlogDetail} />
        <Route path="/" component={Blogs} />
      </Switch>
    </Router>
  );
}

export default App;
