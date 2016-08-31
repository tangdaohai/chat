/**
 * Created by Jerry on 16/8/31.
 */

export default function getUserList(userList = [], action) {

    const UserInfo = {
        unread : 10,
        imgSrc : "http://img2.w3ctech.com/f41ff74ff97000ad28d0f7433fd4d785.jpg",
        userName : "省略两个字..."
    };

    if(action.type === "user-list"){

        const list = [];

        list.push(UserInfo);
        list.push(UserInfo);
        list.push(UserInfo);
        list.push(UserInfo);
        list.push(UserInfo);
        list.push(UserInfo);

        return list;
    }

    return userList;
}