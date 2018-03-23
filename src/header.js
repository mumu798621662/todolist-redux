/**
 * Created by beisen on 2018/3/16.
 */
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div style={style}>Todolist</div>
        );
    }
}
var style={background:'black','fontSize':"28px",color:'#fff','textAlign':'center','lineHeight':'60px',width:'100%',height:'60px'}


export default Header;