import { Suspense } from 'react';
import {
  Route as RouteWrapper, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { routeType } from './interface';
import routes from './routes';

const routerMapper = (route: routeType) => (
  <RouteWrapper path={route.path} key={route.path}>
    {route.components}
  </RouteWrapper>
);

const RouteProvider = () => (
  <Suspense fallback="">
    <Router>
      <Switch>
        {routes.map(routerMapper)}
      </Switch>
    </Router>
  </Suspense>
);

export default RouteProvider;
