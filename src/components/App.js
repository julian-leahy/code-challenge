import './../styles/App.scss';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Challenge from './Challenge';
import Admin from './Admin';

function App() {
  return (
    <div className='app'>
      <Router>
        <div className='container'>
          <header>
            <nav>
              <NavLink to='/' exact={true}>Home</NavLink>
              <NavLink to='/admin'>Admin</NavLink>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path='/' component={Challenge} exact={true} />
              <Route path='/admin' component={Admin} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
