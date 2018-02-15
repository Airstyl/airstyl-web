import React from 'react';
import Desktop from '../Responsive/Desktop';
import Tablet from '../Responsive/Tablet';
import Mobile from '../Responsive/Mobile';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const layout = (props) => (
    <div className="Aux">
        <Desktop>
            <SideDrawer/>
            <main className="content">
                {props.children}
            </main>
        </Desktop>
        <Tablet>
            <SideDrawer/>
            <main className="content">
                {props.children}
            </main>
        </Tablet>
        <Mobile>
            <main className="content-no-sidebar">
                {props.children}
            </main>
        </Mobile>
    </div>
);

export default layout;