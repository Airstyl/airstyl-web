import React from 'react';
import '../../../css/bootstrap.min.css';
import './Avatar.css';
import CameraIcon from '../../../assets/images/camera.png'

const avatar = (props) => {
    return (
        <div>
            <div className="avatar">
                <img className="img-circle" src={props.image} />
                <div className="camera">
                    <img className="img-circle" src={CameraIcon} />
                </div>
            </div>
        </div>
    );
};

export default avatar;