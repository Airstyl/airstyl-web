import React from 'react';
import {withRouter} from 'react-router-dom';
import MinWidthTablet from "../../components/Responsive/MinWidthTablet";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
import Profile from "../../components/EditProfile/EditProfile";
import Mobile from "../../components/Responsive/Mobile";

const profileContainer = (props) => {
    return (
        <div>
            <MinWidthTablet>
                <SideDrawer/>
                <main className="layout-with-sidebar">
                    <div className={"content-container"}>
                        <h4 className={"content-heading"}>Profile</h4>
                        <div className={"content"}>
                            <Profile/>
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

export default withRouter(profileContainer);