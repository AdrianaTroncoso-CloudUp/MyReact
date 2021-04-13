import './App.css';
import { 
  BrowswerRouter as Router,
  Switch,
  Route,
  Link } from "react-router"
//*Componentes
import Home from './components/home';
import Documentation from './components/Documentation';

function App() {
  return (
    <div className="App">
      <Home>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/Documentation'>
                <Documentation/>
            </Route>
        </Switch>
      </Home>
    </div>
  );
}

export default App;
