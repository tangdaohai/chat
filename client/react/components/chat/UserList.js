/**
 * Created by Jerry on 16/12/12.
 */

import React from "react";

export default class UserList extends React.Component{
    
    render(){
        
        return <div className="list-container">
            <div>
                <div className="nav-contatiner flex f-c">
                    <div>
                        <i className="fa fa-bars fa-lg" aria-hidden="true" />
                    </div>
                    <div>
                        <i className="fa fa-search fa-lg" aria-hidden="true" />
                        <i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" />
                    </div>
                </div>
                <div className="user-list">
                    <ul>
                        <li className="flex">
                            <div className="img-contatiner flex">
                                <img src="https://d13yacurqjgara.cloudfront.net/users/60166/avatars/mini/yogaLogo.png?1390870645" />
                            </div>
                            <div className="name-content flex">
                                <div className="no-wrap">John Smith</div>
                                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="img-contatiner flex">
                                <img src="https://d13yacurqjgara.cloudfront.net/users/638582/avatars/mini/69902c41dd41b2dbde4ca275b2dde133.png?1422938485" />
                            </div>
                            <div className="name-content flex">
                                <div className="no-wrap">Mike Jones</div>
                                <div className="no-wrap">你好呀</div>
                            </div>
                        </li>
                        <li className="flex active">
                            <div className="img-contatiner flex">
                                <img src="https://d13yacurqjgara.cloudfront.net/users/1312609/avatars/mini/15e123a507b4648a058e71d4539cc17a.jpg?1470333246" />
                            </div>
                            <div className="name-content flex">
                                <div className="no-wrap">Allison Grayce</div>
                                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="img-contatiner flex">
                                <img src="https://d13yacurqjgara.cloudfront.net/users/63973/avatars/small/9b52fdc306308edaaa03aacaaa173c8c.png?1479084380" />
                            </div>
                            <div className="name-content flex">
                                <div className="no-wrap">Nikki Clark</div>
                                <div className="no-wrap">Let's grab some coffee and tea, so keep easy</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}