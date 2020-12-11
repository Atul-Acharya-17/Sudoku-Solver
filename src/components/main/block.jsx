import React, { Component } from 'react';
import '../../style/style.css';


class Block extends Component {
    state = {  }
    render() { 
        return ( 
            <button className={this.getClassName()}
         onClick = {(e) => this.props.action(this.props.tuple)}>
             {this.props.value > 0 ? this.props.value : " "}
         </button>
         );
    }

    getClassName = () => {
        let styleName = "block ";
        const id = this.props.tuple;
        const row = Math.floor(id[0]/3);
        const col = Math.floor(id[1]/3);
        const sum = (row + col) % 2;

        if (sum === 1) return styleName+"odd-square";
        else return styleName+"even-square";
    }
}
 
export default Block;