import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeCnenter from './HomeHeaderCnenter/HomeCnenter';

function App() {
  return (
    <Router>
    {/* Mutaza and Presefoni Part */}
      <Route exact path="/" component={HomeCnenter} />
  </Router>
  );
}

export default App;
