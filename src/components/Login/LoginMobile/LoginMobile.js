import React, {Component} from 'react';
import Tablet from '../../Responsive/Desktop';
import Mobile from '../../Responsive/Mobile';

class LoginMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Mobile>
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
                    <Button bsStyle="primary">
                        Facebook
                    </Button>
                    <Button bsStyle="primary">
                        Instagram
                    </Button>

                </div>
            </Mobile>
        )
    };
}

export default LoginMobile;