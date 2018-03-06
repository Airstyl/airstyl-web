import React, { Component } from 'react';
import LoginContainer from '../Login/Login.container';
import RegisterContainer from '../Register/Register.container';
import Dashboard from '../Dashboard/Dashboard.container';
import {Route, Switch} from 'react-router-dom';
import EditProfile from "../EditProfile/EditProfile.container";


class Content extends Component {

    render () {
        return (
            <div>
                <Switch>
                    <Route path={"/"} exact render={() => <RegisterContainer/>} />
                </Switch>
            </div>
        );
    }
}

export default Content;