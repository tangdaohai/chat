/**
 * Created by Jerry on 16/8/4.
 */

import React from 'react';

class Hello extends React.Component{

    render() {
        return (<h1>Hello - {this.props.text}</h1>);
    };
}

export default Hello;