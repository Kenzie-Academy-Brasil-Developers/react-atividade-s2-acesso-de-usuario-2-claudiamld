import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import { members } from './members';
import Customer from './pages/Customer/customer';
import Company from './pages/Company/company';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <Home members={members} />
        </Route>

        <Route exact path='/customer/:id'>
          <Customer/>
        </Route>

        <Route exact path='/company/:id'>
          <Company />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
