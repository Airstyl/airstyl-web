import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import Aux from '../../hoc/HOC';
import Backdrop from '../../UI/Backdrop/Backdrop';


const popUp = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className="modal" tabIndex="-1" role="dialog"
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     display: props.show ? 'block' : 'none'}}>

                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>One fine body...</Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </Aux>
    );
};

export default popUp;

