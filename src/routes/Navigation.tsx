import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map( route => (
                <li key={ route.to } >
                  <NavLink
                    to={ route.to } 
                    activeClassName='nav-active' exact
                  >
                    { route.name }
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
            routes.map( route => (
              <Route 
                key={ route.path }
                path={ route.path }
                render={ () => <route.Component /> }
              />
            ))
          }

          <Redirect to={ routes[0].to } />

        </Switch>
      </div>
    </Router>
  );
}