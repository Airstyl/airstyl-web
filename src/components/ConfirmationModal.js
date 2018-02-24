import React from 'react';
import '../css/bootstrap.min.css';
import '../css/global.css';
import Aux from '../hoc/HOC';
import Backdrop from '../UI/Backdrop/Backdrop';


const confirmationModal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className="modal" tabIndex="-1" role="dialog"
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     display: props.show ? 'block' : 'none'}}>

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Style Added</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Text</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={props.modalClosed}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default confirmationModal;

