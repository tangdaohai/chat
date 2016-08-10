/**
 * Created by Jerry on 16/8/10.
 */

import React from "react";

export default class Add extends React.Component {

    render() {

        const { count, increment, decrement} = this.props;

        return <div>
            current num : { count }. <br/>
            <button onClick = { increment }>加</button>  <button onClick = {decrement}>减</button>
        </div>
    }
}