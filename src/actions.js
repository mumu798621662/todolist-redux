/**
 * Created by beisen on 2018/3/21.
 */
const ADD="ADD";
const Change="Change";
const DEL ="DEL";

export const addTodo=(con)=>({
    type:ADD,
    con
})

export const changeTodo=(status)=>({
    type:Change,
    status
})

export const delTodo=(id)=>({
    type:DEL,
    id
})