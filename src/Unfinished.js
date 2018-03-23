/**
 * Created by beisen on 2018/3/16.
 */
import  React,{ Component } from 'react';
import {connect} from "react-redux"
class Unfinished extends Component{
    render(){
        let datas=this.props.list.filter(data=>{
            return data.status===true
        })
        const del=this.props.del
        const change=this.props.change
        return(
            <div className="box1">
                 <p>待办事项</p>
                 <ul>
                     {
                         datas.map(data=>{
                             return (
                                 <li className="list" key={data.id}>
                                     <div className="changeBtnBox"><div className="changeBtn" onClick={change} id={data.id}></div></div>
                                     <div className="listCon">{data.con}</div>
                                     <div className="delBtn" onClick={del} id={data.id}>X</div>
                                 </li>
                             )
                         })
                     }
                 </ul>
            </div>
        )
    }
}
export default connect((state,props)=>{
    return {
        list:state
    }
},(dispatch)=>{
  return{
      del:(e)=>{
          let id=e.target.getAttribute('id')
          dispatch({
              type:'DEL',
              id:id
          })
      },
      change:(e)=>{
          let id=e.target.getAttribute('id')
          dispatch({
              type:'Change',
              id:id
          })
      }
  }
})(Unfinished)
