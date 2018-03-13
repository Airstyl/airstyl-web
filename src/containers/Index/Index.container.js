import React, {Component} from 'react';
import * as actionTypes from '../../store/actions/actions';

import Mobile from '../../components/Responsive/Mobile';

import IndexMobile from '../../components/Index/IndexMobile/IndexMobile';
import {connect} from "react-redux";

class IndexContainer extends Component {
    render() {
        return (
            <div>
                <Mobile>
                    <IndexMobile
                        registerAsStylist={this.props.registerAsStylist}
                        registerAsConsumer={this.props.registerAsConsumer}
                    />
                </Mobile>
            </div>
        )
    };
}

const mapStateToProps = () => {
    return {}
};


const mapDispatchToProps = dispatch => {
    return {
        registerAsConsumer: () => dispatch({type: actionTypes.REGISTER_AS_CONSUMER}),
        registerAsStylist: () => dispatch({type: actionTypes.REGISTER_AS_STYLIST}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);