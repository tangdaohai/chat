/**
 * Created by Jerry on 16/8/31.
 */
import { ON_LINE_USER, NEW_USER } from "../action/UserAction";
export default function onLines(onLines = [], action) {
    
    switch (action.type){
        case ON_LINE_USER :

            return Object.assign([], action.users);
        case NEW_USER :

            const users = Object.assign([], onLines);
            users.push(action.newUser);

            return users;

        default : return onLines;
    }
}