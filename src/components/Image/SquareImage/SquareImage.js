import React from 'react';
import '../../../css/bootstrap.min.css';
import './SquareImage.css';
import defaultImage from '../../../assets/images/insert-image.png'

const squareImage = (props) => {
    return (
        <div>
            <img src={props.image == null ? defaultImage : props.image}
                 className="thumbnail square"
                 style={{maxHeight: props.height}}/>
        </div>
    );
};

export default squareImage;