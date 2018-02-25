import React from 'react';
import {Row ,Col} from 'react-bootstrap';
import './Appointment.css';

const appointment = (props) => {
    return (
        <div className={"appointment-container"}>
            <Row className={"appointment-row"}>
                <Col lg={1} md={1} className={"column-no-padding"}>
                    <p>{props.timeRange}</p>
                </Col>
                <Col lg={11} md={1} className={"column-no-padding"}>
                    <div className={"appointment-customer"}>
                        <p>{props.clientName}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lgOffset={1} mdOffset={1} className={"column-no-padding"}>
                    <div className="appointment-detail">
                        <p>{props.appointmentDetail}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default appointment;