import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import ComingSoonContainer from '../ComingSoon/ComingSoon.container';


class Content extends Component {

    render () {
        return (
            <div>
                <Switch>
                    <Route path={"/"} exact render={() => <ComingSoonContainer/>} />
                </Switch>
            </div>
        );
    }
}

export default Content;