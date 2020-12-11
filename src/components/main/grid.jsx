import { getByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import Row from './row';
import {solver} from '../../back-tracking/solver';
import '../../style/style.css';

class Grid extends Component {
    state = { 
        grid: [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]],
     }
    render() { 
        return ( 
            <div>
                <div className = "grid-container">
                    {this.state.grid.map((row, idx) => 
                    (<div>
                        <Row key = {idx} row = {row} id = {idx} action = {this.incrementGrid}>
                        </Row>
                    </div>)
                    )}
                </div>
                <button className="first button btn btn-primary" onClick = {this.solve}>
                    Solve
                </button>
                <button className="button btn btn-warning" onClick = {this.reset}>
                    Reset
                </button>
            </div>
         );
    }

    solve = () =>{
        const found = solver(this.state.grid);
        if (found){
            const grid = this.state.grid;
            this.setState({grid});
        }
    }

    reset = () => {
        const grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]]
        this.setState({grid});
    }

    incrementGrid = (id) => {
        const i = id[0];
        const j = id[1];
        const grid = this.state.grid;
        grid[i][j]  = (grid[i][j] + 1)%10;
        this.setState({grid});
    }
}
 
export default Grid;
