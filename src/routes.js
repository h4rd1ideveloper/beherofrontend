import React from "react";
import {Logon, Register, Profile, Incidents} from "./pages/index"
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Logon}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/incidents/new'} component={Incidents}/>
            </Switch>
        </BrowserRouter>
    );
}