import React from "react";
import Logon from "./pages/authentication"
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Logon}/>
            </Switch>
        </BrowserRouter>
    );
}