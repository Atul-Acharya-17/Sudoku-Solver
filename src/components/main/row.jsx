import React, { Component } from 'react';
import Block from './block';

class Row extends Component {
    state = { 
        size : [1, 2, 3, 4, 5, 6, 7, 8, 9]
     }
    render() { 
        // Add inline-block
        return ( 
            <div style = {{display: "block"}}>
                {this.props.row.map((value, index) => (
                    <div key = {index} style = {{display: "inline-block"}}>
                        <Block value = {value} tuple = {[this.props.id, index]} action = {this.props.action}>
                        </Block>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Row;