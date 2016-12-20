/**
 * Created by Jerry on 16/12/18.
 */
import React from "react";
import ReactModal from "../modal";

import Account from "./Account";
import Password from "./Password";

import "./user-setting.css";

export default class Setting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            MenuItemActive: 0,
            settingMenu: ["Account", "Password"],
            settingContent:[<Account/>, <Password/>]
        }
    }

    /**
     * 切换菜单, 选择添加 active 样式
     * @param index
     * @returns {function()}
     */
    switchMenu = (index) =>{
        return () => {
            this.setState({MenuItemActive: index});
        }
    };
    
    render(){
        
        return <ReactModal>
            <div className="user-setting flex">
                <div className="setting-menu flex">
                    {this.state.settingMenu.map(
                        (val, index) => {
                            //添加 active 样式
                            let className = "menu-item " + (this.state.MenuItemActive === index ? "active" : "");
                            return <span
                                className= { className}
                                key={index}
                                onClick={ this.switchMenu(index) }
                            >{ val }</span>
                        }
                    )}
                </div>
                <div className="setting-content">
                    { this.state.settingContent[this.state.MenuItemActive] }
                </div>
            </div>
        </ReactModal>
    }
}