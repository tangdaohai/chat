/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import Modal from "../../modal"

import "./user-setting.css";

class Setting extends React.Component{
    
    render(){
        
        return <div className="user-setting flex">
            <div>
                Email: tangdaohai@outlook.com
            </div>
        </div>
    }
}

function setting(){
    Modal.show(<Setting/>);
}

export default setting;