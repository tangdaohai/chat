/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";
/**
 * 头像
 */
export default class Acatar extends React.Component{
    
    render(){
        
        const { avatar, classArr = [], user, click } = this.props;
        
        return <div className="img-container flex" onClick={ click }>
            <img src={ avatar } />
        </div>
    }
}