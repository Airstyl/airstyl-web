import React, { Component } from 'react';
import LoginContainer from '../Login/Login';
import RegisterContainer from '../Register/Register';
import {Route, Switch} from 'react-router-dom';

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