import React from 'react';
import Layout from "./layout";
// import MoreDetails from "./components/moreDetails"
// import Menu from "./components/menu"
// import Login from "./components/login"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Layout} />
          {/* <Route exact path="/insight-studio" component={InsightStudio} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
