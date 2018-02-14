import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Aux from '../../hoc/Aux';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const layout = (props) => (
    <div className="Aux">
        <SideDrawer/>
        <main className="content">
            {props.children}
        </main>
    </div>
);

export default layout;