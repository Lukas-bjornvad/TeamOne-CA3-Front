import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import CreateUserPage from "./components/CreateUserPage";
import StarWarsPage from "./components/StarWarsPage";
import StartPage from "./components/Home";
/* import uuid from "uuid/v1"; */

const NoMatch = () => {
  return <h3>The page was not found.</h3>;
};

function App({ loginFacade, starFacade, createUserFacade }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [starInfo, setStarInfo] = useState(null);
  const [starId, setStarId] = useState("");

  // check token regularly
  useEffect(() => {
    /* loginFacade.logout(); */
    const interval = setInterval(() => {
      setLoggedIn(loginFacade.loggedIn());
    }, 10000);
    setLoggedIn(loginFacade.loggedIn());
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Header loggedIn={loggedIn} starId={starId} />
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/createUser">
          <CreateUserPage factory={createUserFacade} />
        </Route>
        <Route path="/login">
          <LogIn
            apiFacade={loginFacade}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            starFacade={starFacade}
          />
        </Route>
        <Route path="/starWars">
          <StarWarsPage
            starFacade={starFacade}
            loggedIn={loggedIn}
            starInfo={starInfo}
            setStarInfo={setStarInfo}
            id={starId}
            setId={setStarId}
          />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
