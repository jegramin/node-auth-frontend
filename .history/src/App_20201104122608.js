import './App.css';
import Blogs from './components/Blogs';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Blogs} />
      </Switch>
    </Router>
  );
}

export default App;
