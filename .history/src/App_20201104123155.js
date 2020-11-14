import './App.css';
import Blogs from './components/Blogs';
import BlogDetail from './components/blogDetail'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Blogs} />
        <Route path="/blog-detail" component={BlogDetail} />
      </Switch>
    </Router>
  );
}

export default App;
