/**
 * Created by Jerry on 16/8/10.
 */

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Main from "../components/Main";
// import * as CountAction from "../action/countAction";
import * as SendAction from "../action/SendAction";

//将state.counter绑定到props的counter
function mapStateToProps(state){
    return {
        messageList : state.send
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(SendAction, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Main);