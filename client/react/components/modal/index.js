/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import ReactDom from "react-dom";

import "./modal.css";

class ReactModal extends React.Component{

    render(){
        return <div className="modal-container flex f-c">
            <div className="modal"></div>
            <div className="close-modal" onClick={ () => document.body.removeChild(div) }>
                <i className="fa fa-times fa-2x" aria-hidden="true" />
            </div>
            <div className="modal-content">
                { this.props.children }
            </div>
        </div>
    }
}

var div;
function instance(){
    div = document.createElement("div");
    document.body.appendChild(div);
    return div;
}

function show(ReactObject){
    ReactDom.render(<ReactModal>{ ReactObject }</ReactModal>, instance());
}

const Modal = {
    show
};

export default Modal;