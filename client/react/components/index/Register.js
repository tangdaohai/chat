/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";

export default class Register extends React.Component {

    render() {
        return <div className="register form-box flex">
            <span className="title">Register</span>
            <input placeholder="Email" className="input-basic-60 input"/>
            <input placeholder="Password" className="input-basic-60 input"/>
            <button className="btn">SUBMIT</button>
        </div>
    }
}