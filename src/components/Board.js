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

  handleClick(row, col) {
    console.log(row, col);

    // Check if legal move
    if (this.state.board[row][col] !== '') {
      return alert('Cannot move here!')
    }

    const board = this.state.board;
    board[row][col] = this.state.turn;
    this.setState({ board });
    // Update board
    

    // Check for win
    const win = this.checkWin();
    if (win) {
      return alert(`Player ${win} wins the game!`);
    }

    // Update turn
    let turn = (this.state.turn === 'x') ? 'o' : 'x';
    this.setState({ turn });
    console.log(this.state.board)
  }

  checkWin() {
    const board = this.state.board;
    for (let i = 0; i< 3; i+=1) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] !== '') {
        return board[i][0];
      }
    }

    for (let i = 0; i< 3; i+=1) {
      if (board[0][i] === board[i][1] && board[1][i] === board[2][i] && board[0][i] !== '') {
        return board[0][i];
      }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') {
      return board[0][0];
    }

    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== '') {
      return board[0][2];
    }

    return '';
  }

  render() {
    return(
      <div>
        {this.state.board.map((row, i) => (
          <div key={i}>
            { row.map((col, j) => <Cell key={j} row={i} col={j} val={col} handleClick={this.handleClick.bind(this)} />) }
          </div>
        ))}
      </div>
    )
  }
}

export default Board;