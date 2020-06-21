import React from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import history from './history';
import Nav from './components/Menu'
import Home from './containers/Home'
import ListCreate from './components/ListCreate'
import QuotesContainer from './containers/QuotesContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import ListsContainer from './containers/ListsContainer'

// functional compoennt
const App = () => (
//
    <Router history={history}>

     <Route>
      <Nav />
     </Route>
      <Switch>
        <Route exact path="/Quotes-React-Redux/" component={Home}/>
        <Route exact path="/Quotes-React-Redux/new" component={ListCreate} />
        <Route exact path="/Quotes-React-Redux/lists" component={ListsContainer} />
        <Route exact path="/Quotes-React-Redux/all" component={QuotesContainer}/>
        <Route exact path="/Quotes-React-Redux/favorites" component={FavoritesContainer}/>
      </Switch>
  </Router>

);

export default App;
