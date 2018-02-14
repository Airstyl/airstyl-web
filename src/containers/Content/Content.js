import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import Register from '../../components/Register/Register';
import './Content.css';

class Content extends Component {

    render () {
        return (
            <div>
                <div className={"content-container"}>
                    <h4 className="heading">Create Account</h4>
                    <div className="mainContent">
                        <Register/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;