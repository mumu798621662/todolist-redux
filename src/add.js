/**
 * Created by beisen on 2018/3/16.
 */
import React,{Component} from "react"
import { connect } from "react-redux"

class Add extends Component{
    render(){
        const add=this.props.add

        return(
            <div className="addList">
                <div className="addCon"><input type="text" id="addInput"/></div>
                <div className="addConBtn"><button onClick={add} >添加到待办事项</button></div>
            </div>
        )

    }
}
export default connect((state=>{
  return {state}
}),(dispatch) => {
    return {
        add:() => {
            let val=document.getElementById('addInput').value
            dispatch({
                type: 'ADD',
                con:val
            });
        }
    };
})(Add)