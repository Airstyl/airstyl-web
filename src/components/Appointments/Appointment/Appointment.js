import React from 'react';
import './Appointment.css';
import '../../../css/bootstrap.min.css';

const appointment = (props) => {
    return (
        <div className="row">
            <div className="time">
                <p>9:30 -10:00</p>
            </div>
            <div className="customer">
                <p>Sebabatso Lebotho</p>
            </div>
            <div className="appointment-detail">
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                </p>
            </div>
        </div>
    );
};

export default appointment;