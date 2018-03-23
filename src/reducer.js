/**
 * Created by beisen on 2018/3/21.
 */
const data = [
    {id:0,con:'吃饭',status:true},
    {id:1,con:'学习',status:false},
    {id:2,con:'工作',status:true},
]

const reducer=function (state=data,action) {
    switch (action.type) {
        case 'ADD':
        return[
            ...state,
            {
                id:Math.random()+new Date().getTime(),
                con:action.con,
                status:true
            }
        ]
        case 'Change':
            let id=action.id;

            let oldList=state.filter(t=>{
                return t.id===Number(id)
                })
            oldList[0].status=!oldList[0].status
                let newList=state.filter(t=>{
            return t.id!==Number(id)
                })
            let lastList=newList.concat(oldList)
            return lastList
        case 'DEL':
            return state.filter((t)=>{
                return t.id!==Number(action.id)
            })

        default:
            return state
    }
}

export default reducer


