import React from 'react';
import {withRouter} from 'react-router-dom';
import Appointments from '../../components/Appointments/Appointments';
import MinWidthTablet from "../../components/Responsive/MinWidthTablet";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
import Mobile from "../../components/Responsive/Mobile";

const dashboard = (props) => {
    return (
        <div>
            <MinWidthTablet>
                <SideDrawer/>
                <main className="layout-with-sidebar">
                    <div className={"content-container"}>
                        <h4 className={"content-heading"}>Dashboard</h4>
                        <div className={"content"}>
                            <Appointments/>
                        </div>
                    </div>
                </main>
            </MinWidthTablet>
            <Mobile>
                <main className={"layout-no-sidebar"}>

                </main>
            </Mobile>
        </div>
    );
};

export default withRouter(dashboard);