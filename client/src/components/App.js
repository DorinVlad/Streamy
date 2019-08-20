import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import browserHistory from "../browserHistory";

const App = () => {
  return (
    <div className="ui container">
      <Router history={browserHistory}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

// NOTES

/* The rule that we use to decide what components instances or routes will be shown on the screen is similar to extractedPath.contains(path) */

/* When typing out a keyword inside of a jsx tag, it is equivalent to saying its value equals true, such as exact={true} */

/* Adding a prop name of exact cause react-router to change the rule it uses for matching the path to extractedPath === path */

/* In order to follow Redux conventions, we want to have the action creators always responsible for changing the state of our application */

/* When we create a BrowserRouter, it decides to internally create a browser history object, so when manually creating a history object, in order to make use of programmatic navigation, we must use a generic router */

/* When one of our components gets rendered by a Route component, we get access to a bunch of different props on that component, sent to us by react-router-dom */

/* With react-router-dom, each component needs to be designed to work in isolation (fetch its own data!) */

/* The Switch component from react-router-dom is going to look at all of our different Route components and show ONLY the first Route that gets matched by any given path */
