/**
 * Created by Jerry on 16/12/9.
 */
import React from "react";

export default class Login extends React.Component {

    render() {
        return <div className="login form-box flex">
            <span className="title">Login</span>
            <input placeholder="Email" className="input-basic-60 input"/>
                <input placeholder="Password" className="input-basic-60 input"/>
                    <div className="remember-me">
                        <input id="remember-me-box" type="checkbox" className="remember-me-box"/>
                            <label htmlFor="remember-me-box">Remember me</label>
                    </div>
                    <button className="btn">SUBMIT</button>
        </div>
    }
}