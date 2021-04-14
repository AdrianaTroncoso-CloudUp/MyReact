import './App.css';
import { 
  BrowswerRouter as Router,
  Switch,
  Route,
  Link } from "react-router"
//*Componentes
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
