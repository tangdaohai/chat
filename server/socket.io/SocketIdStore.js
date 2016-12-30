/**
 * Socket 的 id 管理。
 * 每当用户登录，注册都追加一条
 * 对应的用户退出，删除这个用户的socket信息
 * 
 * key: user._id
 * value: {
 *      socketId, user
 * }
 */

//Socket Id Store
const SIS = new Map();

module.exports = {

    /**
 * 在 store 中添加一条记录
 * 
 * @export
 * @param {Object} user
 * @param {String} socketId
 * @returns
 */
 add(user, socketId){
    return SIS.set(user._id, {
        socketId,
        user
    });
 },

 /**
 * 在 store 中移除一个记录
 * 
 * @export
 * @param {String} userId
 * @returns
 */
 remove(userId){
    return SIS.delete(userId);
 },

 /**
 * 获得一个 socket
 * 
 * @export
 * @param {any} userId
 * @returns
 */
 get( ...args ){
    if(args.length === 0){
        return Array.from(SIS.values());
    }
    return SIS.get(args[0]);
 }
}