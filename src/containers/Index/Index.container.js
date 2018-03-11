import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import MinWidthTablet from '../../components/Responsive/MinWidthTablet';
import Mobile from '../../components/Responsive/Mobile';

import IndexMobile from '../../components/Index/IndexMobile/IndexMobile';

class IndexContainer extends Component {
    render() {
        return (
            <div>
                <Mobile>
                    <IndexMobile/>
                </Mobile>
            </div>
        )
    };
}

export default withRouter(IndexContainer);