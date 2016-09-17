/**
 * Created by Jerry on 16/9/15.
 */

import { newUser } from "./action/UserAction";
import store from "./store";

export function montiort (io){
    
    io.on("new user", (data) => {
        console.log(data, "新用户加入");
    });
}