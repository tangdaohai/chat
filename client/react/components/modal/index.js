/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import ReactDom from "react-dom";
import { browserHistory } from "react-router";

import "./modal.css";

export default class ReactModal extends React.Component{

    componentDidMount(){
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
        this.renderPortal(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.renderPortal(newProps);
    }

    componentWillUnmount() {
        ReactDom.unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
    }

    renderPortal(props){
        ReactDom.unstable_renderSubtreeIntoContainer(this, <Modal {...props} />, this.node);
    }

    render(){
        return React.DOM.noscript();
    }
}

class Modal extends React.Component{

    render(){
        return <div className="modal-container flex f-c">
            <div className="modal"></div>
            <div className="close-modal" onClick={ this.props.click || (() => browserHistory.goBack()) }>
                <i className="fa fa-times fa-2x" aria-hidden="true" />
            </div>
            <div className="modal-content">
                { this.props.children }
            </div>
        </div>
    }
}