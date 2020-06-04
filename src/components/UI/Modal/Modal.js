import React from 'react';
import './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Auxiliary>
        <Backdrop showModal={props.modalShow} clicked={props.modalClosed} />
        <div className="Modal">
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;