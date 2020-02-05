import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
import ArtistDetailLoadable from './components/artists/ArtistDetailLoadable';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistEdit from './components/artists/ArtistEdit';
import ArtistTestLoadable from './components/artists/ArtistTestLoadable';

// const componentRoutes = {
//   component: Home,
//   path: '/',
//   indexRoute: { component: ArtistMain },
//   childRoutes: [
//     {
//       path: 'artists/new',
//       getComponent(location, cb) {
//         System.import("./components/artists/ArtistCreate") // webpack will dyanamically load these System.import calls
//           .then(module => cb(null, module.default));
//       }
//     },
//     {
//       path: 'artists/:id',
//       getComponent(location, cb) {
//         System.import("./components/artists/ArtistDetail")
//           .then(module => cb(null, module.default));
//       }
//     },
//     {
//       path: 'artists/:id/edit',
//       getComponent(location, cb) {
//         System.import("./components/artists/ArtistEdit")
//           .then(module => cb(null, module.default));
//       }
//     },
//     {
//       path: 'test',
//       getComponent(location, cb) {
//         System.import("./components/artists/ArtistTest")
//           .then(module => cb(null, module.default));
//       }
//     }
//   ]
// }

// const Routes = () => {
//   return (
//     <Router history={hashHistory} routes = {componentRoutes} />
//   );
// };

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={ArtistMain} />
        <Route path="artists/new" component={ArtistCreate} />
        <Route path="artists/:id" component={ArtistDetailLoadable} />
        <Route path="artists/:id/edit" component={ArtistEdit} />
        <Route path="test" component={ArtistTestLoadable} />
      </Route>
    </Router>
  );
};

export default Routes;
