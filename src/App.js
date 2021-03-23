import React from 'react'
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Dashboard from "./screen/LoginDashboard/Logindashboard"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <Switch>
        <Route exact path="/signin" render={(props)=><Signin/>} />
        <Route exact path="/signup" render={(props)=><Signup/>}/>
        <Route exact path="/dashboard" render={(props)=><Dashboard/>}/>
    </Switch>

</Router>
  );
}

export default App;
