import React from 'react';
import SquareImage from '../SquareImage/SquareImage';
import '../../../css/bootstrap.min.css';
import './ServiceImages.css';
import '../../../common/common.css';

const serviceImage = (props) => {
    return (
        <div {...props}>
            <div className="col-md-4">
                <div className="thumbnail">
                    <SquareImage image={props.image1} alt="Image 1" height={props.image1 ? 250 : 150}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="thumbnail">
                    <SquareImage image={props.image2} alt="Image 2" height={props.image2 ? 250 : 150}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="thumbnail">
                    <SquareImage image={props.image3} alt="Image 3" height={props.image3 ? 250 : 150}/>
                </div>
            </div>
        </div>
    );
};

export default serviceImage;