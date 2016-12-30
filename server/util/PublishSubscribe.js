/**
 * 发布/订阅 模式。
 */

/**
 * 事件储存。 
 * key: 事件类型
 * value: 监听事件的函数
 */
const EventStore = {};

module.exports = {
    /**
     * 订阅事件
     * 
     * @param {string} type
     * @param {function} fn
     */
    on(type, fn) {
        if (typeof fn !== "function") {
            throw new TypeError(fn + " 必须是 function.");
        }
        if (!EventStore[type]) {
            EventStore[type] = [];
        }
        EventStore[type].push(fn);
    },
    /**
     *  移除 type 中对应的监听方法
     * 
     * @param {string} type
     * @param {function} fn
     * @returns
     */
    of(type, fn) {
        const fns = EventStore[type];
        if (!fns || fns.length === 0) {
            return;
        }
        //移除 fn;
        EventStore[type] = fns.filter(val => val != fn);
    },
    /**
     * 移除 type 中所有的监听事件
     * 
     * @param {any} type
     */
    ofAll(type){
        return delete EventStore[type];
    },
    /**
     * 触发事件,执行对应监听的函数
     * 
     * @param {string} type 
     * @param 从第二个参数起 所有的参数都会传递给监听函数
     * @returns
     */
    emit(...args) {
        if (args.length === 0) {
            return;
        }
        //去除第一个参数 type
        const type = args.shift();
        //获取对应的事件列表
        const fns = EventStore[type];

        if (!fns || fns === 0) {
            return;
        }

        //执行回调函数
        fns.forEach(fn => fn.apply(this, args));
    }
}