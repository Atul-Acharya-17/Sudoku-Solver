import React, { Component } from 'react';
import '../../style/style.css';

class Description extends Component {
    render() { 
        return ( 
            <footer className="description">
                Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time
            </footer>
         );
    }
}
 
export default Description;