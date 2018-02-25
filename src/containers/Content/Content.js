import React, { Component } from 'react';
import LoginContainer from '../Login/Login';
import RegisterContainer from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import {Route, Switch} from 'react-router-dom';
import EditProfile from "../EditProfile/EditProfile";


class Content extends Component {

    render () {
        return (
            <div>
                <Switch>
                    <Route path={"/login"} exact render={LoginContainer} />
                    <Route path={"/register"} exact render={RegisterContainer} />
                </Switch>
            </div>
        );
    }
}

export default Content;