
import './App.css';
import Jim from './Pages/Jim';
import Home from './Pages/Home';
import Classes from './Pages/Classes';
import Reports from './Pages/Reports';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Router>   
      <Navbar/>
<Routes>
  <Route path='/'  exact element={<Home /> }/>
  <Route path='/Classes'  exact element={<Classes /> }/>
  <Route path='/Reports'  exact element={<Reports /> }/>
  <Route path='/Jim'  exact element={<Jim /> }/>
</Routes>
      </Router>
     
    </div>
  );
}

export default App;
