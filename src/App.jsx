import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        
      <Route exact path="/" component={Home} />
      

      <Route path="*" component={NotFoundPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
