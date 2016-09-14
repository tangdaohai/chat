/**
 * Created by Jerry on 16/9/8.
 */

module.exports = {
    success : (content, message) => {
        return {
            status : "success",
            success : true,
            content : content,
            message : message || ""
        }
    },
    fail : (message) => {
        return {
            status : "fail",
            fail : true,
            content : "",
            message : message || ""
        }
    }
};