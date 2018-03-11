import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';

import LoginContainer from '../Login/Login.container';
import IndexContainer from '../Index/Index.container';
import RegisterContainer from '../Register/Register.container';
import * as routes from '../../constants/routes';


class Content extends Component {

    render () {
        return (
            <div>
                <MinWidthTablet>
                    <Switch>
                        <Route path={routes.index} exact render={() => <RegisterContainer/>} />
                        <Route path={routes.register} exact render={() => <RegisterContainer/>} />
                    </Switch>
                </MinWidthTablet>
                <Mobile>
                    <Switch>
                        <Route path={routes.index} exact render={() => <IndexContainer/>} />
                        <Route path={routes.register} exact render={() => <RegisterContainer/>} />
                    </Switch>
                </Mobile>
            </div>
        );
    }
}

export default Content;