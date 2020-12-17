import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeCnenter from './HomeHeaderCnenter/HomeCnenter';
import HomeHeaderTop from './HomeHeader/HomeHeaderTop';
 
function App() {
  return (
    <Router>
    {/* Mutaza and Presefoni Part */}
    <HomeHeaderTop />
      <Route exact path="/" component={HomeCnenter} />
  </Router>
  );
}


export default App;
