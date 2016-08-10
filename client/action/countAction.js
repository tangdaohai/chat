/**
 * Created by Jerry on 16/8/10.
 */
export const INCREMENT_TYPE = "INCREMENT";
export const DECREMENT_TYPE = "DECREMENT";

export function increment() {
    return {
        type : INCREMENT_TYPE
    }
}

export function decrement() {
    return {
        type : DECREMENT_TYPE
    }
}