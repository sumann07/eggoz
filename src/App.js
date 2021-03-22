import React from 'react'
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <Switch>
        <Route exact path="/" render={(props)=><Signin/>} />
        <Route exact path="/signup" render={(props)=><Signup/>}/>
    </Switch>

</Router>
  );
}

export default App;
