/**
 * Created by beisen on 2018/3/16.
 */
import React, { Component } from 'react';
import {connect} from "react-redux"
class Count extends Component{
    render(){
        const count=this.props.list.length;
        const UnfinishedNum=this.props.list.filter(t=>{
            return t.status===true
        }).length
        const FinishedNum=this.props.list.filter(t=>{
            return t.status===false
        }).length
        return(
            <div className="bigBox">
                <div className="box">
                <span className='willDo'>未完成：{UnfinishedNum}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="done">已完成：{FinishedNum}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="count">共：{count}</span>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {list:state}
    }
)(Count)