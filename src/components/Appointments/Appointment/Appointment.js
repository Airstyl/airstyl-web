import React from 'react';
import './Appointment.css';
import '../../../css/bootstrap.min.css';

const appointment = (props) => {
    return (
        <div className="row">
            <div className="time">
                <p>{props.timeRange}</p>
            </div>
            <div className="customer">
                <p>{props.clientName}</p>
            </div>
            <div className="appointment-detail">
                <p>{props.appointmentDetail}</p>
            </div>
        </div>
    );
};

export default appointment;