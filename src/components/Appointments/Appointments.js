import React, {Component} from 'react';
import Appointment from './Appointment/Appointment';
import ConfirmationModal from '../ConfirmationModal';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    closeModalHandler =() => {
        this.setState({showModal: false})
    };

    render() {
        return (
            <div>
                <ConfirmationModal show={this.state.showModal} modalClosed={this.closeModalHandler}/>
                <p className="date">Today</p>
                <Appointment/>
                <Appointment/>
                <Appointment/>
            </div>
        )
    };
}

export default Appointments;


