/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

import Avatar from "../../avatar";

export default class List extends React.Component{
    
    render(){

        const UserList = [{
            id: 1,
            name : "John Smith",
            avatar : "https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246"
        },{
            id: 2,
            name : "John Smith",
            avatar : "https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246"
        },{
            id: 3,
            name : "John Smith",
            avatar : "https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246"
        }];
        
        return <div className="user-list">
            <ul>
                { UserList.map( val => <_Item User={val} key={val.id} />) }
            </ul>
        </div>
    }
}

class _Item extends React.Component{
    
    render(){
        
        const { User } = this.props;
        
        return <li className="flex">
            <Avatar avatar={ User.avatar } />
            <div className="name-content flex">
                <div className="no-wrap">{ User.name }</div>
                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
            </div>
        </li>
    }
} 