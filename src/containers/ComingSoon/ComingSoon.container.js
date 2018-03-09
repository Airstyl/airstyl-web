import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import ComingSoonMobile from '../../components/ComingSoon/ComingSoonMobile/ComingSoonMobile';

class ComingSoonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <MinWidthTablet>
                    <ComingSoon />
                </MinWidthTablet>
                <Mobile>
                    <ComingSoonMobile />
                </Mobile>
            </div>
        )
    };
}

export default withRouter(ComingSoonContainer);