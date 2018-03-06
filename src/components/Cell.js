import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick () {
    this.props.handleClick(this.props.row, this.props.col);
  }

  render() {
    return (
      <span className="cell" onClick={this.handleClick.bind(this)}></span>
    );
  }
}

export default Cell;