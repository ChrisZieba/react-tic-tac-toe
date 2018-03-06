import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick (event) {
    event.preventDefault();
    this.props.handleClick(this.props.row, this.props.col);
  }

  render() {
    return (
      <span className="cell" onClick={this.handleClick.bind(this)}>{this.props.val}</span>
    );
  }
}

export default Cell;