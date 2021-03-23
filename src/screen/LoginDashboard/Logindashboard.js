import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout';
import Card from "../../components/card/Card";




const Controller = () => {
    return(
        <Router>
            <DashboardLayout>
            <Switch>
                <Route exact path="/dashboard" render={(props)=><Card {...props}/>} />
                
            </Switch>
            </DashboardLayout>
        </Router>
    )
}

export default Controller;
