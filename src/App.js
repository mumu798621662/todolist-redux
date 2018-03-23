import React, { Component } from 'react';
// import logo from './logo.svg';
// import {bindActionCreators} from "redux";
import { Provider } from 'react-redux'
import './App.css';
import Header from './header';
import Count from "./count";
import Content from "./content";
import Add from "./add";
import {createStore} from "redux"
import reducer from "./reducer"


const store=createStore(reducer)


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[

            ],
        }
        this.dataChange=this.dataChange.bind(this)
        this.statusChange=this.statusChange.bind(this)
        this.listChange=this.listChange.bind(this)
    }
    dataChange(e){
        let newList=this.state.list.filter((data)=>{
            return data.id!==Number(e)
        })
        this.setState({list:newList})
    }
    listChange(data){
        this.setState({list:data})
    }
    statusChange(e){
        let list1=this.state.list.filter((data)=>{
            return data.id===Number(e)
        })[0]
        list1.status=!list1.status
        this.state.list.splice(e,1,list1)
        // this.state.list.unshift(list1)
        let newList=this.state.list;
        this.setState({list:newList})
    }
  render() {
        let num1=(this.state.list.filter(data=>{
            return data.status===true
        })).length
      let num2=(this.state.list.filter(data=>{
          return data.status===false;
      })).length
      let count={UnfinishedNum:num1,FinishedNum:num2}
    return (
      <Provider store={store}>
          <div>
          <Header />
          <Count count={count}/>
          <Content  dataChange={this.dataChange.bind(this)} statusChange={this.statusChange.bind(this)} />
          <Add/>
          </div>
      </Provider>

    );
  }
}


export default App
// export default connect((state)=>{
//     return{
//
//     }
// },(dispatch)=>{
//     return {
//         "actions": bindActionCreators(todoactions,dispatch)
//     }
// })(App);
