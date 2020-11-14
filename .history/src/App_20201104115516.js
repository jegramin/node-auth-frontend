import './App.css';
import Blogs from './components/Blogs';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Blogs />
    </div>
  );
}

export default App;
