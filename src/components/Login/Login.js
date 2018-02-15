import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Input from '../Form/Input/Input';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className={"body"}>
                    <Logo/>
                    <form className={"form"}>
                        <Input
                            placeholder="Username"/>
                        <Input
                            placeholder="Password"/>
                        <label className={"forgot-password"}>
                            Forgot Password?
                        </label>
                    </form>
                    <ButtonToolbar
                        style={{display: 'block'}} >
                        <Button bsStyle="primary" bsSize="large">
                            Facebook
                        </Button>
                        <Button bsStyle="primary" bsSize="large">
                            Instagram
                        </Button>
                    </ButtonToolbar>;

                </div>
            </div>
        )
    };
}

export default Login;