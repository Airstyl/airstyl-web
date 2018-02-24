import React from 'react';
import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import Register from '../../components/Register/Register';
import RegisterMobile from '../../components/Register/RegisterMobile/RegisterMobile';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';

const registerContainer = (props) => {
    return (
        <div>
            <MinWidthTablet>
                <SideDrawer/>
                <main className="layout-with-sidebar">
                    <div className={"content-container"}>
                        <h4 className={"content-heading"}>Create an account</h4>
                        <div className={"content"}>
                            <Register/>
                        </div>
                    </div>
                </main>
            </MinWidthTablet>
            <Mobile>
                <main className={"layout-no-sidebar"}>
                    <RegisterMobile/>
                </main>
            </Mobile>
        </div>
    );
};

export default registerContainer;