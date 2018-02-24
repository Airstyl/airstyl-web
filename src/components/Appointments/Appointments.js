import React, {Component} from 'react';
import Appointment from './Appointment/Appointment';
import ConfirmationModal from '../ConfirmationModal';

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [
                {date: '20-02-2018', day: [
                        {startDateTime: '12:00', endDateTime: '13:00', clientName: 'John', detail: 'Detail detail detail detail detail detail detail detail detail detail detail detail detail'},
                        {startDateTime: '15:00', endDateTime: '16:00', clientName: 'Steve', detail: 'Detail detail detail detail detail detail detail detail detail detail detail detail detail'}
                ]},
                {date: '21-02-2018', day: [
                        {startDateTime: '11:00', endDateTime: '13:00', clientName: 'Dave', detail: 'Detail detail detail detail detail detail detail detail detail detail detail detail detail'}
                    ]},
                {date: '22-02-2018', day: [
                        {startDateTime: '11:00', endDateTime: '13:00', clientName: 'Dave', detail: 'Detail detail detail detail detail detail detail detail detail detail detail detail detail'}
                    ]},
            ],
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
                {this.state.appointments.map((appointmentDay) => (
                    <div>
                        <p className="date">{appointmentDay.date}</p>
                        {appointmentDay.day.map((appointment) => (
                            <Appointment
                                timeRange={appointment.startDateTime + ' - ' + appointment.endDateTime}
                                clientName={appointment.clientName}
                                appointmentDetail={appointment.detail}/>
                        ))}
                    </div>


                ))}
            </div>
        )
    };
}

export default Appointments;


