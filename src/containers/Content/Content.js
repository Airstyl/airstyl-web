import React, { Component } from 'react';
import Desktop from '../../components/Responsive/Desktop';
import Tablet from '../../components/Responsive/Tablet';
import Mobile from '../../components/Responsive/Mobile';
import RegisterContainer from '../../components/Register/RegisterContainer';
import Logo from '../../components/Logo/Logo';
import './Content.css';

class Content extends Component {

    render () {
        return (
            <div>
                <Desktop>
                    <div className={"content-container"}>
                        <h4 className="heading">Create Account</h4>
                        <div className="mainContent">
                            <RegisterContainer/>
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div className={"content-container"}>
                        <h4 className="heading">Create Account</h4>
                        <div className="mainContent">
                            <RegisterContainer/>
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                    <div className="mainContent-mobile">
                        <RegisterContainer/>
                    </div>
                </Mobile>
            </div>
        );
    }
}

export default Content;