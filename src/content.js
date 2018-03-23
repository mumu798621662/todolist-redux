/**
 * Created by beisen on 2018/3/16.
 */
import React, { Component } from 'react';
import Unfinished from "./Unfinished"
import Finished from "./Finished"
class Content extends Component{
    constructor(props){
        super(props)
        this.state={list:this.props.list,count:this.props.count}
    }
    render(){
        return(
            <div className="conBox">
                <Unfinished dataChange={this.props.dataChange} statusChange={this.props.statusChange}/>
                <Finished list={this.props.list} dataChange={this.props.dataChange} statusChange={this.props.statusChange}/>
            </div>
        )
    }
}
export default Content;