import React from "react";
import {Dashboard, Incidents, Logon, Profile, Register} from "./pages/index"
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Dashboard}/>
                <Route path={'/logon'} component={Logon}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/incidents/new'} component={Incidents}/>
            </Switch>
        </BrowserRouter>
    );
}