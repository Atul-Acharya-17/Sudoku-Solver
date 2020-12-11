import React, { Component } from 'react';
import '../../style/style.css';

class Intro extends Component {
    render() { 
        return (
            <header className="heading">
                SUDOKU SOLVER
                <br/>
                <h4>
                    Fill the board and solve!
                </h4>
            </header>
          );
    }
}
 
export default Intro;