import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'x',
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    };
  }

  componentDidMount() {}

  handleClick(row, col) {
    console.log(row, col);

    // Check if legal move

    // Update board

    // Check for win
    
    // Update turn


  }

  render() {
    return(
      <div>
        {this.state.board.map((row, i) => (
          <div key={i}>
            { row.map((col, j) => <Cell key={j} row={i} col={j} handleClick={this.handleClick} />) }
          </div>
        ))}
      </div>
    )
  }
}

export default Board;